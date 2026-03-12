import { expect, test, request } from '@playwright/test';
import tags from '../test-data/tags.json';

test.beforeEach(async ({ page }) => {

  // mocking the API response for tags
  await page.route('*/**/api/tags', async route => {
    await route.fulfill({
      body: JSON.stringify(tags)
    })
  })

  await page.waitForTimeout(20000)
  await page.goto('https://conduit.bondaracademy.com/');
});

test('has title', async ({ page }) => {
  await page.route('https://conduit-api.bondaracademy.com/api/articles*', async route => {
    const response = await route.fetch()
    const responseBody = await response.json()
    responseBody.articles[0].title = 'My MOCK Title'
    responseBody.articles[0].description = 'My MOCK Description'
    await route.fulfill({
      body: JSON.stringify(responseBody)
    })
  })
  await page.getByText('Global Feed').click();
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
  await expect(page.locator('app-article-list h1').first()).toContainText('My MOCK Title');
  await expect(page.locator('app-article-list p').first()).toContainText('My MOCK Description');
});

test('delete article', async ({ request }) => {

  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    
    data: { "user": { "email": "ehlers.becca@gmail.com", "password": "XFeFAK@TaTYgi8Y" } }
  })

  const responseBody = await response.json()
  console.log(responseBody.user.token)
})