function createUser(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var user = createUser("Sergio Tacuri", "8617006", "seryitsarmin@gmail.com");
console.log(user);
