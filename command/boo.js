const figlet = require('figlet');
module.exports.run = async (Discord, client, message, args) => {

        let texte = args.join(' ');


        if (!texte) return message.channel.send("```!boo [text]\n ---------------------\n let you transform a short text into boo font OwO```");
        figlet.text(texte, {font: 'Ghost'},function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                message.channel.sendCode("ascii", data)
            });
        };
