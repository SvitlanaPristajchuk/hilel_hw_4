hamburgerChoice = 'hamburger';
cheesburgerChoice = 'cheeseburger';

hamburgerPrice = 10;
cheesburgerPrice = 15;
doubleCheesePrice = 5;

price = 0;

potatoSizeSmall = 'small';
potatoSizeMiddle = 'middle';
potatoSizeBig = 'big'

potatoSmallPrice = 10;
potatoMiddlePrice = 15;
potatoBigPrice = 20;

sauceKindMayo = 'mayonnaise'
sauceKindKetchup = 'ketchup'

sauceKindKetchupPrice = 2;
sauceKindMayoPrice = 3;




userChoice = prompt(`Would you like a ${hamburgerChoice} or a ${cheesburgerChoice}`)







if (userChoice !== null) {
    userChoice = userChoice.replaceAll(` `, ``).toLowerCase()
}
if (userChoice === cheesburgerChoice) {
    price += cheesburgerPrice
} else {
    userChoice = hamburgerChoice;
    price += hamburgerPrice
}


if (userChoice === cheesburgerChoice) {
    doubleCheese = confirm(`Would you like to add double cheese?`);
    if (doubleCheese) {
        price += doubleCheesePrice
    }

}


potatoChoice = confirm(`Would you like potato?`)
if (potatoChoice) {
    potatoSize = prompt(`Choose potato size: ${potatoSizeSmall}/${potatoSizeMiddle}/${potatoSizeBig}`)
    if (potatoSize !== null) {
        potatoSize = potatoSize.replaceAll(` `, ``).toLowerCase();
        if (potatoSize === potatoSizeMiddle) {
            price += potatoMiddlePrice
        } else if (potatoSize === potatoSizeBig) {
            price += potatoBigPrice
        }
    } else {
        prise += potatoSmallPrice
    }
}


sauceChoice = confirm(`Would you like sauce?`)

if (sauceChoice) {
    sauceKind = prompt(`Choose sauce: ${sauceKindKetchup}/${sauceKindMayo} :`)
    if (sauceKind !== null) {
        sauceKind = sauceKind.replaceAll(` `, ``).toLowerCase();
        if (sauceKind === sauceKindMayo) {
            price += sauceKindMayoPrice
        }
    } else {
        price += sauceKindKetchupPrice
    }
}


document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${userChoice} </li>
  		${potatoChoice ? `<li>Potato 🍟: ${potatoSize} </li>` : ``}
  		${sauceChoice ? `<li>Sauce 🧂: ${sauceKind}</li>` : ``}
  	</ul>
  	<p>Price: $ ${price} </p>
  `);





console.log(userChoice)
console.log(price)