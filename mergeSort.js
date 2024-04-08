// Функция сортировки слиянием
function mergeSort(arr) {

	if (arr.length < 2) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	function merge(left, right) {
		const result = [];

		while (left.length && right.length) {
			if (left[0] < right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		}

		return result.concat(left, right);
	}

	return merge(mergeSort(left), mergeSort(right));
}

const arr = [5, 1, 4, 5, 2, 3, 1, 12, 7, 4, 43, 8, 9, 11];
const result = mergeSort(arr);

console.log('ARRAY FOR MERGE-SORT: ', arr);
console.log("MERGESORT RESULT: ", result)
