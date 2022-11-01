const maptodraw = () => {
    if (Player.getInventory().getStackInSlot(i).getName().includes("map")) {
    let mapItem = Player.getInventory().getStackInSlot(i)
    return mapItem
    }
}

const getMapData = (mapItem) => {
    if (!mapItem) return null
    return mapItem.getItem().func_77873_a(mapItem.getItemStack(), World.getWorld())
}

const renderMap = (mapData) => {
    Client.getMinecraft().field_71460_t.func_147701_i().func_148250_a(mapData, true)
}


register("renderOverlay", () => {
    let map = maptodraw()
    let mapData = getMapData(map)
    Renderer.retainTransforms(true)
    Renderer.translate(400, 30)
    Renderer.scale(2, 2)
    renderMap(mapData)

    Renderer.drawRect(Renderer.RED, 0, 0, 1, 1)
    Renderer.drawRect(Renderer.RED, 127, 0, 1, 1)
    Renderer.drawRect(Renderer.RED, 0, 127, 1, 1)
    Renderer.drawRect(Renderer.RED, 127, 127, 1, 1)
})