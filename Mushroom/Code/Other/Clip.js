import {prefix, mc, positionset} from "../Utils"
import Config from "../../Config/Config"
const vclipkey = new KeyBind("V-Clip", Keyboard.KEY_NONE, "Mushroom");
const hclipkey = new KeyBind("H-Clip", Keyboard.KEY_NONE, "Mushroom");
const looktp = new KeyBind("Look TP", Keyboard.KEY_NONE, "Mushroom");

// CLIP PATCHED ON HYPIXEL 
// maybe vclip bypass one day! :)
// CODE BY FORKY (stolen without permission like the rest of mushroom client)

function vclip(distance) {
    if (!typeof parseFloat(distance) == "number") return
    Player.getPlayer().func_70107_b(
        Math.floor(Player.getX()) + 0.5,
        Player.getY() + parseFloat(distance),
        Math.floor(Player.getZ()) + 0.5
    )
}

register("tick", () => {
    if (vclipkey.isPressed()) {
        ChatLib.chat(prefix + " >" + "&a V-Clip");
        vclip(Config.vclipdist)
    }
});

register("command", (blocke) => {
    vclip(blocke)
}).setName("vclip")

function hclip(x) {
    if (!typeof parseFloat(x) == "number") {
        ChatLib.chat(prefix + " > Invalid Teleport")
        return;
    }
//    ChatLib.chat("§zFork Private > §gClipping by: §3" + distance + " blocks") keeping the watermark!
    Player.getPlayer().func_70107_b(
        Player.getX() + parseFloat(x),
        Math.floor(Player.getY()) + 0.5,
        Math.floor(Player.getZ()) + 0.5
    )
    ChatLib.chat(prefix + " > H-Clip")
}

register("tick", () => {
    if (hclipkey.isPressed()) {
        hclip(5,0,0)
    }
});

register("command", (tper) => {
    ChatLib.chat(prefix + " >" + "&a H-Clip");
    hclip(tper)
}).setName("hclip")

function tp(x,y,z) {
    if (!typeof parseFloat(x,y,z) == "number") {
        ChatLib.chat(prefix + " > Invalid Teleport")
        return;
    }
//    ChatLib.chat("§zFork Private > §gClipping by: §3" + distance + " blocks")
    Player.getPlayer().func_70107_b(x,y,z)
    return;
}

register("command", (xe,ye,ze) => {
    ChatLib.chat(prefix + " >" + "&a TELEPORT");
    tp(xe,ye,ze)
}).setName("mtp")

register("command", () => {
    ChatLib.chat(prefix + " >" + "&a Click TP");
    tp(Player.lookingAt().getX(), Player.lookingAt().getY() + 2, Player.lookingAt().getZ())
}).setName("tptoblock")

register("packetReceived", () => {
    if (looktp.isPressed()) {
        ChatLib.chat(prefix + " >" + "&a Click TP");
        tp(Player.lookingAt().getX(), Player.lookingAt().getY() + 2, Player.lookingAt().getZ())
        return;
    }
});