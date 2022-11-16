import {prefix} from "../Utils"
import Config from "../../Config/Config"

const reach = new KeyBind("Reach", Keyboard.KEY_NONE, "Mushroom");

register("tick", () => {
    if (reach.isPressed()) {
        ChatLib.chat(`${
            (Config.reach = !Config.reach) 
            ? prefix + " >" + "&r&a Reach" 
            : prefix + " >" + "&r&c Reach"
        }`
        );
    }
});

// lol this code is java
const Reach = () => {	        	
    Player.getEntityAttribute(Player.REACH_DISTANCE).applyModifier(new AttributeModifier(Player.func_110124_au(), 10, 1));
}

register("tick", () => {
    if (Config.reach) {
    Reach()
    }
});