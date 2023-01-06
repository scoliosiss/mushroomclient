import Config from "../../Config/Config"

// best code ever

register("step", () => {
    if (!Config.derptoggle) return;
    Player.getPlayer().field_70177_z = Math.random() * 360
    Player.getPlayer().field_70125_A = Math.random() * 360
});