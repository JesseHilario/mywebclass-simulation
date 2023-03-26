const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the web application
  await page.goto('https://jessehilario.github.io/mywebclass-simulation/');

  // Check for presence of legal information links
  const hasPrivacyPolicy = await page.isVisible('a[href="/privacy-policy"]');
  const hasTermsOfUse = await page.isVisible('a[href="/terms-of-use"]');
  const hasCookiePolicy = await page.isVisible('a[href="/cookie-policy"]');

  // Check that legal information links are visible
  if (hasPrivacyPolicy && hasTermsOfUse && hasCookiePolicy) {
    // Check for visibility of privacy policy
    await page.click('a[href="/privacy-policy"]');
    const privacyPolicyVisible = await page.isVisible('#privacy-policy');
    if (privacyPolicyVisible) {
      console.log('Privacy policy is present and visible');
    } else {
      console.error('Privacy policy is missing or not visible');
    }

    // Check for visibility of terms of use
    await page.goBack();
    await page.click('a[href="/terms-of-use"]');
    const termsOfUseVisible = await page.isVisible('#terms-of-use');
    if (termsOfUseVisible) {
      console.log('Terms of use are present and visible');
    } else {
      console.error('Terms of use are missing or not visible');
    }

    // Check for visibility of cookie policy
    await page.goBack();
    await page.click('a[href="/cookie-policy"]');
    const cookiePolicyVisible = await page.isVisible('#cookie-policy');
    if (cookiePolicyVisible) {
      console.log('Cookie policy is present and visible');
    } else {
      console.error('Cookie policy is missing or not visible');
    }
  } else {
    console.error('Legal information links are missing or not visible');
  }

  await browser.close();
})();
