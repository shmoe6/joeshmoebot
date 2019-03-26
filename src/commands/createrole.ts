import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class createrole implements IBotCommand {

    private readonly _command = "createrole"

    help(): string {
        return "This command creates a role... Syntax: ";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let name = args.slice(1).join(" ") || "";
        let color = args.slice(2).join(" ") || "";

        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`${msgObject.author.username}, you do not have permissions to do that :/ `)
            return;
        }

        msgObject.guild.createRole({
            name: name,
            color: color,
        })
            .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
            .catch(console.error)

    }
}