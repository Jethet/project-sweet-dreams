var playlistId = document.getElementById("playlist-id");
console.log(typeof playlistId.value);
function play(){
    if(playlistId.value.charAt(0)=="p"){
        console.log("something");
    }
}