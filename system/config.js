// Owner number
global.owner = '62895800444100'
// Owner name
global.owner_name = 'Acuy ( melbot )'
// Maximum upload file size limit (Default : 50 MB)
global.max_upload = 50
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 25)
global.limit = 25
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '212']
// Put target jid to forward friends story
global.forwards = '62895800444100@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))(process.env.API_KEY)
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Timezone (Default : Asia/Jakarta)
global.timezone = 'Asia/Jakarta'
// Bot version
global.version = '2.2.1',
// Bot name
global.botname = `© mel-bot v${global.version} (Public Bot)`
// Footer text
global.footer = '𝙎𝙞𝙢𝙥𝙡𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘽𝙤𝙩 | 𝙈𝙚𝙡𝙗𝙤𝙩'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Tunggu sebentar . . .'),
   invalid: Func.texted('bold', 'Link salah kak!'),
   wrong: Func.texted('bold', 'Wrong format!'),
   getdata: Func.texted('bold', 'Tunggu beberapa detik...'),
   fail: Func.texted('bold', 'Can\'t get metadata!'),
   error: Func.texted('bold', 'Terjadi kesalahan!'),
   autodl: Func.texted('bold', '➠ auto download file sedang dikirim...'),
   vip: Func.texted('bold', 'Fitur ini khusus untuk pengguna VIP'),
   vn: Func.texted('bold', '🤡 convert to voice...'),
   ds: Func.texted('bold', 'Kamu User VIP File Sedang Dikirim...*\n\n*Jika dalam 5 menit belum terkirim, server error!'),
   xxx: Func.texted('bold', '️search random indo...'),
   hentai: Func.texted('bold', 'sedang ️mencari...*\n\n*Jika dalam 5 menit belum terkirim, server error!'),
   errorF: Func.texted('bold', 'Fitur ini masih dalam perbaikan 🙏.'),
   premium: Func.texted('bold', 'Upgrade premium 🛍️*\n\n*Untuk menggunakan fitur ini'),
   owner: Func.texted('bold', 'Fitur ini khusus untuk owner.'),
   mod: Func.texted('bold', 'Fitur ini khusus untuk moderator dan owner.'),
   god: Func.texted('bold', 'Fitur ini khusus untuk master.'),
   group: Func.texted('bold', 'Fitur ini khusus untuk di dalam grup.'),
   botAdmin: Func.texted('bold', 'Jadikan bot sebagai admin terlebih dahulu.'),
   admin: Func.texted('bold', 'Lu admin bang?'),
   private: Func.texted('bold', 'Fitur ini khusus untuk di chat pribadi bot.')
})