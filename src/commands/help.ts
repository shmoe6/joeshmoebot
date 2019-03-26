import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class help implements IBotCommand{
   
   private readonly _command = "help"

    help(): string {
        return "This command shows the help menu";
    }

        isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
        .setColor([200,10,40])
        .setTitle("Help")
        .setFooter("Pretty lit, right m8?")
        //.setImage(client.user.avatarURL)
        .setDescription("The help menu for **Joe Shmoe Bot** _ADMINS USE -adminhelp_ :)")
        .addField("**Suggestions and bug reporting**", `**Discord: shmoe6#1746 \n Steam: shmoe6**`)
        .addField("Bot Prefix", `-`)
        .addField("-adminhelp", `**_USED BY ADMINS TO SHOW MODERATION COMMANDS_**`)
        .addField("-serverinfo", `Shows info about the server`)
        
        
        msgObject.channel.send(embed)
        .catch(console.error);
    }
} 