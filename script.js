
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp={};
for(let j=0;j<touristSpots.length;j++)
	{ let words = touristSpots[j].split(" ");
	let finalstring="";
	for(let i =0;i<words.length;i++){
		let currentword=words[i].toLowerCase();
		if(currentword!=='a' && currentword!=='an' && currentword!=='the')
			finalstring += words[i]+ " ";
	
mp[touristSpots[i]]=finalstring.trim();
}}
	


