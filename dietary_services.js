function role () {
let role = prompt('role');
   let message = "";
    if (role === 'Employee') {
        message = 'You can access the Dietary Services';
} else if (role === 'Enrolled Member') {
    message = 'You can access the Dietary Services and the Premium Services';
} else if (role === 'Subscriber') {
    message = 'You have partial access to the Dietary Services';
} else if (role === 'Non-Subscriber') {
    message = 'You do not have access to the Dietary Services, first you have to enroll or at least subscribe.';
} else {
    message = 'Invalid role';
}
return message;
}
document.getElementById('message').innerHTML = role();