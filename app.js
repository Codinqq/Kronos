const { ShardingManager } = require("discord.js");
const { token } = require("config.json");

const manager = new ShardingManager('./Kronos.js', {
    token: token
})

manager.spawn();
manager.on("shardCreate", shard => console.log("Kronos > Shard " + shard.id + " is ready!"))