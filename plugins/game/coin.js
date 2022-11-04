exports.run = {
   usage: ['coin'],
   async: async (m, {
      client,
      args
   }) => {
      let user = global.db.users[m.sender]
      if (!args || !args[0]) return client.reply(m.chat, Func.texted('bold', `Berikan argumen A atau B.`), m)
      if (user.uang == 0) return client.reply(m.chat, Func.texted('bold', `Kamu tidak punya uang untuk bermain game ini.`), m)
      if (user.uang < 300000) return client.reply(m.chat, Func.texted('bold', `Untuk bermain game ini kamu harus mempunyai minimal 300K uang.`), m)
      let x = Func.ucword(args[0])
      if (x == 'A' || x == 'B') {
         var type = Func.random(['A', 'B'])
         if (Func.ucword(args[0]) == type) {
            let percent = Func.randomInt(5, 10)
            let reward = ((percent / 100) * user.uang)
            user.uang += reward
            let last = user.uang
            let teks = `❏  *W I N*\n\n`
            teks += `	*System* : ${type}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*+ ${Func.formatNumber(reward)}*\n\n`
            teks += `• *Total* : ${Func.formatNumber(last)} uang\n\n`
            teks += `*NB : “Anti-Spam jeda ${global.cooldown} detik untuk eksekusi selanjutnya.”*`
            client.reply(m.chat, teks, m)
         } else if (Func.ucword(args[0]) != type) {
            let percent = Func.randomInt(5, 15)
            let reward = ((percent / 100) * user.uang)
            user.uang -= reward
            let last = user.uang
            let teks = `❏  *L O S E*\n\n`
            teks += `	*System* : ${type}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*- ${Func.formatNumber(reward)}*\n\n`
            teks += `• *Total* : ${Func.formatNumber(last)} uang\n\n`
            teks += `*NB : “Anti-Spam jeda ${global.cooldown} detik untuk eksekusi selanjutnya.”*`
            client.reply(m.chat, teks, m)
         }
      } else {
         return client.reply(m.chat, Func.texted('bold', `Hanya terdapat argumen A dan B.`), m)
      }
   },
   group: true,
   limit: true,
   game: true
}