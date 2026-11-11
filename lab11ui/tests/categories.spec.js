const { test, expect } = require('@playwright/test');
const { CreateCategoryPage } = require('./pages/CreateCategoryPage');
const { CreateItemPage } = require('./pages/CreateItemPage');

test.describe('Category Management', () => {
  let createCategoryPage;
  let createItemPage;

  test.beforeEach(async ({ page }) => {
    createCategoryPage = new CreateCategoryPage(page);
    createItemPage = new CreateItemPage(page);
    await createCategoryPage.goto();
  });

  test('should not duplicate category when adding an existing category', async ({ page }) => {
    await createItemPage.goto();
    const initialCategories = await createItemPage.getCategoryOptions();
    const existingCategory = 'Electronics';
    expect(initialCategories).toContain(existingCategory);

    await createCategoryPage.goto();
    await createCategoryPage.createCategory(existingCategory);

    await expect(page).toHaveURL('/categories/new');

    await createItemPage.goto();
    const updatedCategories = await createItemPage.getCategoryOptions();
    const count = updatedCategories.filter((cat) => cat === existingCategory).length;
    expect(count).toBe(1);
    expect(updatedCategories.length).toBe(initialCategories.length);
  });

  test('should successfully add a new category and show it in item creation options', async ({ page }) => {
    const newCategory = `Category_${Date.now()}`;

    await createCategoryPage.createCategory(newCategory);

    await expect(page).toHaveURL('/categories/new');

    await createItemPage.goto();
    const categories = await createItemPage.getCategoryOptions();
    expect(categories).toContain(newCategory);
  });
});
