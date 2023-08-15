//your code here
let arr =['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp={};
for(let i =0;i<arr.length;i++){
	let words = arr[i].split(" ");}
	let finalstring="";
	for(let j=0;j<words.length;j++)
		{
			let currentword=words[i].toLowerCase();
			if(currentword!=='a'&& currentword!=='an'&& currentword!=='the')
				finalstring+=words[i]+" ";
		
}
mp[arr[i]]=finalstring.trim();