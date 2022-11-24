const axios = require('axios')

module.exports = class Panel {
   api_url = 'https://wargasmm.com/api/v2'
   api_key = 'c5cb8ed9079afba78ed167744a799033'

   paginator(items, page, per_page) {
      var page = page || 1,
         per_page = per_page || 10,
         offset = (page - 1) * per_page,
         paginatedItems = items.slice(offset).slice(0, per_page),
         total_pages = Math.ceil(items.length / per_page);
      return {
         page: page,
         per_page: per_page,
         pre_page: page - 1 ? page - 1 : null,
         next_page: (total_pages > page) ? page + 1 : null,
         total: items.length,
         total_pages: total_pages,
         data: paginatedItems
      }
   }
   
   layananAll() {
      return new Promise(async resolve => {
         try {
            let form = new URLSearchParams
            form.append('key', this.api_key)
            form.append('action', 'services')
            const json = await (await axios.post(this.api_url, form)).data
            resolve(json)
         } catch (e) {
            console.log(e)
            resolve({
               status: false
            })
         }
      })
   }

   layanan(page = 10) {
      return new Promise(async resolve => {
         try {
            let form = new URLSearchParams
            form.append('key', this.api_key)
            form.append('action', 'services')
            const json = await (await axios.post(this.api_url, form)).data
            if (json.length == 0) return resolve({
               status: false
            })
            resolve({
               status: true,
               ...this.paginator(json, page, 20)
            })
         } catch (e) {
            console.log(e)
            resolve({
               status: false
            })
         }
      })
   }

   order(id_service, data, quantity) {
      return new Promise(async resolve => {
         try {
            let form = new URLSearchParams
            form.append('key', this.api_key)
            form.append('action', 'add')
            form.append('service', id_service)
            form.append('link', data)
            form.append('quantity', quantity)
            const json = await (await axios.post(this.api_url, form)).data
            resolve(json)
         } catch (e) {
            console.log(e)
            resolve({
               status: false
            })
         }
      })
   }

   check(order_id) {
      return new Promise(async resolve => {
         try {
            let form = new URLSearchParams
            form.append('key', this.api_key)
            form.append('action', 'status')
            form.append('id', order_id)
            const json = await (await axios.post(this.api_url, form)).data
            resolve(json)
         } catch (e) {
            console.log(e)
            resolve({
               status: false
            })
         }
      })
   }

   profile() {
      return new Promise(async resolve => {
         try {
            let form = new URLSearchParams
            form.append('key', this.api_key)
            form.append('action', 'balance')
            const json = await (await axios.post(this.api_url, form)).data
            resolve(json)
         } catch (e) {
            console.log(e)
            resolve({
               status: false
            })
         }
      })
   }
}