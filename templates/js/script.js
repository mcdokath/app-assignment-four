$(function callAPI() {
	var url = "http://to-do-list-api.appspot.com/user";
	
	function jsonpCallback(response) {
		alert("worked");
	}
	
	$.ajax({
		url: url,
		dataType: 'jsonp',
		error: function(xhr, status, error) {
			alert(error.message);
		},
		success: jsonpCallback
	});
	return false;
});