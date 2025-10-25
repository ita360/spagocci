const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', msg => {
  if (msg.channel.id === '1431404557249937428') {
    const data = {
      timestamp: new Date().toISOString(),
      text: msg.content,
      link: extractLink(msg.content),
      image: msg.attachments.first()?.url || ''
    };
    fs.appendFileSync('data.json', JSON.stringify(data) + ',\n');
  }
});

client.login('MTQzMDY0NDkwMzQ4NTkwMjk0OQ.Gmsclf.2n3SlT4qmz-568lefSLZtfhJmA0tFoAIqnS1mU');

function extractLink(text) {
  const match = text.match(/https?:\/\/\S+/);
  return match ? match[0] : '';
}
