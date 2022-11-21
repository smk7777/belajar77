exports.run = {
   usage: ['sc', 'script'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      if (command == 'script' || command == 'sc') {
         let rows = [{
            title: 'THANKS TO',
            rowId: `${isPrefix}tqto`,
            description: ``
         }, {
            title: 'S&K',
            rowId: `${isPrefix}tnc`,
            description: ``
         }]
         await client.sendList(m.chat, '', info(), '© melbot', 'Tap!',  [{
               rows
            }], m)
      }
   },
   error: false
}

let info = () => {
   return `*❏ M E L - B O T*

Bot ini dibuat menggunakan *NodeJS* dengan bantuan *Baileys* sebagai Whatsapp Web API dan dimodifikasi dari *neoxr-bot (wildan Izzuddin)* dengan penuh cinta oleh Abang Ganteng *Acuy* sehingga membuat botnya semakin tampan.

*❏ INFO BOT*
IG: https://instagram.com/chyangrhaa
Tele: https://t.me/loadingtomastah`
}
