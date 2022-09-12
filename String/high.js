"use strict"

function high(x, weight = 'lowercase') {
	const letters = {
		lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	};
	
	let iw = letters.lowercase.length + 1;
	let il = 0;
	const light = (weight === 'lowercase') ? 'uppercase' : 'lowercase';
	(weight !== 'lowercase' && weight !== 'uppercase') ?
	(weight = 'lowercase') : null;
	const ranges = {
		[weight]: letters[weight].map(letter => {
			iw++;
			return [
				letter,
				iw
			];
		}), 
		[light]: letters[light].map(letter => {
			il++;
			return [
				letter,
				il
			];
		}),
	};
	
	const words = x.split(' ');
	const biggestWord = words.reduce((biggest, word) => {
		const arrayWord = Array.from(word);
		const sumLetters = arrayWord.map(letter => {
			let l = 0;
			while(l < ranges['lowercase'].length) {
				if(letter === ranges['lowercase'][l][0]) {
					return ranges['lowercase'][l][1];
				};

				++l;
			};

			let u = 0;
			while(u < ranges['uppercase'].length) {
				if(letter === ranges['uppercase'][u][0]) {
					return ranges['uppercase'][u][1];
				};

				++u;
			};
		});

		const sumWord = sumLetters.reduce((sumWord, sumLetter) => {
			return sumWord + sumLetter;
		}, 0)

		if(biggest.size < sumWord) {
			return {
				size: sumWord,
				content: word
			};
		} else {
			return biggest;
		};
	}, {
		size: 0,
		content: ''
	}).content;
	
	return biggestWord;
};

