jQuery(document).ready(function($){
	// alert("dasd");
	
	// $('#registerForm').on('submit', function(event){
	// 	event.preventDefault();
 // 		var data = $(this).serialize();
 // 		console.log(data);
	// 		$.post('https://trashmasti.com/api_users/register.php', data,function(resp){
	// 		  console.log(resp);
	// 		},"json");
		

	// });
	$('#registerForm').on('submit', function(event){
    event.preventDefault();
    var form_data = $(this).serialize();
    console.log(form_data);
    if (window.navigator.onLine == false) {
          alert("Please Chek Your Internet Connection.");
        }
       

    $.post("https://trashmasti.com/api_users/register.php",form_data, function(resp){
    console.log(resp);

                if(resp == resp) {
                    //store
                    navigator.notification.alert("Registration Successfully..!", function() {});

                     

                    //window.location = "sale_trash.html";

               

                 } 
                 else {
                    navigator.notification.alert("Registration failed..!", function() {});
                 }
      });
        
    });
});
