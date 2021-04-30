const R = 4;
const C = 5;
function prefixSum2D(array2D) {
	let psa = [];
	for(let i = 0; i < array2D.length; i++) {
		psa.push([]);
	}
	psa[0][0] = array2D[0][0];
	for(let i = 1; i < C; i++) {
		psa[0][i] = psa[0][i - 1] + array2D[0][i];
	}
	for(let i = 1; i < R; i++) {
		psa[i][0] = psa[i - 1][0] + array2D[i][0];
	}
	for(let i = 1; i < R; i++) {
		for(let j = 1; j < C; j++) {
			psa[i][j] = psa[i - 1][j] + psa[i][j - 1] - psa[i - 1][j - 1] + array2D[i][j];
		}
	}
	console.log(psa);
}

let array2D = [
	[1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1] 
];

prefixSum2D(array2D);