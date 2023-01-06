import Config from "../../Config/Config"

// CODE BY UNCLAIMED BLOOM https://www.chattriggers.com/modules/v/Bloom 
// CODE BY UNCLAIMED BLOOM https://www.chattriggers.com/modules/v/Bloom 
// CODE BY UNCLAIMED BLOOM https://www.chattriggers.com/modules/v/Bloom 
// CODE BY UNCLAIMED BLOOM https://www.chattriggers.com/modules/v/Bloom 
// CODE BY UNCLAIMED BLOOM https://www.chattriggers.com/modules/v/Bloom 
// CODE BY UNCLAIMED BLOOM https://www.chattriggers.com/modules/v/Bloom 


const floorSecrets = {
    "F1": 0.3,
    "F2": 0.4,
    "F3": 0.5,
    "F4": 0.6,
    "F5": 0.7,
    "F6": 0.85
}
const toInt = (str) => {
    if (typeof(str) !== "string") return str
    let match = str.toLowerCase().match(/([\d.]+)(.)/)
    if (!match) return 0
    let [msg, num, type] = match
    num = parseFloat(num)
    if (type == "k") num *= 1000
    if (type == "m") num *= 1000000
    if (type == "b") num *= 1000000000
    return parseInt(num)
}
const removeUnicode = (string) => typeof(string) !== "string" ? "" : string.replace(/[^\u0000-\u007F]/g, "")
const matchAllLines = (regex, list) => list.map(a => a.match(regex)).filter(a => !!a).map(a => a[1])
const getMatchFromLines = (regex, list, type) => {
    for (let i = 0; i < list.length; i++) {
        let match = list[i].match(regex)
        if (!match) continue
        return type == "int" ? parseInt(match[1]) : type == "float" ? parseFloat(match[1]) : match[1]
    }
    return null
}
const milestones = ["?", "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾"]
const convertToSeconds = (timeString) => {
    if (!timeString) return 0
    let split = timeString.replace(/[^\d ]/g, "").split(" ").map(a => parseInt(a)).reverse()
    const t = [1, 60, 3600]
    return split.map((v, i) => v * t[i]).reduce((a, b) => a+b)
}
const getScoreboard = (formatted=false) => {
    if (formatted) return Scoreboard.getLines()
    return Scoreboard.getLines().map(a => ChatLib.removeFormatting(a))
}
const getTabList = (formatted=false) => {
    if (formatted) return TabList.getNames()
    return TabList.getNames().map(a => a.removeFormatting())
}
const EntityZombie = Java.type("net.minecraft.entity.monster.EntityZombie")
const mimicMessages = [
	"mimic dead!",
    "mimic dead",
    "mimic killed!",
    "mimic killed",
	"$skytils-dungeon-score-mimic$",
	"child destroyed!",
	"mimic obliterated!",
	"mimic exorcised!",
	"mimic destroyed!",
	"mimic annhilated!",
    "breefing killed",
    "breefing dead"
]

const classes = {
    "M": "Mage",
    "B": "Berserk",
    "A": "Archer",
    "H": "Healer",
    "T": "Tank"
}

export default new class Dungeon {
    constructor() {
        this.isPaul = false
        this.reset()

        register("tick", (ticks) => {
            if (ticks%10) return
            let start = new Date().getTime()
            let scoreboard = getScoreboard(false).map(a => removeUnicode(ChatLib.removeFormatting(a)))
            let tabList = getTabList(false).map(a => a.replace("[YOUTUBE] ", ""))
            if (!tabList) return
            
            this.inDungeon = scoreboard.some(a => a.match(/  The Catacombs.+/)) || getTabList(false).some(a => a.match(/Dungeon: \w+/))
            if (!this.inDungeon) return
            // tabList.map(a => ChatLib.chat(a))

            this.time = getMatchFromLines(/Time Elapsed: (.+)/, scoreboard)
            if (this.time) {
                this.seconds = convertToSeconds(this.time)
                this.runStarted = this.runStarted ? this.runStarted : new Date().getTime()
            }
            this.floor = getMatchFromLines(/  The Catacombs \((.{1,2})\)/, scoreboard)
            this.floorNumber = this.floor ? parseInt(this.floor.replace(/[a-zA-Z]/g, "")) : null
            this.dungeonType = this.floor?.startsWith("M") ? "Master Mode" : "The Catacombs"
            this.percentCleared = getMatchFromLines(/Cleared: (\d+)%.+\)/, scoreboard, "int")
            this.partySize = getMatchFromLines(/         Party \((\d+)\)/, tabList, "int")
            this.secretsFound = getMatchFromLines(/ Secrets Found: (\d+)$/, tabList, "int")
            this.secretsPercent = getMatchFromLines(/ Secrets Found: ([\d.]+)%/, tabList, "float")
            this.crypts = getMatchFromLines(/ Crypts: (\d+)/, tabList, "int")
            this.openedRooms = getMatchFromLines(/ Opened Rooms: (\d+)/, tabList, "int")
            this.completedRooms = getMatchFromLines(/ Completed Rooms: (\d+)/, tabList, "int")
            this.deaths = getMatchFromLines(/Deaths: \((\d+)\)/, tabList, "int")
            this.discoveries = getMatchFromLines(/Discoveries: \((\d+)\)/, tabList, "int")
            this.healingDone = toInt(getMatchFromLines(/ Healing Done: (.+)❤/, tabList))
            this.damageDealt = toInt(getMatchFromLines(/ Damage Dealt: (.+)❤/, tabList))
            this.milestone = milestones.indexOf(getMatchFromLines(/ Milestone: .(.)/, tabList))
            this.party = matchAllLines(/^(\w+) [♲ ]*\(.+\)/, tabList)
            this.puzzles = matchAllLines(/ (.+): \[[✦|✔|✖].+/, tabList)
            this.completedPuzzles = tabList.filter(a => a.includes("[✔]")).length
            this.incompletePuzzles = this.puzzles.length - this.completedPuzzles
            this.totalSecrets = Math.floor(100/this.secretsPercent * this.secretsFound + 0.5) || 0
            this.secretsRemaining = this.totalSecrets - this.secretsFound
            this.totalRooms = Math.floor(100 / this.percentCleared * this.completedRooms + 0.4) || 36
            this.secretsPercentNeeded = Object.keys(floorSecrets).includes(this.floor) ? floorSecrets[this.floor] : 1
            this.deadPlayers = this.runEnded ? [] : matchAllLines(/^(\w+) [♲ ]*\(DEAD\)/, tabList)
            
            if (!Object.keys(this.classes).length) {
                let c = scoreboard.map(a => a.match(/\[(\w)\] (.+) .+/)).filter(a => !!a).map(a => a.slice(1).reverse())
                this.classes = c.map(a => Object.keys(classes).includes(a[1]) ? [a[0], classes[a[1]]] : a).reduce((a, b) => { a[b[0]] = b[1]; return a }, {})
            }
            else {
                let t = tabList.slice(0, 20).map(a => a.match(/(\w+) \((\w+) \w+\)/)).filter(a => !!a).map(a => a.slice(1, 3))
                t.map(a => this.classes[a[0]] = a[1])
            }

            this.secretsForMax = Math.ceil(this.totalSecrets * this.secretsPercentNeeded)
            this.minSecrets = Math.ceil(this.secretsForMax*((40 - (this.isPaul ? 10 : 0) - (this.crypts > 5 ? 5 : this.crypts) + (this.deathPenalty))/40))
            // Change the completed rooms so that the score calc is accurate when blood isn't done
            this.adjustedCompleted = this.completedRooms + (this.bloodOpen && !this.bloodDone ? 1 : 0) + (!this.bossEntry ? 1 : 0)

            this.deathPenalty = this.deaths*-2 + (this.firstDeathSpirit && this.deaths > 0 ? 1 : 0)
            this.skillScore = Math.floor(20 + (80*((this.adjustedCompleted)/this.totalRooms)) - 10*this.incompletePuzzles + this.deathPenalty)
            if (this.skillScore < 20) this.skillScore = 20
            this.secretsScore = 40*((this.secretsPercent/100)/(this.secretsPercentNeeded))
            if (this.secretsScore > 40) this.secretsScore = 40
            this.exploreScore = Math.floor(60*(this.adjustedCompleted/this.totalRooms) + this.secretsScore)
            if (!this.time) this.exploreScore = 0
            this.bonusScore = (this.crypts > 5 ? 5 : this.crypts) + (this.mimicKilled ? 2 : 0)
            this.speedScore = 100
            if (this.skillScore > 100) this.skillScore = 100
            if (this.exploreScore > 100) this.exploreScore = 100
            this.score = this.skillScore + this.exploreScore + this.speedScore + this.bonusScore
        })


        register("entityDeath", (entity) => {
            let e = entity.getEntity()
            if (!this.inDungeon || ![6, 7].includes(this.floorNumber) || this.mimicKilled || !(e instanceof EntityZombie)) return
            if (!e.func_70631_g_() || e.func_82169_q(0) || e.func_82169_q(1) || e.func_82169_q(2) || e.func_82169_q(3)) return
            this.mimicKilled = true
        })

        register("chat", (p, message, e) => {
            if (mimicMessages.some(a => a == message.toLowerCase())) this.mimicKilled = true
        }).setCriteria("Party > ${p}: ${message}")

        register("renderOverlay", () => {
            let scoreboardLines = Scoreboard.getLines().map(line => line.getName().removeFormatting().toLowerCase());
            scoreboardLines.forEach(line => {
                if (line.includes("cata")) {
                    if (Config.scorecalc) {
            Renderer.drawString(
                `
                &eScore: &a&l${this.score}
                `, 150, 5
            )
                }
            }
            })
        })

        register("worldUnload", () => this.reset())
    }
    reset() {
        this.time = null
        this.seconds = null
        this.floor = null
        this.floorNumber = null
        this.dungeonType = null
        
        this.partySize = 0
        this.party = []
        this.deadPlayers = []
        this.classes = {}

        this.playerIcons = {} // {"icon-0": player, ...}
        this.icons = {} // {"icon-0": {"x": 0, "y": 0}, ...}

        this.puzzles = []
        this.completedPuzzles = 0
        this.incompletePuzzles = 0

        this.crypts = 0
        this.deaths = 0
        this.firstDeathSpirit = false
        this.discoveries = 0
        this.openedWitherDoors = 0

        this.damageDealt = 0
        this.healingDone = 0
        this.milestone = null

        this.openedRooms = 0
        this.completedRooms = 0
        this.adjustedCompleted = 0

        this.secretsFound = 0
        this.totalSecrets = 0
        this.secretsPercent = 0
        this.secretsPercentNeeded = null
        this.secretsForMax = 0
        this.secretsRemaining = 0
        this.mimicKilled = false

        this.totalRooms = 0
        this.percentCleared = 0
        this.bloodDone = false
        this.bloodOpen = false
        this.mapBloodIndex = 0

        // Hotbar map stuff
        this.checkedRoomSize = false
        this.mapCorner = null // Corner of the map
        this.mapTop = null // Top most pixel on the map
        this.mapLeft = null // Left most pixel on the map
        this.mapRoomSize = 16 // Room Width
        this.mapGapSize = 20 // Room + Door

        this.score = 0
        this.exploreScore = 0
        this.skillScore = 0
        this.speedScore = 0
        this.bonusScore = 0
        this.secretsScore = 0
        this.deathPenalty = 0

        // Timestamps, null by default
        this.runStarted = null
        this.bloodOpened = null
        this.watcherCleared = null
        this.bossEntry = null
        this.runEnded = null
    }
}


