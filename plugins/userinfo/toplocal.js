exports.run = {
   usage: ['toplocal'],
   async: async (m, {
      client,
      participants
   }) => {
      let member = participants.map(u => u.id)
      let kontol = {}
      for (i = 0; i < member.length; i++) {
         if (typeof global.db.users[member[i]] != 'undefined' && member[i] != client.user.id.split(':')[0] + '@s.whatsapp.net') {
            kontol[member[i]] = {
               uang: global.db.users[member[i]].uang,
               level: Func.level(global.db.users[member[i]].uang),
               limit: global.db.users[member[i]].limit
            }
         }
      }
      let uang = Object.entries(kontol).sort((a, b) => b[1].uang - a[1].uang)
      let limit = Object.entries(kontol).sort((a, b) => b[1].limit - a[1].limit)
      let rankuang = uang.map(v => v[0])
      let rankLimit = limit.map(v => v[0])
      let isuang = Math.min(15, uang.length)
      let isLimit = Math.min(15, limit.length)
      let teks = `❏  *T O P - L O C A L*\n\n`
      teks += `“Kamu berada diperingkat *${rankuang.indexOf(m.sender) + 1}* dari *${member.length}* anggota grup ${await (await client.groupMetadata(m.chat)).subject}.”\n\n`
      teks += uang.slice(0, isuang).map(([user, data], i) => (i + 1) + '. @' + user.split`@` [0] + '\n    *Uang  :  ' + Func.h2k(Func.formatNumber(data.uang)) + ' (' + Func.formatNumber(data.uang) + ')*\n    *Level️  :  ' + data.level[0] + ' [ ' + Func.formatNumber(data.level[3]) + ' / ' + Func.h2k(data.level[1]) + ' ]*').join`\n`
      // teks += `\n\n`
      // teks += `“Your limits are ranked *${rankLimit.indexOf(m.sender) + 1}* out of *${member.length}* ${await (await client.groupMetadata(m.chat)).subject} group members.”\n\n`
      // teks += limit.slice(0, isLimit).map(([user, data], i) => (i + 1) + '. @' + user.split`@` [0] + '\n    *🧱  :  ' + Func.formatNumber(data.limit) + '*').join`\n`
      teks += `\n\n${global.footer}`
      client.reply(m.chat, teks, m)
   },
   error: false,
   group: true
}