
var Player = require('player');

// create player instance
var songs = {
  "rock":'https://musicoin.org/ppp/0x8734c4be1f2755664de41bc76dbffbaea6d9a82b',
  "gospel":'https://musicoin.org/ppp/0x83730788de5b08c7c6993f9beca714f340216fcf',
  "piano": 'https://musicoin.org/ppp/0x2205f98f1ac7d9b176158d86bb4f1435a402a506'
}

var msg;
var player = new Player();

  process.on('message', function(m) {
    // Do work  (in this case just up-case the string
    if(m=="stop"){
      player.stop();
    }
    else {
      player.stop();
      player = new Player(songs[m]);
      player.on('error', function(err) {
        console.log("...");
        process.send("playend");
      })
      player.on('playend', function(song) {
        process.send("playend");
      })

      player.play()

    }
    // Pass results back to parent process
  });
