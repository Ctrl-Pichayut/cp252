class Expense {
  /**
   * Represents an Expense entry.
   * @constructor
   * @param {string} date - The date of the transaction.
   * @param {number} income - The income amount.
   * @param {number} expense - The expense amount.
   * @param {string} detail - Description or details of the transaction.
   */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class representing the expense model.
 * @class
 */
class ExpenseModel {
  constructor() {
    /** @type {Expense[]} */
    this.expenses = [];
  }

  /**
   * Adds an expense object to the list.
   * @param {Expense} expense - An Expense instance to add.
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Returns all recorded expense entries.
   * @returns {Expense[]} Array of Expense instances.
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculates the total income across all entries.
   * @returns {number} Sum of all income entries.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculates the total expense amount across all entries.
   * @returns {number} Sum of all expense entries.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculates the remaining balance.
   * @returns {number} The net remaining amount (income minus expenses).
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };