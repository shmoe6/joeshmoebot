import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`);

client.on("ready", () => {
    //Let us know that the bot is online
    console.log("Ready to Go!");
    client.user.setActivity("In development", { type: "STREAMING" });
})

client.on("message", msg => {

    //Ignore the message if it was sent by the bot
    if (msg.author.bot) { return; }

    //Ignore message if sent in dms
    if (msg.channel.type == "dm") { return; }

    //Ignore messages that dont start with the prefix
    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    //Handle the command
    handleCommand(msg);
})


async function handleCommand(msg: Discord.Message) {

    //split string into command and all args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
    let args = msg.content.split(" ").slice(1);

    //Loop through all loaded commands
    for (const commandClass of commands) {

        //Attempt to execute code but ready in case of possible error
        try {

            //Check if our command class is correct one
            if (!commandClass.isThisCommand(command)) {

                //Go to next iteration of loop if this isnt correct command class
                continue;
            }

            //Pause execution while running command code
            await commandClass.runCommand(args, msg, client);
        }
        catch (exception) {

            //If error, log the exception
            console.log(exception)
        }
    }
}
function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    if (!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Loop through all of the commands in our config file
    for (const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(ConfigFile.config.token);