const { MessageEmbed, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SuggestionCommand extends BaseCommand {
  constructor() {
    super('suggestion', 'util', []);
  }

  async run(client, message, args) {
    
    let suggestionContent = args.join(" ");
    let channel = message.guild.channels.cache.get("760423185601527819");

    if(!channel) return message.channel.send("No hay un canal de sugerencias asiganado").then(e=> e.delete({timeout: 7000}));

    if(!suggestionContent) return message.channel.send("Ingresa el contenido de la sugerencia")
        .then(e=> e.delete({timeout: 7000}));
    if(suggestionContent.length < 5) return message.channel.send("Sugerencia demaciado corta").then(e=> e.delete({timeout: 7000}));

    let embedMessage = new MessageEmbed()
        .setTitle(` Nueva Sugerencia por ${message.author.username}`)
        .setDescription(`${suggestionContent}`)
        .setColor("RANDOM")

    channel.send(embedMessage).then( async e => {
       await e.react("✅")
        e.react("❎")
    });
    
  }
}