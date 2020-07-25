// search-result__action-button search-result__actions--primary artdeco-button artdeco-button--default artdeco-button--2 artdeco-button--secondary


var No_of_pages_to_go = 5; // Enter The Number of pages you want to go 
var no_of_accounts_to_follow = 30; // Enter a Desired Number


// Enter n = 0 if want to follow by number_of_pages 
// Enter n = 1 if want to follow by number_of_accounts_to_follow


var n = 0; // Enter Here 0 or 1


var x  = document.getElementsByClassName('search-result__action-button search-result__actions--primary artdeco-button artdeco-button--default artdeco-button--2 artdeco-button--secondary');
var p = 0
while((No_of_pages_to_go || n!=0)){
	if((n==1 || p==no_of_accounts_to_follow))break;
	for(var i=0; i<x.length(),p!=no_of_accounts_to_follow; i++){
		try{
			x[i].click();
			p+=1;
		}
    	catch{
    		continue;
    	}
	}
	No_of_pages_to_go-=1;
	var = document.getElementsById('ember2101').click(); 
}

