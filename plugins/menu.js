exports.run = {
   usage: ['menu', 'bot'],
   async: async (m, {
      client
   }) => {
      client.sendMessageModify(m.chat, info(), m, {
            title: global.botname,
            largeThumb: true,
            thumbnail: global.db.setting.cover
            })         
   },
   error: false,
   cache: true,
   location: __filename
}

let info = () => {
   return `❏  *P O I N T & L I M I T*

	◦  ${prefix}buy
	◦  ${prefix}buyguard
	◦  ${prefix}claim
	◦  ${prefix}guard
	◦  ${prefix}transfer *@tag* nominal
	◦  ${prefix}limit
	◦  ${prefix}me
	◦  ${prefix}point
	◦  ${prefix}profile
	◦  ${prefix}toplocal
	◦  ${prefix}topglobal
	◦  ${prefix}topuser
	◦  ${prefix}topuserlocal 
	
❏  *I M A G E - E F F E C T*

	◦  ${prefix}alien
	◦  ${prefix}brick
	◦  ${prefix}bunny
	◦  ${prefix}caricature
	◦  ${prefix}clown
	◦  ${prefix}ink
	◦  ${prefix}latte
	◦  ${prefix}letter
	◦  ${prefix}pencil
	◦  ${prefix}puzzle
	◦  ${prefix}roses
	◦  ${prefix}sketch
	◦  ${prefix}splash
	◦  ${prefix}staco	

❏  *S E A R C H*

	◦  ${prefix}alquran
	◦  ${prefix}whatanime
	◦  ${prefix}wattpad *judul*
	◦  ${prefix}drakor *judul*
	◦  ${prefix}anime *judul*
	◦  ${prefix}film *judul*
	◦  ${prefix}google <query>
	◦  ${prefix}githubstalk
	◦  ${prefix}igstalk
	◦  ${prefix}ytsearch <query> 
	◦  ${prefix}whatmusic <caption / reply> 
  
❏  *F U N - G A M E*

	◦  ${prefix}attack
	◦  ${prefix}adventure
	◦  ${prefix}barbar
	◦  ${prefix}brainout
	◦  ${prefix}coin *A* / *B*
	◦  ${prefix}math *mode*
	◦  ${prefix}riddle
	◦  ${prefix}slot
	◦  ${prefix}spin *point*
	◦  ${prefix}ttt
	◦  ${prefix}ttt *room*
	◦  ${prefix}tictactoe
	◦  ${prefix}tebaklirik
	◦  ${prefix}tebaktebakan
	◦  ${prefix}caklontong
	◦  ${prefix}whatsong
	◦  ${prefix}whatword
	◦  ${prefix}whoami
	◦  ${prefix}truth
	◦  ${prefix}dare
	◦  ${prefix}apakah
	◦  ${prefix}kapankah
	◦  ${prefix}siapakah
	◦  ${prefix}susunkata 
	◦  ${prefix}tebakkata
	◦  ${prefix}tebakbom
	◦  ${prefix}tebakgambar 
 
❏  *S O S M E D - S H O P*

	◦  .panel
	◦  .panel2

❏  *T E X T - M A K E R*

	◦  .blackpink
	◦  .blood
	◦  .breakwall
	◦  .glow
	◦  .joker
	◦  .magma
	◦  .matrix
	◦  .multicolor
	◦  .neon
	◦  .papercut
	◦  .slice	 
  
❏  *N S F W* 

	◦  .loli
	◦  .waifu 
	◦  ${prefix}ahegao
	◦  ${prefix}ass
	◦  ${prefix}bdsm
	◦  ${prefix}blowjob
	◦  ${prefix}cuckold
	◦  ${prefix}cum
	◦  ${prefix}ero
	◦  ${prefix}femdom
	◦  ${prefix}foot
	◦  ${prefix}gangbang
	◦  ${prefix}glasses
	◦  ${prefix}hentaigifs
	◦  ${prefix}jahy
	◦  ${prefix}manga
	◦  ${prefix}masturbation
	◦  ${prefix}nsfwNeko
	◦  ${prefix}orgy
	◦  ${prefix}pussy
	◦  ${prefix}yuri

❏  *O T H E R*

	◦  ${prefix}sadboy
	◦  ${prefix}sadgirl
	◦  ${prefix}bucin
	◦  ${prefix}senja
	◦  ${prefix}fakta
	◦  ${prefix}tag *text*
	◦  ${prefix}tagme
	◦  ${prefix}wame *text*
	◦  ${prefix}react *emoji*
	◦  ${prefix}artinama *nama*
	◦  ${prefix}artinama2 *nama* 	
	◦  ${prefix}urban *word*
	◦  ${prefix}sindiran
	◦  ${prefix}kataanime
	◦  ${prefix}desahancewek
	◦  ${prefix}desahancowok
  
❏  *C O N V E R T E R*

	◦  ${prefix}toimg <reply> 
	◦  ${prefix}tomp4 <reply> 
	◦  ${prefix}ocr 
	◦  ${prefix}tourl <caption / reply> 
	◦  ${prefix}tovn *reply audio* 
	◦  ${prefix}short ​<url> 
 
❏  *S T I C K E R*

	◦  ${prefix}emo *emoticon*
	◦  ${prefix}emojimix
	◦  ${prefix}flat *emoticon*
	◦  ${prefix}smeme *text | text*
	◦  ${prefix}sticker/s/sk	
	◦  ${prefix}swm *pack | author*

❏  *D O W N L O A D E R*
	◦  ${prefix}play <query> 
	◦  ${prefix}alquran 
	◦  ${prefix}wallpaper <query>
	◦  ${prefix}ig ​<url>	
	◦  ${prefix}igstory *username*
	◦  ${prefix}mediafire ​<url>
	◦  ${prefix}asupan *request* / *hastag*
	◦  ${prefix}bokep
	◦  ${prefix}ometv
	◦  ${prefix}viral 
	◦  ${prefix}fb ​<url>
	◦  ${prefix}pin ​<url>	
	◦  ${prefix}apk <query>
	◦  ${prefix}pinterest <query>	
	◦  ${prefix}sticker <query>
	◦  ${prefix}tiktok ​<url>
	◦  ${prefix}tikmp3 ​<url>
	◦  ${prefix}tikwm ​<url>
	◦  ${prefix}twitter ​<url>
	◦  ${prefix}video <query>
	◦  ${prefix}ythd ​<url>
	◦  ${prefix}ytmp3 ​<url>
	◦  ${prefix}ytmp4 ​<url>
	◦  ${prefix}twitter <url> 
	◦  ${prefix}tiktok <url> 
	◦  ${prefix}nhentaipdf <code> 
	◦  ${prefix}pinterest <query / url> 
	◦  ${prefix}soundcloud <query / url> 
  
❏  *K H U S U S - G R O U P*

	◦  ${prefix}link 
	◦  ${prefix}leave 
	◦  ${prefix}revoke
	◦  ${prefix}afk *alasan* 
	◦  ${prefix}pacaran
	◦  ${prefix}groupinfo
	◦  ${prefix}tagall [teks] 
	◦  ${prefix}hidetag [teks] 
	◦  ${prefix}group [option] 
	◦  ${prefix}mute
	◦  ${prefix}tagall
	◦  ${prefix}hidetag
	◦  ${prefix}kick
	◦  ${prefix}demote
	◦  ${prefix}mark
	◦  ${prefix}unmark
	◦  ${prefix}revoke
	◦  ${prefix}absen
	◦  ${prefix}link
	◦  ${prefix}sider
	◦  ${prefix}kicksider
	◦  ${prefix}anti212
	◦  ${prefix}antilink *on / off*
	◦  ${prefix}antivirtex *on / off*
	◦  ${prefix}filter *on / off*
	◦  ${prefix}game *on / off*
	◦  ${prefix}localonly *on / off*
	◦  ${prefix}left *on / off*
	◦  ${prefix}notify *on / off*
	◦  ${prefix}protect *on / off*
	◦  ${prefix}welcome *on / off*
	◦  ${prefix}group *close / open*
	◦  ${prefix}contact *@tag*
	◦  ${prefix}setdesc *text*
	◦  ${prefix}setname *text*
	◦  ${prefix}textwel *text*
	◦  ${prefix}textleft *text*
	◦  ${prefix}demote <@tag / reply> 
	◦  ${prefix}setppgrup 
  
❏  *M I S C*

	◦  ${prefix}cekprefix 
	◦  ${prefix}rvo *reply view once* 
	◦  ${prefix}ping 
	◦  ${prefix}runtime 
	◦  ${prefix}listgroup 
	◦  ${prefix}get <url> 
	◦  ${prefix}res <url> 
	◦  ${prefix}translate *id text* 
	◦  ${prefix}ssweb <url> 
	◦  ${prefix}sshp <url> 
	◦  ${prefix}delete <reply> 
  
❏  *O W N E R*

    ◦   $ 
    ◦   > / >> 
	◦  ${prefix}oautodownload *on / off*
	◦  ${prefix}oantilink *on / off*
	◦  ${prefix}oantivirtex *on / off*
	◦  ${prefix}ofilter *on / off*
	◦  ${prefix}ogame *on / off*
	◦  ${prefix}olocalonly *on / off*
	◦  ${prefix}oleft *on / off*
	◦  ${prefix}onotify *on / off*
	◦  ${prefix}oprotect *on / off*
	◦  ${prefix}omute *1 / 0*
	◦  ${prefix}ohidetag *text*
	◦  ${prefix}oleave
	◦  ${prefix}okick *reply / mention*
	◦  ${prefix}otagall *text*
	◦  ${prefix}owelcome
	◦  ${prefix}addown
	◦  ${prefix}delown
	◦  ${prefix}addmod
	◦  ${prefix}delmod
	◦  ${prefix}listcmd
	◦  ${prefix}setcmd 
	◦  ${prefix}delcmd
	◦  ${prefix}setprefix *prefix*
	◦  ${prefix}setmsg *text*
	◦  ${prefix}setcover *reply foto*
	◦  ${prefix}setheader *text*
	◦  ${prefix}setfooter *text*
	◦  ${prefix}setlink 
	◦  ${prefix}backup
	◦  ${prefix}ban
	◦  ${prefix}bcgc
	◦  ${prefix}block
	◦  ${prefix}db
	◦  ${prefix}unblock
	◦  ${prefix}unban
	◦  ${prefix}omark
	◦  ${prefix}ounmark
	◦  ${prefix}spamtag
	◦  ${prefix}addlist
	◦  ${prefix}getlist
	◦  ${prefix}dellist
	◦  ${prefix}self 
	◦  ${prefix}public 
	◦  ${prefix}restart 
	◦  ${prefix}join <url> 
	◦  ${prefix}setprefix [prefix] 
	◦  ${prefix}setppbot <caption / reply / url>
	◦  ${prefix}setmenu
	◦  ${prefix}storage
	◦  ${prefix}check
	◦  ${prefix}stat
	◦  ${prefix}groups
	◦  ${prefix}list
	◦  ${prefix}tools`
}