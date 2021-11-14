let femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
let maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var name = AkanNameGenerate => {
    let name = document.getElementById('success').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;

    let dayOfWeek = new Date(day).getDay()

    if (gender == 'female') {
        console.log();
        (`You were born on a ${weekDays[dayOfWeek]} and your Akan name is ${femaleAkanNames[dayOfWeek]}`)
    } else if (gender == 'male') {
        console.log();
        (`You were born on a ${weekDays[dayOfWeek]} and your Akan name is ${maleAkanNames[dayOfWeek]}`)
    } else {
        console.log('You have not selected anything');
    }
}