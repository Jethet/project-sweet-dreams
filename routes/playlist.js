// routes/playlist.js
var express = require('express');
var axios = require('axios');
var Playlist = require('./../models/Playlist');
var User = require('./../models/User');
var playlistRouter = express.Router();

playlistRouter.get('/',(req, res, next) =>{
    User.findById(req.session.currentUser._id)
    .populate("playlists")
    .then( (userdata) => {
        console.log("userdata playlist", userdata.playlists);
        res.render('playlist',{userdata});
    })
    .catch( (err) => console.log(err));
})

playlistRouter.post('/add/:trackId',(req, res, next)=>{
    const trackId = req.params.trackId;
    const {playlist} = req.body;
    axios.get(`https://api.napster.com/v2.0/tracks/${trackId}?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm&limit=200`)
    .then((result) => {
        const trackInfo = result.data.tracks[0];
        const data = {
            trackId: trackId,
            trackName: trackInfo.name,
            trackArtist: trackInfo.artistName
        }
        Playlist.update({_id: playlist},{$addToSet: {tracks: data}},{new: true})
        .then( () => res.redirect("/playlist"))
        .catch( (err) => console.log(err));
    })
    .catch((err) => console.log(err));
   
})

// playlistRouter.post("/:id/delete/:trackId",(req,res, next)=>{
//     const playlistId = req.params.id;
//     const trackId = req.params.trackId;
//     Playlist.update({_id: playlistId},{
//         $pull:{tracks: trackId}
//     },{new: true})
//     .then(() => {
//         res.redirect(`/playlist/${playlistId}`)
//     }).catch((err) => {
//         console.log(err);
//     }); 
// })

playlistRouter.post('/create',(req, res, next)=>{
    const {playlistName} = req.body;
    const id = req.session.currentUser._id;

    Playlist.create({playlistName, userId: id})
    .then( (playlistCreated) => {
        console.log('playlistCreated',playlistCreated);
        return User.update({_id: id},{$addToSet: {playlists: playlistCreated._id}},{new: true})
    })
    .then( (userUpdate) => {
        console.log('userUpdate',userUpdate);
        res.redirect(`/playlist`)
    })
    .catch( (err) => console.log(err));
})


playlistRouter.get('/:playlistId/delete',(req, res, next)=>{
    const playlistId = req.params.playlistId;
    Playlist.findById(playlistId)
    .then( (playlist) => {
        console.log("playlist", playlist);
        const pr1 = playlist.remove();
        const pr2 = User.update({_id: req.session.currentUser._id},{
            $pull: {playlists: playlist._id}
        })
        Promise.all([pr1,pr2])
        .then( () => res.redirect(`/playlist`))
        .catch( (err) => console.log(err));
    })
    .catch( (err) => console.log(err));
})

playlistRouter.get('/:playlistId',(req, res, next)=>{
    const playlistId = req.params.playlistId;
    Playlist.findById(playlistId)
    .then((playlist) => {
        const tracksArr = playlist.tracks;
        res.render("playlistDetails",{tracksArr,playlistId: playlist._id}); 
    })
    .catch(err=>console.log(err));
})

module.exports = playlistRouter;