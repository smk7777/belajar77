exports.run = {
   usage: ['topglobal'],
   async: async (m, {
      client,
      participants
   }) => {
      let uang = Object.entries(global.db.users).sort((a, b) => b[1].point - a[1].point)
      let getUser = point.map(v => v[0])
      let show = Math.min(20, uang.length)
      let teks = `❏  *T O P - G L O B A L*\n\n`
      teks += point.slice(0, show).map(([user, data], i) => (i + 1) + '. @' + user.split`@` [0] + '\n    *Uang  :  ' + Func.h2k(Func.formatNumber(data.uang)) + '*\n    *Level  :  ' + Func.level(data.uang)[0] + ' [ ' + Func.formatNumber(Func.level(data.uang)[3]) + ' / ' + Func.h2k(Func.formatNumber(Func.level(data.uang))[1]) + ' ]*').join`\n`
      teks += `\n\n${global.footer}`
      client.reply(m.chat, teks, m)
   },
   error: false
}