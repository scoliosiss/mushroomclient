import Config from "../../Config/Config"
import {prefix, mc, Vec3, EnumFacing} from "../Utils";

const killaurakey = new KeyBind("Chest aura", Keyboard.KEY_NONE, "Mushroom");
// no worky plz fix
const killauraer = () => {
    new Thread(() => {
        if (Client.currentGui.get() == null) {
            for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) {
                for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) {
                    for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) {
                        let position = World.getAllEntitiesOfType(Player)
                        if (mc.field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - mc.field_71439_g.func_70047_e(), position.func_177952_p()) < 3) {
                                mc.field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), mc.field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(mc.field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                        }           
                    }
                }
            }
        }
    }).start()
}

register("tick", () => {
    if (killaurakey.isPressed()) {
        ChatLib.chat(`${
            (Config.killaura = !Config.killaura) 
            ? prefix + " >" + "&r&a Killaura" 
            : prefix + " >" + "&r&c Killaura"
        }`
        );
    }
});

register("command", () => {
    ChatLib.chat(`${
        (Config.killaura = !Config.killaura) 
        ? prefix + " >" + "&r&a Killaura" 
        : prefix + " >" + "&r&c Killaura"
    }`
    );
}).setName("ka")

register("step", () => {
    if (Config.killaura) {
        killauraer();
    }
}).setFps(12)