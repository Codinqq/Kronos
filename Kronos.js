const Discord = require("discord.js");
const Kronos = new Discord.Client();
const { token } = require("config.json");

Kronos.on("ready", async() => {
    console.log("Kronos > Ready!")
})


    Kronos["commands"] = new Discord.Collection();
    Kronos["aliases"] = new Discord.Collection();

["commands", "events"].forEach(x => require(`./Handlers/${x}`)(Kronos));

Kronos.login(token);