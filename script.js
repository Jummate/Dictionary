


const words = {
	
	"dope": {
		pronunciation:"/dəʊp/",
		"part of speech":["noun "," verb"],
		meaning:["a drug that is taken by a person or given to an animal to affect their performance in a race or sport\n",
				"information on sb/sth, especially details that are not generally known\n",
				"to give a drug to a person or an animal in order to affect their performance in a race or sport\n",
				"to give somebody a drug, often in their food or drink, in order to make them unconscious; to put a drug in food, etc\n"
				],
		usage:["The athlete failed a <strong>dope</strong> test",
				"Give me the <strong>dope</strong> on the new boss",
				"Thieves <strong>doped</strong> a guard dog and stole $10 000 worth of goods"
			],
		synonyms:[],
	},
	"cholestrol": {
		pronunciation:"/kə'lestrərɒl/",
		"part of speech":["noun"],
		meaning:["a substance found found in blood, fat and most TISSUES of the body."],
		usage:["You need to cut down your <strong>cholestrol</strong> intake to avoid heart disease."],
		synonyms:[],

		"other related words":[]
	},
	"choleric": {
		pronunciation:"/'kɒlərik/",
		"part of speech":["adjective"],
		meaning:["easily made angry"],
		usage:["Watch what you say, she has a chronic <strong>choleric</strong> personality"],
		synonyms:["bad-tempered"],
		"other related words":[]
	},
	"volatile": {
		pronunciation:"/'vɒlətail/",
		"part of speech":["adjective "," noun"],
		meaning:["(of a person or their moods) changing easily from one mood to another",
				"(of a situation) likely to change suddenly; easily becoming dangerous",
				"(of a substance) that changes easily into a gas"
				],
		usage:["He has a highly <strong>volatile</strong> personality",
				"A highly <strong>volatile</strong> situation which riots might develop",
				"Petrol is a <strong>volatile</strong> substance"
			],
		synonyms:["unstable"],
		"other related words":["volatilty(noun)"]
	},
}

function render(disp, obj,detail){
	for(let x = 0; x < obj[detail].length; x++)
	{
		disp.innerHTML += `<p>${x + 1}. ${obj[detail][x]}</p>`;
	}
}
function checkWord(){
	let display = document.querySelector(".display");
	let word = document.querySelector("#search").value.toLowerCase();
	if(words[word]){
		const details = words[word];
		display.innerHTML = `<h1 style="color:blue;">${word}</h1>`;
		display.innerHTML += `<p>${details["pronunciation"]}<p>`;
		display.innerHTML += `<p>${details["part of speech"].toString()}</p>`;
		//display.innerHTML += `<p>${details["meaning"].toString()}</p>`;
		render(display,details,"meaning");
		display.innerHTML += "<h3 style='color:green;'>usage</h3>"
		render(display,details,"usage");
		display.innerHTML += words[word]["synonyms"].length ? "<h3 style='color:green;'>synonyms</h3>":"";
		render(display,details,"synonyms");
		display.innerHTML += words[word]["other related words"].length ? "<h3 style='color:green;'>other related words</h3>":"";
		render(display,details,"other related words");
		
	}
	else if(word){
		display.innerHTML = `<p>Oops!. <em>No result for your search.<em><p>`;
		display.innerHTML += `<p>The word <mark>\"${word}\"</mark> is not available yet in the dictionary.<p>`;
	}
}
document.querySelector("#submit").addEventListener("click", (event) => {
	event.preventDefault();
	checkWord();
})

addEventListener("keypress", (event) =>{
	if(event.key == "Enter"){
		checkWord();
	}
})
