// @ts-check
import { test, expect } from '@playwright/test';

test('Tiene una url y un fact que es un texto', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const text = page.getByRole('paragraph');
  const image = page.getByRole('img');
  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');
  expect(textContent?.length).toBeGreaterThan(0);
  expect(imageSrc).toBeTruthy();
});
