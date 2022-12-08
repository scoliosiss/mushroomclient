register("command", () => {
    Player.getHeldItem().field_77774_bZ = Player.getHeldItem().getStackSize() * 2
}).setName("dupehand")