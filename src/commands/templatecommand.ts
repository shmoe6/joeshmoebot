import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class testcommand implements IBotCommand{
   
   private readonly _command = "testcommand"

    help(): string {
        return "This command doesnt do anything";
    }

        isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        //Lets us know it all went well
        msgObject.channel.send("it worked, so stop reading this");
    }
}