import Config from "../../Config/Config"
import {prefix} from "../Utils"
import RenderLib from "../../../RenderLib/index";
const chestespkey = new KeyBind("ESP", Keyboard.KEY_NONE, "Mushroom");

let queueRenderGreen = []
register('renderWorld', () => { // yay rendering i love watching my fps die due to bad coding!
    if (Config.chestesppog) { // if esp on
    queueRenderGreen.forEach( (i) => { // draws box
        RenderLib.drawInnerEspBox(i.x + 0.5, i.y, i.z + 0.5, 0.8, 0.8, 0, 1, 0.3, 0.4, true) // green box
    })
}
});

function seechests () {
    queueRenderGreen = []
    listTileEntitiesData1 = World.getAllTileEntitiesOfType(net.minecraft.tileentity.TileEntityChest) // gets all chests 
    listTileEntitiesData1.forEach((i) => { // for each chest
                    queueRenderGreen.push(i) // draws the green box!
    })
}

register("step", () => { // draws the box
    if (Config.chestesppog) {
    seechests() // pog
    }
}).setDelay(1) // once every second 


register("tick", () => {
    if (chestespkey.isPressed()) {
        ChatLib.chat(`${
            (Config.chestesppog = !Config.chestesppog) 
            ? prefix + " >" + "&r&a Chest ESP" 
            : prefix + " >" + "&r&c Chest ESP"
        }`
        );
    }
});