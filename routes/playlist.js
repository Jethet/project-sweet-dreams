// routes/playlist.js
var express = require('express');
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

    Playlist.update({_id: playlist},{$addToSet: {tracks: trackId}},{new: true})
    .then( () => res.redirect("/playlist"))
    .catch( (err) => console.log(err));
})

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


module.exports = playlistRouter;