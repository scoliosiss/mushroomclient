let hoekYaw
let hoekPitch
const prefix = "§c§lM§f§lu§c§ls§f§lh§c§lr§f§lo§c§lo§f§lo§c§lm §lClient§f§l"
const colors = ["&a","&b","&c","&d","&e","&f","&0","&1","&2","&3","&4","&5","&6","&7","&8","&9"]
const BP = Java.type("net.minecraft.util.BlockPos");
const swaptoslot = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
const C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
const cancelrightclick = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging");
const positionset = Java.type("net.minecraft.network.play.client.Packet11PlayerPosition"); 
const setPosition = Java.type("net.minecraft.entity.player.EntityPlayer.setPosition")
const mc = Client.getMinecraft();
const LeftClick = mc.class.getDeclaredMethod("func_147116_af");
const RightClick = mc.class.getDeclaredMethod("func_147121_ag");
LeftClick.setAccessible(true);
RightClick.setAccessible(true);
const blockbreak = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
const pa = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
const BlockPoss = Java.type("net.minecraft.util.BlockPos");
const BlockAir = Java.type("net.minecraft.block.BlockAir");
const Vec3 = Java.type("net.minecraft.util.Vec3");
const BlockChest = Java.type("net.minecraft.block.BlockChest");
const BlockLever = Java.type("net.minecraft.block.BlockLever");
const BlockSkull = Java.type("net.minecraft.block.BlockSkull");
const ArrayLists = Java.type("java.util.ArrayList");
const noghostblock = ["minecraft:stone_button","minecraft:chest","minecraft:bed","minecraft:trapped_chest","minecraft:lever","minecraft:skull","minecraft:command_block"];
const noscaffoldblock = ["minecraft:air","minecraft:stone_button","minecraft:chest","minecraft:trapped_chest","minecraft:skull"];
const scaffoldblocks = ["Wool", "Stone", "Planks", "Sand", "Sponge"];
const getVersion = () => JSON.parse(FileLib.read("Mushroom", "metadata.json")).version
const getPlayerHead = (playername) => {
    let player = World.getPlayerByName(playername)
    if (!player) return
    return new Image(javax.imageio.ImageIO.read(new java.net.URL(`https://crafatar.com/avatars/${player.getUUID()}`)))
}
//field_73088_d
function radians_to_degrees(radians) {
    var pi = Math.PI;
    return radians * (180/pi);
  }
  function lookAt(x, y, z) {
    let PlayerAngleYaw = Player.getPlayer().field_70177_z
    let AngleYaw
    PlayerAngleYaw %= 360
    let dX = Player.getX() - x + 0.00001
    let dZ = Player.getZ() - z + 0.00001
    let dY = Player.getY() - y + 0.00001
    let dis = Math.sqrt((dX * dX) + (dZ * dZ))
    if(dX < 0.0 && dZ < 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 180
    } else if(dZ < 0.0 && dX > 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 360
    } else if(dZ > 0.0 && dX < 0.0) {
        AngleYaw = radians_to_degrees(Math.atan(dZ/dX)) + 180
    } else if(dZ > 0.0 && dX > 0.0){
        AngleYaw = radians_to_degrees(Math.atan(dZ/dX))
    }
    hoekYaw = AngleYaw - PlayerAngleYaw + 90
    Player.getPlayer().field_70177_z += hoekYaw 
    hoekPitch = radians_to_degrees(Math.atan(dY/dis)) - Player.getPlayer().field_70125_A
    Player.getPlayer().field_70125_A += hoekPitch 
}
function distanceToPlayer(x,y,z) {
    let dX = Player.getX() - x
    let dZ = Player.getZ() - z
    let dY = Player.getY() - y
    let dis = Math.sqrt((dX * dX) + (dZ * dZ))
    let dis2 = Math.sqrt((dis * dis) + (dY * dY))
    return dis2
}

export {prefix, colors, BP, swaptoslot, C08PacketPlayerBlockPlacement, cancelrightclick, positionset, setPosition, mc, LeftClick, RightClick, blockbreak, pa, EnumFacing, BlockPoss, BlockAir, Vec3, BlockChest, BlockLever, BlockSkull, ArrayLists, noghostblock, noscaffoldblock, scaffoldblocks, getVersion, getPlayerHead, radians_to_degrees, lookAt, distanceToPlayer}