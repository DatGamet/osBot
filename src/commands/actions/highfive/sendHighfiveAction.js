const send = require('../../../utils/sendActionEmbed');
const config = require('../../../config.json');
const getUserById = require('../../../utils/getUserByRawMessage');

const prefix = config.PREFIX;

module.exports = {
    execute: async (message) => {
        const args = await message.content.slice(prefix.length).trim().split(/ +/);
        args.shift();
        if (args.length != 1 && args.length < 1) {
            message.reply(`INVAILD ARGS! use \`${prefix} poke <arg>\``);
            return;
        }

        const mentionedUser = await getUserById(message.mentions.users.first().toString());

        send(message, 'highfive', `${message.author.globalName} & ${mentionedUser.globalName} are sharing a High Five`);

    }
}