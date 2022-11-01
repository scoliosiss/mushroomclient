import Config from "../../Config/Config"

const randomnumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const Coinflip = ["Heads", "Tails"]
// cum child const fromyeeter = ["Ender_Yeeter 2022"]
const joinguild = ["whalecum"]
const joinguild2 = ["you have joined the best guild ww!"]
const quote = ['"']
const fromema = ["EmaAG_ 2022"]
const fromchomp = ["oChump 2022"]
const fromterror = ["Lord Terror23 2022"]
const fromlucee = ["stfu unmute"]
const fromtwiftan = ["Twiftan 2022"]
const eightball = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes – definitely.", "You may rely on it."]
deadmessage = ""

  // -----------------------------------------------
  // Code from Xef Addons because im lazy
  register("chat", (msg) => {
    if (!Config.toxicdeath) return;
    let deadmessage = ChatLib.getChatMessage(msg); //making the message into a variable
    if (deadmessage.includes(`☠`) && deadmessage.endsWith("became a ghost.") && deadmessage.indexOf(":") == -1) { //making sure that someone died //making sure it's not send by a player
        let deadPlayer1 = deadmessage.split(" ")
        let deadPlayer2 = deadPlayer1.slice(2)
        let deadPlayer3 = deadPlayer2.toString()
        let deadPlayer = deadPlayer3.split(',')[0]
        if (deadPlayer = "You") return;
        let customMessage = Config.toxicdeathmessage.replace("player", deadPlayer)
        ChatLib.command("pc " + customMessage)         
    } 
  })
  

// -----------------------------------------------
// 8ball
register("chat", (rank,name) => {
    if (!Config.eightballconfig) return;
    ChatLib.say("/gc " + eightball[Math.floor(Math.random() * eightball.length)])
  }).setCriteria("Guild > ${name}: !8ball ${question}")
  
// -----------------------------------------------
// randomnumber
register("chat", (chat) => {
  if (!Config.eightballconfig) return;
  ChatLib.say("/" + chat + " chat " + randomnumber[Math.floor(Math.random() * randomnumber.length)])
}).setCriteria("${chat} > ${name}: !randomnumbe${random}")

// -----------------------------------------------
// coinflip
register("chat", (chat) => {
  if (!Config.eightballconfig) return;
  setTimeout() ; 1
  var delayInMilliseconds = 610;
  setTimeout(function() {
  ChatLib.say("/" + chat + " chat " + Coinflip[Math.floor(Math.random() * Coinflip.length)])
}, delayInMilliseconds);
}).setCriteria("${chat} > ${name}: !coinfli${random}")

  // -----------------------------------------------
  // Guild Welcome messages!
  register("chat", (gamer) => {
    if (!Config.welcomeguild) return;
    let fullMessage = ChatLib.getChatMessage(gamer);
    let welcomeguildmessage1 = Config.welcomeguildmessage
    let welcomeguildmessage2 = Config.welcomeguildmessage2
    if (fullMessage.includes(`Guild >`) && fullMessage.endsWith("joined.") && fullMessage.indexOf(":") == -1) {
      let guildmember1 = fullMessage.split(" ")
      let guildmember2 = guildmember1.slice(2)
      let guildmember3 = guildmember2.shift(1)
      setTimeout() ; 1000
      var delayInMilliseconds = 1000;
      setTimeout(function() {
        ChatLib.say ("/gc " + welcomeguildmessage1 + " " + guildmember3 + " " + welcomeguildmessage2)
    }, delayInMilliseconds);
    }
  })
    register("chat", (gamer) => ChatLib.say('/gc ' + joinguild + ' ' + gamer + ' ' + joinguild2)).setCriteria('${gamer} joined the guild!')

  // -----------------------------------------------
  // Guild Welcome messages! (spanish)
  register("chat", (gamer) => {
    if (!Config.welcomeguild) return;
    const guildjoinmessage = ChatLib.getChatMessage(gamer);
    let welcomeguildmessage1 = Config.welcomeguildmessage
    let welcomeguildmessage2 = Config.welcomeguildmessage2
    if (guildjoinmessage.includes(`Guild >`) && guildjoinmessage.endsWith("entró.") && guildjoinmessage.indexOf(":") == -1) {
      let guildmember1 = guildjoinmessage.split(" ")
      let guildmember2 = guildmember1.slice(2)
      let guildmember3 = guildmember2.shift(1)
      setTimeout() ; 1000
      var delayInMilliseconds = 1000;
      setTimeout(function() {
        ChatLib.say ("/gc " + welcomeguildmessage1 + " " + guildmember3 + " " + welcomeguildmessage2)
    }, delayInMilliseconds);
    }
  })
    register("chat", (gamer) => ChatLib.say('/gc ' + joinguild + ' ' + gamer + ' ' + joinguild2)).setCriteria('${gamer} joined the guild!')
  
  // -----------------------------------------------
  // sorry yeeter if u ever read this...
  // register("chat", (yeetermessage) => ChatLib.say('/pc ' + quote + yeetermessage + quote + ' ' + fromyeeter)).setCriteria("Party > [MVP++] Ender_Yeeter: ${yeetermessage}")
  // register("chat", () => ChatLib.chat("&dFrom [&bSIMP&d] Ender_Yeeter&7: x3 nuzzles! pounces on you uwu you so warm (ooo) Couldn’t help but notice your buldge from across the floor Nuzzles yo' necky wecky-tilda murr-tilda hehe Unzips yo baggy ass pants, oof baby you so musky Take me home, pet me, 'n’ make me yours and don't forget to stuff me! See me wag my widdle baby tail all for your buldgy-wuldgy! Kissies 'n' lickies yo neck I hope daddy likies Nuzzles 'n' wuzzles yo chest (yuh) I be (yeah) gettin' thirsty Hey, I got a little itch, you think you can help me? Only seven inches long uwu PLEASE ADOPT ME Paws on your buldge as I lick my lips (uwu punish me please) 'Boutta hit ’em with this furry shit (he don’t see it comin'). Dowoes youwu lick my sowong.")).setCriteria("Friend > Ender_Yeeter joined.")
  // register("chat", () => ChatLib.say('/msg ender_yeeter From [SIMP] Ender_Yeeter: x3 nuzzles, pounces on you, uwu you so warm (Ooh) Couldnt help but notice your bulge from across the floor Nuzzles your necky wecky-tilde murr-tilde, hehe Unzips your baggy ass pants, oof baby you so musky')).setCriteria("Friend > Ender_Yeeter joined.")
  
  // -----------------------------------------------
  // copys EmaAG_'s message in p chat
    register("chat", (emamessage) => {
      if (!Config.stfuema) return;
      ChatLib.say('/pc ' + quote + emamessage + quote + ' - ' + fromema)
  }).setCriteria("Party > [MVP+] EmaAG_: ${emamessage}")
  
  // -----------------------------------------------
  // same for oChamp
    register("chat", (chompmessage) => {
      if (!Config.stfuchomp) return;
      ChatLib.say('/pc ' + quote + chompmessage + quote + ' - ' + fromchomp)
  }).setCriteria("Party > [MVP+] oChamp: ${chompmessage}")
  
  // -----------------------------------------------
  // same for twiftan
     register("chat", (bigcomessage) => {
      if (!Config.stfutwiftan) return;
      ChatLib.say('/pc ' + quote + bigcomessage + quote + ' - ' + fromtwiftan)
  }).setCriteria("Party > [VIP] ScalseyHasBigCo: ${bigcomessage}")
  
  // -----------------------------------------------
  // same for luceeyum
     register("chat", (luceemessage) => {
      if (!Config.luceemessage) return;
      ChatLib.say('/pc ' + quote + luceemessage + quote + ' ' + fromlucee)
  }).setCriteria("Party > [MVP+] luceeyum: ${luceemessage}")
  
  
  // -----------------------------------------------
  // same for terror
  register("chat", (message) => {
    if (!Config.lordterrormessage) return;
    ChatLib.say("/pc " + quote + message + quote + ' - ' + fromterror)
  }).setCriteria("Party > [MVP+] Lord_Terror23: ${message}")
  
  // -----------------------------------------------
  // bullys someone for saying "wc"
    register("chat", (wrongchatter) => {
      if (!Config.wrongchatperson || Config.wcinguildchat || Config.wcinpartychat) return;
      ChatLib.say(quote + 'wrongchat' + quote + ' - ' + wrongchatter)
  }).setCriteria("${wrongchatter}: wc")

  // -----------------------------------------------
  // bullys someone for saying "wc"
  register("chat", (wrongchatter) => {
    if (!Config.wrongchatperson || !Config.wcinguildchat || Config.wcinpartychat) return;
    ChatLib.say("/gc " + quote + 'wrongchat' + quote + ' - ' + wrongchatter)
  }).setCriteria("${wrongchatter}: wc")

  // -----------------------------------------------
  // bullys someone for saying "wc"
  register("chat", (wrongchatter) => {
    if (!Config.wrongchatperson || Config.wcinguildchat || !Config.wcinpartychat) return;
    ChatLib.say("/pc " + quote + 'wrongchat' + quote + ' - ' + wrongchatter)
  }).setCriteria("${wrongchatter}: wc")
  
  // -----------------------------------------------
  // gg
    register("chat", (goodgamer) => {
      if (!Config.goodgamerpog || Config.gginguildchat || Config.gginpartychat) return;
      ChatLib.say(quote + 'gg' + quote + ' - ' + goodgamer)
  }).setCriteria("${goodgamer}: gg")
    register("chat", (goodgamer) => {
      if (!Config.goodgamerpog || Config.gginguildchat || Config.gginpartychat) return;
      ChatLib.say(quote + 'GG' + quote + ' - ' + goodgamer)
  }).setCriteria("${goodgamer}: GG")

  // -----------------------------------------------
  // gg in guild chat
  register("chat", (goodgamer) => {
    if (!Config.goodgamerpog || !Config.gginguildchat || Config.gginpartychat) return;
    ChatLib.say("/gc " + quote + 'gg' + quote + ' - ' + goodgamer)
}).setCriteria("${goodgamer}: gg")
  register("chat", (goodgamer) => {
    if (!Config.goodgamerpog || !Config.gginguildchat || Config.gginpartychat) return;
    ChatLib.say("/gc " + quote + 'GG' + quote + ' - ' + goodgamer)
}).setCriteria("${goodgamer}: GG")

  // -----------------------------------------------
  // gg in party chat
register("chat", (goodgamer) => {
  if (!Config.goodgamerpog || Config.gginguildchat || !Config.gginpartychat) return;
  ChatLib.say("/pc " + quote + 'gg' + quote + ' - ' + goodgamer)
}).setCriteria("${goodgamer}: gg")
register("chat", (goodgamer) => {
  if (!Config.goodgamerpog || Config.gginguildchat || !Config.gginpartychat) return;
  ChatLib.say("/pc " + quote + 'GG' + quote + ' - ' + goodgamer)
}).setCriteria("${goodgamer}: GG")
  