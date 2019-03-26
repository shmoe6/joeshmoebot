import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class serverinfo implements IBotCommand{
   
   private readonly _command = "serverinfo"

    help(): string {
        return "This command display info about the server";
    }

        isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
        .setColor([0,200,0])
        .setTitle("Server Info")
        .setFooter("Pretty lit, right m8?")
        //.setImage(client.user.avatarURL)
        .setDescription("Welcome to our server, here is some information you might like :)")
        .addField("Server Name", `${msgObject.guild.name}`)
        .addField("Server Owner", `${msgObject.guild.owner}`)   
        .addField("Member Count", `${msgObject.guild.name} currently has ${msgObject.guild.memberCount} members!`)
        .addField("Server Region", `${msgObject.guild.region}`)
        .addField("Verification Level", `${msgObject.guild.verificationLevel}`)
        .addField("Is the server discord verified (True/False)?", `${msgObject.guild.verified}`)
        .addField("AFK Voice Channel", `${msgObject.guild.afkChannel}`)
        .addField("AFK Voice Timeout", `${msgObject.guild.afkTimeout}`)
        .addField("Emojis on the Server", `${msgObject.guild.emojis}`)
        .addField("Explicit Content Filter Level", `${msgObject.guild.explicitContentFilter}`)
        
        msgObject.channel.send(embed)
        .catch(console.error);
    }
}