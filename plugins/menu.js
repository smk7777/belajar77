exports.run = {
   usage: ['menu', 'help', 'admintools', 'tools'],
   async: async (m, {
      client,
      isPrefix,
      command,
      isOwner
   }) => {
      try {
         if (/menu|help/.test(command)) {
            let menuType = global.db.setting.setmenu
            const link = global.db.setting.link          
            client.menu = client.menu ? client.menu : {}
            let id = m.chat
            try {
               pic = await Func.fetchBuffer(await client.profilePictureUrl(m.sender, 'image'))
            } catch {
               pic = await Func.fetchBuffer('./media/image/thumb.jpg')
            }
            if (!isOwner && (id in client.menu)) {
               global.db.statistic[command].hitstat -= 1
               return client.reply(m.chat, `Ma'af @${m.sender.split`@`[0]} ^\nUntuk menghindari spam, menu di tampilkan setiap *3 menit* sekali.`, client.menu[id][0])
            }
            let button = [{
                buttonId: `${isPrefix}owner`,
                buttonText: {
                   displayText: 'OWNER'
                },
                type: 1
            },
            {
                 buttonId: `${isPrefix}sc`,
                 buttonText: {
                    displayText: 'SCRIPT'
            },
            type: 1
            }]
            let buttons = [{
               urlButton: {
                        displayText: `OWNER`,
                        url: `https://wa.me/84888725073?text=order+bot+bang`
                     }
                  },
                  {
                     quickReplyButton: {
                        displayText: 'DONASI',
                        id: `${isPrefix}dnsiii`
                     }
                  },
                  {
                     quickReplyButton: {
                        displayText: 'PREMIUM',
                        id: `${isPrefix}premium`
                     }
                  }
               ]
            if (menuType == 1) {
               client.menu[id] = [
                  await client.fakeGroupLink(m.chat, await menu(m, readmore, global.db.setting, isPrefix), global.db.setting.header, m.sender, m),
                  setTimeout(() => {
                     delete client.menu[id]
                  }, 180000)
               ]
            } else if (menuType == 2) {
               client.menu[id] = [
                  await client.sendButton(m.chat, global.db.setting.cover, await menu(m, readmore, global.db.setting, isPrefix), '                       © 𝙸𝚖 𝙰𝚌𝚞𝚢', null, button, {
                    document: true
            }, {
                title: global.botname,
                thumbnail: await Func.fetchBuffer(global.db.setting.cover),
                fileName: `Berjalan : ${Func.toTime(process.uptime() * 1000)}`
            }),
                  setTimeout(() => {
                     delete client.menu[id]
                  }, 180000)
               ]
            } else if (menuType == 3) {
               client.menu[id] = [
                  await client.sendTemplateButton(m.chat, global.db.setting.cover, await menu(m, readmore, global.db.setting, isPrefix), '                       © 𝙸𝚖 𝙰𝚌𝚞𝚢', buttons, {
                     document: true,
                     name: '𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘉𝘰𝘵'
                  }),
                  setTimeout(() => {
                     delete client.menu[id]
                  }, 180000)
               ]
            } else if (menuType == 4) {
               client.menu[id] = [
                  await client.sendTemplateButton(m.chat, global.db.setting.cover, await menu(m, readmore, global.db.setting, isPrefix), '                       ワッツアップ ', buttons, {
                     location: true
                  }),
                  setTimeout(() => {
                     delete client.menu[id]
                  }, 180000)
               ]
            } else if (menuType == 5) {
               client.menu[id] = [
                  await client.sendTemplateButton(m.chat, await Func.fetchBuffer('./media/video/video.mp4'), await menu(m, readmore, global.db.setting, isPrefix), '                         Ⓟ premium | Ⓛ limit', buttons, {
                     gif: true
                  }),
                  setTimeout(() => {
                     delete client.menu[id]
                  }, 180000)
               ]
            } else if (menuType == 6) {
               client.menu[id] = [
                  await client.sendTemplateButton(m.chat, global.db.setting.cover, await menu(m, readmore, global.db.setting, isPrefix), '                       Ⓟ premium | Ⓛ limit', buttons),
                  setTimeout(() => {
                     delete client.menu[id]
                  }, 180000)
               ]
            } else if (menuType == 7) {
               client.menu[id] = [
                  await client.sendTemplateButton(m.chat, await Func.fetchBuffer('./media/video/video.mp4'), await menu(m, readmore, global.db.setting, isPrefix), '                         Ⓟ premium | Ⓛ limit', buttons),
                  setTimeout(() => {
                     delete client.menu[id]
                  }, 180000)
               ]
            } else if (menuType == 8) {
            	let rows = [{
            		title: '𝗨𝗔𝗡𝗚 & 𝗟𝗜𝗠𝗜𝗧',
            		rowId: `${isPrefix}submenu 1`,
            		description: ``
            	}, {
            		title: '𝗦𝗘𝗔𝗥𝗖𝗛',
            		rowId: `${isPrefix}submenu 2`,
            		description: ``
            	}, {
            		title: '𝗙𝗨𝗡 𝗚𝗔𝗠𝗘',
            		rowId: `${isPrefix}submenu 3`,
            		description: ``
            	}, {
            		title: '𝗥𝗔𝗡𝗗𝗢𝗠 𝗜𝗠𝗔𝗚𝗘',
            		rowId: `${isPrefix}submenu 4`,
            		description: ``
            	}, {
            		title: '𝗢𝗧𝗛𝗘𝗥',
            		rowId: `${isPrefix}submenu 5`,
            		description: ``
            	}, {
            		title: '𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥',
            		rowId: `${isPrefix}submenu 6`,
            		description: ``
            	}, {
            		title: '𝗦𝗧𝗜𝗖𝗞𝗘𝗥',
            		rowId: `${isPrefix}submenu 7`,
            		description: ``
            	}, {
            		title: '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥',
            		rowId: `${isPrefix}submenu 8`,
            		description: ``
            	}, {
            		title: '𝗚𝗥𝗢𝗨𝗣',
            		rowId: `${isPrefix}submenu 9`,
            		description: ``
            	}, {
            		title: '𝗢𝗪𝗡𝗘𝗥',
            		rowId: `${isPrefix}submenu 10`,
            		description: ``
            	}]
            	await client.sendList(m.chat, '', `Hai ${m.pushName || Beib} 🏅\n\n“${setting.msg}”\n\nUntuk bisa menggunakan bot di personal chat (PC) kamu harus  upgrade ke premium user\nJika ingin upgrade ke premium silahkan ketik *.premium*\n\nTap Dibawah Untuk menampilkan list menu 📮`, '', 'Tap!', rows, m)  
            }
         }
         if (/admintools/.test(command)) return client.fakeStory(m.chat, admin(isPrefix), global.db.setting.header)
         if (/tools/.test(command)) {
            if (!isOwner) return client.reply(m.chat, global.status.owner, m)
            return client.fakeStory(m.chat, tools(isPrefix), global.db.setting.header)
         }
      } catch (e) {
         console.log(e)
      }
   },
   error: false,
   cache: true,
   location: __filename
}

const readmore = String.fromCharCode(8206).repeat(4001)
const menu = async (m, readmore, setting, prefix) => {
   let point = [...new Set(Object.entries(global.db.users).filter(([v, x]) => x.uang > 0).map(([v, x]) => x.uang))]
   let limit = [...new Set(Object.entries(global.db.users).filter(([v, x]) => x.limit > 0).map(([v, x]) => x.limit))]
   return `${/8|9/.test(global.db.setting.setmenu) ? Func.greeting('@' + m.sender.replace(/@.+/,'')) : Func.greeting(m.pushName || 'Beib')} (Lv. ${Func.level(global.db.users[m.sender].uang)[0]})
Saldo Rp. ${Func.h2k(global.db.users[m.sender].uang)}

Mode : ${setting.groupmode ? '*Khusus Group*' : '*Public*'}
${readmore}
❏  *P O I N T & L I M I T*

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
	◦  .tools`}

const admin = (prefix) => {
   return `❏  *GROUP SETTING*

	◦  ${prefix}mute *1 / 0*
	◦  ${prefix}everyone
	◦  ${prefix}hidetag *text*
	◦  ${prefix}kick *reply / mention*
	◦  ${prefix}demote *reply / mention*
	◦  ${prefix}mark *reply / mention*
	◦  ${prefix}unmark *reply / mention*
	◦  ${prefix}revoke
	◦  ${prefix}autosticker *on / off*
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
	◦  ${prefix}setdesc *text*
	◦  ${prefix}setname *text*
	◦  ${prefix}textwel *text*
	◦  ${prefix}textout *text*

${global.db.setting.footer}
`
}

const tools = (prefix) => {
   return `乂  *B Y P A S S*

	◦  ${prefix}oautosticker *on / off*
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
	◦  ${prefix}welcome *on / off*

乂  *M O D E R A T I O N*

	◦  ${prefix}addown *reply / mention*
	◦  ${prefix}delown *reply / mention*
	◦  ${prefix}addmod *reply / mention*
	◦  ${prefix}delmod *reply / mention*
	◦  ${prefix}listcmd
	◦  ${prefix}setcmd *reply sticker*
	◦  ${prefix}delcmd *reply sticker*  

乂  *H E L P E R S*

	◦  ${prefix}backup
	◦  ${prefix}ban *reply / mention*
	◦  ${prefix}bcgc *reply chat*
	◦  ${prefix}block  *reply / mention*
	◦  ${prefix}db
	◦  ${prefix}unblock  *reply / mention*
	◦  ${prefix}unban *reply / mention*
	◦  ${prefix}omark *reply / mention*
	◦  ${prefix}ounmark *reply / mention*
	◦  ${prefix}spamtag *amount | text*
	◦  ${prefix}tax *percent* (optional)
	◦  ${prefix}topup *amount* (optional)

乂  *A D V A N C E*

	◦  >  -- (JS Eval)
	◦  => -- (JS Eval w/ Return)
	◦  $ -- (Command Line)

${global.db.setting.footer}
`
}
