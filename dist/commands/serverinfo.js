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
class serverinfo {
    constructor() {
        this._command = "serverinfo";
    }
    help() {
        return "This command display info about the server";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .setColor([0, 200, 0])
                .setTitle("Server Info")
                .setFooter("Pretty lit, right m8?")
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
                .addField("Explicit Content Filter Level", `${msgObject.guild.explicitContentFilter}`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = serverinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVvQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBZ0MzQyxDQUFDO0lBOUJHLElBQUk7UUFDQSxPQUFPLDRDQUE0QyxDQUFDO0lBQ3hELENBQUM7SUFFRyxhQUFhLENBQUMsT0FBZTtRQUM3QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRS9FLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkIsUUFBUSxDQUFDLGFBQWEsQ0FBQztpQkFDdkIsU0FBUyxDQUFDLHVCQUF1QixDQUFDO2lCQUVsQyxjQUFjLENBQUMsbUVBQW1FLENBQUM7aUJBQ25GLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNsRCxRQUFRLENBQUMsY0FBYyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDcEQsUUFBUSxDQUFDLGNBQWMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxrQkFBa0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLFdBQVcsQ0FBQztpQkFDekcsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ3RELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDdEUsUUFBUSxDQUFDLDhDQUE4QyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkYsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDOUQsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDOUQsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDN0QsUUFBUSxDQUFDLCtCQUErQixFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUE7WUFFdEYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUM1QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FBQTtDQUNKO0FBbENELDZCQWtDQyJ9