var playlistId = document.getElementById("playlist-id");
var addAudio = document.getElementById("addAudio");

var playlist = [];

if(playlistId.value.charAt(0)=="p"){
    axios.get(`https://api.napster.com/v2.0/playlists/${playlistId.value}/tracks?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm&limit=200`)
    .then(response => {
        let arr = response.data.tracks;
        arr.forEach(element => {
            playlist.push(element.previewURL);
        });
    }).catch((err) => {
        console.log(err)
    });
    function play(){
        var audioElement = document.createElement('audio');
        audioElement.addEventListener("ended", playAudio);
        var i = 0;
        playAudio();
        function playAudio() {
            var entry = playlist[i++];       
            if (i >= playlist.length) i = 0; 
            audioElement.setAttribute("controls","");
            audioElement.src = entry;
            addAudio.appendChild(audioElement);
            audioElement.load();             
            audioElement.play();           
        }  
    }
}
