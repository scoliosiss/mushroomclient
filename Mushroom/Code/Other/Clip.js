import {prefix, mc, positionset} from "../Utils"
const vclipkey = new KeyBind("V-Clip", Keyboard.KEY_NONE, "Mushroom");

// not getting working 

register("tick", () => {
    if (vclipkey.isPressed()) {
        ChatLib.chat(prefix + " >" + "&a V-Clip");
        Client.sendPacket(new positionset(Player.getX(), Player.getY()-1, Player.getZ()));
    }
});