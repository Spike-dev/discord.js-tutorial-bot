const BaseEvent = require('../../utils/structures/BaseEvent');
const mongoose = require("mongoose");

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {

    const  mongoPass  = "lUspcWd5Vup7Rv5u"
    const mongoPath = `mongodb+srv://marcocesar:${mongoPass}@cluster0.wxd8d.mongodb.net/database?retryWrites=true&w=majority`
    
    await mongoose.connect(mongoPath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    mongoose.connection.on("connect", () => {
      console.log("database conect")
    })

    console.log(client.user.tag + ' has logged in.');
  }
}