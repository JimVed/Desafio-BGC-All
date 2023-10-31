# Bot para o Discord

## Sumário

- [Resumo](#resumo)
- [Como Implementar o Bot](#como-implementar-o-bot)
- [Como Criar o Bot](#como-criar-o-bot)
- [Adicionando o Bot ao Servidor](#adicionando-o-bot-ao-servidor)

## Resumo

O bot é capaz de entrar em um canal do Discord e, com os comandos corretos, fornecer informações sobre vários Pokémon. Devido aos custos de hospedagem, decidimos ensinar como criar seu próprio bot. Se você quiser apenas ver o funcionamento, assista ao vídeo disponibilizado.

## Como Implementar o Bot

1. Certifique-se de ter o Visual Studio Code (VSCode), Node e npm configurados.
2. Baixe os arquivos do bot.
3. Instale a biblioteca Discord.js com o comando `npm install discord.js`.
4. Instale o Axios com o comando `npm install axios`.

## Como Criar o Bot

5. Acesse o [Discord Developer Portal](https://discord.com/developers/applications).
   5.1. Vá até a aba "Aplicações".
   5.2. Faça login em uma conta.
   5.4. Clique em "Nova Aplicação".
   5.5. Na barra lateral, selecione "bot".
6. Configure o bot e conceda as autorizações necessárias.

## Adicionando o Bot ao Servidor

7. Na aba de OAuth, você precisará dar "reset" na seção "Informações do Cliente"; você receberá um token.
8. Adicione o bot a um servidor do Discord.
9. Com o token em mãos, vá para o arquivo `index` e adicione o código `client.login('seuToken')`.
10. No arquivo `index.js`, use o comando `node index.js` para iniciar o bot.

**Nota**: Não esqueça de assistir ao vídeo do bot funcionando.
