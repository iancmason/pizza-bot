module.exports = {
  init: (controller) => {
    controller.hears([/I want a pizza/i], ['direct_message', 'direct_mention'], (bot, message) => {
      bot.reply(message, `Hi there! I"m looking for nearby stores.`)
    })
  },
  help: {
    command: 'pizza',
    text: `Say "I want a pizza" and I will order you one.`
  }
}
