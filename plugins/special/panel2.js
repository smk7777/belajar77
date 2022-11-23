const panel = new(require('../../lib/smm2'))
exports.run = {
   usage: ['panel2', 'service2', 'order2', 'cekorder2', 'myinfo2'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      isOwner
   }) => {
      try {
         if (command == 'panel2') {
            const page = (!args || !args[0]) ? 1 : args[0]
            const json = await panel.layanan(page)
            if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
            let rows = []
            json.data.map(v => rows.push({
               title: v.name,
               rowId: `${isPrefix}service2 ${v.id}`,
               description: `[ ID : ${v.id} – Harga : Rp. ${Func.formatNumber(v.price)}`
            }))
            if (json.pre_page) rows.push({
               title: `(${Number(json.page) - 1}) Previous`,
               rowId: `${isPrefix}panel2 ${Number(json.page) - 1}`,
               description: ``
            })
            if (json.next_page) rows.push({
               title: `Next (${Number(json.page) + 1})`,
               rowId: `${isPrefix}panel2 ${Number(json.page) + 1}`,
               description: ``
            })
            client.sendList(m.chat, '', `Berikut ini adalah daftar layanan yang bisa kamu beli, Halaman : *${page}*,  Total Halaman : *${json.total_pages}*`, '', 'Tap!', rows, m)
         } else if (command == 'service2') {
            if (!args || !args[0]) return
            const json = await panel.layananAll()
            if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
            const p = json.data.find(v => v.id == args[0])
            let teks = `*S O S M E D - S H O P*\n\n`
            teks += `	◦ *Nama* : ${p.name}\n`
            teks += `	◦ *Harga* : Rp. ${Func.formatNumber(p.price)}\n`
            teks += `	◦ *Service ID* : ${p.id}\n`
            teks += `	◦ *Quantity* : ${p.min} - ${p.max}\n`
            teks += `	◦ *Note* : ${p.description}\n\n`
            teks += global.db.setting.footer
            client.sendMessageModify(m.chat, teks, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/09f75e14b8a294195bbd1.jpg')
            })
         } else if (command == 'order2') {
            if (!isOwner) return client.reply(m.chat, global.status.owner, m)
            if (!args || !args[0] || !args[1] || !args[2]) return client.reply(m.chat, Func.example(isPrefix, command, 'service_id url/username quantity'), m)
            const json = await panel.order(args[0], args[1], args[2])
            client.reply(m.chat, Func.jsonFormat(json), m)
         } else if (command == 'cekorder2') {
            if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'order_id'), m)
            const json = await panel.check(args[0])
            client.reply(m.chat, Func.jsonFormat(json), m)
         } else if (command == 'myinfo2') {
            if (!isOwner) return client.reply(m.chat, global.status.owner, m)
            const json = await panel.profile()
            if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
            let teks = `*U S E R - I N F O*\n\n`
            teks += `	◦ *Name* : ${json.data.full_name}\n`
            teks += `	◦ *Username* : ${json.data.username}\n`
            teks += `	◦ *Balance* : ${json.data.balance}\n\n`
            teks += global.db.setting.footer
            client.sendMessageModify(m.chat, teks, m, {
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://telegra.ph/file/09f75e14b8a294195bbd1.jpg')
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