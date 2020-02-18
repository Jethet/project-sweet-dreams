const mongoose = require("mongoose");
const Playlist = require("./Playlist");
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
    username: {type: String, required: true} ,
    email: {type: String, required: true} ,
    password: {type: String, required: true},
    imageURL: {type: String},
    playlists: [{type: Schema.Types.ObjectId, ref: 'Playlist'}]
  });


const User = mongoose.model("User", userSchema);


module.exports = User;