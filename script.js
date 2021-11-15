let femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
let maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
document.getElementById('submit').addEventListener("click", function() {
    AkanNameGenerate();
})

function AkanNameGenerate() {

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;

    let dayOfWeek = new Date(date).getDay()

    if (gender == '' || date == "") {
        console.log("fill in your date birth and gender")
    } else if (gender == 'female') {
        console.log(`${name} ,you were born on a ${weekDays[dayOfWeek]} and your Akan name is ${femaleAkanNames[dayOfWeek]}`)
    } else if (gender == 'male') {
        console.log(`${name},you were born on a ${weekDays[dayOfWeek]} and your Akan name is ${maleAkanNames[dayOfWeek]}`)
    } else {
        console.log('You have not selected anything');
    }
}