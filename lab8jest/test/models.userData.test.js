const User = require('../models/user');
const UserData = require('../models/userData');

// Count method
describe('Count user', () => {
    test('default user count', () => {
      const testUserData = new UserData();
      const userCount = testUserData.getUserCount();
      expect(userCount).toEqual(3);
    })

    test('clear user and Count', () => {
        const testUserData = new UserData();
        testUserData.clearUsers()
        const userCount = testUserData.getUserCount();
        expect(userCount).toEqual(0);
    
    })
})

// Remove user
describe('remove user', () => {
    test('Remove one', () => {
      const testUserData = new UserData();
      const userCountBefore = testUserData.getUserCount();
      testUserData.removeOneUser();
      const userCountAfter = testUserData.getUserCount();
      const difUser = userCountBefore - userCountAfter;
      expect(difUser).toEqual(1);
    })

    test('Remove two users and update the count', () => {
      const testUserData = new UserData();
      testUserData.removeTwoUser();
      expect(testUserData.getUserCount()).toEqual(1);
      expect(testUserData.users).toHaveLength(1);
    })

    test('Remove two users from an empty list without a negative count', () => {
      const testUserData = new UserData();
      testUserData.clearUsers();
      testUserData.removeTwoUser();
      expect(testUserData.getUserCount()).toEqual(0);
      expect(testUserData.users).toHaveLength(0);
    })
})

// Find user
describe('Find user by email', () => {
    test('find a user by email', () => {
      const testUserData = new UserData();
      testUserData.addUser(new User('Jane', 'Jane@gmail.com'));
      const name = testUserData.findUserbyEmail('Jane@gmail.com');
      expect(name).toEqual('Jane');
    })

    test('return null when the email does not exist', () => {
      const testUserData = new UserData();
      const name = testUserData.findUserbyEmail('trump@using.gov');
      expect(name).toBeNull();
    })
})
