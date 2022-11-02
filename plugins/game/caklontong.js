exports.run = {
   usage: ['caklontong'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.caklontong = client.caklontong ? client.caklontong : {}
      let id = m.chat,
         timeout = 120000,
         poin = 0
      if (id in client.caklontong) return client.reply(m.chat, '*^ pertanyaan ini belum dijawab!!*', client.caklontong[id][0])
      let _caklontong = Func.jsonRandom('./media/json/caklontong.json')
      let json = _caklontong[Math.floor(Math.random() * _caklontong.length)]
      let teks = `${json.soal}\n\n`
      teks += `waktu : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, ketik *${isPrefix}cluedong* untuk bantuan`
      client.caklontong[id] = [
         await client.reply(m.chat, teks, m),
         json, poin,
         setTimeout(() => {
            if (client.caklontong[id]) client.reply(m.chat, `*Waktunya habis!*\n\nJawabannya adalah : *${json.jawaban}*\nDeskripsi : *${json.deskripsi}*`, client.caklontong[id][0])
            delete client.caklontong[id]
         }, timeout)
      ]
   },
   group: true,
   limit: true,
   game: true
}