import Config from "../../Config/Config"

fullMessage = ""
  // Custom names and ranks for me and friends
  register("chat", (msg) => { // if message received
    if (!Config.nickhider) return; // if custom ranks config is false end
    let fullMessage = ChatLib.getChatMessage(msg, true); // make the message into a formatted variable
    if (fullMessage.includes("Scalese") || fullMessage.includes("EmaAG_") || fullMessage.includes("pewing") || fullMessage.includes("iSoldCoins") || fullMessage.includes("Ender_Yeeter") || fullMessage.includes("DoDG321") || fullMessage.includes("simplawthedum") || fullMessage.includes("You_R_You") || fullMessage.includes("goodrng") || fullMessage.includes("shaitur") || fullMessage.includes("SlowSorrow")|| fullMessage.includes("SuedPolecat4050")|| fullMessage.includes("Langstob")|| fullMessage.includes("Zxnl")|| fullMessage.includes("Ender_Yeeter")|| fullMessage.includes("eBoyBogdi")|| fullMessage.includes("MCchamq")|| fullMessage.includes("Strongchaff")|| fullMessage.includes("pewing")|| fullMessage.includes("SeBook")|| fullMessage.includes("Protoblade")|| fullMessage.includes("Aditive")|| fullMessage.includes("choowu")|| fullMessage.includes("unwarped")|| fullMessage.includes("cokoc")|| fullMessage.includes("Mlehkb")|| fullMessage.includes("mushroomclient")|| fullMessage.includes("Furnessed")|| fullMessage.includes("Manthefridge")|| fullMessage.includes("sushuiii")|| fullMessage.includes("_Thomas_P_")|| fullMessage.includes("oxsL")|| fullMessage.includes("Darkloc")|| fullMessage.includes("iBoughtCoins")|| fullMessage.includes("Captain_Zingo")|| fullMessage.includes("weakchaff")|| fullMessage.includes("SwigWasTaken")|| fullMessage.includes("StormRaiser21")|| fullMessage.includes("IMainABlockGame")|| fullMessage.includes("nightminutes")|| fullMessage.includes("Strafelogical")|| fullMessage.includes("unificity")|| fullMessage.includes("W4lru5")|| fullMessage.includes("thirtyvirus")|| fullMessage.includes("mushroom"), fullMessage.includes(Player.getName(),)) { // if a message contains any of the names
      cancel(msg); // cancel the message
      fullMessage = fullMessage.replace(Player.getName(), `${Config.fakename}&f`);
      fullMessage = fullMessage.replace(/\[MVP.+\] escamas/g, "&c[&fOWNER&c] 180 day banned&f"); // change the names in the message
      fullMessage = fullMessage.replace(/\[MVP.+\] EmaAG_/g, "&6[&efirst&6] &eemaAG_&f");
      fullMessage = fullMessage.replace(`[MVP+] cokoc`, "&b[&9poo&b] &9cock");
      fullMessage = fullMessage.replace(/\[MVP.+\] Langstob/g, "&6[&ebanana&6] &eLangston&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] xzenocy/g, "&0[&8CUNT&0] xzenocy&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] You_R_You/g, "&c[&fYOUTUBE&c] You_R_You&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] Ender_Yeeter/g, "&6[&0BEAMED BY MUSHROOM CLIENT&6] &0BEAMED CHILD&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] eBoyBogdi/g, "&b[&dRNG CARRIED&b] &drng carried shitter&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] SlowSorrow/g, "&c[&fYOUTUBE&c] SlowSorrow&f");
      fullMessage = fullMessage.replace(/\[MVP+\] iSoldCoins/g, "&0[&8GAY&0] &7irl trader 2&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] oChamp/g, "&b[&5MADMEN&b] &5oChump&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] Strongchaff/g, "&b[&9SHAFT&3+&b] &9Strongshaft&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] pewing/g, "&b[&dDUMBASS&b] &dpeeing&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] SeBook/g, "&c[&4RETRAD&c] SeBook&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] Protoblade/g, "&0[&8RAT&0] &8Protoblade&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] Aditive/g, "&f[&a+&f] &2Aditive&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] choowu/g, "&5[&dcunt&5] choowu&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] SuedPolecat4050/g, "&c[arron] SuedPolecat4050&f");
      fullMessage = fullMessage.replace(/\[MVP+\] cokoc/g, "&b[&fcocks&b] cocks boy&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] DoDG321/g, "&6[&breal&6] DoDG321&f");
      fullMessage = fullMessage.replace(/\[MVP.+\] W4lru5/g, "&c[&fnigger&c] hunggraal&f");
      fullMessage = fullMessage.replace(/\[VIP.+\] unwarped/g, "&a[&fMUSHROOM&a] unwarped&f");
      fullMessage = fullMessage.replace(/\[VIP.+\] Mlehkb/g, "&2[&5knockback&2] &dMleh knockback&f");
      fullMessage = fullMessage.replace(/\[VIP.+\] Impressionn/g, "&0[racist] &0Impressionn&f");
      fullMessage = fullMessage.replace("[VIP] SpookyScale", "&2[&fOWNER&2] Mushroom&f");
      fullMessage = fullMessage.replace(/\[VIP\] Furnessed/g, "&a[&5GAMER&a] &5Furness&f");
      fullMessage = fullMessage.replace(/\[VIP\] Manthefridge/g, "&9[&dfridge&9] fridge&f");
      fullMessage = fullMessage.replace(/\[VIP\] sushuiii/g, "&a[&5MADMEN&a] sushuiii&f");
      fullMessage = fullMessage.replace(/\[VIP\] _Thomas_P_/g, "&a[&3GERMAN&a] &3Thomas P&f");
      fullMessage = fullMessage.replace(/\[VIP\] oxsL/g, "&4[&6BANNED&4] &aOXSL&f");
      fullMessage = fullMessage.replace(/\[VIP\] Darkloc/g, "&a[&fSHEEP&0-&a] &fDarkloc&f");
      fullMessage = fullMessage.replace(/\[VIP\] iBoughtCoins/g, "&0[&8GAY&0] &7irl trader&f");
      fullMessage = fullMessage.replace(/\[VIP\] Captain_Zingo/g, "&0[&8GAY&0] &7Captain cvm&f");
      fullMessage = fullMessage.replace(/\[VIP\] weakchaff/g, "&6[&ebanana&6] &eLangston's alt&f");
      fullMessage = fullMessage.replace(/\[VIP\] SwigWasTaken/g, "&6[&eGay Homosexual&6] &6Swig&f");
      fullMessage = fullMessage.replace(/\[VIP\] StormRaiser21/g, "&0[&7BEAMED&0] &8BEAMED BY SHADY ADDONS&f");
      fullMessage = fullMessage.replace(/\[VIP\] IMainABlockGame/g, "&5[&dSCAM&5] &dIMainScamming&f");
      fullMessage = fullMessage.replace(/\[VIP\] ItsWeekdays/g, "&4[&3PASTA&4] &3Weekdays&f");
      fullMessage = fullMessage.replace("escamas", "&cScales&f");
      fullMessage = fullMessage.replace("SpookyScale", "&2Mushroom&f");
      fullMessage = fullMessage.replace("Furnessed", "&5Furness&f");
      fullMessage = fullMessage.replace("unwarped", "§c§lM§f§lu§c§ls§f§lh§c§lr§f§lo§c§lo§f§lo§c§lm §lClient&f");
      fullMessage = fullMessage.replace(/ItsWeekdays/g, "&3Weekdays&f");
      fullMessage = fullMessage.replace(/eBoyBogdi/g, "&drng carried shitter&f");
      fullMessage = fullMessage.replace("nightminutes", "&drng carried shitter's alt&f");
      fullMessage = fullMessage.replace(/Manthefridge/g, "&dfridge&f");
      fullMessage = fullMessage.replace("Ender_Yeeter", "&0BEAMED CHILD&f");
      fullMessage = fullMessage.replace(/W4lru5/g, "&chunggraal");
      fullMessage = fullMessage.replace(/DoDG321/g, "&6DoDG321");
      fullMessage = fullMessage.replace(/oChamp/g, "&5oChump&f");
      fullMessage = fullMessage.replace(/sushuiii/g, "&5sushuiii&f");
      fullMessage = fullMessage.replace(/choowu/g, "&5choowu&f");
      fullMessage = fullMessage.replace(/EmaAG_/g, "&eemaAG_&f");
      fullMessage = fullMessage.replace(/cokoc/g, "&bcocks boy&f");
      fullMessage = fullMessage.replace(/Strafelogical/g, "&5Strafelogical&f");
      fullMessage = fullMessage.replace(/pewing/g, "&dpeeing&f");
      fullMessage = fullMessage.replace(/SeBook/g, "&4SeBook&f");
      fullMessage = fullMessage.replace(/_Thomas_P_/g, "&3Thomas P&f");
      fullMessage = fullMessage.replace(/oxsL/g, "&aOXSL&f");
      fullMessage = fullMessage.replace(/Darkloc/g, "&fDarkloc&f");
      fullMessage = fullMessage.replace(/Strongchaff/g, "&9Strongshaft&f");
      fullMessage = fullMessage.replace(/unificity/g, "&0HI IM BANNED ON 14 ACCOUNTS AND AM CURRENTLY BAN EVADING SO I CAN IRL TRADE SCAMMED COINS&f");
      fullMessage = fullMessage.replace(/Protoblade/g, "&8Protoblade&f");
      fullMessage = fullMessage.replace(/iBoughtCoins/g, "&7irl trader&f");
      fullMessage = fullMessage.replace(/iSoldCoins/g, "&7irl trader 2&f");
      fullMessage = fullMessage.replace(/Captain_Zingo/g, "&8Captain cvm&f");
      fullMessage = fullMessage.replace(/Mlehkb/g, "&dMleh knockback&f");
      fullMessage = fullMessage.replace(/Aditive/g, "&2Aditive&f");
      fullMessage = fullMessage.replace(/Langstob/g, "&eLangston&f");
      fullMessage = fullMessage.replace(/weakchaff/g, "&eLangston's alt&f");
      fullMessage = fullMessage.replace(/SwigWasTaken/g, "&6Swig&f");
      fullMessage = fullMessage.replace(/StormRaiser21/g, "&8BEAMED BY SHADY ADDONS&f");
      fullMessage = fullMessage.replace(/IMainABlockGame/g, "&dIMainScamming&f");
      fullMessage = fullMessage.replace(/Impressionn/g, "&0Impressionn&f");
      fullMessage = fullMessage.replace(/shaitur/g, "&8best farmer ww&f");
      fullMessage = fullMessage.replace(/xzenocy/g, "&0xzenocy&f");
      fullMessage = fullMessage.replace(/SlowSorrow/g, "&cSlowSorrow&f");
      fullMessage = fullMessage.replace(/You_R_You/g, "&cYou_R_You&f");
      fullMessage = fullMessage.replace(/simplawthedum/g, "&5simplawthedum&f");
      fullMessage = fullMessage.replace(/SuedPolecat4050/g, "&cSuedPolecat4050&f");
      fullMessage = fullMessage.replace(/thirtyvirus/g, "&cHow many creative minds do you have again? Its ridiculous that you think your opinion holds any ground against mine with an idea that the admins took and used all the time. I am an endgame player - if i sold ALL my skyblock cakes, ALL my pet collection (which is worth a lot even with candied pets) I can easily afford a tier boosted ender dragon and a giant's sword, which effectively makes me a lot farther along than most other end game players&f");
      fullMessage = fullMessage.replace(/mushroom/g, "§c§lm§f§lu§c§ls§f§lh§c§lr§f§lo§c§lo§f§lo§c§lm&f");
      fullMessage = fullMessage.replace(/Kiri6pvb/g, "&7mushroom client best&f");
        ChatLib.chat(fullMessage) // say new message with funny names
    }     
  })

  register("chat", (startofmessage, name, restofmessage) => { // fixing messages from custom ranked people not being clickable
    if (!Config.nickhider) return;
    setTimeout(function(){
    var partymessage = new Message(
       new TextComponent("\n&9&lClick Here to party &c&l" + name + "&9&l back!\n").setClick("run_command", "/p  " + name), // new message thats clickable
       new TextComponent("\n&6&lClick Here to join &c&l" + name + "'s &6&lparty!\n").setClick("run_command", "/p join " + name),
       new TextComponent("\n&5&lClick Here to leave your current party!\n").setClick("run_command", "/p leave")); // just a qol thing because i dont like having to type /p leave
    ChatLib.chat(partymessage)
  },500);
  }).setChatCriteria("-${startofmessage}-${name} has invited you to join their party!${restofmessage}")

register("renderPlayerList", () => {
  if (!Config.nickhider) return;
  Player.setTabDisplayName(new TextComponent(Config.fakerank + " " + Config.fakename))
});

  register("command", () => { // list of all the names with ranks for testing things
    ChatLib.chat(`
    mushroomclient
    you_are_a
    unwarped
    eBoyBogdi
    nightminutes
    Manthefridge
    Ender_Yeeter
    oChamp
    sushuiii
    cokoc
    Strafelogical
    pewing
    SeBook
    _Thomas_P_
    oxsL
    Darkloc
    unificity
    Protoblade
    CodeinRain
    Strongchaff
    EmaAG_
    Captain_Zingo
    Mlehkb
    Aditive
    Langstob
    weakchaff
    SwigWasTaken
    StormRaiser21
    IMainABlockGame
    Impressionn
    shaitur
    SuedPolecat4050
    You_R_You
    thirtyvirus
    SlowSorrow
    simplawthedum
    mushroom`
    )}).setName("funnynamepeople")
