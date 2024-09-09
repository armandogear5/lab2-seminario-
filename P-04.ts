function createUser(name: string, ci: string, email: string) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
const user = createUser("Sergio Tacuri", "8617006", "seryitsarmin@gmail.com");
console.log(user);
