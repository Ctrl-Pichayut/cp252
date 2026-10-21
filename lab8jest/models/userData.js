const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.n = 0;
        this.users = [];
        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);

        });
    }

    // Method to add a user
    addUser(user) {
        this.users.push(user);
        this.n++
    }

    // Method to clear all users
    removeOneUser() {
        if (this.users.length === 0) {
            return null;
        }

        this.n--;
        return this.users.pop();
    }
    removeTwoUser() {
        this.removeOneUser();
        this.removeOneUser();
    }

    findUserbyEmail(email) {
        const user = this.users.find(user => user.email === email);
        return user ? user.name : null;
    }

    // Method to clear all users
    getUserCount() {
        return this.n;
    }

    // Method to clear all users
    clearUsers() {
        this.n = 0;
        this.users = [];
    }

    

}

module.exports = UserData;