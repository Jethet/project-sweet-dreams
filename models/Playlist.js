const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./User');


const playlistSchema = new Schema(
    {
        playlistName: {type: String, required: true} ,
        userId: {type: Schema.Types.ObjectId, ref: 'User'},
        tracks: {type: Array}
    }
);

const Playlist = mongoose.model("Playlist", playlistSchema);


module.exports = Playlist;