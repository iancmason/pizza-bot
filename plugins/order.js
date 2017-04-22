const pizzapi = require('dominos');

module.exports = {
  init: (controller) => {
    controller.hears([/I want a pizza/i], ['direct_message', 'direct_mention'], getPizza)
  },
  help: {
    command: 'pizza',
    text: `Say "I want a pizza" and I will order you one.`
  }
}

function getPizza (bot, message) {
  bot.reply(message, `Hi there! I"m looking for nearby stores.`);
  pizzapi.Util.findNearbyStores(
  '11 Times Square, New York, NY, 10036',
  'Delivery',
  function (storeData) {
    const filteredStoreData = storeData.result.Stores.filter((store) =>
      store.IsOpen && store.IsOnlineCapable && store.IsOnlineNow
    )
    const reply = filteredStoreData.map((store) =>
      `${store.StoreId} \r\n ${store.AddressDescription} \r\n`
    )
    reply.forEach(function(reply) {
      bot.reply(message, reply)
    })
  })
}
