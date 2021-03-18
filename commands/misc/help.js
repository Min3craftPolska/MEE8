module.exports = {
    commands: ['help'],
    callback: (message, arguments) => {
                    


 message.channel.send({embed: {
    Color: 1752220,
    title: 'Pomoc',
    fields: [{
       name: "**" + config.prefix + "help**",
       value: "Pokazuje tą liste"
    },
    {
       name: "**" + config.prefix + "kick**",
       value: "Wyrzuca Gracza"
       
  },
  {
       name: "**" + config.prefix + "ban**",
       value: "Banuje Gracza"
       
    },
    {
      name: "**" + config.prefix + "clear**",
      value: "Czyści Czat"
      
   },
    {
      name: "**" + config.prefix + "regulamin**",
      value: "Wyświetla Regulamin | Nie Zrobione Do Końca!"
      
   },
   {
       name: "**" + config.prefix + "ci**",
       value: "**Tajne Kody...**"
   },
   {
      name: "**" + config.prefix + "funfact**",
      value: "Wyświetla losowy fun fact"
  },
  {
      name: "**" + config.prefix + "memix**",
      value: "Wyszukiwarka Czego Kolwiek"
  },
  {
      name: "**" + config.prefix + "report**",
      value: "Zgłasza Użytkownika Z Serwera"
  },
  {
      name: "**" + config.prefix + "bruh**",
      value: String.fromCharCode(8203)
  },
  {
      name: "**" + config.prefix + "czkjco**",
      value: String.fromCharCode(8203)
  },
  {
      name: "**" + config.prefix + "avatar**",
      value: String.fromCharCode(8203)
  },
  {
      name: "**" + config.prefix + "ac**",
      value: String.fromCharCode(8203)
  },
  {
      name: "**" + config.prefix + "blob**",
      value: String.fromCharCode(8203)
  },
  {
      name: "**" + config.prefix + "avatar**",
      value: String.fromCharCode(8203)
  }
  ],
    footer: {
        text: 'Min3s • Help Menu'
      
      }
          }
              });
              message.delete();
          
          
  
    }
}