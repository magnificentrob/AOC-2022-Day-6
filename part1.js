'use strict'
var fs = require("fs");
const { exit } = require("process");
var text = fs.readFileSync("./input.txt");
var data = text.toString();
for(var i = 0; i < data.length - 3; i++){
	var marker = data.substring(i,i+4);
	if(checkIfDuplicateExists(marker) == false){
		console.log(i+4);
		break;
	}
}
function checkIfDuplicateExists(arr) {
	arr = arr.split('');
	var set_arr = new Set(arr);
	if(set_arr.size == arr.length){
		return false;
	}
	else
		return true;
	}