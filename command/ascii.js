const ascii = require('ascii-art')
module.exports.run = async (Discord, client, message, args) => {


        
        ascii.font(args.join(' '), 'Doom', function(rendered){
                rendered = rendered.trimRight();

                if(rendered.lenght < 1) return message.channel.send('```!ascii [message] \n -------------------\n let your message get into ascii | if the msg is too long it will not be convert ')
                if (rendered.lenght > 2000) return message.channel.send('Too long !');

                message.channel.send(rendered, {
                        code: 'ascii'
                })
        });
        //if ascii isn't at your taste, take a look at boo.js
}
