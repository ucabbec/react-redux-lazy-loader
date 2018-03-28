import data from './transcript.json';

export const returnPage = (num) => {
	const PageWords = breakPage(num);
	return breakParagraphs(PageWords);

}

const breakPage = (num) => {
	let page = parseInt(num) + 1;
	let pageCheck = 'p'+page
	
	return data.transcript.words.filter((word)=>{
		return word.para.search(pageCheck)>=0;
	})
}

const breakParagraphs = (wordArray) => {
	let returnArray = [];
	let paraString = '';
	let currentParragraph = wordArray[0].para;
	for(let each in wordArray){
		if(wordArray[each].para === currentParragraph){
			paraString = paraString+' '+wordArray[each].name;
		}else{
			returnArray.push(paraString);
			paraString = '';
			currentParragraph = wordArray[each].para;
			paraString = paraString+' '+wordArray[each].name;
		}
	}
	returnArray.push(paraString);
	return returnArray
}