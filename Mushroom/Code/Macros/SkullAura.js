import Config from "../../Config/Config"
import {prefix, mc, BlockSkull, BP, EnumFacing, Vec3, ArrayLists} from "../Utils";

const skullauratoggle = new KeyBind("Skull aura", Keyboard.KEY_NONE, "Mushroom");

let alreadyClicked = new ArrayLists;

const skullaura = () => {
    new Thread(() => {
        if (Client.currentGui.get() == null) {
            for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) {
                for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) {
                    for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) {
                        let position = new BP(x, y, z);
                        let block = mc.field_71441_e.func_180495_p(position).func_177230_c();
                        if (!alreadyClicked.contains(position) && mc.field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - mc.field_71439_g.func_70047_e(), position.func_177952_p()) < Config.skullreach) {
                            if (block instanceof BlockSkull) {
                                Thread.sleep(0);
                                mc.field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), mc.field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(mc.field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0));
                                alreadyClicked.add(position);
                            }
                        }           
                    }
                }
            }
        }
    }).start()
}

register("tick", () => {
    if (skullauratoggle.isPressed()) {
        ChatLib.chat(`${
            (Config.skuller = !Config.skuller) 
            ? prefix + " >" + "&r&a Skull aura" 
            : prefix + " >" + "&r&c Skull aura"
        }`
        );
    }
});

register("command", () => {
    ChatLib.chat(`${
        (Config.skuller = !Config.skuller) 
        ? prefix + " >" + "&r&a Skull aura" 
        : prefix + " >" + "&r&c Skull aura"
    }`
    );
}).setName("sa")

register("tick", () => {
    if (Config.skuller) {
        skullaura();
    }
});
