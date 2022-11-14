const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
global.creator = `@neoxrs – Wildan Izzudin`

module.exports = class Scraper {
   /* Chat AI
    * @param {String} bid
    * @param {String} key
    * @param {String} text
    */
   chatAI = (bid, key, text) => {
      return new Promise(async (resolve) => {
         try {
            let json = await (await axios.get('http://api.brainshop.ai/get?bid=' + bid + '&key=' + key + '&uid=neoxr&msg=' + encodeURI(text))).data
            if (typeof json.cnt == 'undefined') return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               cretor: global.creator,
               status: true,
               msg: json.cnt
            })
         } catch (e) {
            console.log(e)
            return resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   tiktok = (url) => {
      return new Promise(async (resolve, reject) => {
         try {
            let html = await (await axios.get('https://tikdown.org/')).data
            let soup = cheerio.load(html)
            let token = soup('meta[name="csrf-token"]').attr('content')
            let header = {
               headers: {
                  "Accept": "application/json, text/javascript, */*; q=0.01",
                  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                  "Referer": "https://tikdown.org/",
                  "Referrer-Policy": "strict-origin-when-cross-origin",
                  "X-CSRF-TOKEN": token
               }
            }
            let form = new URLSearchParams
            form.append('url', url)
            form.append('_token', token)
            let json = await (await axios.post('https://tikdown.org/getAjax', form, header)).data
            if (!json.status) return resolve({
               creator: global.creator,
               status: false
            })
            let $ = cheerio.load(json.html)
            let data = {
               video: $($('a')[0]).attr('href'),
               audio: $($('a')[1]).attr('href')
            }
            resolve({
               creator: global.creator,
               status: true,
               data
            })
         } catch (e) {
            console.log(e)
            return resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }   

    /* URL Shortener
    * @param {String} url
    */
   shorten = (url) => {
      return new Promise(async (resolve) => {
         try {
            let params = new URLSearchParams()
            params.append('url', url)
            let json = await (await fetch('https://s.nxr.my.id/api', {
               method: 'POST',
               body: params
            })).json()
            if (json.error) return resolve({
               creator: global.creator,
               status: false
            })
            resolve({
               creator: global.creator,
               status: true,
               data: {
                  url: 'https://s.nxr.my.id/r/' + json.data.code
               }
            })
         } catch (e) {
            console.log(e)
            resolve({
               creator: global.creator,
               status: false
            })
         }
      })
   }
   
   /* Image Uploader (telegra.ph)
    * @param {Buffer} buffer
    */
   uploadImage = async (buffer) => {
      let {
         ext
      } = await fromBuffer(buffer)
      let form = new FormData
      form.append('file', buffer, 'tmp.' + ext)
      let res = await fetch('https://telegra.ph/upload', {
         method: 'POST',
         body: form
      })
      let img = await res.json()
      if (img.error) throw img.error
      return 'https://telegra.ph' + img[0].src
   }
}
