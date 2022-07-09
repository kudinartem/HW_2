// Task No1

let userName = prompt('What is your name?', '').trim();
let firstLetterName = userName[0].toLocaleUpperCase();
let otherLettersName = userName.slice(1).toLocaleLowerCase();
let resultLettersName = `${firstLetterName}${otherLettersName}`;

// Task No2

let userSurname = prompt('What is your surname?', '').trim();
let firstLetterSurname = userSurname[0].toLocaleUpperCase();
let otherLettersSurname = userSurname.slice(1).toLocaleLowerCase();
let resultLettersSurname = `${firstLetterSurname}${otherLettersSurname}`;

// Task No3

let userEmail = prompt('Enter your eMail:').toLowerCase().replaceAll(' ', '');
let emptyLetterEmail = !userEmail.includes('@');
let firstLetterEmail = userEmail.startsWith('@');
let lastLetterEmail = userEmail.endsWith('@');
if (emptyLetterEmail) {
   currentEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (firstLetterEmail) {
   currentEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (lastLetterEmail) {
   currentEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
} else {
   currentEmail = userEmail;
}

// Task No4

let userYearOfBirth = parseInt(prompt('Ennter your year of berth:', '1990').replaceAll(' ', ''));
if (!isNaN(userYearOfBirth)) {
   let dayOfBirth = userYearOfBirth;
   let currentAge = new Date().getFullYear();
   let age = currentAge - dayOfBirth; 
   resultAge = age;
} else {
   resultAge = 'Not a valid number';
}

// Final result

document.write(`
   <ul>
      <li>Full name: ${resultLettersName} ${resultLettersSurname}</li>
      <li>Email: ${currentEmail}</li>
      <li>Age: ${resultAge}</li>
   </ul>
`);
