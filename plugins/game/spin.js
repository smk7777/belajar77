exports.run = {
   usage: ['spin'],
   async: async (m, {
      client,
      args
   }) => {
      let user = global.db.users[m.sender]
      if (user.uang > 500000000) return client.reply(m.chat, Func.texted('bold', `Uang Anda telah mencapai 500JT, silakan mainkan permainan`), m)
      if (!args || !args[0] || args[0].startsWith('0')) return client.reply(m.chat, Func.texted('bold', `Berikan nominal yang akan diputar.`), m)
      if (isNaN(args[0])) return client.reply(m.chat, Func.texted('bold', `Poin harus berupa angka`), m)
      if (args[0] > user.uang) return client.reply(m.chat, Func.texted('bold', `Uang Anda tidak cukup untuk diputar ${Func.formatNumber(args[0])}`), m)
      if (args[0] < 10000) return client.reply(m.chat, Func.texted('bold', `Tidak dapat berputar di bawah 10rb`), m)
      user.uang -= args[0]
      setTimeout(async () => {
         let reward = Func.randomInt(100, args[0] * 3)
         user.uang += reward
         let last = user.uang
         let teks = `❏  *S P I N - R E S U L T*\n\n`
         teks += `	*- ${Func.formatNumber(args[0])}*\n`
         teks += `	*+ ${Func.formatNumber(reward)}*\n\n`
         teks += `• *Total* : ${Func.formatNumber(last)}\n\n`
         teks += `*NB : “Anti-Spam jeda 5 detik setelah putaran sebelumnya, BOT tidak akan merespon, harap ulangi setelah 5 detik berlalu.”*`
         client.reply(m.chat, teks, m)
      }, 1000)
   },
   group: true,
   limit: 5
}