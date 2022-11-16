import {prefix} from "../Utils";
import Config from "../../Config/Config"

/*
Color Terminal: 27 items, click on all the ones with x color. (done)
Order Terminal: 14 panes in an order, click in order. (done)
Name Terminal: Color but based on the first letter. (done)
Maze Terminal: Start at green, go to red by following white panes. (still a thing?)
Panes Terminal: 15 panes, make em all green. (done)
Melody Terminal: Time clicks with the block at the top
Color Terminal: Turn all panes green (done)
*/

// "click all words begining with 'x' term"
const startingwithterm = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory() // makes inv into variable
        if (inv.getName().includes("What starts with: '")) { // checks what term your in
            let lettertoclick = inv.getName().charAt(19) // charecter in slot with letter
            for (let i = 0; i < 45; i++) { // making i a variable
            let item = inv.getStackInSlot(i); // makes item into variable
            if (item !== null && item.getName().toLowerCase().startsWith(lettertoclick)) { // checks if item starts with right letter
                Thread.sleep(Config.autotermspeed) // delay to stop you being kicked for "bad client inventory move"
                inv.click(i, false, "LEFT"); // clicks items starting with x letter
            }
            }
        }
    }).start()
}


register("step", () => {
    if (Config.autoterms) {
        startingwithterm();
    }
});



// click all red panes term 
const redpanesterm = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory() // makes inv into variable
        if (inv.getName().includes("Correct all the panes!")) { // checks what term your in
            for (let i = 0; i < 45; i++) { // making i a variable
            let item = inv.getStackInSlot(i); // makes item into variable
            if (item !== null && item.getRegistryName().toLowerCase().includes("stained") && item.getDamage() == 14) { // checks if item is red glass
                Thread.sleep(Config.autotermspeed) // delay to stop you being kicked for "bad client inventory move"
                inv.click(i, false, "LEFT"); // clicks items starting with x letter
            }
            }
        }
    }).start()
}

register("step", () => {
    if (Config.autoterms) {
        redpanesterm();
    }
});



// "click all block with 'x' color term"
const colorterm = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory() // makes inv into variable
        if (inv.getName().includes("Select all the")) { // checks what term your in
            for (let i = 0; i < 45; i++) { // making "i" a variable
                let item = inv.getStackInSlot(i); // makes item into variable
                if (item !== null) { // checks if items an item
                let colorname = item.getName();
                if (inv.getName().includes(colorname)) {
                    Thread.sleep(Config.autotermspeed) // delay to stop you being kicked for "bad client inventory move"
                    inv.click(i, false, "LEFT");
                }
                }
            }
        }
    }).start()
}


register("step", () => {
    if (Config.autoterms) {
        colorterm();
    }
});

let itemstacksizeneeded = 1

// click each number in order term
const numberterm = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory() // makes inv into variable
        if (inv.getName().includes("Click in order!")) { // checks what term your in
            for (let i = 0; i < 45; i++) { // making i a variable
            let item = inv.getStackInSlot(i); // makes item into variable
            if (item !== null && item.getRegistryName().toLowerCase().includes("stained")) { // checks if item is stained glass and smaller stack than 15
                if (item.getDamage() == 14) { // checks if item is red glass
                    if (item.getStackSize() == itemstacksizeneeded) { // clicks item with a stack size of 1
                        Thread.sleep(Config.autotermspeed) // delay to stop you being kicked for "bad client inventory move"
                        inv.click(i, false, "LEFT"); // clicks items only meeting these requirements
                    }
                }
                else if (item.getDamage() == 5) {
                    itemstacksizeneeded = (item.getStackSize() + 1)
                }
            }
        }
    }
    }).start()
}

register("chat", (termscompleted) => {
    itemstacksizeneeded = 1
}).setCriteria(Player.getName() + " activated a terminal! ${termscompleted}")

register("step", () => {
    if (Config.autoterms) {
        numberterm();
    }
});


// turn all panes green term
const changepanesgreenterm = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory() // makes inv into variable
        if (inv.getName().includes("Change all to same color!")) { // checks what term your in
            for (let i = 0; i < 45; i++) { // making "i" a variable
                let item = inv.getStackInSlot(i); // makes item into variable
                if (item !== null) { // checks if items an item
                    if (item !== null && item.getRegistryName().toLowerCase().includes("stained")) {
                        if (item.getDamage() !== 15 && item.getDamage() !== 13) {
                            Thread.sleep(Config.autotermspeed) // delay to stop you being kicked for "bad client inventory move"
                            inv.click(i, false, "LEFT");
                        }
                    }
                }
            }
        }
    }).start()
}
// uh so turns out you can make them any color
// but this way is say much easier anyway

register("step", () => {
    if (Config.autoterms) {
        changepanesgreenterm();
    }
});

// melody terminal will come to 3-4 business days (i got bored of coding terminals)
/*
// melody terminal
const melodyterm = () => {
    new Thread(() => {
        let inv = Player.getOpenedInventory() // makes inv into variable
        if (inv.getName().includes("Chest")) { // checks what term your in
            for (let i = 0; i < 45; i++) { // making "i" a variable
                let item = inv.getStackInSlot(i); // makes item into variable
                if (item !== null) { // checks if items an item
                    if (item !== null && item.getRegistryName().toLowerCase().includes("clay")) {
                        if (item.getDamage() !== 15 && item.getDamage() !== 13) {
                            Thread.sleep(Config.autotermspeed) // delay to stop you being kicked for "bad client inventory move"
                            inv.click(i, true, "LEFT");
                        }
                    }
                }
            }
        }
    }).start()
}

register("step", () => {
    if (Config.autoterms) {
        melodyterm();
    }
});
*/