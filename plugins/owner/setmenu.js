exports.run = {
   usage: ['setmenu'],
   use: '(option)',
   category: 'owner',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         let setting = global.db.setting
         if (!args || !args[0]) {
            let rows = [{
               title: `Umum`,
               rowId: `${isPrefix + command} 1`,
               description: ''
            }, {
               title: `Fake Reply Story`,
               rowId: `${isPrefix + command} 2`,
               description: ''
            }, {
               title: `Menu Document`,
               rowId: `${isPrefix + command} 3`,
               description: ''
            }, {
               title: `Menu Location`,
               rowId: `${isPrefix + command} 4`,
               description: ''
            }, {
               title: `Menu GIF`,
               rowId: `${isPrefix + command} 5`,
               description: ''
            }, {
               title: `Menu Image`,
               rowId: `${isPrefix + command} 6`,
               description: ''
            }, {
               title: `Menu Video`,
               rowId: `${isPrefix + command} 7`,
               description: ''
            }, {
               title: `Menu List`,
               rowId: `${isPrefix + command} 8`,
               description: ''
            }]
            client.sendList(m.chat, '', `Choose menu style. 🍟`, '', 'Tap!', [{
               rows
            }], m)
         } else {
            client.reply(m.chat, `🚩 Menu berhasil disetel menggunakan gaya *${args[0]}*.`, m).then(() => setting.setmenu = parseInt(args[0]))
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   owner: true
}