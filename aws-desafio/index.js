const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core')
exports.handler = async (event, context, callback) => {
  let result = null;
  let browser = null;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();

    await page.goto(event.url || 'https://pokemon.fandom.com/pt-br/wiki/Tarountula');
    console.log("Consegui o acesso!!! :D");
    const elemento = await page.$('#mw-content-text > div > p:nth-child(3)');
    const textoDoElemento = await elemento.evaluate(element => element.textContent);
    console.log("\n Vou te passar as informações sobre esse pokémon: " + "\n" + (textoDoElemento));

    result = await page.title();
  } catch (error) {
    return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return callback(null, result);
};