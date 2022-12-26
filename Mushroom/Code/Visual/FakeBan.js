import Config from "../../Config/Config"
import {prefix, mc} from "../Utils"

// STOLEN FROM A FAKEBAN MODULE ON THE CHATTRIGGERS WEBSITE

var BanKey = Client.getKeyBindFromKey(Keyboard.KEY_HOME, "FakeBan","Mushroom");
this.DisconnectKey = new KeyBind("Disconnect", Keyboard.KEY_NONE, "Mushroom");
const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");
register("command",()=> DisplayScreen()).setName("banme");
register("command",()=> DisconnectScreen()).setName("disconnect");
register("tick",()=>{
  if (BanKey.isPressed()) {
  DisplayScreen()
}
})
register("tick",()=>{
  if (DisconnectKey.isPressed()) {
    Config.showfakeban = true
}
})
register("tick",()=>{
  if (Config.showfakeban) {
    DisplayScreen()
  Config.showfakeban = false
}
})
function DisplayScreen(){
  if(Config.banMethod===0){
    CheatPermBan()
  }else if (Config.banMethod===1){
    NamePermBan()
  }else if (Config.banMethod===2){
    SecurityBan()
  }else if (Config.banMethod===3){
    Boosting(getTime())
  }else if (Config.banMethod===4){
    InappropriateBuild(getTime())
  }else if (Config.banMethod===5){
    CheatTempBan(getTime())
  }else if (Config.banMethod===6){
    CustomBan()
  }
}
function getTime(){
  //7 30 90 180 360
  if(Config.BanTime===0){
    return "6d 23h 59m 59s"
  }else if(Config.BanTime===1){
    return "29d 23h 59m 59s"
  }else if(Config.BanTime===2){
    return "89d 23h 59m 59s"
  }else if(Config.BanTime===3){
    return "179d 23h 59m 59s"
  }else if(Config.BanTime===4){
    return "359d 23h 59m 59s"
  }

}
function CheatPermBan(){
  banned = new ChatComponentText("§cYou are permanently banned from this server!\n\n§7Reason: §rCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"+makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
  mc.func_147114_u().func_147298_b().func_150718_a(banned)
}
function NamePermBan(){
  banned = new ChatComponentText("\n§cYou are currently blocked from joining this server!\n\n§7Reason: §fYour username, " +Player.getName()+", is not allowed on the server and is breaking our rules.\n§7Find out more: §b§nhttps://www.hypixel.net/rules\n\n§cPlease change your Minecraft username before trying to join again.")
  mc.func_147114_u().func_147298_b().func_150718_a(banned)
}
function SecurityBan(){
  banned = new ChatComponentText("§cYou are permanently banned from this server!\n\n§7Reason: §rSuspicious account activity/Other.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"+makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
  mc.func_147114_u().func_147298_b().func_150718_a(banned)
}
function Boosting(time){
  banned = new ChatComponentText("§cYou are temporarily banned for §f" + time + " §cfrom this server!\n\n§7Reason: §rBoosting detected on one or multiple SkyBlock profiles.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
  mc.func_147114_u().func_147298_b().func_150718_a(banned)
}
function InappropriateBuild(time){
  banned = new ChatComponentText("§cYou are temporarily banned for §f" + time + " §cfrom this server!\n\n§7Reason: §rCreating a build or drawing which is not appropriate on the server.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
  mc.func_147114_u().func_147298_b().func_150718_a(banned)
}
function DisconnectScreen(){
  dcmessage = new ChatComponentText("\n"+prefix+"\n§cu hit ur disconnect key")
  mc.func_147114_u().func_147298_b().func_150718_a(dcmessage)
}
function CheatTempBan(time){
  banned = new ChatComponentText("§cYou are temporarily banned for §f" + time + " §cfrom this server!\n\n§7Reason: §rCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
  mc.func_147114_u().func_147298_b().func_150718_a(banned)
}
function CustomBan(){
  if (Config.Perm){
    banned = new ChatComponentText("§cYou are permanently banned from this server!\n\n§7Reason: §r"+Config.Reason+"\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"+makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
    mc.func_147114_u().func_147298_b().func_150718_a(banned)
  }else{
    banned = new ChatComponentText("§cYou are temporarily banned for §f" + Config.Time + " §cfrom this server!\n\n§7Reason: §r"+Config.Reason+"\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
    mc.func_147114_u().func_147298_b().func_150718_a(banned)
  }
}
register("command", () => {
      banned = new ChatComponentText("§cYou are permanently banned from this server!\n\n§7Reason: §rBeing Gay\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"+makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
      mc.func_147114_u().func_147298_b().func_150718_a(banned)
    }).setName("imgay")

function makeid() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 8; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *charactersLength));
 }
 return result;
}
