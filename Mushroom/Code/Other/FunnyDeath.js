import Config from "../../Config/Config"

register("chat", (ripbozo) => {
    if (!Config.omegahilarity) return;
    let fullMessage = ChatLib.getChatMessage(ripbozo).toLowerCase();
    if (fullMessage.indexOf("You") && fullMessage.indexOf("killed by")) {
        if (fullMessage.indexOf("and became a ghost.") !== 0) {
        banscreen();
        }
        else {
            if (!Config.largehilarity) return;
        }
    }
}).setCriteria("boss message")

function banscreen(){
    banned = new ChatComponentText("§cYou are temporarily banned for §f29d 23h 59m 59s §cfrom this server!\n\n§7Reason: §rCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
    mc.func_147114_u().func_147298_b().func_150718_a(banned)
  }

function makeid() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 8; i++ ) {
    result += characters.charAt(Math.floor(Math.random() *charactersLength));
 }
 return result;
}