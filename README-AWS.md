# Scraper Puppeteer com Função Lambda AWS 

  

## Sumário 

  

- [Gerenciamento do Tempo](#gerenciamento-do-tempo) 

- [Implementando o Bot na AWS](#implementando-o-bot-na-aws) 

- [Obtendo Informações do Pokémon Tarountula](#obtendo-informações-do-pokémon-tarountula) 

- [Buscando um Pokémon Diferente](#buscando-um-pokémon-diferente) 

- [Entendendo Minhas Dificuldades](#entendendo-minhas-dificuldades) 

  

## Gerenciamento do Tempo 

  

Gerenciamento do tempo: 
Ao receber o desafio, dediquei as primeiras horas apenas para revisar e estudar o conteúdo proposto.  Decidi separar a manhã e a tarde do sábado (28/10/23) para a pesquisa e questionário do desafio; a noite do sábado e o domingo (29/10/23) foram para a implementação do scraper, tanto o puppeteer local quanto na AWS. 
Também defini meu horário de trabalho: das 06:00 às 22:00; apenas os intervalos para café da manhã, almoço e janta eram contabilizados (cerca de 01:00h para cada);   

  

## Implementando o Bot na AWS 

  

1. Certifique-se de estar com o VScode, Node e npm devidamente configurados. 

2. Baixe o código. 

3. Com o código aberto, use o comando `npm install puppeteer-core --save-prod`. 

4. Crie uma conta na AWS. 

   4.1. Crie uma função Lambda. 

   4.2. Crie um bucket S3. 

5. Faça o .zip dos arquivos do código (Atenção! Cuidado para não fazer o .zip da pasta inteira.) 

   5.1. Use o .zip no bucket. 

   5.2. Use o URL do bucket na função Lambda. 

### Obtendo Informações do Pokémon Tarountula

6. O default para a função é pesquisar pelo Pokémon Tarountula. 

   
 
 
 6.1 Resultado esperado: 
Consegui o acesso!!! :D 

  

  

Vou te passar as informações sobre esse Pokémon: 

  

Tarountula (Japonês: タマンチュラ Tamantula) é um Pokémon do tipo Inseto introduzido na Nona Geração. 

  

## Buscando um Pokémon Diferente 

  

6.2 Para buscar um Pokémon diferente, você deve ir na aba de testes e escrever no seguinte formato:  
 {“url”:” https://pokemon.fandom.com/pt-br/wiki/NomeDoPokémonDesejado” 
} 

  

Vou te passar as informações sobre esse Pokémon: 

  

NomeDoPokémon é um Pokémon do tipo TipoPokémon introduzido na GeraçãoPokémon. 

  

## Entendendo Minhas Dificuldades 

  

Por ser uma nova tecnologia para mim, tive muita dificuldade com a configuração do ambiente. Com o bot pronto, minha primeira tentativa foi de subir diretamente na AWS. Deparei-me com alguns erros: 

  

1. O tamanho do arquivo não era suportado no upload do código em .zip: Tentei diminuir ao máximo, mas não consegui; então, fui para o próximo passo. 

2. Colocar o arquivo num bucket S3: Consegui criar o bucket, mas estava dando inconsistência entre a região do bucket e da função Lambda. Mesmo corrindo esse erro, não tive sucesso. 

3. O teste da função não estava funcionando: Descobri que precisaria fazer o .zip apenas dos arquivos e não da pasta inteira. Corrigi o erro e me deparei com outro. 

3.1. Pensei que o erro fosse o tempo limite de execução e a quantidade de memória disponível. Não tive sucesso. 

4. O bot não estava em uma função Handler: Naquele momento, eu não sabia que esse era o problema e decidi buscar outros caminhos. 

4.1. Tentei usar o Serverless para testar localmente, mas tive muitos problemas com a configuração do ambiente; não sabia que precisava configurar primeiro o AWS CLI no computador e o próprio Serverless não conseguia criar os templates. 

4.2. Levei muito tempo tentando testar como Serverless e, após conseguir configurar, descobri que o Serverless não estava criando os buckets na conta AWS. 

5. Parei o projeto por ter batido o tempo máximo que poderia dedicar. 

6. Revisei o conteúdo da pesquisa antes voltar ao scraper. 

7. Decidi recomeçar todo o projeto: Após algumas pesquisas, descobri que o principal requisito era o bot estar numa função Handler. 

7.1. Peguei o código do bot e passei dentro da função básica apenas com o Puppeteer utilizando o `goto`: Não tive sucesso. 

7.2. Após algumas pesquisas, descobri que havia a biblioteca Chromium que suportava o Puppeteer na AWS: Peguei o exemplo dado na documentação e tentei subir. Não tive sucesso. 

7.3. Alterei a versão do Node.js para 14 no ambiente da AWS: Foi o primeiro sucesso. 

8. Com a função exemplo funcionando, decidi substituir os códigos por partes: Sempre fazendo .zip das versões atuais e colocando no bucket e na função Lambda. 

8.1. O bot começou a funcionar como o esperado. 
