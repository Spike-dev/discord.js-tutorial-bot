const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberUpdateEvent extends BaseEvent {
  constructor() {
    super('guildMemberUpdate');
  }
  
  async run(client, oldMember, newMember) {
    

    let arrayOld = oldMember.roles.cache.map(e=> e.id) // array de roles antiguo
    let arrayNew = newMember.roles.cache.map(e=> e.id) // array de roles nuevos

    // Se incremento la dimencion del array por lo tanto hay valores nuevos
    if(arrayNew.length > arrayOld.length){ 

      await arrayOld.forEach(element => {
        removeItemFromArr(arrayNew, element) // Removemos los elementos uno a 1 del array Nuevo
      });
      console.log(arrayNew) // El elemento restante es la id del rol nuevo
    }
  }
}

var removeItemFromArr = ( arr, item ) => {
  var i = arr.indexOf( item );    // Funcion para remover un elemento de un array dependiendo por su index (indexOf)
  i !== -1 && arr.splice( i, 1 );
};