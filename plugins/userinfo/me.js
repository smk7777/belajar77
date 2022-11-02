exports.run = {
   usage: ['me'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix,
      blockList
   }) => {
      let user = global.db.users[m.sender]
      let pic = await Func.fetchBuffer('./media/image/default.jpg')
      let _own = [...new Set([global.owner, ...global.db.setting.owners])]
      try {
         pic = await Func.fetchBuffer(await client.profilePictureUrl(m.sender, 'image'))
      } catch {} finally {
         let blocked = blockList.includes(m.sender) ? true : false
         let now = new Date() * 1
         let lastseen = (user.lastseen == 0) ? 'Never' : Func.toDate(now - user.lastseen)
         let usebot = (user.usebot == 0) ? 'Never' : Func.toDate(now - user.usebot)
         let caption = `❏  *U S E R - P R O F I L E*\n\n`
         caption += `	◦ *Name* : ${m.pushName}\n`
         caption += `	◦ *Pacar* : ${typeof user.taken != 'undefined' && user.taken ? '@' + user.pasangan.split('@')[0] : '-'}\n`
         caption += `	◦ *Level* : ${Func.level(user.point)[0]}\n`
         caption += `	◦ *Limit* : ${Func.formatNumber(user.limit)}\n`
         caption += `	◦ *Saldo* : ${Func.formatNumber(user.uang)}\n\n`
         caption += `❏  *U S E R - S T A T U S*\n\n`
         caption += `	◦ *Blocked* : ${(blocked ? '√' : '×')}\n`
         caption += `	◦ *Banned* : ${user.banned ? '√' : '×'}\n`
         caption += `	◦ *Use In Private* : ${(Object.keys(global.db.chats).includes(m.sender) ? '√' : '×')}\n`
         caption += `	◦ *Premium* : ${(user.premium ? '√' : '×')}\n`
         caption += `	◦ *Expired* : ${user.expired == 0 ? '-' : Func.timeReverse(user.expired - new Date() * 1)}\n\n`
         caption += global.footer
         client.sendMessageModify(m.chat, caption, m, {
             largeThumb: true,
             thumbnail: pic
         })
      }
   },
   error: false,
   cache: true,
   location: __filename
}