/*

import Config from "../../Config/Config"
const S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook")
let doneLoadingTerrain

// FROM FORKY!
// FROM FORKY!
// FROM FORKY!
// FROM FORKY!
// FROM FORKY!
// From Oringo https://discord.com/invite/hypixeI
function noRotate(packet, event) {
    if (packet instanceof S08PacketPlayerPosLook) {
        if (Player.getPlayer() != null && packet.func_148930_g() != 0.0) {
            cancel(event)
            d0 = packet.func_148932_c()
            d1 = packet.func_148928_d()
            d2 = packet.func_148933_e()
            f = packet.func_148931_f()
            f1 = packet.func_148930_g()
            if (packet.func_179834_f().contains(S08PacketPlayerPosLook.EnumFlags.X)) d0 += Player.getPlayer().field_70165_t
            else if (!data.features["Combat"]["No Rotate"]["Keep Motion"]) Player.getPlayer().field_70159_w = 0.0
            if (packet.func_179834_f().contains(S08PacketPlayerPosLook.EnumFlags.Y)) d1 += Player.getPlayer().field_70163_u 
            else Player.getPlayer().field_70181_x = 0.0
            if (packet.func_179834_f().contains(S08PacketPlayerPosLook.EnumFlags.Z)) d2 += Player.getPlayer().field_70161_v
            else if (!data.features["Combat"]["No Rotate"]["Keep Motion"]) Player.getPlayer().field_70179_y = 0.0
            if (packet.func_179834_f().contains(S08PacketPlayerPosLook.EnumFlags.X_ROT)) f1 += Player.getPlayer().field_70125_A
            if (packet.func_179834_f().contains(S08PacketPlayerPosLook.EnumFlags.Y_ROT)) f += Player.getPlayer().field_70177_z
            Player.getPlayer().func_70080_a(d0, d1, d2, Player.getPlayer().field_70177_z, Player.getPlayer().field_70125_A)
            Client.sendPacket(new net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook(Player.getPlayer().field_70165_t, Player.getPlayer().func_174813_aQ().field_72338_b, Player.getPlayer().field_70161_v, f, f1, false))
            if (!doneLoadingTerrain) {
                Player.getPlayer().field_70169_q = Player.getPlayer().field_70165_t
                Player.getPlayer().field_70167_r = Player.getPlayer().field_70163_u
                Player.getPlayer().field_70166_s = Player.getPlayer().field_70161_v
                Minecraft.func_147108_a(null)
            } 
        }
        doneLoadingTerrain = true
    } 
    if (packet instanceof net.minecraft.network.play.server.S07PacketRespawn) doneLoadingTerrain = false
}

register("packetReceived", (packet, event) => {
    if (data.features["Combat"]["No Rotate"].toggle) noRotate(packet, event)
})*/