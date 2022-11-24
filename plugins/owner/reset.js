exports.run = {
   usage: ['deluser'],
   async: async (m, {
      client,
      text,
      command,
      participants,
      isOwner
   }) => {
      let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : (text).split`@` [1]) : text
      if (!text && !m.quoted) return client.reply(m.chat, Func.texted('bold', `🚩 Mention atau reply chat target.`), m)
      if (isNaN(number)) return client.reply(m.chat, Func.texted('bold', `🚩 Nomor tidak valid.`), m)
      if (number.length > 15) return client.reply(m.chat, Func.texted('bold', `🚩 Format tidak valid.`), m)
      try {
         if (text) {
            var user = number + '@s.whatsapp.net'
         } else if (m.quoted.sender) {
            var user = m.quoted.sender
         } else if (m.mentionedJid) {
            var user = number + '@s.whatsapp.net'
         }
      } catch (e) {} finally {
         let userF = global.db.users
         let ownerF = [global.client.user.id.split`@` [0], global.owner, ...global.db.setting.owners].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(user)
         if (typeof userF[user] == 'undefined') return client.reply(m.chat, Func.texted('bold', `Can't find user data.`), m)
         delete userF[user]
         client.reply(m.chat, Func.texted('bold', `User data successfully deleted/reset.`), m)
      }
   },
   owner: true,
   cache: true,
   location: __filename
}