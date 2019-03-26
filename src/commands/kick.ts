import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class kick implements IBotCommand{
   
   private readonly _command = "kick"

    help(): string {
        return "Kicks the mentioned user";
    }

        isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete(0)
        .catch(console.error)
        
        if(!msgObject.member.hasPermission("ADMINISTRATOR"))
        {
            msgObject.channel.send(`${msgObject.author.username}, you do not have permissions to do that :/ `)
            return;
        }

        if(!mentionedUser)
        {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, but I cannot find that user :/ `)
            return;
        }


        msgObject.guild.member(mentionedUser).kick(kickLog)
            .then(console.log)
            .catch(console.error)
    }
}