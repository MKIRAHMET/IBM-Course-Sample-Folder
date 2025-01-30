let userRole = "admin";
let accessLevel;

if (userRole === 'admin') {
    accessLevel = "Full Access granted";
} else if (userRole === 'manager') {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = "Welcome, admin";
    } else {
        userMessage = "Hello, user";
    }
} else {
    userMessage = "Please log in";
}
console.log("User Message:", userMessage);

let userType = 'subscriber';
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);


isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);
