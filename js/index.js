
window.onload = function() {
	//console.log(window.location.search)
}

function fuckify() {
	var input = document.getElementById("url_input").value;
	binary_to_fuck(text_to_binary(input));
}


function text_to_binary(text) {
	var length = text.length, output = [];
	for (var i = 0;i < length; i++) {
		var bin = text[i].charCodeAt().toString(2);
		output.push(Array(8-bin.length+1).join("0") + bin);
	} 
	return output.join("");
}

function binary_to_fuck(binary) {
	var chunks = binary.match(new RegExp('.{1,5}', 'g'));
	console.log(chunks);
	var result = "";
	for (var i in chunks) {
		if(chunks[i].length == 5) {
			result += config[chunks[i]] + "_";
		} else {
			for (var j = 0; j < chunks[i].length; j ++) {
				console.log(chunks[i])
				console.log(chunks[i].substring(j, j+1) + " " + config[chunks[i].substring(j, j+1)])
				result += config[chunks[i].substring(j, j+1)];
				if(j != (chunks[i].length - 1)) result += "_";
			}
		}
	}
	console.log(result)
}
