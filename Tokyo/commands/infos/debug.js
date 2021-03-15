module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

//    execute(client, message) {
//        message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`);
//    },

        execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
    
            message.channel.send({
                embed: {
                    color: '#32415f',
                    fields: [
                        { name: 'SID', value: `<:yes:820749581523484693> ${message.guild.id}` },
                        { name: 'BID', value: `<:yes:820749581523484693> ${client.user.id}` },
                        { name: 'Server Name', value: `<:yes:820749581523484693> ${message.guild.name}` },
                        { name: 'Total Members', value: `<:yes:820749581523484693> ${client.users.cache.size}` },
                        { name: 'Total Servers', value: `<:yes:820749581523484693> ${client.guilds.cache.size}` },
                        { name: 'Connected Servers', value: `<:yes:820749581523484693> ${client.voice.connections.size}`  },
                    ],
                    timestamp: new Date(),
                    description: ` <a:tokyo_loads:820574892901793823> ${message.author}`,
                },
            });
        }
    }
}