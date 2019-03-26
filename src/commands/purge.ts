import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class purge implements IBotCommand{
   
   private readonly _command = "purge"

    help(): string {
        return "Deletes the amount of desired messages from the channel";
    }

        isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        //Clean up message
        msgObject.delete

        if(!msgObject.member.hasPermission("ADMINISTRATOR"))
        {
            msgObject.channel.send(`${msgObject.author.username}, you don't have permissions to use that command!`)
            .then(msg =>{
                (msg as Discord.Message).delete(5000);
            } );
            return;
        }
        
        //Make sure they say how many to delete
        if(!args[0])
        {
            msgObject.channel.send(`Please supply a number of messages to purge`)
            .then(msg =>{
                (msg as Discord.Message).delete(5000);
            } );
            return;
        }

        //Convert args[0] into a number
        let numberOfMessagesToDelete = Number(args [0]);

        //Makes sure args[0] is a number
        if(numberOfMessagesToDelete == NaN)
        {
            msgObject.channel.send(`That is not a valid number`)
        }

        //Makes sure number is an integer
        Math.round(numberOfMessagesToDelete + 1);

        //Deletes the desired number of messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
        .catch(console.error)
    }
}