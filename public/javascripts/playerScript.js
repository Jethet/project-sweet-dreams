function playAudio(){
    var audioArr = document.querySelectorAll("audio");
    audioArr.forEach(element =>{
        element.play();
    })
}