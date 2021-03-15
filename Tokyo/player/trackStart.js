module.exports = (client, message, track) => {
const discord = require('discord.js');
const embed = new discord.MessageEmbed()
      .setColor('#32415f')
      .setTitle(`${track.title}`)
      .setURL(`${track.url}`)
//    .setThumbnail(`https://cdn.discordapp.com/attachments/801642194535579648/820544704088506378/Tokyo_nb.png`)
      .setDescription(`
      ** Requested by **
      ${message.author}
      `)
      .addFields(
		{ name: 'Channel', value: ` ${track.author} `, inline: true },
		{ name: 'Length', value: ` ${track.duration} `, inline: false },
		{ name: 'Views', value: ` ${track.views} `, inline: false },
		)
      .setImage(`${track.thumbnail}`)
      .setTimestamp()
    
      message.channel.send(embed)
};