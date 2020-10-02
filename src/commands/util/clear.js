const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'category', []);
  }

  async run(client, message, args) {
    
    let amount = args[0];

    if(!message.member.hasPermission("MANAGER_MESSAGES")) return message.channel.send("No tienes permisos para borrar mensajes")
    if(isNaN(amount) ||  amount < 1 || amount > 99 ) return message.channel.send("Argumentos invalidos, ingresa un numero valido.")
    
    await message.delete();

    message.channel.messages.fetch({limit: 100}).then( async e=> {

      try{      
        if( amount > e.size ){
          message.channel.bulkDelete(e.size).then( ()  => {
            return message.channel.send(` Se han eliminado ${e.size} mensajes`)
          })
        }else{
          message.channel.bulkDelete(amount).then( ()  => {
            return message.channel.send(` Se han eliminado ${amount} mensajes`)
          })
        }
      }catch(err){
        return message.channel.send(err.message).then(x => x.delete({timeout: 5000}))
      }
    })
  } 
}