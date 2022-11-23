const axios = require('axios')

module.exports = class Panel {
   api_url = 'https://kedaisosmed.com/api'
   api_id = 3
   api_key = '4da6d9-556233-441abd-8a9207-b66307'

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
            form.append('api_id', this.api_id)
            form.append('api_key', this.api_key)
            const json = await (await axios.post(this.api_url + '/services', form)).data
            resolve(json)
         } catch (e) {
            console.log(e)
            resolve({
               status: false
            })
         }
      })
   }

   layanan(page = 1) {
      return new Promise(async resolve => {
         try {
            let form = new URLSearchParams
            form.append('api_id', this.api_id)
            form.append('api_key', this.api_key)
            const json = await (await axios.post(this.api_url + '/services', form)).data
            if (!json.status) return resolve({
               status: false
            })
            resolve({
               status: true,
               ...this.paginator(json.data, page, 20)
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
            form.append('api_id', this.api_id)
            form.append('api_key', this.api_key)
            form.append('service', id_service)
            form.append('target', data)
            form.append('quantity', quantity)
            const json = await (await axios.post(this.api_url + '/order', form)).data
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
            form.append('api_id', this.api_id)
            form.append('api_key', this.api_key)
            form.append('id', order_id)
            const json = await (await axios.post(this.api_url + '/status', form)).data
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
            form.append('api_id', this.api_id)
            form.append('api_key', this.api_key)
            const json = await (await axios.post(this.api_url + '/profile', form)).data
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