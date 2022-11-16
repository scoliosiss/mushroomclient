import Config from "../../Config/Config"

const exampleImportStep = 1;

let timercountdown = Date.now()
let time = 0
let time2 = 0
let time3 = 0
let timestart = false
let timestart2 = false
let timestart3 = false

register("chat", () => {
  timestart = !timestart
  timestart2 = !timestart2
  timestart3 = !timestart3
  timercountdown = Date.now()
}).setCriteria("[BOSS] Sadan: So you made it all the way here... Now you wish to defy me? Sadan?!")

register("step", () => {
    if (!Config.m6gyros) return;
    if (timestart) {
        time = ((timercountdown - Date.now()) / 1000 + 12.5).toFixed(1)
        if (time == 0) {
            timestart = false
            Client.showTitle("&4GYRO", "", 5, 45, 5);
            World.playSound("random.orb", 1, 1.1);
        }
    }
    if (timestart2) {
        time2 = ((timercountdown - Date.now()) / 1000 + 25).toFixed(1)
        if (time2 == 0) {
            timestart2 = false
            Client.showTitle("&4GYRO", "", 5, 45, 5);
            World.playSound("random.orb", 1, 1.1);
        }
    }
    if (timestart3) {
        time3 = ((timercountdown - Date.now()) / 1000 + 38).toFixed(1)
        if (time3 == 0) {
            timestart3 = false
            Client.showTitle("&4GYRO", "", 5, 45, 5);
            World.playSound("random.orb", 1, 1.1);
        }
    }
});

register("renderOverlay", timmer);
function timmer() {
    if (!Config.m6gyros) return;
    var magegyro1 = new Text("&l" + time, 55, 29).setColor(Renderer.getRainbow(exampleImportStep -75,100));
    var magegyro2 = new Text("&l" + time2, 55, 39).setColor(Renderer.getRainbow(exampleImportStep -75,100));
    var magegyro3 = new Text("&l" + time3, 55, 49).setColor(Renderer.getRainbow(exampleImportStep -75,100));
    if (timestart) {
        magegyro1.draw();
    }
    if (timestart2) {
        magegyro2.draw();
    }
    if (timestart3) {
        magegyro3.draw();
    }
    if (time === -0.1) {
        timestart = false
    }
    if (time2 === -0.1) {
        timestart2 = false
    }
    if (time3 === -0.1) {
        timestart3 = false
    }
}


/*
register("renderOverlay", timmer2);
function timmer2() {
    if (now) {
        var nowmessage = new Text("&lNOW", 55, 29).setColor(Renderer.getRainbow(exampleImportStep -100,1));
        nowmessage.draw();
        setTimeout() ; 2000
        setTimeout(function() { 
            now = false
        }, 2000);
    } 
    if (now2) {
        var nowmessage2 = new Text("&lNOW", 55, 39).setColor(Renderer.getRainbow(exampleImportStep -100,1));
        nowmessage2.draw();
        setTimeout() ; 2000
        setTimeout(function() { 
            now2 = false
        }, 2000);
    } 
    if (now3) {
        var nowmessage3 = new Text("&lNOW", 55, 49).setColor(Renderer.getRainbow(exampleImportStep -100,1));
        nowmessage3.draw();
        setTimeout() ; 2000
        setTimeout(function() { 
            now3 = false
        }, 2000);
    } 
}
*/