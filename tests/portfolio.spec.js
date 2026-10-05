import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const width of [375, 768, 1024, 1440]) {
  test(`homepage is complete at ${width}px under the GitHub Pages subpath`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => {
      if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('./');
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName(
      'Hi, I’m Hugo Chen.',
    );
    for (const id of ['about', 'journal', 'experience', 'projects', 'skills', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
    await expect(page.locator('.moment-card')).toHaveCount(6);
    await expect(page.locator('.featured-grid .project-card')).toHaveCount(4);
    // Visit below-fold content before checking lazy image loading.
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await page.locator('#about').scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        page
          .locator('img')
          .evaluateAll((images) => images.every((img) => img.complete && img.naturalWidth > 0)),
      )
      .toBe(true);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
    expect(await page.locator('a[href="#"]').count()).toBe(0);
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `tmp/screenshots/home-${width}.png`, fullPage: true });
    await page.locator('#experience').screenshot({
      path: `tmp/screenshots/experience-${width}.png`,
      style: '.site-header { visibility: hidden; }',
    });
  });
}

for (const width of [375, 768, 1440]) {
  test(`work experience timeline is reachable and readable at ${width}px`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => {
      if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('./');
    const opener = page.getByRole('link', { name: 'View all work experience' });
    await opener.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/Personal-Website\/experience\.html$/);
    await page.reload();
    await expect(page).toHaveTitle('All Work Experience | Hugo Chen');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Learning by doing.');
    await expect(page.locator('.work-card h2')).toHaveText([
      'Software Engineer Intern',
      'Web Developer & Carpenter',
      'Bike Mechanic',
    ]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `tmp/screenshots/work-experience-${width}.png`, fullPage: true });
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.getByRole('link', { name: 'Back to my story' }).click();
    await expect(page).toHaveURL(/index\.html#experience$/);
    await expect(page.locator('#experience')).toBeInViewport();
  });
}

test('project dialog traps focus, closes on Escape, and restores the opener', async ({ page }) => {
  await page.goto('./');
  const opener = page.getByRole('button', { name: 'View BehindTheETF project details' });
  await opener.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('heading', { name: 'BehindTheETF' })).toBeVisible();
  await expect(dialog.getByRole('link', { name: 'Explore on GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/Bobwillrule/BehindTheEtf',
  );
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab');
    expect(await dialog.evaluate((element) => element.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
  await opener.click();
  await page.getByRole('button', { name: 'Close project details' }).click();
  await expect(dialog).not.toBeVisible();
});

test('gallery filtering and project details work after a direct page load', async ({ page }) => {
  await page.goto('./projects.html');
  await expect(page.locator('.gallery-grid .project-card')).toHaveCount(7);
  await page.getByRole('button', { name: 'AI & Data', exact: true }).click();
  await expect(page.locator('.gallery-grid .project-card')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'AI Trader', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Engineering', exact: true }).click();
  await page.getByRole('button', { name: 'View Four-way Coffee Table project details' }).click();
  await expect(page.getByRole('link', { name: 'Read project portfolio' })).toHaveAttribute(
    'href',
    './documents/Project-Portfolio.pdf',
  );
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'All projects', exact: true }).click();
  await expect(page.locator('.gallery-grid .project-card')).toHaveCount(7);
  await page.getByRole('button', { name: 'View Sewage Search project details' }).click();
  await expect(
    page.getByRole('dialog').getByRole('heading', { name: 'Sewage Search' }),
  ).toBeVisible();
  await expect(page.getByRole('dialog').locator('.eyebrow')).toContainText(
    'SFU Mountain Madness 2025',
  );
  await expect(
    page.getByRole('dialog').getByRole('link', { name: 'Explore on GitHub' }),
  ).toHaveCount(0);
  await page.keyboard.press('Escape');
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: 'tmp/screenshots/projects-1440.png', fullPage: true });
});

test('mobile menu closes on navigation and Escape; experience details expand', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('./');
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await expect(page.getByRole('navigation')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('navigation')).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Open navigation' })).toBeFocused();
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Experience' }).click();
  await expect(page.getByRole('navigation')).not.toBeVisible();
  await expect(page).toHaveURL(/#experience$/);
  await page.getByText('Behind the work', { exact: false }).click();
  await expect(page.getByText(/Collaborated with nine other interns/)).toBeVisible();
  await page.getByText('Before the code: more of my story', { exact: false }).click();
  await expect(page.getByRole('heading', { name: 'Web Developer & Carpenter' })).toBeVisible();
});

test('navigation underline follows the section being viewed', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('./');
  const navigation = page.getByRole('navigation');

  await expect(navigation.getByRole('link', { name: 'Home' })).toHaveAttribute(
    'aria-current',
    'location',
  );

  for (const [section, link] of [
    ['experience', 'Experience'],
    ['skills', 'Skills & Education'],
  ]) {
    await page.locator(`#${section}`).scrollIntoViewIfNeeded();
    await expect(navigation.getByRole('link', { name: link })).toHaveAttribute(
      'aria-current',
      'location',
    );
  }

  await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight }));
  await expect(navigation.getByRole('link', { name: 'Contact' })).toHaveAttribute(
    'aria-current',
    'location',
  );
});

test('resume downloads, legacy skills route, and reduced motion remain functional', async ({
  page,
  request,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  const resume = await page.getByRole('link', { name: 'View Resume' }).getAttribute('href');
  const response = await request.get(resume);
  expect(response.ok()).toBe(true);
  expect(response.headers()['content-type']).toContain('application/pdf');
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
  await page.goto('./skills.html');
  await expect(page).toHaveURL(/index\.html#skills$/);
  await expect(page.getByRole('heading', { name: 'Skills & Education' })).toBeVisible();
});

test('home, gallery, and project dialog pass automated accessibility checks', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('./');
  let results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
  await page.getByRole('button', { name: 'View BehindTheETF project details' }).click();
  results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
  await page.goto('./projects.html');
  results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
});
