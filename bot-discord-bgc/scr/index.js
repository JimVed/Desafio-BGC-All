const {Client, IntentsBitField} = require ("discord.js");
const axios = require ('axios');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]

});
// testando a requisição. Caso queira tentar
// async function getPokemon(name) {
//     try {
//          const result = await axios.get(`https://pokeapi.co/api/v2/pokemon${name}`)
        
//          return result;
//     } catch (err) {
//      console.log(err);
//     }
    
// }



client.on('messageCreate', async (message) => {
    if (message.content.startsWith('/')) {
        const nome = message.content.substring(1); // Remove a barra no início
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`);
            const data = response.data;

            if (data && data.name) {
                const tipos = data.types.map((type) => type.type.name).join(', ');
                const habilidades = data.abilities.map((ability) => ability.ability.name).join(', ');

                message.reply(`ㅤ\n :white_check_mark:  Nome: ${data.name},\n\n :white_check_mark:  ID: ${data.id},\n\n :white_check_mark:  Tipos: ${tipos},\n\n :white_check_mark:  Habilidades: ${habilidades}`);
            } else {
                message.reply('Pokémon não encontrado.');
            }
        } catch (error) {
            console.error(error);
            message.reply('Ocorreu um erro ao buscar informações do Pokémon.');
        }
    }
});


client.on('messageCreate',  (message) => {
    
    if (message.content==='olá'){
        message.reply('hi! Consigo te passar algumas informações de pokémons! Digite /nomepokémon (tudo minúsculo) ou /numeroDoPokémon).')
    }
})




client.on('ready', (c) => {
    console.log(`${c.user.tag} Estou on!!!`)
})
