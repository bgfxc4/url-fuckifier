window.onload = function() {
	generate_rev_config();
	const urlParams = new URLSearchParams(window.location.search);
	if(urlParams.get("url") != "" && urlParams.get("url") != undefined) {
		window.location = binary_to_text(fuck_to_binary(urlParams.get("url")));
	}
}
var isfirst = true;
function fuckify() {
	var input = document.getElementById("url_input").value;
	var output = window.location.href.split("?")[0] + "?url=" + binary_to_fuck(text_to_binary(input));
	document.getElementById("result_text").value = output;
	if(!isfirst) return
	isfirst = false;
	var copy_button = document.createElement("button");
	copy_button.setAttribute("onclick", `copy_url()`);
	copy_button.innerHTML = "Copy fucking url"
	document.getElementById("main_div").appendChild(copy_button);
}

function copy_url() {
	var to_copy = document.getElementById("result_text");
	to_copy.select();
	document.execCommand("copy");		
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
	var result = "";
	for (var i in chunks) {
		if(chunks[i].length == 5) {
			result += config[chunks[i]];
			if(i < chunks.length - 1) result += "_";
		} else {
			for (var j = 0; j < chunks[i].length; j ++) {
				result += config[chunks[i].substring(j, j+1)];
				if(j != (chunks[i].length - 1)) result += "_";
			}
		}
	}
	return result;
}

function fuck_to_binary(fuck) {
	var splitted = fuck.split("_");
	var binary = "";
	for (var i in splitted) {
		for (var j in config) {
			if(config[j] == splitted[i]) {
				binary += j;
				break;
			}
		}
	}
	return binary;
}

function binary_to_text(bin) {
    return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
		return String.fromCharCode(parseInt(bin, 2))
    });
}

