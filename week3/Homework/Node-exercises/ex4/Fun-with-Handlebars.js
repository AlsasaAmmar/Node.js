const subjects = [ 'shark', 'popcorn', 'poison', 'fork', 'cherry', 'toothbrush', 'cannon' ];
const punchlines = [
	'watch movie with',
	'spread some love',
	'put on cake',
	'clean toilets',
	'go to the moon',
	'achieve world piece',
	'help people learn programing'
];

const Handlebars = require('handlebars');

let randomNum = Math.floor(Math.random()*7);


let source = '{{subject}} is great to {{punchlines}}.';
let template = Handlebars.compile(source);

const randomSubjectCapitalized = subjects[randomNum].charAt(0).toUpperCase()+subjects[randomNum].slice(1);
const randomPunchlines = punchlines[randomNum];


let data = { "subject": `${randomSubjectCapitalized}`, "punchlines": `${randomPunchlines}` };
let result = template(data);

console.log(result);
