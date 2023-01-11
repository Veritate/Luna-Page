$(document).ready(function () {
	$(".al").hide();
	$(".log").hide();
	$(".al1").hide();
	$(".al2").hide();
	$(".al3").hide();
	$(".al4").hide();
	$(".but").toggle(function () {
		$(".al0").hide();
		$(".al1").hide();
		$(".al2").hide();
		$(".al3").hide();
		$(".al4").hide();
		$(".al").fadeIn("4000");
	}, function () {
		$(".al0").hide();
		$(".al1").hide();
		$(".al2").hide();
		$(".al3").hide();
		$(".al4").hide();
		$(".al").fadeIn("4000");
	});
	$(".but2").toggle(function () {
		$(".al").hide();
		$(".al1").hide();
		$(".al2").hide();
		$(".al3").hide();
		$(".al4").hide();
		$(".al0").fadeIn("4000");
	}, function () {
		$(".al").hide();
		$(".al1").hide();
		$(".al2").hide();
		$(".al3").hide();
		$(".al4").hide();
		$(".al0").fadeIn("4000");
	});
	$(".but1").toggle(function () {
		$(".al").hide();
		$(".al0").hide();
		$(".al1").hide();
		$(".al3").hide();
		$(".al4").hide();
		$(".al2").fadeIn("4000");
	}, function () {
		$(".al").hide();
		$(".al0").hide();
		$(".al1").hide();
		$(".al3").hide();
		$(".al4").hide();
		$(".al2").fadeIn("4000");
	});

	$(".but3").toggle(function () {
		$(".al").hide();
		$(".al0").hide();
		$(".al1").hide();
		$(".al2").hide();
		$(".al4").hide();
		$(".al3").fadeIn("4000");
	}, function () {
		$(".al").hide();
		$(".al0").hide();
		$(".al1").hide();
		$(".al2").hide();
		$(".al4").hide();
		$(".al3").fadeIn("4000");
	});
	$(".but4").toggle(function () {
		$(".al").hide();
		$(".al0").hide();
		$(".al1").hide();
		$(".al2").hide();
		$(".al3").hide();
		$(".al4").fadeIn("4000");
	}, function () {
		$(".al").hide();
		$(".al0").hide();
		$(".al1").hide();
		$(".al2").hide();
		$(".al3").hide();
		$(".al4").fadeIn("4000");
	});
	$(".search").click(function () {
		$(".log0").hide();
		$(".log").show();
	});

});
