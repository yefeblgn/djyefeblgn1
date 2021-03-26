const Discord = require("discord.js");
const ayarlar = require("./ayarlar.json");
var prefix = ayarlar.prefix

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Müzik")
    .setDescription("There are currently 8 commands in this category.\n`The default prefix will remain.`")
    .addField("`" + prefix +"p`", "Müzik çalar")
    .addField("`" + prefix +"s`", "Çalan müziği durdurur")
    .addField("`" + prefix +"q`", "Müzik kuyruğunu gösterir")
    .addField("`" + prefix +"sk`", "Bir sonraki müziği çalar")
    .addField("`" + prefix +"v`", "Müziğin sesini ayarlar")
    .addField("`" + prefix +"pl`", "Durdurulan müziği devam ettirilir")
    .setFooter("Müzik Komutları")

message.channel.send(embed);
}

module.exports.help = {
  name: "müzik"
}
