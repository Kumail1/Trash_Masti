
					   //  else{
					    	
					   // window.location = "index.html";
					   //  }
jQuery(document).ready(function($){
	if (window.localStorage["n"] != null) {
					   window.location = "pickup_request.html";
					    }
						
	// alert("dasd");
	


$('#loginForm').on('submit', function(event){
		event.preventDefault();
		$("#submit",this).attr("disabled","disabled");
				
				if (window.navigator.onLine == false) {
				 	alert("Please Chek Your Internet Connection.");
				}
        var n = $("#n", this).val();
        var p = $("#p", this).val();

 		event.preventDefault();
 		var data = $(this).serialize();
 		data = {
 			n: n,
 			p: p,
 		}
 		console.log(data);
		if(n != '' && p != '') {	
			$.post('https://trashmasti.com/api_users/login.php', data,function(resp){
			
			console.log(resp);

				if(resp == true) {
					//store
					 window.localStorage["n"] = n;
					 window.localStorage["p"] = p;   
					 
						// Logged In
					  window.location = "pickup_request.html";
					    

						
                    //window.location = "sale_trash.html";

               

				 } 
				 else {
				 	navigator.notification.alert("Your login failed", function() {});
				 }
		    	$("#submit").removeAttr("disabled");
			},"json");
		}
		return false;


	});
});