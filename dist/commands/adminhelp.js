"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class adminhelp {
    constructor() {
        this._command = "adminhelp";
    }
    help() {
        return "This command shows the help menu";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .setColor([40, 10, 200])
                .setTitle("Admin Help")
                .setFooter("Pretty lit, right m8?")
                .setDescription("The help menu for **Joe Shmoe Bot's** moderation commands! :P Now you can ~~bully other members~~ moderate the server!")
                .addField("**Suggestions and bug reporting**", `**Discord: shmoe6#1746 \n Steam: shmoe6**`)
                .addField("Bot Prefix", `-`)
                .addField("-kick", `Kicks the specified user: **Format: -kick @user#0001 reason**`)
                .addField("-ban", `Bans the specified user: **Format: -ban @user#0001 reason**`)
                .addField("-purge", `Mass Deletes the Specified number of messages from the channel you type the command in: **Format: -purge number**`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = adminhelp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5oZWxwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2FkbWluaGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLFNBQVM7SUFBOUI7UUFFb0IsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQTRCMUMsQ0FBQztJQTFCRyxJQUFJO1FBQ0EsT0FBTyxrQ0FBa0MsQ0FBQztJQUM5QyxDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDN0IsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2xDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3JCLFFBQVEsQ0FBQyxZQUFZLENBQUM7aUJBQ3RCLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQztpQkFFbEMsY0FBYyxDQUFDLHdIQUF3SCxDQUFDO2lCQUN4SSxRQUFRLENBQUMsbUNBQW1DLEVBQUUsMkNBQTJDLENBQUM7aUJBQzFGLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDO2lCQUMzQixRQUFRLENBQUMsT0FBTyxFQUFFLCtEQUErRCxDQUFDO2lCQUNsRixRQUFRLENBQUMsTUFBTSxFQUFFLDZEQUE2RCxDQUFDO2lCQUMvRSxRQUFRLENBQUMsUUFBUSxFQUFFLG1IQUFtSCxDQUFDLENBQUE7WUFHeEksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUM1QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FBQTtDQUNKO0FBOUJELDRCQThCQyJ9