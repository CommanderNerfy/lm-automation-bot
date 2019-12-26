const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.usernamer} is online!`)
    bot.user.setActivity("Largest Military", {type: "Watching"})
});

client.login(process.env.BOT_TOKEN);

