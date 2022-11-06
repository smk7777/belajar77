exports.run = {
   async: async (m, {
      client,
      body,
      users,
      prefixes
   }) => {
      try {
         var id = m.chat
         var reward = Func.randomInt(global.min_reward, global.max_reward)
         client.whatword = client.whatword ? client.whatword : {}
         if (m.quoted && m.quoted.sender != client.decodeJid(client.user.id)) return
         if (m.quoted && /wordclue/i.test(m.quoted.text)) {
            if (!(id in client.whatword) && /wordclue/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `Soal tersebut telah berakhir, silahkan kirim _${prefixes[0]}whatword_ untuk mendapatkan soal baru.`), m)   
            if (m.quoted.id == client.whatword[id][0].id) {
               let json = JSON.parse(JSON.stringify(client.whatword[id][1]))
               if (['Timeout', ''].includes(body)) return !0
               if (body.toLowerCase() == json.jawaban.toLowerCase()) {
                  await client.sendSticker(m.chat, await Func.fetchBuffer('./media/image/true.webp'), m, {
                     packname: global.db.setting.sk_pack,
                     author: global.db.setting.sk_author
                  }).then(() => {
                     client.reply(m.chat, `*+ ${Func.formatNumber(reward)}*`, m)
                     users.uang += reward
                     clearTimeout(client.whatword[id][2])
                     delete client.whatword[id]
                  })
               } else {
                  if (users.uang == 0) return client.sendSticker(m.chat, await Func.fetchBuffer('./media/image/false.webp'), m, {
                     packname: global.db.setting.sk_pack,
                     author: global.db.setting.sk_author
                  })
                  users.uang < reward ? users.uang = 0 : users.uang -= reward
                  await client.sendSticker(m.chat, await Func.fetchBuffer('./media/image/false.webp'), m, {
                     packname: global.db.setting.sk_pack,
                     author: global.db.setting.sk_author
                  }).then(() => {
                     client.reply(m.chat, `*- ${Func.formatNumber(reward)}*`, m)
                  })
               }
            }
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   group: true,
   game: true,
   cache: true,
   location: __filename
}