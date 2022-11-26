import Config from "../../Config/Config"
import {prefix, mc, BlockChest, BP, EnumFacing, Vec3, ArrayLists} from "../Utils";

const chestauratoggle = new KeyBind("Chest aura", Keyboard.KEY_NONE, "Mushroom");
const cheststealerkey = new KeyBind("Chest stealer", Keyboard.KEY_NONE, "Mushroom");

let alreadyClicked = new ArrayLists;

register("tick", () => {
    if (Config.chestaurabased) {
    new Thread(() => {
        if (Client.currentGui.get() == null) { // make sure not in gui
            for (let x = Player.getX() - 10; x < Player.getX() + 10; x++) { // get block x
                for (let y = Player.getY() - 10; y < Player.getY() + 10; y++) { // y
                    for (let z = Player.getZ() - 10; z < Player.getZ() + 10; z++) { // z
                        let position = new BP(x, y, z); // get positions in coordinates
                        let block = mc.field_71441_e.func_180495_p(position).func_177230_c(); // get block at position
                        if (!alreadyClicked.contains(position) && mc.field_71439_g.func_70011_f(position.func_177958_n(), position.func_177956_o() - mc.field_71439_g.func_70047_e(), position.func_177952_p()) < Config.auraReach) { /*make sure blocks within reach + not alr clicked*/
                            if (block instanceof BlockChest) { // checks if the block is a chest
                                mc.field_71442_b.func_178890_a(Player.getPlayer(), World.getWorld(), mc.field_71439_g.field_71071_by.func_70448_g(), position, EnumFacing.func_176733_a(mc.field_71439_g.field_70177_z), new Vec3(0.0, 0.0, 0.0)); // if the block is a chest then make player face it and click then rotate back
                                alreadyClicked.add(position); // adds coordinate to arraylist to check if the coords alr clicked
                            }
                        }           
                    }
                }
            }
        }
    }).start()
}
});

// call me dumb theres prob better ways to make it loot the whole chest but this is easiest fr*ck optimization 
const cheststealer = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory() // makes inv into variable
        if (inv.getName().includes("Chest")) { // checks if guis name includes "chest"
            for (let i = 0; i < 27; i++) { // making "i" a variable
                let item = inv.getStackInSlot(i); // makes item into variable
                if (item !== null) { // checks if items an item
                    Thread.sleep(20); // delay to stop you being kicked for "bad client inventory move"
                    inv.click(i, true, "LEFT"); // litterally clicks every possible slot in a 1x1 chest
                }
                if (i == 26) {
                    Client.currentGui.close(); // closes gui when inv is empty
                }
            }
        }
    }).start()
}
// Client.currentGui.close(); // closes gui when inv is empty

register("tick", () => {
    if (cheststealerkey.isPressed()) { // keybind!!!
        ChatLib.chat(`${
            (Config.cheststealer = !Config.cheststealer) 
            ? prefix + "&r&a Chest stealer" 
            : prefix + "&r&c Chest stealer"
        }`
        );
    }
});

register("tick", () => {
    if (Config.cheststealer) {
        cheststealer();
    }
});

register("tick", () => {
    if (chestauratoggle.isPressed()) {
        ChatLib.chat(`${
            (Config.chestaurabased = !Config.chestaurabased) 
            ? prefix + " >" + "&r&a Chest aura" 
            : prefix + " >" + "&r&c Chest aura"
        }`
        );
    }
});



register("tick", () => {
    if (Config.chestaurabased) {
        chestaura();
    }
});
