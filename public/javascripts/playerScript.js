var playlistId = document.getElementById("playlist-id");

console.log(playlistId.value);
var playlist =["http://listen.vo.llnwd.net/g3/4/5/4/1/3/1282131454.mp3",
    "http://listen.vo.llnwd.net/g3/2/6/8/1/6/1282561862.mp3",
    "http://listen.vo.llnwd.net/g3/6/2/2/4/8/1396984226.mp3",
    "http://listen.vo.llnwd.net/g2/7/9/1/4/6/896564197.mp3"];

if(playlistId.value.charAt(0)=="p"){
    function play(){
        var audioElement = document.createElement('audio');
        console.log(audioElement);
        audioElement.addEventListener("ended", playAudio);
        var i = 0;
        playAudio();
    function playAudio() {
        var entry = playlist[i++];       // get current entry, increment i
        if (i >= playlist.length) i = 0; // if i=> length, reset
        audioElement.src = entry;  
        audioElement.load();             // cleanup old fun, invoke loading of new
        audioElement.play();             // cue up play
    }   
    }
}
