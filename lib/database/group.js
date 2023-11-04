const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "true" },
welcome:{ type: String, default: "@pp *yay,* @user \n*Welcome in* @gname \n*GROUP Member count IS* : @count th" },
goodbye:{ type: String, default: "@pp *we have lost another lovely member you will be remembered bruh😭🤍.*\nUser: @user" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "true" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
