module.exports = (client, message, track) => {
const discord = require('discord.js');
const embed = new discord.MessageEmbed()
      .setColor('#32415f')
      .setDescription(`
      <a:tokyo_loads:820574892901793823> ** Song added to queue please wait for song to end **
      `)
      .setTimestamp()
    
      message.channel.send(embed)
};