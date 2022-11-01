import Config from "../../Config/Config"
import {prefix} from "../Utils"
import Dungeon from "./DungeonScore"

let announced270 = false
let announced300 = false
register("worldLoad", () => {
    announced270 = false
    announced300 = false
})

register("tick", () => {
    if (!announced270 && Dungeon.score >= 270) {
        if (Config.scorecalcmessage) {
        ChatLib.chat(`${prefix} &a270 Score Reached!`)
        ChatLib.command(`pc ${Config.e270scoremesssage}`)
        announced270 = true
        }
    }
    if (!announced300 && Dungeon.score >= 300) {
        if (Config.scorecalcmessage)  {
        ChatLib.chat(`${prefix} &a300 Score Reached!`)
        ChatLib.command(`pc ${Config.e300scoremesssage}`)
        announced300 = true
        }
    }
})

// time for funny!
// vsc replace tool carried
let announced120 = false
let announced121 = false
let announced122 = false
let announced123 = false
let announced124 = false
let announced125 = false
let announced126 = false
let announced127 = false
let announced128 = false
let announced129 = false
let announced130 = false
let announced131 = false
let announced132 = false
let announced133 = false
let announced134 = false
let announced135 = false
let announced136 = false
let announced137 = false
let announced138 = false
let announced139 = false
let announced140 = false
let announced141 = false
let announced142 = false
let announced143 = false
let announced144 = false
let announced145 = false
let announced146 = false
let announced147 = false
let announced148 = false
let announced149 = false
let announced150 = false
let announced151 = false
let announced152 = false
let announced153 = false
let announced154 = false
let announced155 = false
let announced156 = false
let announced157 = false
let announced158 = false
let announced159 = false
let announced160 = false
let announced161 = false
let announced162 = false
let announced163 = false
let announced164 = false
let announced165 = false
let announced166 = false
let announced167 = false
let announced168 = false
let announced169 = false
let announced170 = false
let announced171 = false
let announced172 = false
let announced173 = false
let announced174 = false
let announced175 = false
let announced176 = false
let announced177 = false
let announced178 = false
let announced179 = false
let announced180 = false
let announced181 = false
let announced182 = false
let announced183 = false
let announced184 = false
let announced185 = false
let announced186 = false
let announced187 = false
let announced188 = false
let announced189 = false
let announced190 = false
let announced191 = false
let announced192 = false
let announced193 = false
let announced194 = false
let announced195 = false
let announced196 = false
let announced197 = false
let announced198 = false
let announced199 = false
let announced200 = false
let announced201 = false
let announced202 = false
let announced203 = false
let announced204 = false
let announced205 = false
let announced206 = false
let announced207 = false
let announced208 = false
let announced209 = false
let announced210 = false
let announced211 = false
let announced212 = false
let announced213 = false
let announced214 = false
let announced215 = false
let announced216 = false
let announced217 = false
let announced218 = false
let announced219 = false
let announced220 = false
let announced221 = false
let announced222 = false
let announced223 = false
let announced224 = false
let announced225 = false
let announced226 = false
let announced227 = false
let announced228 = false
let announced229 = false
let announced230 = false
let announced231 = false
let announced232 = false
let announced233 = false
let announced234 = false
let announced235 = false
let announced236 = false
let announced237 = false
let announced238 = false
let announced239 = false
let announced240 = false
let announced241 = false
let announced242 = false
let announced243 = false
let announced244 = false
let announced245 = false
let announced246 = false
let announced247 = false
let announced248 = false
let announced249 = false
let announced250 = false
let announced251 = false
let announced252 = false
let announced253 = false
let announced254 = false
let announced255 = false
let announced256 = false
let announced257 = false
let announced258 = false
let announced259 = false
let announced260 = false
let announced261 = false
let announced262 = false
let announced263 = false
let announced264 = false
let announced265 = false
let announced266 = false
let announced267 = false
let announced268 = false
let announced269 = false
let announced271 = false
let announced272 = false
let announced273 = false
let announced274 = false
let announced275 = false
let announced276 = false
let announced277 = false
let announced278 = false
let announced279 = false
let announced280 = false
let announced281 = false
let announced282 = false
let announced283 = false
let announced284 = false
let announced285 = false
let announced286 = false
let announced287 = false
let announced288 = false
let announced289 = false
let announced290 = false
let announced291 = false
let announced292 = false
let announced293 = false
let announced294 = false
let announced295 = false
let announced296 = false
let announced297 = false
let announced298 = false
let announced299 = false

register("worldLoad", () => {
let announced120 = false
let announced121 = false
let announced122 = false
let announced123 = false
let announced124 = false
let announced125 = false
let announced126 = false
let announced127 = false
let announced128 = false
let announced129 = false
let announced130 = false
let announced131 = false
let announced132 = false
let announced133 = false
let announced134 = false
let announced135 = false
let announced136 = false
let announced137 = false
let announced138 = false
let announced139 = false
let announced140 = false
let announced141 = false
let announced142 = false
let announced143 = false
let announced144 = false
let announced145 = false
let announced146 = false
let announced147 = false
let announced148 = false
let announced149 = false
let announced150 = false
let announced151 = false
let announced152 = false
let announced153 = false
let announced154 = false
let announced155 = false
let announced156 = false
let announced157 = false
let announced158 = false
let announced159 = false
let announced160 = false
let announced161 = false
let announced162 = false
let announced163 = false
let announced164 = false
let announced165 = false
let announced166 = false
let announced167 = false
let announced168 = false
let announced169 = false
let announced170 = false
let announced171 = false
let announced172 = false
let announced173 = false
let announced174 = false
let announced175 = false
let announced176 = false
let announced177 = false
let announced178 = false
let announced179 = false
let announced180 = false
let announced181 = false
let announced182 = false
let announced183 = false
let announced184 = false
let announced185 = false
let announced186 = false
let announced187 = false
let announced188 = false
let announced189 = false
let announced190 = false
let announced191 = false
let announced192 = false
let announced193 = false
let announced194 = false
let announced195 = false
let announced196 = false
let announced197 = false
let announced198 = false
let announced199 = false
let announced200 = false
let announced201 = false
let announced202 = false
let announced203 = false
let announced204 = false
let announced205 = false
let announced206 = false
let announced207 = false
let announced208 = false
let announced209 = false
let announced210 = false
let announced211 = false
let announced212 = false
let announced213 = false
let announced214 = false
let announced215 = false
let announced216 = false
let announced217 = false
let announced218 = false
let announced219 = false
let announced220 = false
let announced221 = false
let announced222 = false
let announced223 = false
let announced224 = false
let announced225 = false
let announced226 = false
let announced227 = false
let announced228 = false
let announced229 = false
let announced230 = false
let announced231 = false
let announced232 = false
let announced233 = false
let announced234 = false
let announced235 = false
let announced236 = false
let announced237 = false
let announced238 = false
let announced239 = false
let announced240 = false
let announced241 = false
let announced242 = false
let announced243 = false
let announced244 = false
let announced245 = false
let announced246 = false
let announced247 = false
let announced248 = false
let announced249 = false
let announced250 = false
let announced251 = false
let announced252 = false
let announced253 = false
let announced254 = false
let announced255 = false
let announced256 = false
let announced257 = false
let announced258 = false
let announced259 = false
let announced260 = false
let announced261 = false
let announced262 = false
let announced263 = false
let announced264 = false
let announced265 = false
let announced266 = false
let announced267 = false
let announced268 = false
let announced269 = false
let announced271 = false
let announced272 = false
let announced273 = false
let announced274 = false
let announced275 = false
let announced276 = false
let announced277 = false
let announced278 = false
let announced279 = false
let announced280 = false
let announced281 = false
let announced282 = false
let announced283 = false
let announced284 = false
let announced285 = false
let announced286 = false
let announced287 = false
let announced288 = false
let announced289 = false
let announced290 = false
let announced291 = false
let announced292 = false
let announced293 = false
let announced294 = false
let announced295 = false
let announced296 = false
let announced297 = false
let announced298 = false
let announced299 = false
})

// yet more spaghetti code!! (i love spaghetti)
register("tick", () => {
    if (!announced120 && Dungeon.score == 120) {
        if (Config.funnyscorecalc) {
        ChatLib.chat(`${prefix} &a120 Score Reached!`)
        ChatLib.command(`pc 120 Score Reached!`)
        announced120 = true
        }
    }
    if (!announced121 && Dungeon.score == 121) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a121 Score Reached!`)
        ChatLib.command(`pc 121 Score Reached!`)
        announced121 = true
        }
    }
    if (!announced122 && Dungeon.score == 122) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a122 Score Reached!`)
        ChatLib.command(`pc 122 Score Reached!`)
        announced122 = true
        }
    }
    if (!announced123 && Dungeon.score == 123) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a123 Score Reached!`)
        ChatLib.command(`pc 123 Score Reached!`)
        announced123 = true
        }
    }
    if (!announced124 && Dungeon.score == 124) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a124 Score Reached!`)
        ChatLib.command(`pc 124 Score Reached!`)
        announced124 = true
        }
    }
    if (!announced125 && Dungeon.score == 125) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a125 Score Reached!`)
        ChatLib.command(`pc 125 Score Reached!`)
        announced125 = true
        }
    }
    if (!announced126 && Dungeon.score == 126) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a126 Score Reached!`)
        ChatLib.command(`pc 126 Score Reached!`)
        announced126 = true
        }
    }
    if (!announced127 && Dungeon.score == 127) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a127 Score Reached!`)
        ChatLib.command(`pc 127 Score Reached!`)
        announced127 = true
        }
    }
    if (!announced128 && Dungeon.score == 128) {
        if (Config.scorecalcmessage)  {
        ChatLib.chat(`${prefix} &a128 Score Reached!`)
        ChatLib.command(`pc 128 Score Reached!`)
        announced128 = true
        }
    }
    if (!announced129 && Dungeon.score == 129) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a129 Score Reached!`)
        ChatLib.command(`pc 129 Score Reached!`)
        announced129 = true
        }
    }
    if (!announced130 && Dungeon.score == 130) {
        if (Config.funnyscorecalc) {
        ChatLib.chat(`${prefix} &a130 Score Reached!`)
        ChatLib.command(`pc 130 Score Reached!`)
        announced130 = true
        }
    }
    if (!announced131 && Dungeon.score == 131) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a131 Score Reached!`)
        ChatLib.command(`pc 131 Score Reached!`)
        announced131 = true
        }
    }
    if (!announced132 && Dungeon.score == 132) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a132 Score Reached!`)
        ChatLib.command(`pc 132 Score Reached!`)
        announced132 = true
        }
    }
    if (!announced133 && Dungeon.score == 133) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a133 Score Reached!`)
        ChatLib.command(`pc 133 Score Reached!`)
        announced133 = true
        }
    }
    if (!announced134 && Dungeon.score == 134) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a134 Score Reached!`)
        ChatLib.command(`pc 134 Score Reached!`)
        announced134 = true
        }
    }
    if (!announced135 && Dungeon.score == 135) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a135 Score Reached!`)
        ChatLib.command(`pc 135 Score Reached!`)
        announced135 = true
        }
    }
    if (!announced136 && Dungeon.score == 136) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a136 Score Reached!`)
        ChatLib.command(`pc 136 Score Reached!`)
        announced136 = true
        }
    }
    if (!announced137 && Dungeon.score == 137) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a137 Score Reached!`)
        ChatLib.command(`pc 137 Score Reached!`)
        announced137 = true
        }
    }
    if (!announced138 && Dungeon.score == 138) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a138 Score Reached!`)
        ChatLib.command(`pc 138 Score Reached!`)
        announced138 = true
        }
    }
    if (!announced139 && Dungeon.score == 139) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a139 Score Reached!`)
        ChatLib.command(`pc 139 Score Reached!`)
        announced139 = true
        }
    }
    if (!announced140 && Dungeon.score == 140) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a140 Score Reached!`)
        ChatLib.command(`pc 140 Score Reached!`)
        announced140 = true
        }
    }
    if (!announced141 && Dungeon.score == 141) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a141 Score Reached!`)
        ChatLib.command(`pc 141 Score Reached!`)
        announced141 = true
        }
    }
    if (!announced142 && Dungeon.score == 142) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a142 Score Reached!`)
        ChatLib.command(`pc 142 Score Reached!`)
        announced142 = true
        }
    }
    if (!announced143 && Dungeon.score == 143) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a143 Score Reached!`)
        ChatLib.command(`pc 143 Score Reached!`)
        announced143 = true
        }
    }
    if (!announced144 && Dungeon.score == 144) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a144 Score Reached!`)
        ChatLib.command(`pc 144 Score Reached!`)
        announced144 = true
        }
    }
    if (!announced145 && Dungeon.score == 145) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a145 Score Reached!`)
        ChatLib.command(`pc 145 Score Reached!`)
        announced145 = true
        }
    }
    if (!announced146 && Dungeon.score == 146) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a146 Score Reached!`)
        ChatLib.command(`pc 146 Score Reached!`)
        announced146 = true
        }
    }
    if (!announced147 && Dungeon.score == 147) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a147 Score Reached!`)
        ChatLib.command(`pc 147 Score Reached!`)
        announced147 = true
        }
    }
    if (!announced148 && Dungeon.score == 148) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a148 Score Reached!`)
        ChatLib.command(`pc 148 Score Reached!`)
        announced148 = true
        }
    }
    if (!announced149 && Dungeon.score == 149) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a149 Score Reached!`)
        ChatLib.command(`pc 149 Score Reached!`)
        announced149 = true
        }
    }
    if (!announced150 && Dungeon.score == 150) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a150 Score Reached!`)
        ChatLib.command(`pc 150 Score Reached!`)
        announced150 = true
        }
    }
    if (!announced151 && Dungeon.score == 151) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a151 Score Reached!`)
        ChatLib.command(`pc 151 Score Reached!`)
        announced151 = true
        }
    }
    if (!announced152 && Dungeon.score == 152) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a152 Score Reached!`)
        ChatLib.command(`pc 152 Score Reached!`)
        announced152 = true
        }
    }
    if (!announced153 && Dungeon.score == 153) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a153 Score Reached!`)
        ChatLib.command(`pc 153 Score Reached!`)
        announced153 = true
        }
    }
    if (!announced154 && Dungeon.score == 154) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a154 Score Reached!`)
        ChatLib.command(`pc 154 Score Reached!`)
        announced154 = true
        }
    }
    if (!announced155 && Dungeon.score == 155) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a155 Score Reached!`)
        ChatLib.command(`pc 155 Score Reached!`)
        announced155 = true
        }
    }
    if (!announced156 && Dungeon.score == 156) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a156 Score Reached!`)
        ChatLib.command(`pc 156 Score Reached!`)
        announced156 = true
        }
    }
    if (!announced157 && Dungeon.score == 157) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a157 Score Reached!`)
        ChatLib.command(`pc 157 Score Reached!`)
        announced157 = true
        }
    }
    if (!announced158 && Dungeon.score == 158) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a158 Score Reached!`)
        ChatLib.command(`pc 158 Score Reached!`)
        announced158 = true
        }
    }
    if (!announced159 && Dungeon.score == 159) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a159 Score Reached!`)
        ChatLib.command(`pc 159 Score Reached!`)
        announced159 = true
        }
    }
    if (!announced160 && Dungeon.score == 160) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a160 Score Reached!`)
        ChatLib.command(`pc 160 Score Reached!`)
        announced160 = true
        }
    }
    if (!announced161 && Dungeon.score == 161) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a161 Score Reached!`)
        ChatLib.command(`pc 161 Score Reached!`)
        announced161 = true
        }
    }
    if (!announced162 && Dungeon.score == 162) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a162 Score Reached!`)
        ChatLib.command(`pc 162 Score Reached!`)
        announced162 = true
        }
    }
    if (!announced163 && Dungeon.score == 163) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a163 Score Reached!`)
        ChatLib.command(`pc 163 Score Reached!`)
        announced163 = true
        }
    }
    if (!announced164 && Dungeon.score == 164) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a164 Score Reached!`)
        ChatLib.command(`pc 164 Score Reached!`)
        announced164 = true
        }
    }
    if (!announced165 && Dungeon.score == 165) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a165 Score Reached!`)
        ChatLib.command(`pc 165 Score Reached!`)
        announced165 = true
        }
    }
    if (!announced166 && Dungeon.score == 166) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a166 Score Reached!`)
        ChatLib.command(`pc 166 Score Reached!`)
        announced166 = true
        }
    }
    if (!announced167 && Dungeon.score == 167) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a167 Score Reached!`)
        ChatLib.command(`pc 167 Score Reached!`)
        announced167 = true
        }
    }
    if (!announced168 && Dungeon.score == 168) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a168 Score Reached!`)
        ChatLib.command(`pc 168 Score Reached!`)
        announced168 = true
        }
    }
    if (!announced169 && Dungeon.score == 169) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a169 Score Reached!`)
        ChatLib.command(`pc 169 Score Reached!`)
        announced169 = true
        }
    }
    if (!announced170 && Dungeon.score == 170) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a170 Score Reached!`)
        ChatLib.command(`pc 170 Score Reached!`)
        announced170 = true
        }
    }
    if (!announced171 && Dungeon.score == 171) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a171 Score Reached!`)
        ChatLib.command(`pc 171 Score Reached!`)
        announced171 = true
        }
    }
    if (!announced172 && Dungeon.score == 172) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a172 Score Reached!`)
        ChatLib.command(`pc 172 Score Reached!`)
        announced172 = true
        }
    }
    if (!announced173 && Dungeon.score == 173) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a173 Score Reached!`)
        ChatLib.command(`pc 173 Score Reached!`)
        announced173 = true
        }
    }
    if (!announced174 && Dungeon.score == 174) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a174 Score Reached!`)
        ChatLib.command(`pc 174 Score Reached!`)
        announced174 = true
        }
    }
    if (!announced175 && Dungeon.score == 175) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a175 Score Reached!`)
        ChatLib.command(`pc 175 Score Reached!`)
        announced175 = true
        }
    }
    if (!announced176 && Dungeon.score == 176) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a176 Score Reached!`)
        ChatLib.command(`pc 176 Score Reached!`)
        announced176 = true
        }
    }
    if (!announced177 && Dungeon.score == 177) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a177 Score Reached!`)
        ChatLib.command(`pc 177 Score Reached!`)
        announced177 = true
        }
    }
    if (!announced178 && Dungeon.score == 178) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a178 Score Reached!`)
        ChatLib.command(`pc 178 Score Reached!`)
        announced178 = true
        }
    }
    if (!announced179 && Dungeon.score == 179) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a179 Score Reached!`)
        ChatLib.command(`pc 179 Score Reached!`)
        announced179 = true
        }
    }
    if (!announced180 && Dungeon.score == 180) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a180 Score Reached!`)
        ChatLib.command(`pc 180 Score Reached!`)
        announced180 = true
        }
    }
    if (!announced181 && Dungeon.score == 181) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a181 Score Reached!`)
        ChatLib.command(`pc 181 Score Reached!`)
        announced181 = true
        }
    }
    if (!announced182 && Dungeon.score == 182) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a182 Score Reached!`)
        ChatLib.command(`pc 182 Score Reached!`)
        announced182 = true
        }
    }
    if (!announced183 && Dungeon.score == 183) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a183 Score Reached!`)
        ChatLib.command(`pc 183 Score Reached!`)
        announced183 = true
        }
    }
    if (!announced184 && Dungeon.score == 184) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a184 Score Reached!`)
        ChatLib.command(`pc 184 Score Reached!`)
        announced184 = true
        }
    }
    if (!announced185 && Dungeon.score == 185) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a185 Score Reached!`)
        ChatLib.command(`pc 185 Score Reached!`)
        announced185 = true
        }
    }
    if (!announced186 && Dungeon.score == 186) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a186 Score Reached!`)
        ChatLib.command(`pc 186 Score Reached!`)
        announced186 = true
        }
    }
    if (!announced187 && Dungeon.score == 187) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a187 Score Reached!`)
        ChatLib.command(`pc 187 Score Reached!`)
        announced187 = true
        }
    }
    if (!announced188 && Dungeon.score == 188) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a188 Score Reached!`)
        ChatLib.command(`pc 188 Score Reached!`)
        announced188 = true
        }
    }
    if (!announced189 && Dungeon.score == 189) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a189 Score Reached!`)
        ChatLib.command(`pc 189 Score Reached!`)
        announced189 = true
        }
    }
    if (!announced190 && Dungeon.score == 190) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a190 Score Reached!`)
        ChatLib.command(`pc 190 Score Reached!`)
        announced190 = true
        }
    }
    if (!announced191 && Dungeon.score == 191) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a191 Score Reached!`)
        ChatLib.command(`pc 191 Score Reached!`)
        announced191 = true
        }
    }
    if (!announced192 && Dungeon.score == 192) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a192 Score Reached!`)
        ChatLib.command(`pc 192 Score Reached!`)
        announced192 = true
        }
    }
    if (!announced193 && Dungeon.score == 193) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a193 Score Reached!`)
        ChatLib.command(`pc 193 Score Reached!`)
        announced193 = true
        }
    }
    if (!announced194 && Dungeon.score == 194) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a194 Score Reached!`)
        ChatLib.command(`pc 194 Score Reached!`)
        announced194 = true
        }
    }
    if (!announced195 && Dungeon.score == 195) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a195 Score Reached!`)
        ChatLib.command(`pc 195 Score Reached!`)
        announced195 = true
        }
    }
    if (!announced196 && Dungeon.score == 196) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a196 Score Reached!`)
        ChatLib.command(`pc 196 Score Reached!`)
        announced196 = true
        }
    }
    if (!announced197 && Dungeon.score == 197) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a197 Score Reached!`)
        ChatLib.command(`pc 197 Score Reached!`)
        announced197 = true
        }
    }
    if (!announced198 && Dungeon.score == 198) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a198 Score Reached!`)
        ChatLib.command(`pc 198 Score Reached!`)
        announced198 = true
        }
    }
    if (!announced199 && Dungeon.score == 199) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a199 Score Reached!`)
        ChatLib.command(`pc 199 Score Reached!`)
        announced199 = true
        }
    }
    if (!announced200 && Dungeon.score == 200) {
        if (Config.funnyscorecalc) {
        ChatLib.chat(`${prefix} &a200 Score Reached!`)
        ChatLib.command(`pc 200 Score Reached!`)
        announced200 = true
        }
    }
    if (!announced201 && Dungeon.score == 201) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a201 Score Reached!`)
        ChatLib.command(`pc 201 Score Reached!`)
        announced201 = true
        }
    }
    if (!announced202 && Dungeon.score == 202) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a202 Score Reached!`)
        ChatLib.command(`pc 202 Score Reached!`)
        announced202 = true
        }
    }
    if (!announced203 && Dungeon.score == 203) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a203 Score Reached!`)
        ChatLib.command(`pc 203 Score Reached!`)
        announced203 = true
        }
    }
    if (!announced204 && Dungeon.score == 204) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a204 Score Reached!`)
        ChatLib.command(`pc 204 Score Reached!`)
        announced204 = true
        }
    }
    if (!announced205 && Dungeon.score == 205) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a205 Score Reached!`)
        ChatLib.command(`pc 205 Score Reached!`)
        announced205 = true
        }
    }
    if (!announced206 && Dungeon.score == 206) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a206 Score Reached!`)
        ChatLib.command(`pc 206 Score Reached!`)
        announced206 = true
        }
    }
    if (!announced207 && Dungeon.score == 207) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a207 Score Reached!`)
        ChatLib.command(`pc 207 Score Reached!`)
        announced207 = true
        }
    }
    if (!announced208 && Dungeon.score == 208) {
        if (Config.scorecalcmessage)  {
        ChatLib.chat(`${prefix} &a208 Score Reached!`)
        ChatLib.command(`pc 208 Score Reached!`)
        announced208 = true
        }
    }
    if (!announced209 && Dungeon.score == 209) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a209 Score Reached!`)
        ChatLib.command(`pc 209 Score Reached!`)
        announced209 = true
        }
    }
    if (!announced210 && Dungeon.score == 210) {
        if (Config.funnyscorecalc) {
        ChatLib.chat(`${prefix} &a210 Score Reached!`)
        ChatLib.command(`pc 210 Score Reached!`)
        announced210 = true
        }
    }
    if (!announced211 && Dungeon.score == 211) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a211 Score Reached!`)
        ChatLib.command(`pc 211 Score Reached!`)
        announced211 = true
        }
    }
    if (!announced212 && Dungeon.score == 212) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a212 Score Reached!`)
        ChatLib.command(`pc 212 Score Reached!`)
        announced212 = true
        }
    }
    if (!announced213 && Dungeon.score == 213) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a213 Score Reached!`)
        ChatLib.command(`pc 213 Score Reached!`)
        announced213 = true
        }
    }
    if (!announced214 && Dungeon.score == 214) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a214 Score Reached!`)
        ChatLib.command(`pc 214 Score Reached!`)
        announced214 = true
        }
    }
    if (!announced215 && Dungeon.score == 215) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a215 Score Reached!`)
        ChatLib.command(`pc 215 Score Reached!`)
        announced215 = true
        }
    }
    if (!announced216 && Dungeon.score == 216) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a216 Score Reached!`)
        ChatLib.command(`pc 216 Score Reached!`)
        announced216 = true
        }
    }
    if (!announced217 && Dungeon.score == 217) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a217 Score Reached!`)
        ChatLib.command(`pc 217 Score Reached!`)
        announced217 = true
        }
    }
    if (!announced218 && Dungeon.score == 218) {
        if (Config.scorecalcmessage)  {
        ChatLib.chat(`${prefix} &a218 Score Reached!`)
        ChatLib.command(`pc 218 Score Reached!`)
        announced218 = true
        }
    }
    if (!announced219 && Dungeon.score == 219) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a219 Score Reached!`)
        ChatLib.command(`pc 219 Score Reached!`)
        announced219 = true
        }
    }
    if (!announced220 && Dungeon.score == 220) {
        if (Config.funnyscorecalc) {
        ChatLib.chat(`${prefix} &a220 Score Reached!`)
        ChatLib.command(`pc 220 Score Reached!`)
        announced220 = true
        }
    }
    if (!announced221 && Dungeon.score == 221) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a221 Score Reached!`)
        ChatLib.command(`pc 221 Score Reached!`)
        announced221 = true
        }
    }
    if (!announced222 && Dungeon.score == 222) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a222 Score Reached!`)
        ChatLib.command(`pc 222 Score Reached!`)
        announced222 = true
        }
    }
    if (!announced223 && Dungeon.score == 223) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a223 Score Reached!`)
        ChatLib.command(`pc 223 Score Reached!`)
        announced223 = true
        }
    }
    if (!announced224 && Dungeon.score == 224) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a224 Score Reached!`)
        ChatLib.command(`pc 224 Score Reached!`)
        announced224 = true
        }
    }
    if (!announced225 && Dungeon.score == 225) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a225 Score Reached!`)
        ChatLib.command(`pc 225 Score Reached!`)
        announced225 = true
        }
    }
    if (!announced226 && Dungeon.score == 226) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a226 Score Reached!`)
        ChatLib.command(`pc 226 Score Reached!`)
        announced226 = true
        }
    }
    if (!announced227 && Dungeon.score == 227) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a227 Score Reached!`)
        ChatLib.command(`pc 227 Score Reached!`)
        announced227 = true
        }
    }
    if (!announced228 && Dungeon.score == 228) {
        if (Config.scorecalcmessage)  {
        ChatLib.chat(`${prefix} &a228 Score Reached!`)
        ChatLib.command(`pc 228 Score Reached!`)
        announced228 = true
        }
    }
    if (!announced229 && Dungeon.score == 229) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a229 Score Reached!`)
        ChatLib.command(`pc 229 Score Reached!`)
        announced229 = true
        }
    }
    if (!announced230 && Dungeon.score == 230) {
        if (Config.funnyscorecalc) {
        ChatLib.chat(`${prefix} &a230 Score Reached!`)
        ChatLib.command(`pc 230 Score Reached!`)
        announced230 = true
        }
    }
    if (!announced231 && Dungeon.score == 231) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a231 Score Reached!`)
        ChatLib.command(`pc 231 Score Reached!`)
        announced231 = true
        }
    }
    if (!announced232 && Dungeon.score == 232) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a232 Score Reached!`)
        ChatLib.command(`pc 232 Score Reached!`)
        announced232 = true
        }
    }
    if (!announced233 && Dungeon.score == 233) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a233 Score Reached!`)
        ChatLib.command(`pc 233 Score Reached!`)
        announced233 = true
        }
    }
    if (!announced234 && Dungeon.score == 234) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a234 Score Reached!`)
        ChatLib.command(`pc 234 Score Reached!`)
        announced234 = true
        }
    }
    if (!announced235 && Dungeon.score == 235) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a235 Score Reached!`)
        ChatLib.command(`pc 235 Score Reached!`)
        announced235 = true
        }
    }
    if (!announced236 && Dungeon.score == 236) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a236 Score Reached!`)
        ChatLib.command(`pc 236 Score Reached!`)
        announced236 = true
        }
    }
    if (!announced237 && Dungeon.score == 237) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a237 Score Reached!`)
        ChatLib.command(`pc 237 Score Reached!`)
        announced237 = true
        }
    }
    if (!announced238 && Dungeon.score == 238) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a238 Score Reached!`)
        ChatLib.command(`pc 238 Score Reached!`)
        announced238 = true
        }
    }
    if (!announced239 && Dungeon.score == 239) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a239 Score Reached!`)
        ChatLib.command(`pc 239 Score Reached!`)
        announced239 = true
        }
    }
    if (!announced240 && Dungeon.score == 240) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a240 Score Reached!`)
        ChatLib.command(`pc 240 Score Reached!`)
        announced240 = true
        }
    }
    if (!announced241 && Dungeon.score == 241) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a241 Score Reached!`)
        ChatLib.command(`pc 241 Score Reached!`)
        announced241 = true
        }
    }
    if (!announced242 && Dungeon.score == 242) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a242 Score Reached!`)
        ChatLib.command(`pc 242 Score Reached!`)
        announced242 = true
        }
    }
    if (!announced243 && Dungeon.score == 243) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a243 Score Reached!`)
        ChatLib.command(`pc 243 Score Reached!`)
        announced243 = true
        }
    }
    if (!announced244 && Dungeon.score == 244) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a244 Score Reached!`)
        ChatLib.command(`pc 244 Score Reached!`)
        announced244 = true
        }
    }
    if (!announced245 && Dungeon.score == 245) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a245 Score Reached!`)
        ChatLib.command(`pc 245 Score Reached!`)
        announced245 = true
        }
    }
    if (!announced246 && Dungeon.score == 246) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a246 Score Reached!`)
        ChatLib.command(`pc 246 Score Reached!`)
        announced246 = true
        }
    }
    if (!announced247 && Dungeon.score == 247) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a247 Score Reached!`)
        ChatLib.command(`pc 247 Score Reached!`)
        announced247 = true
        }
    }
    if (!announced248 && Dungeon.score == 248) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a248 Score Reached!`)
        ChatLib.command(`pc 248 Score Reached!`)
        announced248 = true
        }
    }
    if (!announced249 && Dungeon.score == 249) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a249 Score Reached!`)
        ChatLib.command(`pc 249 Score Reached!`)
        announced249 = true
        }
    }
    if (!announced250 && Dungeon.score == 250) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a250 Score Reached!`)
        ChatLib.command(`pc 250 Score Reached!`)
        announced250 = true
        }
    }
    if (!announced251 && Dungeon.score == 251) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a251 Score Reached!`)
        ChatLib.command(`pc 251 Score Reached!`)
        announced251 = true
        }
    }
    if (!announced252 && Dungeon.score == 252) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a252 Score Reached!`)
        ChatLib.command(`pc 252 Score Reached!`)
        announced252 = true
        }
    }
    if (!announced253 && Dungeon.score == 253) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a253 Score Reached!`)
        ChatLib.command(`pc 253 Score Reached!`)
        announced253 = true
        }
    }
    if (!announced254 && Dungeon.score == 254) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a254 Score Reached!`)
        ChatLib.command(`pc 254 Score Reached!`)
        announced254 = true
        }
    }
    if (!announced255 && Dungeon.score == 255) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a255 Score Reached!`)
        ChatLib.command(`pc 255 Score Reached!`)
        announced255 = true
        }
    }
    if (!announced256 && Dungeon.score == 256) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a256 Score Reached!`)
        ChatLib.command(`pc 256 Score Reached!`)
        announced256 = true
        }
    }
    if (!announced257 && Dungeon.score == 257) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a257 Score Reached!`)
        ChatLib.command(`pc 257 Score Reached!`)
        announced257 = true
        }
    }
    if (!announced258 && Dungeon.score == 258) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a258 Score Reached!`)
        ChatLib.command(`pc 258 Score Reached!`)
        announced258 = true
        }
    }
    if (!announced259 && Dungeon.score == 259) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a259 Score Reached!`)
        ChatLib.command(`pc 259 Score Reached!`)
        announced259 = true
        }
    }
    if (!announced260 && Dungeon.score == 260) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a260 Score Reached!`)
        ChatLib.command(`pc 260 Score Reached!`)
        announced260 = true
        }
    }
    if (!announced261 && Dungeon.score == 261) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a261 Score Reached!`)
        ChatLib.command(`pc 261 Score Reached!`)
        announced261 = true
        }
    }
    if (!announced262 && Dungeon.score == 262) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a262 Score Reached!`)
        ChatLib.command(`pc 262 Score Reached!`)
        announced262 = true
        }
    }
    if (!announced263 && Dungeon.score == 263) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a263 Score Reached!`)
        ChatLib.command(`pc 263 Score Reached!`)
        announced263 = true
        }
    }
    if (!announced264 && Dungeon.score == 264) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a264 Score Reached!`)
        ChatLib.command(`pc 264 Score Reached!`)
        announced264 = true
        }
    }
    if (!announced265 && Dungeon.score == 265) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a265 Score Reached!`)
        ChatLib.command(`pc 265 Score Reached!`)
        announced265 = true
        }
    }
    if (!announced266 && Dungeon.score == 266) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a266 Score Reached!`)
        ChatLib.command(`pc 266 Score Reached!`)
        announced266 = true
        }
    }
    if (!announced267 && Dungeon.score == 267) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a267 Score Reached!`)
        ChatLib.command(`pc 267 Score Reached!`)
        announced267 = true
        }
    }
    if (!announced268 && Dungeon.score == 268) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a268 Score Reached!`)
        ChatLib.command(`pc 268 Score Reached!`)
        announced268 = true
        }
    }
    if (!announced269 && Dungeon.score == 269) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a269 Score Reached!`)
        ChatLib.command(`pc 269 Score Reached!`)
        announced269 = true
        }
    }
    if (!announced270 && Dungeon.score == 270) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a270 Score Reached!`)
        ChatLib.command(`pc 270 Score Reached!`)
        announced270 = true
        }
    }
    if (!announced271 && Dungeon.score == 271) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a271 Score Reached!`)
        ChatLib.command(`pc 271 Score Reached!`)
        announced271 = true
        }
    }
    if (!announced272 && Dungeon.score == 272) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a272 Score Reached!`)
        ChatLib.command(`pc 272 Score Reached!`)
        announced272 = true
        }
    }
    if (!announced273 && Dungeon.score == 273) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a273 Score Reached!`)
        ChatLib.command(`pc 273 Score Reached!`)
        announced273 = true
        }
    }
    if (!announced274 && Dungeon.score == 274) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a274 Score Reached!`)
        ChatLib.command(`pc 274 Score Reached!`)
        announced274 = true
        }
    }
    if (!announced275 && Dungeon.score == 275) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a275 Score Reached!`)
        ChatLib.command(`pc 275 Score Reached!`)
        announced275 = true
        }
    }
    if (!announced276 && Dungeon.score == 276) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a276 Score Reached!`)
        ChatLib.command(`pc 276 Score Reached!`)
        announced276 = true
        }
    }
    if (!announced277 && Dungeon.score == 277) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a277 Score Reached!`)
        ChatLib.command(`pc 277 Score Reached!`)
        announced277 = true
        }
    }
    if (!announced278 && Dungeon.score == 278) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a278 Score Reached!`)
        ChatLib.command(`pc 278 Score Reached!`)
        announced278 = true
        }
    }
    if (!announced279 && Dungeon.score == 279) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a279 Score Reached!`)
        ChatLib.command(`pc 279 Score Reached!`)
        announced279 = true
        }
    }
    if (!announced280 && Dungeon.score == 280) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a280 Score Reached!`)
        ChatLib.command(`pc 280 Score Reached!`)
        announced280 = true
        }
    }
    if (!announced281 && Dungeon.score == 281) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a281 Score Reached!`)
        ChatLib.command(`pc 281 Score Reached!`)
        announced281 = true
        }
    }
    if (!announced282 && Dungeon.score == 282) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a282 Score Reached!`)
        ChatLib.command(`pc 282 Score Reached!`)
        announced282 = true
        }
    }
    if (!announced283 && Dungeon.score == 283) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a283 Score Reached!`)
        ChatLib.command(`pc 283 Score Reached!`)
        announced283 = true
        }
    }
    if (!announced284 && Dungeon.score == 284) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a284 Score Reached!`)
        ChatLib.command(`pc 284 Score Reached!`)
        announced284 = true
        }
    }
    if (!announced285 && Dungeon.score == 285) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a285 Score Reached!`)
        ChatLib.command(`pc 285 Score Reached!`)
        announced285 = true
        }
    }
    if (!announced286 && Dungeon.score == 286) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a286 Score Reached!`)
        ChatLib.command(`pc 286 Score Reached!`)
        announced286 = true
        }
    }
    if (!announced287 && Dungeon.score == 287) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a287 Score Reached!`)
        ChatLib.command(`pc 287 Score Reached!`)
        announced287 = true
        }
    }
    if (!announced288 && Dungeon.score == 288) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a288 Score Reached!`)
        ChatLib.command(`pc 288 Score Reached!`)
        announced288 = true
        }
    }
    if (!announced289 && Dungeon.score == 289) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a289 Score Reached!`)
        ChatLib.command(`pc 289 Score Reached!`)
        announced289 = true
        }
    }
    if (!announced290 && Dungeon.score == 290) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a290 Score Reached!`)
        ChatLib.command(`pc 290 Score Reached!`)
        announced290 = true
        }
    }
    if (!announced291 && Dungeon.score == 291) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a291 Score Reached!`)
        ChatLib.command(`pc 291 Score Reached!`)
        announced291 = true
        }
    }
    if (!announced292 && Dungeon.score == 292) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a292 Score Reached!`)
        ChatLib.command(`pc 292 Score Reached!`)
        announced292 = true
        }
    }
    if (!announced293 && Dungeon.score == 293) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a293 Score Reached!`)
        ChatLib.command(`pc 293 Score Reached!`)
        announced293 = true
        }
    }
    if (!announced294 && Dungeon.score == 294) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a294 Score Reached!`)
        ChatLib.command(`pc 294 Score Reached!`)
        announced294 = true
        }
    }
    if (!announced295 && Dungeon.score == 295) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a295 Score Reached!`)
        ChatLib.command(`pc 295 Score Reached!`)
        announced295 = true
        }
    }
    if (!announced296 && Dungeon.score == 296) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a296 Score Reached!`)
        ChatLib.command(`pc 296 Score Reached!`)
        announced296 = true
        }
    }
    if (!announced297 && Dungeon.score == 297) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a297 Score Reached!`)
        ChatLib.command(`pc 297 Score Reached!`)
        announced297 = true
        }
    }
    if (!announced298 && Dungeon.score == 298) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a298 Score Reached!`)
        ChatLib.command(`pc 298 Score Reached!`)
        announced298 = true
        }
    }
    if (!announced299 && Dungeon.score == 299) {
        if (Config.funnyscorecalc)  {
        ChatLib.chat(`${prefix} &a299 Score Reached!`)
        ChatLib.command(`pc 299 Score Reached!`)
        announced299 = true
        }
    }
})

// most compact code ever!!