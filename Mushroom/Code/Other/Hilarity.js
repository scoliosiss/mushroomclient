import Config from "../../Config/Config"
import {mc} from "../Utils"

const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");

register("chat", (ripbozo) => {
  if (!Config.omegahilarity) return;
    banscreenpog();
}).setCriteria("You were killed ${ripbozo}")

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
