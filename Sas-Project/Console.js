const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quel est votre nom ? ', (name) => {
    rl.question('Quel est votre Adresse ? ', (Adresse) => {
        rl.question('Quel est votre Capasité ? ', (Capasité) => {
            // Display the collected information
            console.log(`Nom: ${name}`);
            console.log(`Adresse: ${Adresse}`);
            console.log(`Capacité: ${Capasité}`);
            
            rl.close();
        });
    });
});
