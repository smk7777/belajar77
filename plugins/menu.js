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

	◦  .buy
	◦  .buyguard
	◦  .claim
	◦  .guard
	◦  .transfer *@tag* nominal
	◦  .limit
	◦  .me
	◦  .point
	◦  .profile
	◦  .toplocal
	◦  .topglobal
	◦  .topuser
	◦  .topuserlocal 
	
❏  *I M A G E - E F F E C T*

	◦  .alien
	◦  .brick
	◦  .bunny
	◦  .caricature
	◦  .clown
	◦  .ink
	◦  .latte
	◦  .letter
	◦  .pencil
	◦  .puzzle
	◦  .roses
	◦  .sketch
	◦  .splash
	◦  .staco	

❏  *S E A R C H*

	◦  .alquran
	◦  .whatanime
	◦  .wattpad *judul*
	◦  .drakor *judul*
	◦  .anime *judul*
	◦  .film *judul*
	◦  .google <query>
	◦  .githubstalk
	◦  .igstalk
	◦  .ytsearch <query> 
	◦  .whatmusic <caption / reply> 
  
❏  *F U N - G A M E*

	◦  .attack
	◦  .adventure
	◦  .barbar
	◦  .brainout
	◦  .coin *A* / *B*
	◦  .math *mode*
	◦  .riddle
	◦  .slot
	◦  .spin *point*
	◦  .ttt
	◦  .ttt *room*
	◦  .tictactoe
	◦  .tebaklirik
	◦  .tebaktebakan
	◦  .caklontong
	◦  .whatsong
	◦  .whatword
	◦  .whoami
	◦  .truth
	◦  .dare
	◦  .apakah
	◦  .kapankah
	◦  .siapakah
	◦  .susunkata 
	◦  .tebakkata
	◦  .tebakbom
	◦  .tebakgambar 
 
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
	◦  .ahegao
	◦  .ass
	◦  .bdsm
	◦  .blowjob
	◦  .cuckold
	◦  .cum
	◦  .ero
	◦  .femdom
	◦  .foot
	◦  .gangbang
	◦  .glasses
	◦  .hentaigifs
	◦  .jahy
	◦  .manga
	◦  .masturbation
	◦  .nsfwNeko
	◦  .orgy
	◦  .pussy
	◦  .yuri

❏  *O T H E R*

	◦  .sadboy
	◦  .sadgirl
	◦  .bucin
	◦  .senja
	◦  .fakta
	◦  .tag *text*
	◦  .tagme
	◦  .wame *text*
	◦  .react *emoji*
	◦  .artinama *nama*
	◦  .artinama2 *nama* 	
	◦  .urban *word*
	◦  .sindiran
	◦  .kataanime
	◦  .desahancewek
	◦  .desahancowok
  
❏  *C O N V E R T E R*

	◦  .toimg <reply> 
	◦  .tomp4 <reply> 
	◦  .ocr 
	◦  .tourl <caption / reply> 
	◦  .tovn *reply audio* 
	◦  .short ​<url> 
 
❏  *S T I C K E R*

	◦  .emo *emoticon*
	◦  .emojimix
	◦  .flat *emoticon*
	◦  .smeme *text | text*
	◦  .sticker/s/sk	
	◦  .swm *pack | author*

❏  *D O W N L O A D E R*
	◦  .play <query> 
	◦  .alquran 
	◦  .wallpaper <query>
	◦  .ig ​<url>	
	◦  .igstory *username*
	◦  .mediafire ​<url>
	◦  .asupan *request* / *hastag*
	◦  .bokep
	◦  .ometv
	◦  .viral 
	◦  .fb ​<url>
	◦  .pin ​<url>	
	◦  .apk <query>
	◦  .pinterest <query>	
	◦  .sticker <query>
	◦  .tiktok ​<url>
	◦  .tikmp3 ​<url>
	◦  .tikwm ​<url>
	◦  .twitter ​<url>
	◦  .video <query>
	◦  .ythd ​<url>
	◦  .ytmp3 ​<url>
	◦  .ytmp4 ​<url>
	◦  .twitter <url> 
	◦  .tiktok <url> 
	◦  .nhentaipdf <code> 
	◦  .pinterest <query / url> 
	◦  .soundcloud <query / url> 
  
❏  *K H U S U S - G R O U P*

	◦  .link 
	◦  .leave 
	◦  .revoke
	◦  .afk *alasan* 
	◦  .pacaran
	◦  .groupinfo
	◦  .tagall [teks] 
	◦  .hidetag [teks] 
	◦  .group [option] 
	◦  .mute
	◦  .tagall
	◦  .hidetag
	◦  .kick
	◦  .demote
	◦  .mark
	◦  .unmark
	◦  .revoke
	◦  .absen
	◦  .link
	◦  .sider
	◦  .kicksider
	◦  .anti212
	◦  .antilink *on / off*
	◦  .antivirtex *on / off*
	◦  .filter *on / off*
	◦  .game *on / off*
	◦  .localonly *on / off*
	◦  .left *on / off*
	◦  .notify *on / off*
	◦  .protect *on / off*
	◦  .welcome *on / off*
	◦  .group *close / open*
	◦  .contact *@tag*
	◦  .setdesc *text*
	◦  .setname *text*
	◦  .textwel *text*
	◦  .textleft *text*
	◦  .demote <@tag / reply> 
	◦  .setppgrup 
  
❏  *M I S C*

	◦  .cekprefix 
	◦  .rvo *reply view once* 
	◦  .ping 
	◦  .runtime 
	◦  .listgroup 
	◦  .get <url> 
	◦  .res <url> 
	◦  .translate *id text* 
	◦  .ssweb <url> 
	◦  .sshp <url> 
	◦  .delete <reply> 
  
❏  *O W N E R*

    ◦   $ 
    ◦   > / >> 
	◦  .oautodownload *on / off*
	◦  .oantilink *on / off*
	◦  .oantivirtex *on / off*
	◦  .ofilter *on / off*
	◦  .ogame *on / off*
	◦  .olocalonly *on / off*
	◦  .oleft *on / off*
	◦  .onotify *on / off*
	◦  .oprotect *on / off*
	◦  .omute *1 / 0*
	◦  .ohidetag *text*
	◦  .oleave
	◦  .okick *reply / mention*
	◦  .otagall *text*
	◦  .owelcome
	◦  .addown
	◦  .delown
	◦  .addmod
	◦  .delmod
	◦  .listcmd
	◦  .setcmd 
	◦  .delcmd
	◦  .setprefix *prefix*
	◦  .setmsg *text*
	◦  .setcover *reply foto*
	◦  .setheader *text*
	◦  .setfooter *text*
	◦  .setlink 
	◦  .backup
	◦  .ban
	◦  .bcgc
	◦  .block
	◦  .db
	◦  .unblock
	◦  .unban
	◦  .omark
	◦  .ounmark
	◦  .spamtag
	◦  .addlist
	◦  .getlist
	◦  .dellist
	◦  .self 
	◦  .public 
	◦  .restart 
	◦  .join <url> 
	◦  .setprefix [prefix] 
	◦  .setppbot <caption / reply / url>
	◦  .setmenu
	◦  .storage
	◦  .check
	◦  .stat
	◦  .groups
	◦  .list
	◦  .tools`
}