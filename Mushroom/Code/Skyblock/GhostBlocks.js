import {BP, noghostblock} from "../Utils";
import Config from "../../Config/Config"
const ghostBlockBind = new KeyBind("Ghost Block", Keyboard.KEY_NONE, "Mushroom");
const belowbind = new KeyBind("Ghost Block Below", Keyboard.KEY_NONE, "Mushroom");
let inF7 = false;

register("step", () => {
    if (ghostBlockBind.isKeyDown()) {
        let lookingAt = Player.lookingAt(); 
        if (lookingAt.getClass() === Block) {
            if (!noghostblock.includes(lookingAt.type.getRegistryName())) {
            World.getWorld().func_175698_g(new BP(lookingAt.getX(), lookingAt.getY(), lookingAt.getZ()));
            }             // ^ setBlockToAir function
        }
    }
})
register("step", () => {
    if (belowbind.isKeyDown()) {
        World.getWorld().func_175698_g(new BP(Player.getX(), Player.getY()-1, Player.getZ()));
        World.getWorld().func_175698_g(new BP(Player.getX(), Player.getY(), Player.getZ()));
    }
})

// f7 p3 ghost blocks

register("step", () => { // auto
    if (!Config.p3termghostblocks) return;
    let scoreboardInfoData = Scoreboard.getLines()
    let scoreboardInfo = scoreboardInfoData.join()
    if (scoreboardInfo.includes("(F7)")) { //making sure it's in floor 7
        World.getWorld().func_175698_g(new BP(91, 165, 39));
        World.getWorld().func_175698_g(new BP(91, 166, 39));
        World.getWorld().func_175698_g(new BP(91, 167, 39));
        World.getWorld().func_175698_g(new BP(91, 165, 40));
        World.getWorld().func_175698_g(new BP(91, 166, 40));
        World.getWorld().func_175698_g(new BP(91, 167, 40));
        World.getWorld().func_175698_g(new BP(91, 165, 41));
        World.getWorld().func_175698_g(new BP(91, 166, 41));
        World.getWorld().func_175698_g(new BP(91, 167, 41));
        World.getWorld().func_175698_g(new BP(92, 165, 39));
        World.getWorld().func_175698_g(new BP(92, 166, 39));
        World.getWorld().func_175698_g(new BP(92, 167, 39));
        World.getWorld().func_175698_g(new BP(92, 165, 40));
        World.getWorld().func_175698_g(new BP(92, 166, 40));
        World.getWorld().func_175698_g(new BP(92, 167, 40));
        World.getWorld().func_175698_g(new BP(92, 165, 41));
        World.getWorld().func_175698_g(new BP(92, 166, 41));
        World.getWorld().func_175698_g(new BP(92, 167, 41));
        World.getWorld().func_175698_g(new BP(93, 165, 39));
        World.getWorld().func_175698_g(new BP(93, 166, 39));
        World.getWorld().func_175698_g(new BP(93, 167, 39));
        World.getWorld().func_175698_g(new BP(93, 165, 40));
        World.getWorld().func_175698_g(new BP(93, 166, 40));
        World.getWorld().func_175698_g(new BP(93, 167, 40));
        World.getWorld().func_175698_g(new BP(93, 165, 41));
        World.getWorld().func_175698_g(new BP(93, 166, 41));
        World.getWorld().func_175698_g(new BP(93, 167, 41));
        World.getWorld().func_175698_g(new BP(94, 165, 39));
        World.getWorld().func_175698_g(new BP(94, 166, 39));
        World.getWorld().func_175698_g(new BP(94, 167, 39));
        World.getWorld().func_175698_g(new BP(94, 165, 40));
        World.getWorld().func_175698_g(new BP(94, 166, 40));
        World.getWorld().func_175698_g(new BP(94, 167, 40));
        World.getWorld().func_175698_g(new BP(94, 165, 41));
        World.getWorld().func_175698_g(new BP(94, 166, 41));
        World.getWorld().func_175698_g(new BP(94, 167, 41));
        World.getWorld().func_175698_g(new BP(95, 165, 39));
        World.getWorld().func_175698_g(new BP(95, 166, 39));
        World.getWorld().func_175698_g(new BP(95, 167, 39));
        World.getWorld().func_175698_g(new BP(95, 165, 40));
        World.getWorld().func_175698_g(new BP(95, 166, 40));
        World.getWorld().func_175698_g(new BP(95, 167, 40));
        World.getWorld().func_175698_g(new BP(95, 165, 41));
        World.getWorld().func_175698_g(new BP(95, 166, 41));
        World.getWorld().func_175698_g(new BP(95, 167, 41));
    }
})

// yes i know u can make 1 const with all the coords
// fuck space and optimization tho

/*
register("step", () => {
    coords.forEach(coord => {
        World.getWorld().func_175698_g(new BP(coord[0], coord[1], coord[2]));
    })
})
*/ // better code ^^^