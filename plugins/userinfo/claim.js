exports.run = {
   usage: ['claim'],
   async: async (m, {
      client
   }) => {
      let user = global.db.users[m.sender]
      let timeClaim = 3600000
      let claimed = new Date(user.lastclaim + timeClaim)
      let timeout = claimed - new Date()
      if (new Date - user.lastclaim > timeClaim) {
         client.sendMessageModify(m.chat, Func.texted('bold', `Selamat, kamu mendapat Uang 1JT dan 10 limit 🍟️`), m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/726f6f808f64b3a3f6ce2.jpg'),
            url: 'https://chat.whatsapp.com/EARvthLENgw2yxhDUKDuMr'
         })
         global.db.users.uang += 1000000
         user.limit += 10
         user.lastclaim = new Date() * 1
      } else {
         client.sendMessageModify(m.chat, Func.texted('bold', `Kamu sudah melakukan claim silahkan klaim kembali di jam berikutnya*\n\n*⏱️ : ${Func.toTime(timeout)}️`), m, {
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/71465e68c23dc8cf9de69.jpg'),
            url: 'https://chat.whatsapp.com/EARvthLENgw2yxhDUKDuMr'
         })
      }
   },
   error: false,
   group: true
}