function tarif(age) {
	if (age < 5) return "Gratuit";
	else if (age < 19) return "Réduit";
	else return "Plein tarif";
}

console.log(tarif(Number(prompt("Entrez votre age: "))));