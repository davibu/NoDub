function isTextDub(text){
	if(text.includes("dub"))
		return true;

	// also check if language is in the title like "Anime Title (English)" or "Anime title (Español)"
	if(text.includes("(") &&( text.endsWith(")") || text.endsWith(") "))){ // check if contains brackets like (some_text)
		brace_text = text.substr(text.indexOf("("),text.length-text.indexOf("("));
		brace_text = brace_text.trim();
		brace_text = brace_text.toLowerCase();

		let isLanguage = 
		brace_text.includes("中文") ||
		brace_text.includes("español") ||
		brace_text.includes("português") ||
		brace_text.includes("deutsch") ||
		brace_text.includes("français") ||
		brace_text.includes("italiano") ||
		brace_text.includes("русский") ||
		brace_text.includes("english");
		
		if(isLanguage)
			return true;
	}

	return false;

}

function removeDubs(){
	var allItems = document.getElementsByClassName("release")//document.getElementsByTagName("article");
	var to_delete=[]
	for(let i = 0; i < allItems.length;i++){
		var textElements = allItems[i].getElementsByTagName("cite");
		for(let e of textElements){
			text = e.innerHTML.toString().toLowerCase();
			if( isTextDub(text)){
				console.log("REMOVING: "+text);
				to_delete.push(allItems[i].parentElement);
			}
		}
	}
	for( let e of to_delete){
		e.remove();
	}
}

setTimeout(removeDubs,100);
