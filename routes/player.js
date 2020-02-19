// routes/player.js
var express = require('express');
const axios = require('axios');
const User = require("./../models/User")
var playerRouter = express.Router();

playerRouter.get('/:id',(req, res,next)=>{
    axios.get(`https://api.napster.com/v2.0/playlists/${req.params.id}/tracks?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm&limit=200`)
    .then(apiResponse => {
        const track = apiResponse.data.tracks;
        console.log(track);
        return track;
    })
    .then( track => {
        User.findById(req.session.currentUser._id)
        .populate('playlists')
        .then( userInfo => {
            let userHasPlaylists = false;
            if(userInfo.playlists.length !== 0) userHasPlaylists = true;

            const data = {
                id: req.params.id,
                track: track,
                userInfo: userInfo,
                userHasPlaylists: userHasPlaylists
            }
            //console.log(data.track);
            console.log("userhas playlist", userHasPlaylists);
            
            res.render("player",data);
        })
        .catch(err => console.log(err))
    })
    .catch(err=>console.log(err))
})

module.exports = playerRouter;