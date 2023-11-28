var fs = require('fs');
var in_data;

fs.readFile('fn_input.txt', function (err, data) {
	if (err) return console.error(err);
	in_data = data;
	console.log('Async input file content: ' + in_data);
});

console.log('Program Ended.');
