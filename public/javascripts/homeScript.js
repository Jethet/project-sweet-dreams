// const image = document.querySelector("#myImage");
// const urlString = "";
// image.addEventListener("click",function(e){
//     e.preventDefault();
//     axios.get(`https://api.napster.com/v2.0/playlists/pp.181896946/tracks?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm&limit=200`)
//     .then((apiResponse)=>{
//         const track = apiResponse.data.tracks;
//         let htmlString = '';
//         track.forEach((someTrack) =>{
//             htmlString +=`
//             <h2> ${someTrack.name} </h2>
//             <audio controls>
//             <source src="${someTrack.previewURL}" type="audio/mpeg">
//             Your browser does not support the audio tag.
//             </audio>
//             <br>
//             `;
//         })
//         something.innerHTML = htmlString;
//     })
//     .catch(err => console.log(err))
// })