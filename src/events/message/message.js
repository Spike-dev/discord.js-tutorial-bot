const BaseEvent = require('../../utils/structures/BaseEvent');
const cooldowns = new Map();

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName.toLowerCase());

      if(command){
        command.run(client, message, cmdArgs);
      }

    }
  }
}