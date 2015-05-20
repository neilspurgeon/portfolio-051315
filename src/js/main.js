$(function() {
	view();
	$("#main-content").on("click", "#test", function(e) {
		e.preventDefault();
		console.log(this.closest("section").id);
		alert(this.closest("section").id);
	});
});



var view = function () {
	$("nav").on("click", "a", function(e) {
		//e.preventDefault();
		var content = this.id;
		loadContent(content);
	});
};

var loadContent = function (content) {
	console.log(content);
	$.ajax({
		url: "_themes/portfolio051315/templates/" + content + ".html",
		success: function(res) {
			$("#main-content").html(res);
		}
	});
};



