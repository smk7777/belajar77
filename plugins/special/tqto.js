exports.run = {
   usage: ['tqto', 'thanksto', 'tnc'],
   async: async (m, {
      client
   }) => {
      if (command == 'tqto' || command == 'thanksto') return client.reply(m.chat, info(), m)
      if (command == 'tnc') return client.sendMessageModify(m.chat, tnc(), m, {
         largeThumb: true,
         thumbnail: await Func.fetchBuffer('https://telegra.ph/file/e80c7a0204757f5ac0021.jpg'),
      })
   },
   error: false,
   cache: true,
   location: __filename
}

let info = () => {
   return `*BIG THANKS TO*

➠ wildan Izzuddin  

➠ acuy

➠ mel       

➠ adara cantik

➠ aprildv 

➠ DiaryNikiiAll

*ALL CREATOR BOT*`
}

const tnc = () => {
   return `➠ User, group, and chat data will be deleted automatically if no activity is detected for 7 days (reason: database cleaning).

➠ Free users get ${global.limit} / day and will reset automatically at 00.00.

➠ Don't spam, pause each command usage for ${global.cooldown} seconds.

➠ Do not make voice or video calls (Telephone & Video Calls), if you do it will be blocked.

➠ Don't be toxic to bots because you will get sanctions in the form of being banned and blocked.

➠ Don't search & create adult content (+18), eg: make stickers from nude photos or search for ASMR sighs.

➠ If you want to unblock and unbanned, each will be charged a fee of Rp. 5,000,-

➠ Spammers will be permanently banned for free and premium users (+ no refund).

➠ All Terms & Conditions are subject to change at any time without prior notice.`
}
