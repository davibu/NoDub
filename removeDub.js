function removeDubs(){
	var allItems = document.getElementsByClassName("release")//document.getElementsByTagName("article");
	var to_delete=[]
	for(let i = 0; i < allItems.length;i++){
		var textElements = allItems[i].getElementsByTagName("cite");
		for(let e of textElements){
			text = e.innerHTML.toString().toLowerCase();
			if( text.includes("dub)")){
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
