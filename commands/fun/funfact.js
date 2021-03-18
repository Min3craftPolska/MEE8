module.exports = {
    commands: ['ff'],
    callback: (message, arguments, text) => {
        const funfacts = [
            'Czy Wiedziałeś że Tego Bota Zaprogramował Min3craftPolska?',
            'Czy Wiedziałeś że Pierzyn Gra W Geometry Dash?',
            'Czy Wiedziałeś że Pierzyn to Sprzątacz Jailbreaka?',
           ];
           const funfact = funfacts[Math.floor(Math.random() * funfacts.length)];
           message.reply(funfact);
    }
    
}