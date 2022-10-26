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
        const categories = [ "Combat", "Visual", "Macro", "Chat Macro", "Sliders", "Other"];
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
            "Other",
            `
            ${prefix} &d&lClient Version ${getVersion()}
            
            &e/mhelp for commands

            &aOther
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
        name: "&cKillaura",
        description: "&4i am become death\n&4destroyer of worlds",
        category: "Combat",
        subcategory: "  "
    })
    killaura = false;

    @SwitchProperty({
        name: "&cAutoblock",
        description: "&4Automatically blocks and clicks your sword",
        category: "Combat",
        subcategory: " "
    })
    autoblockpog = false;

    @SwitchProperty({
        name: "&cCPS multiplier",
        description: "&4Doubles every click you do",
        category: "Combat",
        subcategory: ""
    })
    cpsmultiplier = false;

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
        name: "&cEntity ESP",
        description: "&4shows a box around every entity\n&4toggle with /esp!",
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
    name: "&cAuction Sniper",
    description: "&4Snipes items in skyblock",
    category: "Macro",
    subcategory: "   "
})
ahsniper = false;

@SwitchProperty({
    name: "&cAuction Sniper p2",
    description: "&4Auto Confirms buying items",
    category: "Macro",
    subcategory: "   "
})
ahsniper2 = false;

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
        description: "&1set the welcome message",
        category: "Chat Macro",
        subcategory: "",
        placeholder: "put message here!"
    })
    welcomeguildmessage = "Good morning";

    @TextProperty({
        name: "&awelcome guild message part 2",
        description: "&2what to be said after persons name",
        category: "Chat Macro",
        subcategory: "",
        placeholder: "put message here!"
    })
    welcomeguildmessage2 = "how are you doing?";

    @SwitchProperty({
        name: "&cAuto send quickmaths answer",
        description: "&4Auto send answer to quickmaths",
        category: "Chat Macro",
        subcategory: "  "
    })
    quickmathsautosend = true;

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


    @SwitchProperty({
        name: "&cL guy died!",
        description: "&5sends message when someone dies in skyblock dungeons",
        category: "Chat Macro",
        subcategory: "      "
    })
    toxicdeath = true;

    @TextProperty({
        name: "&5Self death message",
        description: '&amessage to send when you die',
        category: "Chat Macro",
        subcategory: "      ",
        placeholder: "TYPE HERE"
    })
    idiedmessage = "TANKS FAULT!";

    @TextProperty({
        name: "&cDeath message",
        description: '&aput "player" to say the persons name',
        category: "Chat Macro",
        subcategory: "      ",
        placeholder: "Toxic Death Message"
    })
    toxicdeathmessage = "OMG LOOK AT THIS NON! player has died! BAD";


// --------------------------------------------------------------------------------
//Fake Ban

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
        max: 1000
    })
    autoclickerspeed = 20;
    
    
    @SliderProperty({
        name: "&4left click auto Clicker Speed",
        description: "&cSpeed of autoclicker\n&aRun /ct load to change speed",
        category: "Sliders",
        subcategory: "    ",
        min: 1,
        max: 1000
    })
    leftclickacspeed = 20;

    
  @SliderProperty({
    name: "&cPing",
    description: "&4Set your ping\n&4used for some features to not get u banned",
    category: "Sliders",
    subcategory: "",
    min: 1,
    max: 1000
    })
    yourping = 100;

    
    @SliderProperty({
        name: "&bQuickmaths solver speed",
        description: "&9(Speed of auto send in milliseconds)",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 10000
    })
    quickmathsautosendcooldown = 50;

// ----------------------------------------------------------------------
// Other

    @SwitchProperty({
        name: "&cS&ep&ca&en&ci&es&ch",
        description: '&d"no hablo español"',
        category: "Other",
        subcategory: " "
        })
    spanish = true;
    
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
    ComingSoon = false;

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
        showmushroomlogo = true;
    
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
        mushroomshadow = true;
    
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

        @SwitchProperty({
            name: "&3p3 ghostblocks",
            description: "&9makes ghostblocks straight to p3!\n&9skyblock thing",
            category: "Other",
            subcategory: "    "
            })
            p3termghostblocks = true;

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
