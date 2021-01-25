const fs = require("fs");

module.exports = (Acuity) => {

    const load = dirs => {
            const cmds = fs.readdirSync(`./Commands/${dirs}/`).filter(d => d.endsWith('.js'));
            for (let file of cmds) {
                const cmdPull = require(`../Commands/${dirs}/${file}`);
                Acuity.commands.set(cmdPull.config.name, cmdPull);
                if (cmdPull.config.aliases) cmdPull.config.aliases.forEach(element => {
                    Acuity.aliases.set(element, cmdPull.config.name);
                });
            }
        }
        ["Owner", "Guild"].forEach(e => load(e));
}