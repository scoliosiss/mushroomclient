import {
    @Vigilant,
    @TextProperty,
    @ColorProperty,
    @ButtonProperty,
    @SwitchProperty,
    @ParagraphProperty,
    @SliderProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    Color
} from "../gui/gui";

import {getVersion, prefix} from "../Code/Utils";

@Vigilant("Mushroom", "Mushroom", {
    getCategoryComparator: () => () => {
        const categories = [ "Combat", "Visual", "Macro", "Chat Macro", "Sliders", "Skyblock", "Other", "Keybind", "CLICK GUI"];
        return 0;
    }
})
class Config {
    constructor() {
        this.initialize(this);
        this.setCategoryDescription(
            "Combat",
            `
            ${prefix} &2&lClient Version ${getVersion()}
            
            &b/mhelp for commands

            &6Combat
            `
        )
        this.setCategoryDescription(
            "Visual",
            `
            ${prefix} &6&lClient Version ${getVersion()}
            
            &2/mhelp for commands

            &bVisual
            `
        )
        this.setCategoryDescription(
            "Macro",
            `
            ${prefix} &1&lClient Version ${getVersion()}
            
            &6/mhelp for commands

            &2Macro
            `
        )
        this.setCategoryDescription(
            "Chat Macro",
            `
            ${prefix} &a&lClient Version ${getVersion()}
            
            &1/mhelp for commands

            &6Chat Macro
            `
        )
        this.setCategoryDescription(
            "Sliders",
            `
            ${prefix} &e&lClient Version ${getVersion()}
            
            &a/mhelp for commands

            &1Sliders
            `
        )
        this.setCategoryDescription(
            "Skyblock",
            `
            ${prefix} &4&lClient Version ${getVersion()}
            
            &e/mhelp for commands

            &1Skyblock
            `
        )
        this.setCategoryDescription(
            "Other",
            `
            ${prefix} &3&lClient Version ${getVersion()}
            
            &4/mhelp for commands

            &eOther
            `
        )
    }

// --------------------------------------------------------------------------------
// Combat

    @SwitchProperty({
        name: "&cReach",
        description: "&4Extends your player reach!",
        category: "Combat",
        subcategory: "  "
    })
    reach = false;

    @SwitchProperty({
        name: "&cNo walls",
        description: "&4Lets you hit through walls",
        category: "Combat",
        subcategory: "  "
    })
    nowalls = false;

    @SwitchProperty({
        name: "&cKillaura",
        description: "&4i am become death\n&4destroyer of worlds",
        category: "Combat",
        subcategory: "  "
    })
    killaura = false;

    @SwitchProperty({
        name: "&cKillaura through walls",
        description: "",
        category: "Combat",
        subcategory: "  "
    })
    killaurathroughwalls = false;

    @SwitchProperty({
        name: "&cKillaura autoblock",
        description: "",
        category: "Combat",
        subcategory: "  "
    })
    killauraautoblock = false;

    @SwitchProperty({
        name: "&cKillaura mobs",
        description: "",
        category: "Combat",
        subcategory: "  "
    })
    killauramobs = false;

    @SwitchProperty({
        name: "&cAnti Knockback",
        description: "&4Completly stops knockback",
        category: "Combat",
        subcategory: "  "
    })
    antiknockback = false;

    @SwitchProperty({
        name: "&cAutoblock",
        description: "&4Automatically blocks and clicks your sword",
        category: "Combat",
        subcategory: " "
    })
    autoblockpog = false;

    @SwitchProperty({
        name: "blockhit",
        description: "allows you to hit while blocking",
        category: "Combat",
        subcategory: " "
    })
    blockhit = false;

    @SwitchProperty({
        name: "&cCPS multiplier toggle",
        description: "grand toggle",
        category: "Combat",
        subcategory: ""
    })
    cpsmultiplierer = false;

    @SwitchProperty({
        name: "&cCPS multiplier right",
        description: "&4Doubles every right click you do",
        category: "Combat",
        subcategory: ""
    })
    cpsmultiplierr = false;

    @SwitchProperty({
        name: "&cCPS multiplier left",
        description: "&4Doubles every left click you do",
        category: "Combat",
        subcategory: ""
    })
    cpsmultiplierl = false;

    @SwitchProperty({
        name: "FREEZE",
        description: "freeze",
        category: "Combat",
        subcategory: ""
    })
    freezeme = false;

// --------------------------------------------------------------------------------
// Visual

    @SwitchProperty({
        name: "&3Fakename",
        description: "&9changes your name in chat",
        category: "Visual",
        subcategory: " "
        })
    nickhider = true;
    
    @TextProperty({
        name: "&bFake name you want to show",
        description: "&1also include the color of ur name",
        category: "Visual",
        subcategory: " ",
        placeholder: "nickname here!"
    })
    fakename = `${prefix}`;

    @TextProperty({
        name: "&bFake rank you want to show",
        description: "&1also include the color of the rank",
        category: "Visual",
        subcategory: " ",
        placeholder: "fake rank here!"
    })
    fakerank = `${prefix}`;

    @SwitchProperty({
        name: "&cPlayer ESP",
        description: "&4shows a box around every player\n&4toggle with /esp!",
        category: "Visual",
        subcategory: ""
    })
    PlayerESP = false;

    @SwitchProperty({
        name: "&cItem ESP",
        description: "&4shows a box around every dropped item\n&4toggle with /iesp!",
        category: "Visual",
        subcategory: ""
    })
    ItemESP = false;

    @SwitchProperty({
        name: "&cESP armorstands",
        description: "&4shows a box around EVERY entity\n&4toggle with /aesp!",
        category: "Visual",
        subcategory: ""
    })
    Armorstandesp = false;

    @SwitchProperty({
        name: "&cSkull ESP",
        description: "&4shows a box around every skull!",
        category: "Visual",
        subcategory: ""
    })
    skullesppogger = false;

    @SwitchProperty({
        name: "&cChest ESP",
        description: "&4shows a box around every chest!",
        category: "Visual",
        subcategory: ""
    })
    chestesppog = false;

    @SelectorProperty({
        name: "esp box type",
        description: "type of player esp box",
        category: "Visual",
        subcategory: "  ",
        options: ['outline', 'square'],
    })
    espboxtype = 0;

    @SwitchProperty({
        name: "&cClick gui",
        description: "",
        category: "Visual",
        subcategory: ""
    })
    clickguipogg = false;

    @SwitchProperty({
        name: "&cBlock esp",
        description: "",
        category: "Visual",
        subcategory: ""
    })
    blockesptoggle = false;

    // ESP color
    @ColorProperty({
        name: "&aEsp Color",
        description: "&2The color of ESP",
        category: "Visual",
        subcategory: ""
    })
    Armorstandespcolor = new java.awt.Color(0, 1, 0, 1);

// --------------------------------------------------------------------------------
// Macro

@SwitchProperty({
    name: "&cChest Aura",
    description: "&4Auto opens nearby chests and steals items",
    category: "Macro",
    subcategory: ""
})
chestaurabased = false;

@SwitchProperty({
    name: "&cSkull Aura",
    description: "&4Auto right clicks nearby skulls",
    category: "Macro",
    subcategory: ""
})
skuller = false;

@SwitchProperty({
    name: "&cLever Aura",
    description: "&4Auto right clicks nearby levers!",
    category: "Macro",
    subcategory: ""
})
leverer = false;

@SwitchProperty({
    name: "&cChest Stealer",
    description: "&4Auto takes every item from a chest\n&4included in Chest Aura",
    category: "Macro",
    subcategory: ""
})
cheststealer = false;

@SwitchProperty({
    name: "&cSnowball swap",
    description: "&4Auto throw snowballs on click",
    category: "Macro",
    subcategory: "  "
})
snowballswap = false;

@SwitchProperty({
    name: "&csword swap",
    description: "",
    category: "Macro",
    subcategory: ""
})
swrodswap = false;

@SwitchProperty({
    name: "&cFishing rod swap",
    description: "&4Auto use fishing rod on click\n&4kinda bad because u end up hitting them with rod alot",
    category: "Macro",
    subcategory: "  "
})
fishingrodswap = false;

@SwitchProperty({
    name: "&cScaffold",
    description: "&4Auto bridges for you!",
    category: "Macro",
    subcategory: " "
})
scaffoldi = false;

@SwitchProperty({
    name: "invwalk",
    description: "lets you move while in inventory",
    category: "Macro",
    subcategory: " "
})
invwalk = false;

// --------------------------------------------------------------------------------
// Chat Macro

    @SwitchProperty({
        name: "&aWelcome guild!!!",
        description: "&2Auto send message when guild members come online",
        category: "Chat Macro",
        subcategory: ""
    })
    welcomeguild = true;


    @TextProperty({
        name: "&bwelcome guild message",
        description: '&1set the welcome message\n&1type "player" to say username',
        category: "Chat Macro",
        subcategory: "",
        placeholder: "put message here!"
    })
    welcomeguildmessage = "Good morning";

    @SwitchProperty({
        name: "&aguild bridge bot",
        description: "&2makes guild bridge bot look cleaner",
        category: "Chat Macro",
        subcategory: ""
    })
    guildbridge = true;


    @TextProperty({
        name: "&bguild bridge bots name",
        description: '&1username of bridge bot',
        category: "Chat Macro",
        subcategory: "",
        placeholder: "put bridge bots name here"
    })
    guildbotsname = "";

    @SwitchProperty({
        name: "&cgeneral quickmaths",
        description: "",
        category: "Chat Macro",
        subcategory: "  "
    })
    generalquickmaths = true;

    @SwitchProperty({
        name: "quotes pog",
        description: "",
        category: "Chat Macro",
        subcategory: "  "
    })
    quotespog = true;

    @SwitchProperty({
        name: "&cAuto send quickmaths answer",
        description: "&4Auto send answer to quickmaths",
        category: "Chat Macro",
        subcategory: "  "
    })
    quickmathsautosend = true;

    @SwitchProperty({
        name: "&aguild bot",
        description: "",
        category: "Chat Macro",
        subcategory: ""
    })
    guildbottoggle = true;


    @SwitchProperty({
        name: "&18ball",
        description: "&bGuild chat 8ball message\n&bwhen someone types !8ball 'question'",
        category: "Chat Macro",
        subcategory: " "
    })
    eightballconfig = true;

    @SwitchProperty({
        name: '&5"wrong chat"',
        description: "&abullys people saying wc",
        category: "Chat Macro",
        subcategory: '   '
    })
    wrongchatperson = true;

    @SwitchProperty({
        name: '&5"wrong chat" in guild chat',
        description: "&aMakes the wc quotes in guild chat instead of public / party",
        category: "Chat Macro",
        subcategory: '   '
    })
    wcinguildchat = true;

    @SwitchProperty({
        name: '&5"wrong chat" in party chat',
        description: "&aMakes the wc quotes in party chat instead of public / guild",
        category: "Chat Macro",
        subcategory: '   '
    })
    wcinpartychat = true;

    @SwitchProperty({
        name: '&b"GG"',
        description: "&abullys people saying gg",
        category: "Chat Macro",
        subcategory: '   '
    })
    goodgamerpog = true;

    @SwitchProperty({
        name: '&b"GG" in guild chat',
        description: "&aMakes gg quotes in guild chat instead of public / party",
        category: "Chat Macro",
        subcategory: '   '
    })
    gginguildchat = true;

    @SwitchProperty({
        name: '&b"GG" in party chat',
        description: "&aMakes gg quotes in party chat instead of public / guild",
        category: "Chat Macro",
        subcategory: '   '
    })
    gginpartychat = true;

    @SwitchProperty({
        name: "&aQuickmaths solver!",
        description: "&2Tells you the answer to quickmaths",
        category: "Chat Macro",
        subcategory: "  "
    })
    quickmathssolver = true;

    @SwitchProperty({
        name: "&1Guild maths bot",
        description: "&5Auto send answers to !maths 'question' in guild chat\n&4&lBannable. maybe",
        category: "Chat Macro",
        subcategory: " "
    })
    guildmathsbot = true;

    @SwitchProperty({
        name: "&dAuto Party Transfer",
        description: '&5"I really hope someone doesnt transfer the party to me"',
        category: "Chat Macro",
        subcategory: "    ",
    })
    autoTransfer = true;

    @TextProperty({
        name: "chatspammer island",
        description: 'eg: dhub, hub',
        category: "Chat Macro",
        subcategory: "Chat Spammer",
        placeholder: "island to warp to"
    })
    islandto = "dhub";

    @TextProperty({
        name: "chatspammer message",
        description: 'iLoveRat: party me for 674m',
        category: "Chat Macro",
        subcategory: "Chat Spammer",
        placeholder: "message"
    })
    publicspam = "";

    @TextProperty({
        name: "party chatspammer message",
        description: 'Party > [VIP] Mushroom: join my discord!',
        category: "Chat Macro",
        subcategory: "Chat Spammer",
        placeholder: "message"
    })
    cspammessage = "";

    @SliderProperty({
        name: "chatspam failsafe time",
        description: "time since last lobby switch before warping out",
        category: "Chat Macro",
        subcategory: "Chat Spammer",
        min: 1,
        max: 10
    })
    failsafetim = 5;

    @SelectorProperty({
        name: 'chatspam type',
        description: 'party me and joins partys or partys randoms then spams discord',
        category: 'Chat Macro',
        subcategory: "  ",
        options: ['party people', 'party me'],
    })
    chatspamtype = 0;

// --------------------------------------------------------------------------------
//Fake Ban

@SwitchProperty({
    name: "beamed",
    description: "",
    category: "Visual",
    subcategory: "  "
})
showfakeban = false;

    @SelectorProperty({
        name: '&dFakeban type',
        description: '&4Fakeban reason (shows when you press ban me key)',
        category: 'Visual',
        subcategory: "  ",
        options: ['Perm Cheating ban', 'Username ban',"Security ban", 'Boosting ban','Inappropriate build ban','Temp Cheating ban','Custom'],
    })
    banMethod = 0;

    @SelectorProperty({
        name: '&aFakeban time',
        description: '&bBan time',
        category: 'Visual',
        subcategory: "  ",
        options: ['7 days', '30 days',"90 days", '180 days','360 days'],
    })
    BanTime = 0;

    @TextProperty({
        name: '&5Custom Fakeban Reason',
        description: '&eBan reason',
        category: 'Visual',
        subcategory: '  ',
        placeholder: 'Empty... :(',
        triggerActionOnInitialization: false,
    })
    Reason = 'Heckering cheter gat bend';

    @TextProperty({
        name: '&eCustom fakeban time',
        description: '&bBan time (only if you select the "custom" option in ban options',
        category: 'Visual',
        subcategory: '  ',
        placeholder: 'Empty... :(',
        triggerActionOnInitialization: false,
    })
    Time = '4d 2h 0m 6s';
    @SwitchProperty({
        name: '&4Custom Fakeban perm',
        description: '&cTurning this on will be perm ban and ignore ban time',
        category: 'Visual',
        subcategory: '  ',
        placeholder: 'Activate',
    })
    Perm = false;
  
    @TextProperty({
        name: '&5Fakeban Reason',
        description: '&eBan reason',
        category: 'Visual',
        subcategory: '  ',
        placeholder: 'Empty... :(',
    })


// ----------------------------------------------------------------------
// Sliders
    @SliderProperty({
        name: "&4Zombies gun macro speed",
        description: "&4(Speed of gun macro send in milliseconds)",
        category: "Sliders",
        subcategory: "   ",
        min: 10,
        max: 1000
    })
    Zombiesgunmacrospeed = 500;

    @SliderProperty({
        name: "&4hilarity speed",
        description: "&cplease i want to see more",
        category: "Sliders",
        subcategory: "",
        min: 1,
        max: 5000
    })
    hilarityspeed = 1000;


    @SliderProperty({
        name: "&cChest Aura reach",
        description: "&4Reach distance for chest aura",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 6
    })
    auraReach = 5;

    @SliderProperty({
        name: "&cSkull Aura reach",
        description: "&4Reach distance for skull aura",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 6
    })
    skullreach = 5;

    @SliderProperty({
        name: "&cLever Aura reach",
        description: "&4Reach distance for lever aura",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 6
    })
    leverreach = 5;

    @SliderProperty({
        name: "&4right click auto Clicker Speed",
        description: "&cSpeed of autoclicker\n&aRun /ct load to change speed",
        category: "Sliders",
        subcategory: "   ",
        min: 1,
        max: 30
    })
    autoclickerspeed = 20;
    
    
    @SliderProperty({
        name: "&4left click auto Clicker Speed",
        description: "&cSpeed of autoclicker\n&aRun /ct load to change speed",
        category: "Sliders",
        subcategory: "   ",
        min: 1,
        max: 30
    })
    leftclickacspeed = 20;

    @SliderProperty({
        name: "&bQuickmaths solver speed",
        description: "&9Speed of auto send in milliseconds",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 10000
    })
    quickmathsautosendcooldown = 50;

    @SliderProperty({
        name: "&4autoterm speed",
        description: "&cSpeed of autoterms in millisecconds",
        category: "Sliders",
        subcategory: "    ",
        min: 100,
        max: 1000
    })
    autotermspeed = 200;


// ----------------------------------------------------------------------
// Skyblock

    @SwitchProperty({
        name: "&3p3 ghostblocks",
        description: "&9makes ghostblocks straight to terms in f7",
        category: "Skyblock",
        subcategory: "  "
        })
        p3termghostblocks = true;

    @SwitchProperty({
            name: "ghostblocks",
            description: "",
            category: "Skyblock",
            subcategory: "  "
        })
    ghostblockstoggle = true;

    @SwitchProperty({
        name: "&3Dungeon Score calc",
        description: "&9shows you the dungeon score",
        category: "Skyblock",
        subcategory: ""
        })
    scorecalc = true;
    
    @SwitchProperty({
        name: "&3shitter warning",
        description: "&9warns you if a shitter joins your group",
        category: "Skyblock",
        subcategory: ""
        })
    shitterwarning = true;

    @SwitchProperty({
        name: "&3auto kick shitters",
        description: "&9automatically kicks shitters from dungeon groups",
        category: "Skyblock",
        subcategory: ""
        })
    kickshitter = false;

    @SwitchProperty({
        name: "&3Dungeon Score calc message",
        description: "&9sends messages on 270 / 300 score",
        category: "Skyblock",
        subcategory: ""
        })
        scorecalcmessage = true;

    @TextProperty({
        name: "&c270 score message",
        description: '&amessage to send on 270 score',
        category: "Skyblock",
        subcategory: " ",
        placeholder: "put text here"
    })
    e270scoremesssage = "lunar client > 269 score";

    @TextProperty({
        name: "&c300 score message",
        description: '&amessage to send on 300 score',
        category: "Skyblock",
        subcategory: " ",
        placeholder: "put text here"
    })
    e300scoremesssage = "lunar client > 269 score";


    @SwitchProperty({
        name: "&3funny score calc",
        description: "&9sends messages on every score",
        category: "Skyblock",
        subcategory: ""
        })
    funnyscorecalc = true;
    
    @SwitchProperty({
        name: "&3autoharp",
        description: "&9automatically does melody harp",
        category: "Skyblock",
        subcategory: ""
        })
    autoharp = true;
    
        @SwitchProperty({
        name: "&cL guy died!",
        description: "&5sends message when someone dies in skyblock dungeons",
        category: "Skyblock",
        subcategory: "      "
    })
    toxicdeath = true;

    @SwitchProperty({
        name: "&3autoterms",
        description: "&9automatically does necron terminals",
        category: "Skyblock",
        subcategory: "  "
        })
    autoterms = true;

    @SwitchProperty({
        name: "&cAuction Sniper",
        description: "&4Snipes items in skyblock",
        category: "Skyblock",
        subcategory: "   "
    })
    ahsniper = false;
    
    @SwitchProperty({
        name: "&cAuction Sniper p2",
        description: "&4Auto Confirms buying items",
        category: "Skyblock",
        subcategory: "   "
    })
    ahsniper2 = false;

    @SwitchProperty({
        name: "&cM6 gyro times for mage",
        description: "&4Timing for mage gyros if your team insta kills teras",
        category: "Skyblock",
        subcategory: "   "
    })
    m6gyros = false;

    @TextProperty({
        name: "&5Self death message",
        description: '&amessage to send when you die',
        category: "Skyblock",
        subcategory: "      ",
        placeholder: "TYPE HERE"
    })
    idiedmessage = "TANKS FAULT! OMFG WHY IS HE NOT NEAR ME WHERES THE HEALER MAN PLEASE MASTIFF WISH AND WHY IS NO ONE CLEARING MY ROOMS FOR ME YOUR ALL THROWING";

    @TextProperty({
        name: "&cDeath message",
        description: '&aput "player" to say the persons name',
        category: "Skyblock",
        subcategory: "      ",
        placeholder: "Toxic Death Message"
    })
    toxicdeathmessage = "OMG LOOK AT THIS NON! player has died! BAD";

// ----------------------------------------------------------------------
// Other

    @SwitchProperty({
        name: "&cS&ep&ca&en&ci&es&ch",
        description: '&d"no hablo español"',
        category: "Other",
        subcategory: " "
        })
    spanish = true;

    @SwitchProperty({
        name: "&ahilarity",
        description: '&d:trol:',
        category: "Other",
        subcategory: " "
        })
    hilarity = true;

    @SwitchProperty({
        name: "&comega hilarity",
        description: '&dnot recomended if you die alot',
        category: "Other",
        subcategory: " "
        })
    omegahilarity = false;

    @SwitchProperty({
        name: "&4large hilarity",
        description: '&dnot recomended if you die in dungeons alot',
        category: "Other",
        subcategory: " "
        })
    largehilarity = false;
    
  @ButtonProperty({
    name: "join the discord!",
    description: "&cJoin this discord!",
    category: "Other",
    subcategory: "",
    placeholder:"join"
})
Reset() {
  java.awt.Desktop.getDesktop().browse(new java.net.URI("https://discord.gg/VJbWusPaAD"));
    ChatLib.command("ct copy "+"https://discord.gg/VJbWusPaAD",true)
}
@ButtonProperty({
    name: "CLICK",
    description: "&cCLICK",
    category: "Other",
    subcategory: "",
    placeholder:"CLICK"
})
Join() {
  ChatLib.command("g leave")
  setTimeout() ; 100
  var delayInMilliseconds = 100;
  setTimeout(function() {
  ChatLib.command("g confirm")
  }, delayInMilliseconds);
  setTimeout() ; 100
  var delayInMilliseconds = 200;
  setTimeout(function() {
  ChatLib.command("g join shady addons")
  }, delayInMilliseconds);
  ChatLib.chat("&eGG you joined the best guild ww!")
}

    @SwitchProperty({
        name: "&aCLICK FOR UPDATES!",
        description: "&2Click for updates!!!",
        category: "Other",
        subcategory: "    "
    })
    ComingSoon = true;

    @SwitchProperty({
        name: "&cMushroom Client on top",
        description: "&4puts mushroom client in tab!",
        category: "Other",
        subcategory: "  "
        })
        mushroomclientontop = true;
    
    
      @SwitchProperty({
        name: "&aMushroom Client logo",
        description: "&btoggle showing the 'mushroom client'\n&blogo in the top right",
        category: "Other",
        subcategory: "  "
        })
        showmushroomlogo = false;
    
      @SwitchProperty({
        name: "&bMushroom Client text",
        description: "&atoggle showing the 'mushroom client'\n&atext in the top right",
        category: "Other",
        subcategory: "  "
        })
        showmushroomtext = true;
    
      @SwitchProperty({
        name: "&9Mushroom shadow",
        description: "&1toggles the mushroom shadow",
        category: "Other",
        subcategory: "  "
        })
        mushroomshadow = false;
    
      @SwitchProperty({
        name: "&2Mushroom Rainbow",
        description: "&5If the [MUSHROOM CLIENT] is rainbow colored",
        category: "Other",
        subcategory: "  "
        })
        Mushroomrainbow = true;
    
      @SwitchProperty({
        name: "&3Discord RPC",
        description: "&9Shows ur playing the best client",
        category: "Other",
        subcategory: "   "
        })
        discordrpc = true;

        @SwitchProperty({
            name: "&3Discord RPC location",
            description: "&9says if your in a skyblock island",
            category: "Other",
            subcategory: "   "
            })
        discordrpcskyblock = true;

        @TextProperty({
            name: "&cDiscord rpc text",
            description: '&aText to show on your discord rpc',
            category: "Other",
            subcategory: "   ",
            placeholder: "put text here"
        })
        discordrpctext = "[insert text here]";

        @TextProperty({
            name: "&cDiscord rpc bottom text",
            description: '&aText to show on your discord rpc line 2',
            category: "Other",
            subcategory: "   ",
            placeholder: "put text here"
        })
        discordrpctext2 = "[insert text here]";


        @SelectorProperty({
            name: '&dDiscord RPC picture',
            description: '&4Picture',
            category: 'Other',
            subcategory: "   ",
            options: ['rat', 'swavy', 'bigrat', 'badlion', 'apex legends', 'valorant', 'minecraft', 'mushroom client', 'visual studio', 'changing'],
            })
        discordrpcpic = 0;

        @SliderProperty({
            name: "killaura keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        killaurakeybindconfig = 1000;

        @SliderProperty({
            name: "nowall keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        nowallkeybindconfig = 1000;

        @SliderProperty({
            name: "autoblock keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        autoblockkeybindconfig = 1000;

        @SliderProperty({
            name: "cpsmultiplier keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        cpsmultikeybindconfig = 1000;

        @SliderProperty({
            name: "antikb keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        antikbkeybindconfig = 1000;

        @SliderProperty({
            name: "freeze keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        freezekeybindconfig = 1000;

        @SliderProperty({
            name: "clickgui keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        clickguieybind = 157;

        @SliderProperty({
            name: "combatx",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        combatxpog = 52;

        @SliderProperty({
            name: "combaty",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        combatypog = 2;

        @SliderProperty({
            name: "visualx",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        visualxpog = 202;

        @SliderProperty({
            name: "visualy",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        visualypog = 2;

        @SliderProperty({
            name: "macrox",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        macroxpog = 352;

        @SliderProperty({
            name: "macroy",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        macroypog = 2;

        @SliderProperty({
            name: "cmacrox",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        cmacroxpog = 502;

        @SliderProperty({
            name: "cmacroy",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        cmacroypog = 2;
        
        @SliderProperty({
            name: "skyblockx",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        skyblockxpog = 652;

        @SliderProperty({
            name: "skyblocky",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        skyblockypog = 2;

        @SliderProperty({
            name: "otherx",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        otherxpog = 802;

        @SliderProperty({
            name: "othery",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        otherypog = 2;

        @SliderProperty({
            name: "button width",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        buttonwidthcon = 120;

        @SliderProperty({
            name: "button height",
            description: '',
            category: "CLICK GUI",
            subcategory: "   ",
            min: 1,
            max: 10000
        })
        buttonheightcon = 40;

        @SelectorProperty({
            name: 'Click gui mode',
            description: 'pog gui',
            category: 'CLICK GUI',
            subcategory: "  ",
            options: ['Oringo', 'Raven'],
        })
        clickguimode = 2;

        @SwitchProperty({
            name: "showcombat",
            description: "shows tab in clickgui",
            category: "CLICK GUI",
            subcategory: ""
        })
        showcombat = true;

        @SwitchProperty({
            name: "showcombat",
            description: "shows tab in clickgui",
            category: "CLICK GUI",
            subcategory: ""
        })
        showcombat = true;

        @SwitchProperty({
            name: "showvisual",
            description: "shows tab in clickgui",
            category: "CLICK GUI",
            subcategory: ""
        })
        showvisual = true;
        
        @SwitchProperty({
            name: "showmacro",
            description: "shows tab in clickgui",
            category: "CLICK GUI",
            subcategory: ""
        })
        showmacro = true;
        
        @SwitchProperty({
            name: "showchatmacro",
            description: "shows tab in clickgui",
            category: "CLICK GUI",
            subcategory: ""
        })
        showchatmacro = true;
        
        @SwitchProperty({
            name: "showskyblock",
            description: "shows tab in clickgui",
            category: "CLICK GUI",
            subcategory: ""
        })
        showskyblock = true;

        @SwitchProperty({
            name: "showother",
            description: "shows tab in clickgui",
            category: "CLICK GUI",
            subcategory: ""
        })
        showother = true;
}

// mushroom client was originally a chat macro mod for my friends!

/*
    @SwitchProperty({
        name: "&cQuote yeeter",
        description: "&5Rest in cum ENDER_YEETER",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfuyeeter = true;

    @SwitchProperty({
        name: "&2Quote ema",
        description: "&aL ema",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfuema = true;

    @SwitchProperty({
        name: "&bQuote chomp",
        description: "&eL chomp",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfuchomp = true;


    @SwitchProperty({
        name: "&9Quote twiftan",
        description: "&1L twift",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfutwiftan = true;

    @SwitchProperty({
        name: "&eQuote luceeyum",
        description: "&6L lucee",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfuluceeyum = true;

    @SwitchProperty({
        name: "&5Quote Lord_Terror23",
        description: "&9L terror",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    lordterrormessage = true;
*/

export default new Config()