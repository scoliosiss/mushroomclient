import Config from "../../Config/Config"
import {prefix} from "../Utils"
const mathReg = /^[0-9()*^+-/]*$/

  // --------------------------------------------------------------------------
  // Guild maths bot
  register("chat", (chat, person, question) => {
    question = question.replace(/x/gi, "*");
    if (mathReg.test(question)) {
      if (!Config.quickmathssolver) return;
      ChatLib.chat(prefix + " &a&lThe answer is: &c" + eval(question));
      if (!Config.quickmathsautosend) return;
      setTimeout() ; 1
      var delayInMilliseconds = Config.quickmathsautosendcooldown;
      setTimeout(function() {
        ChatLib.say("/" + chat + " chat " + eval(question));
      }, delayInMilliseconds);
    }
}).setChatCriteria("${chat} > ${person}: !maths ${question}")

  // --------------------------------------------------------------------------
  // Quickmaths solver
    register("chat", (question) => {
      question = question.replace(/x/gi, "*");
        if (mathReg.test(question)) {
          if (!Config.quickmathssolver) return;
          ChatLib.chat(prefix + " &a&lThe answer is: &c" + eval(question));
          if (!Config.quickmathsautosend) return;
          setTimeout() ; 1
          var delayInMilliseconds = Config.quickmathsautosendcooldown;
          setTimeout(function() {
            ChatLib.say(eval(question));
          }, delayInMilliseconds);
        }
    }).setChatCriteria("QUICK MATHS! Solve: ${question}")
