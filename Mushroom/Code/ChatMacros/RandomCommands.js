import Config from "../../Config/Config"
import {prefix} from "../Utils"
const randomnumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const randomcolors = ["1⬛ Blue", "2⬛ Dark Green", "3⬛ Cyan", "4⬛ Dark Red", "5⬛ Purple", "6⬛ Gold", "7⬛ Grey", "8⬛ Dark Grey", "9⬛ Blue", "0⬛ Black", "a⬛ Green","b⬛ Light Blue","c⬛ Light Red","d⬛ Pink","e⬛ Yellow","f⬛ White"]
const Coinflip = ["Heads", "Tails"]
var messagehider=false
var renderSquareX = 0;
var renderSquareY = 0;
var gui = new Gui();
let lines = TabList.getNames();
function myGuiRenderFunction() {Renderer.drawRect(Renderer.WHITE, renderSquareX, renderSquareY, 50, 50);}
function myGuiClickedFunction(mouseX, mouseY) {renderSquareX = mouseX;renderSquareY = mouseY;}
function myGuiKeyTypedFunction(typedChar, keyCode) {ChatLib.chat(keyCode + " = " + typedChar);}
gui.registerClicked(myGuiClickedFunction);
gui.registerDraw(myGuiRenderFunction);
gui.registerKeyTyped(myGuiKeyTypedFunction);
register("chat", (event) => {
  if (messagehider){
  cancel(event)
  }})
register("command", () => {ChatLib.say("؜")}).setName("empty");
register("command", () => {ChatLib.chat("&e⬛⬛&c⬛&e⬛⬛&c⬛&e⬛⬛\n&e⬛⬛⬛⬛⬛⬛⬛⬛\n&e⬛⬛⬛⬛⬛⬛⬛⬛\n&c⬛⬛⬛⬛⬛⬛⬛⬛\n&0⬛&c⬛&0⬛⬛⬛⬛&c⬛&0⬛\n&6⬛⬛&4⬛&0⬛&6⬛⬛⬛⬛\n&6⬛⬛⬛⬛⬛⬛⬛⬛\n&6⬛⬛⬛⬛⬛⬛⬛⬛")}).setName("scalesy");
register("command", () => {ChatLib.chat("&9-----------------------------------------------------\n                                                 &6Friends (Page 0 of 0) \n\n\n\n\n                                                  &6(u have no friends)\n\n\n\n&9-----------------------------------------------------")}).setName("lf");
register("command", () => {ChatLib.chat("&9-----------------------------------------------------\n&c[&fYOUTUBE&c] RageTrain &e has invited you to join their party!\n&eYou have &c60 &eseconds to accept. &6Click here to join!\n&9-----------------------------------------------------\n")}).setName("fakepartyinv");
register("command", () => {ChatLib.chat("&9-----------------------------------------------------\n&c&eYou have joined &c[&fYOUTUBE&c] RageTrain's &eparty!\n&9-----------------------------------------------------\n")}).setName("fakepartyaccept");
register("command", () => {ChatLib.chat("&dFrom &d[Dumbass] Pewing&7: hEy cAaN yoU SeND mE mUShRoM cLeInt \n&dFrom &c[ADMIN] Jayavarmen&7: u forgot to hide your mod id. \n&dFrom &d[&bSIMP&d] Ender_Yeeter&7: x3 nuzzles! pounces on you uwu you so warm (ooo) Couldn’t help but notice your buldge from across the floor Nuzzles yo' necky wecky-tilda murr-tilda hehe Unzips yo baggy ass pants, oof baby you so musky Take me home, pet me, 'n’ make me yours and don't forget to stuff me! See me wag my widdle baby tail all for your buldgy-wuldgy! Kissies 'n' lickies yo neck I hope daddy likies Nuzzles 'n' wuzzles yo chest (yuh) I be (yeah) gettin' thirsty Hey, I got a little itch, you think you can help me? Only seven inches long uwu PLEASE ADOPT ME Paws on your buldge as I lick my lips (uwu punish me please) 'Boutta hit ’em with this furry shit (he don’t see it comin'). Dowoes youwu lick my sowong. \n&dFrom &c[ADMIN] Plancke&7: YOU REALLY THOUGHT THAT WASNT DETECTABLE? \n&dFrom &c[&fYOUTUBE&c] &cTimeDeo&7: your flagging the anticheat. alot. \n&dFrom &c[ADMIN] Minikloon&7: hey whats mushroom client? :) \n&dFrom &4[Retrad] SeBook&7: How do you know which room the mimics in? \n&dFrom &c[ADMIN] Minikloon&7: Here to give you a heads up, you're getting wiped. \n&dFrom &f[Sheep&0&l-&f] Darkloc&7: nice gaming chair. HAX! \n&dFrom &c[&fYOUTUBE&c] &cMushroom&7: any last words? \n&dFrom &5[MADMEN] MCchamq&7: HEY SCALESY I DIDNT THROW IN F7 BOSS FIGHR AS HEALER!!!!!! \n&dFrom &c[Arron] SuedPolecat&7: WHERE IS ARRON ¬o \n&dFrom &b[RNG Carried] eBoyBogdi&7: hey i dropped 2 shiny handles in one run!!! \n&dFrom &8[Best Farmer] Shaitur&7: closing my island so i can farm for 17 years straight (im just an sbm tool leveler) \n&dFrom &6[Banned] oxsL&7: &eHello! I am curently &4banned &eand can't message you right now \n&dFrom &0[Racist] iiiHacking&7: nigger \n&dFrom &3[German] _Thomas_P_&7: du kannst nichts daher ist dein vatter milch hollen")}).setName("allfunnys")
register("command", () => {ChatLib.chat("&7Warping... \n&7Sending to server mini73BS...")}).setName("wapr")
register("command", () => {ChatLib.chat(`${prefix} &aUpdates coming soon is a &4${Config.ComingSoon} &astatement`)}).setName("updates")
register("command", () => {ChatLib.chat ('&bYour random number is: &a' + randomnumber[Math.floor(Math.random() * randomnumber.length)])}).setName("RandomNumber");
register("command", () => {ChatLib.chat ('&bThe coin landed on: &a' + Coinflip[Math.floor(Math.random() * Coinflip.length)])}).setName("coinflip");
register("command", () => {ChatLib.chat ('&' + randomcolors[Math.floor(Math.random() * randomcolors.length)])}).setName("randomcolor");
register("command", () => {ChatLib.chat (prefix + "\n\n&d&n&lRandom Color List:\n\n&1⬛ Blue\n&2⬛ Dark Green\n&3⬛ Cyan\n&4⬛ Dark Red\n&5⬛ Purple\n&6⬛ Gold\n&7⬛ Grey\n&8⬛ Dark Grey\n&9⬛ Blue\n&0⬛ Black\n&a⬛ Green\n&b⬛ Light Blue\n&c⬛ Light Red\n&d⬛ Pink\n&e⬛ Yellow\n&f⬛ White")}).setName("randomcolorlist");
register("command", () => {gui.open();}).setName("keycode")
register("command", () => {ChatLib.say("/g online")}).setName("gon")
register("command", () => {ChatLib.copy("⃟  ࣾࣾࣾ#9979")}).setName("mydiscord")
register("command", () => {for (let i = 0; i < lines.length; i++) {ChatLib.chat(`${lines[i]}`)}}).setName("tab")

register("command", () => {
  messagehider=true
  ChatLib.say("§")
  setTimeout() ; 1
  var delayInMilliseconds = 500;
  setTimeout(function() {
  ChatLib.say("§")
  }, delayInMilliseconds);
  setTimeout(() => {messagehider=false},600);
  setTimeout() ; 1
  var delayInMilliseconds = 610;
  setTimeout(function() {
  ChatLib.chat("&4Beamed by mushroom client")
  ChatLib.chat("&cyou will be ban now")
}, delayInMilliseconds);
}).setName("sl");

register("command", () => {
  ChatLib.command("f removeall")
  setTimeout() ; 100
  var delayInMilliseconds = 100;
  setTimeout(function() {
  ChatLib.command("f removeall yesiamabouttodeleteallmyfriends")
  }, delayInMilliseconds);
  }).setName("yeet")

register("command", () => {
  ChatLib.command("spawnlocation")
  setTimeout() ; 100
  var delayInMilliseconds = 100;
  setTimeout(function() {
  ChatLib.command("hub")
  }, delayInMilliseconds);
  var delayInMilliseconds = 10000;
  setTimeout(function() {
    ChatLib.command("is")
  }, delayInMilliseconds);
}).setName("zapreset")

  register("command", () => {
  ChatLib.chat(
    `&9-----------------------------------------------------
    ${prefix}
    &4&lCommands:
    &b/mtoggles to see all toggle commands
    &3/msliders to change sliders
    &9/mfunnys for random commands
&9-----------------------------------------------------`
  )
}).setName("mhelp")

register("command", () => {
  ChatLib.chat(
    `&9-----------------------------------------------------
    ${prefix}
    &4&lCommands:
    &9/zapreset to reset block zapper cooldown
    &6/shitcheck to check if a player is a shitter
    &5/tab to see tab in chat (doesnt work in sb)
    &a/yeet to get rid of ALL your friends
    &b/keycode to see keycodes of keys
    &2/empty to say an empty message
    &d/randomnumber and /coinflip
    &3/scalesy to see my face
    &4/lf to see your friends
    &e/memotes to see emotes
    &7/fn to set a fake name
    &6/gon to run /g online
    &c/imgay to be Banned.
    &1/sl to get to limbo
&9-----------------------------------------------------`
  )
}).setName("mfunnys")

register("command", () => {
  ChatLib.chat(
    `&9-----------------------------------------------------
    ${prefix}
    &4&lCommands:
    &1/ams to set auto quickmaths speed
    &2/acr to set right click ac speed
    &3/acl to set left click ac speed
    &4/zms to set a swapmacro speed
    &5/ats to set auto term speed
    &6/hls to set hillarity speed
    &a/car to set chest aura reach
    &b/sar to set skull aura reach
    &c/lar to set skull aura reach
&9-----------------------------------------------------`
  )
}).setName("msliders")

register("command", () => {
  ChatLib.chat(
    `&9-----------------------------------------------------
    ${prefix}
    &4&lCommands:
    &1/arc to toggle right click autoclicker
    &2/alc to toggle left click autoclicker
    &3/as to toggle auto snowball swap
    &4/ar to toggle auto rod swap
    &5/aesp to toggle entity esp
    &6/esp to toggle player esp
    &7/cesp to toggle chest esp
    &8/sesp to toggle skull esp
    &a/iesp to toggle item esp
    &9/ahm to toggle autoharp
    &6/ab to toggle autoblock
    &b/ca to toggle chest aura
    &c/la to toggle lever aura
    &d/sa to toggle skull aura
    &e/ka to toggle kill aura
&9-----------------------------------------------------`
  )
}).setName("mtoggles")

// --------------------------------------------------------
// toggles

register("command", () => {
  ChatLib.chat(`${
      (Config.autoblockpog = !Config.autoblockpog) 
      ? prefix + " >" + "&r&a Autoblock" 
      : prefix + " >" + "&r&c Autoblock"
  }`
  );
}).setName("ab")


register("command", () => {
  ChatLib.chat(`${
      (Config.killaura = !Config.killaura) 
      ? prefix + " >" + "&r&a Killaura" 
      : prefix + " >" + "&r&c Killaura"
  }`
  );
}).setName("ka")

register("command", () => {
  ChatLib.chat(`${
      (Config.chestaurabased = !Config.chestaurabased) 
      ? prefix + " >" + "&r&a Chest aura" 
      : prefix + " >" + "&r&c Chest aura"
  }`
  );
}).setName("ca")

register("command", () => {
  ChatLib.chat(`${
      (Config.leverer = !Config.leverer) 
      ? prefix + " >" + "&r&a Lever aura" 
      : prefix + " >" + "&r&c Lever aura"
  }`
  );
}).setName("la")


register("command", () => {
  ChatLib.chat(`${
      (Config.skuller = !Config.skuller) 
      ? prefix + " >" + "&r&a Skull aura" 
      : prefix + " >" + "&r&c Skull aura"
  }`
  );
}).setName("sa")


register("command", () => {
  ChatLib.chat(`${
      (Config.fishingrodswap = !Config.fishingrodswap) 
      ? prefix + " >" + "&r&a Auto rod" 
      : prefix + " >" + "&r&c Auto rod"
  }`
  );
}).setName("ar")

register("command", () => {
  ChatLib.chat(`${
      (Config.snowballswap = !Config.snowballswap) 
      ? prefix + " >" + "&r&a Auto snowball" 
      : prefix + " >" + "&r&c Auto snowball"
  }`
  );
}).setName("as")

register('command', () => {
  ChatLib.chat(`${
    (Config.autoharp = !Config.autoharp)
    ? prefix + " >" + "&aAutoharp"
    : prefix + " >" + "&cAutoharp"
  }`
  );
}).setName('ahm')


register("command", () => {
  ChatLib.chat(`${
      (Config.chestesppog = !Config.chestesppog) 
      ? prefix + " >" + "&r&a Chest ESP" 
      : prefix + " >" + "&r&c Chest ESP"
  }`
  );
}).setName("cesp")


register("command", () => {
  ChatLib.chat(`${
      (Config.PlayerESP = !Config.PlayerESP) 
      ? prefix + " >" + "&r&a ESP" 
      : prefix + " >" + "&r&c ESP"
  }`
  );
}).setName("esp")

register("command", () => {
  ChatLib.chat(`${
      (Config.ItemESP = !Config.ItemESP) 
      ? prefix + " >" + "&r&a Item ESP" 
      : prefix + " >" + "&r&c Item ESP"
  }`
  );
}).setName("iesp")

register("command", () => {
  ChatLib.chat(`${
      (Config.Armorstandesp = !Config.Armorstandesp) 
      ? prefix + " >" + "&r&a ALL entity ESP" 
      : prefix + " >" + "&r&c ALL entity ESP"
  }`
  );
}).setName("aesp")

register("command", () => {
  ChatLib.chat(`${
      (Config.skullesppogger = !Config.skullesppogger) 
      ? prefix + " >" + "&r&a Skull ESP" 
      : prefix + " >" + "&r&c Skull ESP"
  }`
  );
}).setName("sesp")

// --------------------------------------------------------
// sliders

register("command", ams => {ams;
  ChatLib.chat(prefix + "&a quickmaths speed set to &f" + ams);
  (Config.quickmathsautosendcooldown = ams)
}).setName("ams");

register("command", acr => {acr;
  ChatLib.chat(prefix + " >" + "&a Autoclicker right speed set to &c" + acr);
  (Config.autoclickerspeed = acr)
}).setName("acr");

register("command", acl => {acl;
  ChatLib.chat(prefix + " >" + "&a Autoclicker left speed set to &c" + acl);
  (Config.leftclickacspeed = acl)
}).setName("acl");

register("command", zms => {zms;
  ChatLib.chat(prefix + " >" + "&a Swapmacro speed set to &c" + zms);
  (Config.Zombiesgunmacrospeed = zms)
}).setName("zms");

register("command", ats => {ats;
  ChatLib.chat(prefix + " >" + "&a Autoterm speed set to &c" + ats);
  (Config.autotermspeed = ats)
}).setName("ats");

register("command", hls => {hls;
  ChatLib.chat(prefix + " >" + "&a Hilarity speed set to &c" + hls);
  (Config.autotermspeed = hls)
}).setName("hls");

register("command", car => {car;
  ChatLib.chat(prefix + " >" + "&a Chestaura reach set to &c" + car);
  (Config.auraReach = car)
}).setName("car");

register("command", sar => {sar;
  ChatLib.chat(prefix + " >" + "&a Skullaura reach set to &c" + sar);
  (Config.skullreach = sar)
}).setName("sar");

register("command", lar => {lar;
  ChatLib.chat(prefix + " >" + "&a Leveraura reach set to &c" + lar);
  (Config.skullreach = lar)
}).setName("lar");

register("command", nickname => {nickname;
  ChatLib.chat(prefix + "&a fakename set to &f" + nickname);
  (Config.fakename = nickname)
}).setName("fn");

register("command", fakeran => {fakeran;
  ChatLib.chat(prefix + "&a fakerank set to &f" + fakeran);
  (Config.fakerank = fakeran)
}).setName("fr");