import Config from "../../Config/Config"
import {prefix} from "../Utils"
import RenderLib from "../../../RenderLib/index";
const skullespkey = new KeyBind("ESP", Keyboard.KEY_NONE, "Mushroom");

let queueRenderGreen = []
register('renderWorld', () => {
    if (Config.skullesppogger) {
        if (!Config.blockesptoggle) return;
    queueRenderGreen.forEach( (i) => {
        RenderLib.drawInnerEspBox(i.x + 0.5, i.y, i.z + 0.5, 0.5, 0.5, 1, 0, 0, 0.4, true); // Red box
    })
}
});


function seeskulls () {
    queueRenderGreen = []
    listTileEntitiesData1 = World.getAllTileEntitiesOfType(net.minecraft.tileentity.TileEntitySkull)
    listTileEntitiesData1.forEach((i) => {
        queueRenderGreen.push(i)
    })
}

register("step", () => {
    if (Config.skullesppogger) {
        if (!Config.blockesptoggle) return;
        seeskulls()
    }
}).setDelay(1)

register("tick", () => {
    if (skullespkey.isPressed()) {
        ChatLib.chat(`${
            (Config.skullesppogger = !Config.skullesppogger) 
            ? prefix + " >" + "&r&a Chest ESP" 
            : prefix + " >" + "&r&c Chest ESP"
        }`
        );
    }
});