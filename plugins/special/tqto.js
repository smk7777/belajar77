exports.run = {
   usage: ['tqto', 'thanksto', 'tnc'],
   async: async (m, {
      client,
      args,
      command
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
   return `➠ User, group, dan data chat akan terhapus secara otomatis jika tidak terdeteksi aktivitas selama 7 hari (reason: database cleaning).

➠ Pengguna gratis dapatkan ${global.limit} per hari dan akan diatur ulang secara otomatis pada 00.00.

➠ Jangan spam, jeda setiap penggunaan perintah ${global.cooldown} detik.

➠ Jangan melakukan panggilan suara atau video (Telephone & Video Calls), jika Anda melakukannya akan diblokir.

➠ Jangan toxic bot karena kalian akan mendapatkan sanksi berupa banned dan block.

➠ Jangan mencari & membuat konten dewasa (+18), eg: buat stiker dari foto bugil atau cari desahan ASMR.

➠ Jika ingin membuka blokir dan unbanned, masing-masing akan dikenakan biaya sebesar Rp. 5.000,-

➠ Spammer akan secara permanen dibanned berlaku untuk pengguna gratis dan premium (+ tidak ada pengembalian uang).

➠ Semua Syarat & Ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.`
}
