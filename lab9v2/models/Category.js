class CategoryManager {
  constructor() {
    this.categories = ['Electronics', 'Clothing', 'Books'];
  }

  getAll() {
    return this.categories;
  }

  create(name) {
    let isuccess = false
    console.time("createCategory");
    if (!this.categories.includes(name)) {
      this.categories.push(name);
      return true;
    }
    console.timeEnd("createCategory");
    return isuccess;
  }
}

// Export a single instance of the manager
module.exports = new CategoryManager();