const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the web application
  await page.goto('https://jessehilario.github.io/mywebclass-simulation/');

  // Measure the time taken to load the page
  const loadTime = await page.evaluate(() => performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart);
  console.log(`Page load time: ${loadTime}ms`);

  // Simulate other user interactions and measure their runtimes as needed

  await browser.close();
})();
