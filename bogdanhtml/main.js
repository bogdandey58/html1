$(document).ready(function(){
	$('button').on('click', myFunction);
});

function myFunction(){
	// 1. куда
	// 2. что
	// 3. что с этим делать
	$.post(
		// 1. '1.php',
		// 2. {},
		// 3. function(){}
		'1.php',
		{
			"a" : 7,
			"b" : 9
		},
		function(data){
			console.log(data);
		}
			
	);
}