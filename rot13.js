function rot13_enc(text) {
	function rot13_char(char) {
		const A = 'A'.charCodeAt(0);
		const Z = 'Z'.charCodeAt(0);
		const a = 'a'.charCodeAt(0);
		const z = 'z'.charCodeAt(0);
		let code = char.charCodeAt(0);
		if (code >= A && code <= Z) {
			return (code - A + 13) % 26 + A;
		}
		if (code >= a && code <= z) {
			return (code - a + 13) % 26 + a;
		}
		return code;
	}
	return text.replace(/./g, function(char){
		return String.fromCharCode(rot13_char(char))
	});
}


let output = document.getElementById('rot13_out');
let input = document.getElementById('rot13_in');

function rot13_update() {
	output.value = rot13_enc(input.value);
}

input.addEventListener('input', rot13_update)