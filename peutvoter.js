function peutVoter(age, nationality) {
	if (age >= 18 && nationality.toLocaleLowerCase() == "française") {
		return "Eligible";
	}
	else return "Non eligible";
}

let age = Number(prompt("Entrez votre age: "));
let nationality = prompt("Entrez votre nationalitée: ");

console.log(peutVoter(age, nationality));