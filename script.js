
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp={};
for(let i=0;i<touristSpots.length;i++)
	{ let words = touristSpots[i].split(" ");
	let finalstring="";
	for(let i =0;i<words.length;i++){
		let currentword=words[i].toLowerCase();
		if(currentword!=='a' && currentword!=='an' && currentword!=='the')
		{finalstring += words[i]+ " ";
		}}	
mp[touristSpots[i]]=finalstring.trim();
}
	


