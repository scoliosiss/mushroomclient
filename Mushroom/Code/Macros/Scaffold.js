import Config from "../../Config/Config"
import {prefix, mc, swaptoslot, EnumFacing, Vec3, noscaffoldblock, scaffoldblocks, RightClick, lookAt, BP} from "../Utils";

const scaffoldtoggle = new KeyBind("Scaffold", Keyboard.KEY_NONE, "Mushroom");

// one day i will get this working :(
// i suck with packets

/*
function randomIntFromInterval(min, max) { // i dont like functions.
    return Math.floor(Math.random() * (max - min + 1) + min)
}
*/
/*
register("step", () => {
    if (Config.scaffoldi) {
    new Thread(() => {
        if (Client.currentGui.get() == null) {
            let position = new BlockPoss(Player.getX(), Player.getY()-1, Player.getZ());
            let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
            if (!noscaffoldblock.includes(block.getRegistryName())) {
                mc.field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), mc.field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(mc.field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0)); 
            }
        }
    }).start()
}
}).setFps(12)
*/
let placeblock = true
// new scaffold
/*
register("step", () => {
    if (Config.scaffoldi) {
    new Thread(() => {
        if (!placeblock) return;
        lookingatrightnow = Player.getPlayer().field_70177_z
        lookingatpitch = Player.getPlayer().field_70125_A
        currentblockx = Player.getX();
        currentblocky = Player.getY();
        currentblockz = Player.getZ();
        oldpositionx = Player.getLastX()
        oldpositiony = Player.getLastY()-1.5
        oldpositionz = Player.getLastZ()
        let position = new BP(Player.getX(), Player.getY()-1, Player.getZ());
        let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
        if (block.toString().includes("air")) {
            placeblock = false
            lookAt(oldpositionx, oldpositiony, oldpositionz)
            Thread.sleep(20)
            RightClick.invoke(mc)
            Thread.sleep(10)
            Player.getPlayer().field_70177_z = lookingatrightnow
            Player.getPlayer().field_70125_A = lookingatpitch
            placeblock = true
        }
    }).start()
}
})
*/
register("step", () => {
    if (Config.scaffoldi) {
    new Thread(() => {
        lookingatrightnow = Player.getPlayer().field_70177_z
        lookingatpitch = Player.getPlayer().field_70125_A
        Player.getPlayer().field_70177_z = 180
        Player.getPlayer().field_70125_A = 81
    //    for(let l = 72; l < 81; l++) {
            if (Player.lookingAt().getClass() === Block) {
                RightClick.invoke(mc)
                Player.getPlayer().field_70177_z = lookingatrightnow
                Player.getPlayer().field_70125_A = lookingatpitch
            }
    //    }
    }).start()
}
})

register("tick", () => {
    if (scaffoldtoggle.isPressed()) {
        ChatLib.chat(`${
            (Config.scaffoldi = !Config.scaffoldi) 
            ? prefix + " >" + "&r&a Scaffold" 
            : prefix + " >" + "&r&c Scaffold"
        }`
        );
    }
});
