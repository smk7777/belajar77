// Owner number
global.owner = '6285156972228'
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
global.min_reward = 10000000
global.max_reward = 100000000
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
global.botname = `Β© mel-bot v${global.version} (Public Bot)`
// Footer text
global.footer = 'πππ’π₯π‘π ππππ©π¨πΌπ₯π₯ π½π€π© | πππ‘ππ€π©'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Tunggu sebentar . . .'),
   invalid: Func.texted('bold', 'Link salah kak!'),
   wrong: Func.texted('bold', 'Wrong format!'),
   getdata: Func.texted('bold', 'Tunggu beberapa detik...'),
   fail: Func.texted('bold', 'Can\'t get metadata!'),
   error: Func.texted('bold', 'Terjadi kesalahan!'),
   autodl: Func.texted('bold', 'β  auto download file sedang dikirim...'),
   vip: Func.texted('bold', 'Fitur ini khusus untuk pengguna VIP'),
   vn: Func.texted('bold', 'π€‘ convert to voice...'),
   ds: Func.texted('bold', 'Kamu User VIP File Sedang Dikirim...*\n\n*Jika dalam 5 menit belum terkirim, server error!'),
   xxx: Func.texted('bold', 'οΈsearch random indo...'),
   hentai: Func.texted('bold', 'sedang οΈmencari...*\n\n*Jika dalam 5 menit belum terkirim, server error!'),
   errorF: Func.texted('bold', 'Fitur ini masih dalam perbaikan π.'),
   premium: Func.texted('bold', 'UpgradeΒ premium ποΈ*\n\n*Untuk menggunakan fitur ini'),
   owner: Func.texted('bold', 'FiturΒ iniΒ khususΒ untukΒ owner.'),
   mod: Func.texted('bold', 'FiturΒ iniΒ khususΒ untukΒ moderator dan owner.'),
   god: Func.texted('bold', 'FiturΒ iniΒ khususΒ untukΒ master.'),
   group: Func.texted('bold', 'FiturΒ iniΒ khususΒ untukΒ diΒ dalamΒ grup.'),
   botAdmin: Func.texted('bold', 'JadikanΒ botΒ sebagaiΒ adminΒ terlebihΒ dahulu.'),
   admin: Func.texted('bold', 'Lu admin bang?'),
   private: Func.texted('bold', 'FiturΒ iniΒ khususΒ untukΒ diΒ chatΒ pribadiΒ bot.')
})
