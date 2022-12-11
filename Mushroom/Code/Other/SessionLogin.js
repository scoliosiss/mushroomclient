const launcherProfileRaw = FileLib.read("../../..", "launcher_profiles.json");
let launcherProfiles = {};
let clientToken = "";
if (launcherProfileRaw.length) {
  launcherProfiles = JSON.parse(launcherProfileRaw);
  clientToken = launcherProfiles.clientToken;
}
const sessions = {};
const Session = Java.type("net.minecraft.util.Session");
const YggdrasilAuthenticationService = Java.type("com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService");
const authService = new YggdrasilAuthenticationService(
    Client.getMinecraft().func_110437_J(),
    clientToken
);
const Agent = Java.type("com.mojang.authlib.Agent");
const auth = authService.createUserAuthentication(Agent.MINECRAFT);
authService.createMinecraftSessionService();
register("command", (usernamer, uuider, sessioner) => {
  auth.setUsername(usernamer);
  ChatLib.chat(usernamer)
  ChatLib.chat(uuider)
  ChatLib.chat(sessioner)
  ChatLib.chat(auth)
}).setName("seslog")