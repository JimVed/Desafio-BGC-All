# Correção de um Scraper 

  

Este repositório contém um bot que utiliza a biblioteca Puppeteer para buscar, copiar e fornecer informações sobre Pokémon desejados. 

  

## Motivação 

  

Inicialmente, a estratégia era fazer o bot clicar em campos específicos para buscar os Pokémon. No entanto, essa abordagem mostrou-se ineficaz, uma vez que algumas áreas não eram "clicáveis" para o bot. Além disso, no final, o bot não seria capaz de trocar os nomes dos Pokémon automaticamente. 

  

A solução adotada foi a seguinte: em vez de clicar em campos específicos, o bot altera o nome do Pokémon na URL do `page.goto`. Com essa alteração, o bot consegue buscar as informações usando seletores que se ajustam ao conteúdo de cada Pokémon. 

  

## Como Utilizar o Bot 

  

Para utilizar este bot, siga estas etapas: 

  

1. Certifique-se de ter o Visual Studio Code (VScode) e o Node.js instalados. Verifique se o npm está instalado como padrão usando o comando `npm -v` no terminal. Se não estiver instalado, execute `npm install` para instalá-lo. 

  

2. Faça o download do projeto. 

  

3. Instale as seguintes dependências: 

  

   - Express: `npm install express` 

   - Puppeteer: `npm i puppeteer` 

  

4. Com o projeto instalado e as dependências configuradas, execute o comando `node server.js` para iniciar o bot. 

  

5. O Pokémon padrão que será exibido é o Tarountula. Se desejar buscar outro Pokémon, vá até o arquivo server.js e encontre a linha `await page.goto('https://pokemon.fandom.com/pt-br/wiki/Tarountula');`. Altere o nome do Pokémon após a última barra. 

  

# Resultado Esperado 

  

Consegui o acesso!!! :D 

  

Vou te passar as informações sobre esse pokémon: 

Tarountula (Japonês: タマンチュラ Tamantula) é um Pokémon do tipo Inseto introduzido na Nona Geração. 

  

  

Essa daqui é a categoria dele: Pokémon Novelo 

  

Eu sei que você não me pediu, mas... Vou te passar mais algumas informações. Relaxa! Isso não vai me dar trabalho algum. :p  

  

Altura: 0,3 m 

  

Peso: 4,0 kg 

  

Habilidades (Atenção ao tipo Regular e Oculto!!): 

  

Regular(es)Insônia 

  

OcultaStakeout 
