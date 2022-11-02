exports.run = {
   usage: ['whatsong'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.whatsong = client.whatsong ? client.whatsong : {}
      let id = m.chat,
         timeout = 120000
      if (id in client.whatsong) return client.reply(m.chat, '*^ soal ini belum terjawab!*', client.whatsong[id][0])
      let json = Func.jsonRandom('./media/json/whatsong.json')
      let teks = `❏  *T E B A K - L A G U*\n\n`
      teks += `Apa judul dari lagu berikut ini ?\n\n`
      teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
      teks += `Reply pesan ini untuk menjawab, kirim *${isPrefix}songclue* untuk bantuan dan *${isPrefix}songskip* untuk menghapus sesi.`
      client.whatsong[id] = [
         await client.reply(m.chat, teks, m),
         json,
         await client.sendFile(m.chat, await Func.fetchBuffer(json.path), '', '', m, { ptt: true }),
         setTimeout(() => {
            if (client.whatsong[id]) client.reply(m.chat, `*Waktu habis!*`, client.whatsong[id][0])
            delete client.whatsong[id]
         }, timeout)
      ]
   },
   group: true,
   limit: true,
   game: true
}