var Lang = function () {};

var languages = [];
var commandCodes = {};
var commands = {};


// English language

languages.push('en-US');

var en_play = ["play", "song", "music"];
var en_song1 = ["rock"];
var en_song2 = ["piano"];
var en_song3 = ["gospel"];
var en_stop = ["stop"];
var en_cn = ["chinese"];
var en_w = ["west", "left"];
var en_nw = ["north west"];

// spoken command to code
// index is the code
commandCodes['en-US'] = [en_play, en_song1, en_song2, en_song3, en_stop, en_cn];
// flat array for Google Cloud Speech API to increase accuracy of speech recognition
commands['en-US'] = [].concat.apply([], commandCodes['en-US']);

// Polish language

languages.push('cmn-Hant-TW');

var pl_n = ["鋼琴"];
var pl_ne = ["搖滾"];
var pl_e = ["福音"];
var pl_ch = ["中文"];
var pl_s = ["południe", "wstecz", "tył", "dół"];
var pl_sw = ["południowy zachód"];
var pl_w = ["zachód", "lewo"];
var pl_nw = ["północny zachód"];

// spoken command to code
// index is the code
commandCodes['cmn-Hans-CN'] = [pl_n, pl_ne, pl_e, pl_ch, pl_s, pl_sw, pl_w, pl_nw];
// flat array for Google Cloud Speech API to increase accuracy of speech recognition
commands['cmn-Hans-CN'] = [].concat.apply([], commandCodes['cmn-Hans-CN']);

Lang.prototype.getLanguages = function () {
  return languages;
}

Lang.prototype.getcommandCodes = function (languageCode) {
  return commandCodes[languageCode];
}

Lang.prototype.getcommands = function (languageCode) {
  return commands[languageCode];
}

Lang.prototype.commandToCode = function (languageCode, command) {
  var commandCodes = Lang.prototype.getcommandCodes(languageCode);
  for (var i = 0; i < commandCodes.length; i++) {
    for (var j = 0; j < commandCodes[i].length; j++) {
      if (command.includes(commandCodes[i][j])) {
        return i;
      }
    }
  }
  return -1;
}

module.exports = Lang;
