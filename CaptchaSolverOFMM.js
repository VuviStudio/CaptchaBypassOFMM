const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false,
});

client.on('ready', async () => {
  console.log(`Ready`);
});

client.on('messageCreate', async (message) => {
  const RepBotID = '1183155357900624023';

  if (message.author.id === RepBotID) {
    const mathRegex = /[+\-*/\d\s.()]+/g;
    const matches = message.content.match(mathRegex);

    if (matches) {
      matches.forEach((match) => {
        try {
          const result = eval(match);

          if (!isNaN(result)) {
            message.author.send(`${result}`)
              .catch(console.error);
          }
        } catch (error) {
        }
      });
    }
  }
});



client.login('UrToken');