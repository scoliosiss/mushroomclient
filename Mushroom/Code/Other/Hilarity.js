import Config from "../../Config/Config"
import {mc} from "../Utils"

const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");
const Hilaritynames = ["&d[DUMBASS] pewing", "&b[SWOG] swig", "&c[ADMIN] Jayavarmen", "&c[ADMIN] Minikloon", "&c[ADMIN] Ladybleu", "&c[OWNER] hypixel", "&c[OWNER] Rezzus", "&c[ADMIN] Plancke", "&c[ADMIN] aPunch", "&b[MVP&0+&b] Dctr", "&c[ADMIN] Thorlon", "&c[ADMIN] Froz3n", "&c[ADMIN] ChiLynn", "&c[Minister] 2nfg", "&b[MVP&0+&b] Strongchaff", "&b[MVP&0+&b] Guait", "&b[MVP&0+&b] A0TD", "&b[MVP&0+&b] Blaze", "&b[MVP&0+&b] Slime", "&d[queer] Lxnze", "&c[&fYOUTUBE&c] Mushroom", "&c[&fYOUTUBE&c] Frozie", "&c[&fYOUTUBE&c] Refraction", "&c[&fYOUTUBE&c] K9L", "&c[&fYOUTUBE&c] 56ms", "&c[&fYOUTUBE&c] AverageSweat", "&c[&fYOUTUBE&c] Vegantoes", "&c[&fYOUTUBE&c] __Zova", "&c[&dGAMER&c] iLoveRat", "&2[&fMUSHROOM&2] Scale"]
const Hilaritymessages = ["your gay\n&dFrom &b[MVP&2+&b] Elg_AF&7: you're*", "Your flagging.\n&dFrom &b[MVP&2+&b] Elg_AF&7: you're*", "watchdog exists", "your getting banned :)\n&dFrom &b[MVP&2+&b] Elg_AF&7: you're*", "any last words?", "x3 nuzzles! pounces on you uwu you so warm (ooo) Couldn’t help but notice your buldge from across the floor Nuzzles yo' necky wecky-tilda murr-tilda hehe Unzips yo baggy ass pants, oof baby you so musky Take me home, pet me, 'n’ make me yours and don't forget to stuff me! See me wag my widdle baby tail all for your buldgy-wuldgy! Kissies 'n' lickies yo neck I hope daddy likies Nuzzles 'n' wuzzles yo chest (yuh) I be (yeah) gettin' thirsty Hey, I got a little itch, you think you can help me? Only seven inches long uwu PLEASE ADOPT ME Paws on your buldge as I lick my lips (uwu punish me please) 'Boutta hit ’em with this furry shit (he don’t see it comin'). Dowoes youwu lick my sowong.", "you really thought that wasnt detectable?", "hey whats mushroom client? ;)", "du kannst nichts daher ist dein vatter milch hollen"]
let saymessage = false

register("chat", (ripbozo, mob) => {
  if (!Config.omegahilarity) return;
  let fullMessage = ChatLib.getChatMessage(ripbozo).toLowerCase();
  if (fullMessage.indexOf("became a ghost.") == -1) {
    banscreenpog();
  }
}).setCriteria(" ☠ You were killed by ${mob}")

register("chat", (killedby) => {
  if (!Config.largehilarity) return;
    banscreenpog();
}).setCriteria(" ☠ You were ${killedby} and became a ghost.")

function banscreenpog(){
    banned = new ChatComponentText("§cYou are temporarily banned for §f29d 23h 59m 59s §cfrom this server!\n\n§7Reason: §rCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid2()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
    mc.func_147114_u().func_147298_b().func_150718_a(banned)
  }

function makeid2() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 8; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *charactersLength));
 }
 return result;
}

let timercountdowns = Date.now()
let lettime = 0
let randomnumer = Math.floor((Math.random()+1) * Config.hilarityspeed)

register("step", () => {
  if (!Config.hilarity) return;
  if (saymessage) {
    ChatLib.chat("&dFrom " + Hilaritynames[Math.floor(Math.random() * Hilaritynames.length)] + "&7: " + Hilaritymessages[Math.floor(Math.random() * Hilaritymessages.length)])
    timercountdowns = Date.now()
    saymessage = false
  }
  else if (!saymessage) {
    lettime = ((timercountdowns - Date.now()) / 1000 + randomnumer).toFixed(1)
    if (lettime == 0) {
      randomnumer = Math.floor((Math.random()+1) * Config.hilarityspeed)
      saymessage = true
    }
  }
}).setFps(1)