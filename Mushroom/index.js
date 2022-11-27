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
import "./Code/Other/Hilarity"
import "./Code/Other/ImagePaste"
import "./Code/Other/UpdateChecker"

import {prefix, getVersion} from "./Code/Utils"
var text = new Text(prefix, 55, 17.5);
var text2 = new Text(prefix, 5, 17.5);

// DONT MIND ANY OF THIS CODE ITS SO BAD IK

register("command", () => { // why different commands...?
Config.openGUI()
}).setName("mc")
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

export {mushroomshadowimg, logo}
