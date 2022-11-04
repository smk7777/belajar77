exports.run = {
   usage: ['spin', 'spinall'],
   async: async (m, {
      client,
      args,
      command
   }) => {
      let user = global.db.users[m.sender]
      if (command == 'spinall') {
         let reward = Func.randomInt(100, ((1 / 100) * (user.uang * 2)))
         user.uang = global.db.users.uang
         user.uang += reward
         let last = user.uang
         let teks = `❏  *S P I N - R E S U L T*\n\n`
         teks += `	*- ${Func.formatNumber(user.uang)}*\n`
         teks += `	*+ ${Func.formatNumber(reward)}*\n\n`
         teks += `• *Total* : ${Func.formatNumber(last)}\n\n`
         teks += `*NB : “Anti-Spam jeda ${global.cooldown} detik untuk eksekusi selanjutnya.”*`
         client.reply(m.chat, teks, m)
      } else {
         if (!args || !args[0] || args[0].startsWith('0')) return client.reply(m.chat, Func.texted('bold', `🚩 Berikan argumen berupa nominal uang untuk dispin.`), m)
         if (isNaN(args[0])) return client.reply(m.chat, Func.example(isPrefix, command, '10000'), m)
         if (args[0] > user.uang) return client.reply(m.chat, Func.texted('bold', `🚩 uangmu tidak cukup untuk melakukan spin sebanyak ${Func.formatNumber(args[0])} uang.`), m)
         if (args[0] < 1000) return client.reply(m.chat, Func.texted('bold', `🚩 Tidak bisa melakukan spin dengan nominal dibawah 1000 uang.`), m)
         user.uang -= args[0]
         let reward = Func.randomInt(100, args[0] * 3)
         user.uang += reward
         let last = user.uang
         let teks = `❏  *S P I N - R E S U L T*\n\n`
         teks += `	*- ${Func.formatNumber(args[0])}*\n`
         teks += `	*+ ${Func.formatNumber(reward)}*\n\n`
         teks += `• *Total* : ${Func.formatNumber(last)}\n\n`
         teks += `*NB : “Anti-Spam jeda ${global.cooldown} detik untuk eksekusi selanjutnya.”*`
         client.reply(m.chat, teks, m)
      }
   },
   group: true,
   limit: true,
   game: true
}