const express = require('express');
const puppeteer = require('puppeteer')
const server = express();
(async () => {

  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('https://pokemon.fandom.com/pt-br/wiki/Tarountula');
  console.log("Consegui o acesso!!! :D");
  const elemento = await page.$('#mw-content-text > div > p:nth-child(3)');
  const textoDoElemento = await elemento.evaluate(element => element.textContent);
  console.log("\n Vou te passar as informações sobre esse pokémon: " + "\n" + (textoDoElemento));


  //Buscando Categoria(s)
  const elementoCategoria = await page.$('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(3) > td:nth-child(1)');
  const textosCategoria = await elementoCategoria.evaluate(element => element.textContent);
  console.log("\n Essa daqui é a categoria dele: " + textosCategoria);

  //O bot vai passar os demais elementos, como: Peso, Altura e Habilidades.
  //altura:
  const elementoAltura = await page.$('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td:nth-child(1)');
  const textosAltura = await elementoAltura.evaluate(element => element.textContent);
  //Peso:
  const elementoPeso = await page.$('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td:nth-child(2)');
  const textosPeso = await elementoPeso.evaluate(element => element.textContent);
  //Habilidades:
  const elementoHabilidade = await page.$('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(7) > td > table:nth-child(1) > tbody > tr');
  const textosHabilidade = await elementoHabilidade.evaluate(element => element.textContent);

  // Exibindo outras informações:
  console.log("Eu sei que você não me pediu, mas... Vou te passar mais algumas informações. Relaxa! Isso não vai me dar trabalho algum. :p \n ")
  console.log(" Altura: " + textosAltura + "\n Peso: " + textosPeso + "\n Habilidades (Atenção ao tipo Regular e Oculto!!): \n" + textosHabilidade)

  //Fechado o navegador:
  await browser.close();
})();
