/// <reference lib="es2015" />

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
ChatLib.chat(ChatLib.getCenteredText("&a&lThank for for installing §c§lM§f§lu§c§ls§f§lh§c§lr§f§lo§c§lo§f§lo§c§lm §lClient!")); // mushroom client couldve been typed with ${prefix}
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
      Renderer.drawRect(Renderer.color(250, 250, 250, 250), this.x + 85, this.y + 1, this.width / 12, this.height / 1.25);
      if (mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height) {
        Renderer.drawRect(Renderer.color(0, 0, 250, 150), this.x + 85.5, this.y + 1.3, this.width / 13.5, this.height / 1.35);
      }
      Renderer.drawString(buttontext, buttonx, buttony);
  }
  extrabuttontoggled() {
    let buttontext = this.text;
    let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 1.5);
    let buttony = this.y + (this.height / 2 - 4);
    Renderer.drawRect(Renderer.color(0, 0, 250, 250), this.x + 85.5, this.y + 1.3, this.width / 13.5, this.height / 1.35);
    Renderer.drawString(buttontext, buttonx, buttony);
}
sliderdraw() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) * 1.5);
  let buttony = this.y + (this.height / 2 - 4);
  let mx = Client.getMouseX();
  Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawRect(Renderer.color(25, 250, 200, 200), this.x + 1, this.y, funslider, this.height - 1);
  Renderer.drawString(buttontext, buttonx, buttony);
}
slidertoggleddraw() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) * 1.5);
  let buttony = this.y + (this.height / 2 - 4);
  let mx = Client.getMouseX();
  let slidernumber = (mx - this.x).toFixed(1)
  if (slidernumber <= 0) {
    slidernumber = 0
  }
  if (slidernumber >= 98) {
    slidernumber = 98
  }
  slidernumberka = ((slidernumber / 49) + 3).toFixed(1)
  funslider = slidernumber
  Renderer.drawRect(Renderer.color(25, 25, 25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawRect(Renderer.color(25, 250, 200, 200), this.x + 1, this.y, funslider, this.height - 1);
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
  Renderer.drawRect(Renderer.color(25,25,25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawString("Mode", this.x + 5, this.y + 1)
  Renderer.drawString(buttontext, buttonx, buttony);
}
keybindbutton() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
  let buttony = this.y + (this.height / 2 - 4);
  Renderer.drawRect(Renderer.color(25, 25,25, 250), this.x, this.y, this.width, this.height);
  Renderer.drawString("Keybind", this.x + 5, this.y + 1)
  Renderer.drawString("[  ]", this.x + 85, this.y + 1)
  Renderer.drawString(buttontext, buttonx, buttony);
}
commingsoontm() {
  let buttontext = this.text;
  let buttonx = this.x + (this.width / 2 - Renderer.getStringWidth(this.text) / 2);
  let buttony = this.y + (this.height / 2 - 4);
    Renderer.drawRect(Renderer.color(2, 2,2, 250), this.x, this.y, this.width, this.height);
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
  killaurakeypress = keyCode
  if (keyCode == 42) {
    killaurakeypress = ""
  }
  killaurakeybindnow = false
  return;
}
function nowallkeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  nowallkeybinded = typedChar
  nowallkeybind = keyCode
  if (keyCode == 42) {
    nowallkeybind = ""
  }
  nowallbindnow = false
  return;
}
function autoblockkeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  autoblockbinded = typedChar
  autoblockkeybind = keyCode
  if (keyCode == 42) {
    autoblockkeybind = ""
  }
  autoblockbindnow = false
  return;
}
function cpsmultiplierkeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  cpsmultiplierbinded = typedChar
  cpsmultiplierkeybind = keyCode
  if (keyCode == 42) {
    cpsmultiplierkeybind = ""
  }
  cpsmultiplierbindnow = false
  return;
}
function freezekeybindpog(typedChar, keyCode) {
  if (keyCode == 14) return;
  freezebinded = typedChar
  freezekeybind = keyCode
  if (keyCode == 42) {
    freezekeybind = ""
  }
  freezebindnow = false
  return;
}
function cancel() {
return;
}

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
combatx = (52)
combattitley = (2)
killauray = (combattitley + 10)
//
killaurarangenumy = (killauray + 21)
killaurarangenumx = (combatx + 80)
//
if (killauraextra) {
killauraextray = (killauray + 10)
//killaurarangey = (killauray + 20)
killauramobsy = (killauray + 20)
killauraaby = (killauray + 30)
killaurakeybindy = (killauray + 40)
}
if (!killauraextra) {
killauraextray = killauray
killaurarangey = killauray
killauramobsy = killauray
killauraaby = killauray
killaurakeybindy = killauray
}
// 
nowally = (killaurakeybindy + 10)
if (nowallextra) {
nowallextray = (nowally + 10)
nowallkeybindy = (nowally + 20)
}
if (!nowallextra) {
nowallextray = nowally
nowallkeybindy = nowally
}
//
autoblocky = (nowallkeybindy + 10)
if (autoblockextra) {
autoblockextray = (autoblocky + 10)
autoblockkeybindy = (autoblocky + 20)
}
if (!autoblockextra) {
autoblockextray = autoblocky
autoblockkeybindy = autoblocky
}
//
cpsmultipliery = (autoblockkeybindy + 10)
if (cpsmultiplierextra) {
  cpsmultiplierextra1y = (cpsmultipliery + 10)
  cpsmultiplierextra2y = (cpsmultipliery + 20)
  cpsmultiplierkeybindy = (cpsmultipliery + 30)
  }
  if (!cpsmultiplierextra) {
  cpsmultiplierextra1y = cpsmultipliery
  cpsmultiplierextra2y = cpsmultipliery
  cpsmultiplierkeybindy = cpsmultipliery
  }
//
antikby = (cpsmultiplierkeybindy + 10)
reachy = (antikby + 10)
//
if (selectboxnum <= 0) {
  selectboxnum = 3
}
if (selectboxnum >= 4) {
  selectboxnum = 1
}
//

// VISUAL
visualx = (202)
visualy = (2)
clickguiy = (visualy + 10)
playerespy = (clickguiy + 10)
blockespy = (playerespy + 10)
nickhidery = (blockespy + 10)
fakebany = (nickhidery + 10)

// MACRO
macrox = (352)
macroy = (2)
scaffoldy = (macroy + 10)
chestauray = (scaffoldy + 10)
skullauray = (chestauray + 10)
leverauray = (skullauray + 10)
swordswapy = (leverauray + 10)

// CHAT MACRO
cmacrox = (502)
cmacroy = (2)
guildwelcy = (cmacroy + 10)
guildboty = (guildwelcy + 10)
quickmathsolvery = (guildboty + 10)
quotesy = (quickmathsolvery + 10)
autoptransfery = (quotesy + 10)

// SKYBLOCK
skyblockx = (652)
skyblocky = (2)
autotermy = (skyblocky + 10)
dungeonscorecalcy = (autotermy + 10)
shitterwarningy = (dungeonscorecalcy + 10)
autoharpy = (shitterwarningy + 10)
ghostblocky = (autoharpy + 10)
gyrotimery = (ghostblocky + 10)
lguydiedy = (gyrotimery + 10)

// OTHER
otherx = (802)
othery = (2)
hilarityy = (othery + 10)
spanishy = (hilarityy + 10)
discordrpcy = (spanishy + 10)
showupdatesy = (discordrpcy + 10)
freezey = (showupdatesy + 10)
freezeextrasy = (freezey + 10)

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

// COMBAT
combattitle = new buttondraw(combatx,combattitley,100,10, "Combat");
killaura2 = new buttondraw(combatx,killauray, 100, 10, "Kill Aura");
killauraextras = new buttondraw(combatx,killauraextray,100,10, "through walls");
killauramobsbutton = new buttondraw(combatx,killauramobsy,100,10, "mobs");
killauraautoblockbutton = new buttondraw(combatx,killauraaby,100,10, "autoblock");
//killaurarange = new buttondraw(combatx,killaurarangey,100,10, "Range");
//killaurarangenumber = new Text(slidernumberka, killaurarangenumx, killaurarangenumy);
//killauratextbox = new buttondraw(combatx,killauratexty,100,10, textpog);
//killauraselectbox = new buttondraw(combatx,killauraselecty,100,10, "");
killaurakeybind = new buttondraw(combatx,killaurakeybindy,100,10, "");
//newfunnytext = new Text("type here", combatx + 25, killauratexty + 1);
//selection1 = new Text("boosting", combatx + 52, killauraselecty + 1);
//selection2 = new Text("cheating", combatx + 52, killauraselecty + 1);
//selection3 = new Text("security", combatx + 52, killauraselecty + 1);
killaurakeybindtext = new Text(killaurakeybinded, combatx + 89, killaurakeybindy + 1);
nowall = new buttondraw(combatx,nowally, 100, 10, "No Walls");
nowallextras = new buttondraw(combatx,nowallextray,100,10, "right clicks");
nowallkeybinddraw = new buttondraw(combatx,nowallkeybindy,100,10, "");
nowallkeybindtext = new Text(nowallkeybinded, combatx + 89, nowallkeybindy + 1);
autoblock2 = new buttondraw(combatx,autoblocky, 100, 10, "Autoblock");
autoblockextras = new buttondraw(combatx,autoblockextray, 100, 10, "always");
autoblockkeybinddraw = new buttondraw(combatx,autoblockkeybindy,100,10, "");
autoblockkeybindtext = new Text(autoblockbinded, combatx + 89, autoblockkeybindy + 1);
cpsmultiplier = new buttondraw(combatx,cpsmultipliery,100,10, "CPS multiplier");
cpsmultiplierextra1 = new buttondraw(combatx,cpsmultiplierextra1y,100,10, "right clicks");
cpsmultiplierextra2 = new buttondraw(combatx,cpsmultiplierextra2y,100,10, "left clicks");
cpsmultiplierkeybinddraw = new buttondraw(combatx,cpsmultiplierkeybindy,100,10, "");
cpsmultiplierkeybindtext = new Text(cpsmultiplierbinded, combatx + 89, cpsmultiplierkeybindy + 1);
reach = new buttondraw(combatx,reachy, 100, 10, "Reach");
antiknockbackbox = new buttondraw(combatx,antikby, 100, 10, "Anti Knockback");

// VISUAL
visualtitle = new buttondraw(visualx,visualy,100,10, "Visual");
clickguibutton = new buttondraw(visualx,clickguiy, 100, 10, "Click GUI");
playerespbutton = new buttondraw(visualx,playerespy, 100, 10, "Player ESP");
blockespbutton = new buttondraw(visualx,blockespy, 100, 10, "Block ESP");
nickhiderbutton = new buttondraw(visualx,nickhidery, 100, 10, "Nick Hider");
fakebanbutton = new buttondraw(visualx,fakebany, 100, 10, "Fakeban");

// MACRO
macrotitle = new buttondraw(macrox,macroy,100,10, "Macro");
scaffoldbutton = new buttondraw(macrox,scaffoldy, 100, 10, "Scaffold");
chestaurabutton = new buttondraw(macrox,chestauray, 100, 10, "Chest Aura");
skullaurabutton = new buttondraw(macrox,skullauray, 100, 10, "Skull Aura"); 
leveraurabutton = new buttondraw(macrox,leverauray, 100, 10, "Lever Aura"); 
swordswapbutton = new buttondraw(macrox,swordswapy, 100, 10, "Sword Swap");

// CHAT MACRO
chatmacrotitle = new buttondraw(cmacrox,cmacroy,100,10, "Chat Macro");
guildwelcbutton = new buttondraw(cmacrox,guildwelcy,100,10, "Guild welcomer");
guildbotbutton = new buttondraw(cmacrox,guildboty,100,10, "Guild Bot");
quickmathsbutton = new buttondraw(cmacrox,quickmathsolvery,100,10, "Quickmaths");
quotesbutton = new buttondraw(cmacrox,quotesy,100,10, "Quotes");
autoptransferbutton = new buttondraw(cmacrox,autoptransfery,100,10, "Party Transfer");

// SKYBLOCK
skyblocktitle = new buttondraw(skyblockx,skyblocky,100,10, "Skyblock");
autotermsbutton = new buttondraw(skyblockx,autotermy,100,10, "Autoterms");
dungeonscorecalcbutton = new buttondraw(skyblockx,dungeonscorecalcy,100,10, "Dungeon Score");
shitterwarningbutton = new buttondraw(skyblockx,shitterwarningy,100,10, "Shit Warning");
autoharpbutton = new buttondraw(skyblockx,autoharpy,100,10, "Auto Harp");
ghostblockbutton = new buttondraw(skyblockx,ghostblocky,100,10, "Ghost Blocks");
gyrotimerbutton = new buttondraw(skyblockx,gyrotimery,100,10, "Gyro Times");
lguydiedbutton = new buttondraw(skyblockx,lguydiedy,100,10, "Toxic Death");

// OTHER
othertitle = new buttondraw(otherx,othery,100,10, "Other");
hilaritybutton = new buttondraw(otherx,hilarityy,100,10, "Hilarity");
spanishbutton = new buttondraw(otherx,spanishy,100,10, "NOT ENOUGH SPANISH");
discordrpcbutton = new buttondraw(otherx,discordrpcy,100,10, "Discord RPC");
updatesbutton = new buttondraw(otherx,showupdatesy,100,10, "Updates");
freezebutton = new buttondraw(otherx,freezey,100,10, "Freeze");
freezekeybinddraw = new buttondraw(otherx,freezeextrasy,100,10, "");
freezekeybindtext = new Text(freezebinded, otherx + 89, freezeextrasy + 1);
});

register("renderOverlay", function() {
    if (configGui.isOpen()) {
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
          clickguibutton.drawButton();
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
          if (Config.clickguipogg) {
            clickguibutton.clickedbutton();
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
      if (button == 1) {
        (showcombat = !showcombat)
        return;
      }
      if (button == 1) {
        (killauraextra = !killauraextra)
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
      if (button == 1) {
        (showvisual = !showvisual)
      }
    }
    if (clickguibutton.isMouseOver()) {
      if (button == 0) {
        (configGui.close())
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
let freezebindnow = false
let freezeextras = false
let selectboxnum = 1
let killauraextras
let nowallextras
let autoblockextras

// VISUAL
let showvisual = true

// MACRO
let showmacro = true

// CHAT MACRO
let showchatmacro = true

// SKYBLOCK
let showskyblock = true

// OTHER
let showother = true

register("step", () => {
  if (Client.currentGui.get() == null) {
    if (Keyboard.isKeyDown(killaurakeypress)) {
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
    if (Keyboard.isKeyDown(nowallkeybind)) {
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
    if (Keyboard.isKeyDown(autoblockkeybind)) {
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
    if (Keyboard.isKeyDown(cpsmultiplierkeybind)) {
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
    if (Keyboard.isKeyDown(freezekeybind)) {
      ChatLib.chat(`${
          (Config.freezeme = !Config.freezeme) 
          ? prefix + " >" + "&r&a FREEZE" 
          : prefix + " >" + "&r&c FREEZE"
      }`
      );
    }
  }
}).setFps(10)

export {mushroomshadowimg, logo, backgroundfunny}
