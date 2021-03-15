module.exports = (client, message, track) => {
const discord = require('discord.js');
const embed = new discord.MessageEmbed()
      .setColor('#32415f')
      .setDescription(`
      :x: ** Music Stopped **
      `)
      .setTimestamp()
    
      message.channel.send(embed)
};