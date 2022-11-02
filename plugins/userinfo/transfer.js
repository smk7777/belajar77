exports.run = {
   usage: ['tf', 'transfer'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      let history = global.db.transfer_history ? global.db.transfer_history : global.db.transfer_history = []
      if (m.quoted) {
         if (m.quoted.isBot) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak bisa melakukan transfer kepada bot.`), m)
         if (!args || !args[0]) return client.reply(m.chat, Func.texted('bold', `🚩 Berikan nominal uang yang akan di transfer.`), m)
         if (isNaN(args[0])) return client.reply(m.chat, Func.texted('bold', `🚩 uang harus berupa angka.`), m)
         let nominal = parseInt(args[0])
         let ppn = parseInt(((25 / 100) * nominal).toFixed(0))
         let uang = global.db.users[m.sender].uang
         let target = client.decodeJid(m.quoted.sender)
         if (target == m.sender) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak bisa melakukan transfer kepada diri sendiri.`), m)
         if (Func.level(global.db.users[target].uang + nominal)[0] >= 50) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak bisa melakukan transfer karena target telah mencapai batas maximum.`), m)
         if (nominal > uang) return client.reply(m.chat, Func.texted('bold', `🚩 uangmu tidak cukup untuk melakukan transfer.`), m)
         if ((nominal + ppn) > uang) return client.reply(m.chat, Func.texted('bold', `🚩 uangmu tidak cukup untuk membayar pajak transfer sebesar 25%`), m)
         if (nominal < 10000) return client.reply(m.chat, Func.texted('bold', `🚩 Nominal uang untuk di transfer minimal 10K.`), m)
         global.db.users[m.sender].uang -= (nominal + ppn)
         global.db.users[target].uang += nominal
         global.db.setting.tax += ppn
         const sn = Func.makeId(6)
         history.push({
            sn,
            fromJid: m.sender,
            toJid: target,
            nominal,
            ppn,
            type: 'TF_uang',
            date: new Date * 1
         })
         let teks = `❏  *T R A N S F E R*\n\n`
         teks += `Berhasil melakukan transfer Rp. ${Func.formatNumber(nominal)} kepada *@${target.replace(/@.+/g, '')}*\n\n`
         teks += `➠ *Pajak* : ${Func.formatNumber(ppn)} [25%]\n`
         teks += `➠ *Sisa uang* : ${Func.formatNumber(global.db.users[m.sender].uang)}\n`
         teks += `➠ *SN* : ${sn}`
         client.reply(m.chat, teks, m)
      } else if (m.mentionedJid.length != 0) {
         if (!args || !args[1]) return client.reply(m.chat, Func.texted('bold', `🚩 Berikan nominal uang yang akan di transfer.`), m)
         if (isNaN(args[1])) return client.reply(m.chat, Func.texted('bold', `🚩 uang harus berupa angka.`), m)
         let nominal = parseInt(args[1])
         let ppn = parseInt(((25 / 100) * nominal).toFixed(0))
         let uang = global.db.users[m.sender].uang
         let target = client.decodeJid(m.mentionedJid[0])
         if (target == client.decodeJid(client.user.id)) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak bisa melakukan transfer kepada bot.`), m)
         if (target == m.sender) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak bisa melakukan transfer kepada diri sendiri.`), m)
         if (Func.level(global.db.users[target].uang + nominal)[0] >= 50) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak bisa melakukan transfer karena target telah mencapai batas maximum.`), m)
         if (nominal > uang) return client.reply(m.chat, Func.texted('bold', `🚩 uangmu tidak cukup untuk melakukan transfer.`), m)
         if ((nominal + ppn) > uang) return client.reply(m.chat, Func.texted('bold', `🚩 uangmu tidak cukup untuk membayar pajak transfer sebesar 25%`), m)
         if (nominal < 10000) return client.reply(m.chat, Func.texted('bold', `🚩 Nominal uang untuk di transfer minimal 10K.`), m)
         global.db.users[m.sender].uang -= (nominal + ppn)
         global.db.users[target].uang += nominal
         global.db.setting.tax += ppn
         const sn = Func.makeId(6)
         history.push({
            sn,
            fromJid: m.sender,
            toJid: target,
            nominal,
            ppn,
            type: 'TF_uang',
            date: new Date * 1
         })
         let teks = `❏  *T R A N S F E R*\n\n`
         teks += `Berhasil melakukan transfer Rp. ${Func.formatNumber(nominal)} kepada *@${target.replace(/@.+/g, '')}*\n\n`
         teks += `➠ *Pajak* : ${Func.formatNumber(ppn)} [25%]\n`
         teks += `➠ *Sisa uang* : ${Func.formatNumber(global.db.users[m.sender].uang)}\n`
         teks += `➠ *SN* : ${sn}`
         client.reply(m.chat, teks, m)
      } else {
         let teks = `• *Example* :\n\n`
         teks += `${isPrefix + command} @0 10000\n`
         teks += `${isPrefix + command} 10000 (reply chat target)`
         client.reply(m.chat, teks, m)
      }
   },
   error: false,
   limit: true,
   group: true
}