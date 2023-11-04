const mongoose = require('mongoose');
const pluginSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
url: { type: String }
})
const plugindb =  mongoose.model("Plugindb",pluginSchema )
module.exports = { plugindb }
https://gist.github.com/MAESTRO-11/e7e91dd55f1ad971b3e9436172c784fe
