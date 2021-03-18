const config = require('../../config.json');
const cheerio = require('cheerio');
const request = require('request');

module.exports = {
    commands: ['obrazek', 'memix'],
    expectedArgs: '<Obrazek Do Wyszukania>',
    minArgs: 1,
    //maxArgs: 1,
    callback: (message, arguments, text) => {
        const memixy = arguments.slice(0).join(' ');
      //  console.log('doszło ' + memixy + ` kanał ${message.channel.name} serwer ${message.guild.name}`)
        Image(message);

        
        function Image(message){
            const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
         
            if (message.content.indexOf(config.prefix) !== 0) return;
            
        
            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + memixy,
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
                }
            };
            request(options, function(error, response, responseBody) {
                if (error) {
                    return;
                }
        
                $ = cheerio.load(responseBody);
        
        
        
        
                var links = $(".image a.link");
        
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        
                console.log(urls);
                if (!urls.length) {
                    return;
                }
        
        
                message.reply(urls[Math.floor(Math.random() * urls.length)]);
            });
        }
    },
    permissions: [],
    requiredRoles: [],
}
