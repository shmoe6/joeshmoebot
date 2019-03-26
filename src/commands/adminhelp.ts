import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class adminhelp implements IBotCommand{
   
   private readonly _command = "adminhelp"

    help(): string {
        return "This command shows the help menu";
    }

        isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
        .setColor([40,10,200])
        .setTitle("Admin Help")
        .setFooter("Pretty lit, right m8?")
        //.setImage(client.user.avatarURL)
        .setDescription("The help menu for **Joe Shmoe Bot's** moderation commands! :P Now you can ~~bully other members~~ moderate the server!")
        .addField("**Suggestions and bug reporting**", `**Discord: shmoe6#1746 \n Steam: shmoe6**`)
        .addField("Bot Prefix", `-`)
        .addField("-kick", `Kicks the specified user: **Format: -kick @user#0001 reason**`)
        .addField("-ban", `Bans the specified user: **Format: -ban @user#0001 reason**`)
        .addField("-purge", `Mass Deletes the Specified number of messages from the channel you type the command in: **Format: -purge number**`)
        
        
        msgObject.channel.send(embed)
        .catch(console.error);
    }
} 