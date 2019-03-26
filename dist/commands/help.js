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
class help {
    constructor() {
        this._command = "help";
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
                .setColor([200, 10, 40])
                .setTitle("Help")
                .setFooter("Pretty lit, right m8?")
                .setDescription("The help menu for **Joe Shmoe Bot** _ADMINS USE -adminhelp_ :)")
                .addField("**Suggestions and bug reporting**", `**Discord: shmoe6#1746 \n Steam: shmoe6**`)
                .addField("Bot Prefix", `-`)
                .addField("-adminhelp", `**_USED BY ADMINS TO SHOW MODERATION COMMANDS_**`)
                .addField("-serverinfo", `Shows info about the server`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUVvQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMkJyQyxDQUFDO0lBekJHLElBQUk7UUFDQSxPQUFPLGtDQUFrQyxDQUFDO0lBQzlDLENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUM3QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztpQkFDckIsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDaEIsU0FBUyxDQUFDLHVCQUF1QixDQUFDO2lCQUVsQyxjQUFjLENBQUMsZ0VBQWdFLENBQUM7aUJBQ2hGLFFBQVEsQ0FBQyxtQ0FBbUMsRUFBRSwyQ0FBMkMsQ0FBQztpQkFDMUYsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7aUJBQzNCLFFBQVEsQ0FBQyxZQUFZLEVBQUUsa0RBQWtELENBQUM7aUJBQzFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsNkJBQTZCLENBQUMsQ0FBQTtZQUd2RCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztLQUFBO0NBQ0o7QUE3QkQsdUJBNkJDIn0=