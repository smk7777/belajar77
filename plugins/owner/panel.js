const panel = new(require('../../lib/smm'))
exports.run = {
   usage: ['panel', 'service', 'order', 'cekorder', 'myinfo'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      isOwner
   }) => {
      try {
         if (command == 'panel') {
            const page = (!args || !args[0]) ? 1 : args[0]
            const json = await panel.layanan(page)
            if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
            let rows = []
            json.data.map(v => rows.push({
               title: v.name,
               rowId: `${isPrefix}service ${v.service}`,
               description: `[ ID : ${v.service} – Harga : Rp. ${Func.formatNumber(v.rate.split('.')[0])}`
            }))
            if (json.pre_page) rows.push({
               title: `(${Number(json.page) - 1}) Previous`,
               rowId: `${isPrefix}panel ${Number(json.page) - 1}`,
               description: ``
            })
            if (json.next_page) rows.push({
               title: `Next (${Number(json.page) + 1})`,
               rowId: `${isPrefix}panel ${Number(json.page) + 1}`,
               description: ``
            })
            client.sendList(m.chat, '', `🚩 Berikut ini adalah daftar layanan yang bisa kamu beli, Halaman : *${page}*,  Total Halaman : *${json.total_pages}*`, '', 'Tap!', [{
               rows
            }], m)
         } else if (command == 'service') {
            if (!args || !args[0]) return
            const json = await panel.layananAll()
            if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
            const p = json.data.find(v => v.service == args[0])
            let teks = `乂  *D E T A I L*\n\n`
            teks += `	◦ *Nama* : ${p.name}\n`
            teks += `	◦ *Harga* : Rp. ${Func.formatNumber(p.rate.split('.')[0])}\n`
            teks += `	◦ *Service ID* : ${p.service}\n`
            teks += `	◦ *Quantity* : ${p.min} - ${p.max}\n\n`
            teks += global.footer
            client.sendMessageModify(m.chat, teks, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/937a039b670a8b25a6e17.jpg')
            })
         } else if (command == 'order') {
            if (!isOwner) return client.reply(m.chat, global.status.owner, m)
            if (!args || !args[0] || !args[1] || !args[2]) return client.reply(m.chat, Func.example(isPrefix, command, 'service_id url/username quantity'), m)
            const json = await panel.order(args[0], args[1], args[2])
            client.reply(m.chat, Func.jsonFormat(json), m)
         } else if (command == 'cekorder') {
            if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'order_id'), m)
            const json = await panel.check(args[0])
            client.reply(m.chat, Func.jsonFormat(json), m)
         } else if (command == 'myinfo') {
            if (!isOwner) return client.reply(m.chat, global.status.owner, m)
            const json = await panel.profile()
            let teks = `乂  *M Y - I N F O*\n\n`
            teks += `	◦ *Currency* : ${json.currency}\n`
            teks += `	◦ *Balance* : ${json.balance}\n\n`
            teks += global.footer
            client.sendMessageModify(m.chat, teks, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/937a039b670a8b25a6e17.jpg')
            })
         }
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}