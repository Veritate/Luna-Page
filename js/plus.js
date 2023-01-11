$(document).ready(function () {
	$(".all").hide();
	$(".all1").hide();
	$(".all2").hide();
	$(".all3").hide();
	$(".all4").hide();
	$(".button").toggle(function () {
		$(".simple").hide();
		$(".all").fadeIn("slow");
	}, function () {
		$(".simple").hide();
		$(".all").fadeIn();
	});
	$(".button0").toggle(function () {
		$(".all").hide();
		$(".simple").fadeIn("slow");
	}, function () {
		$(".all").hide();
		$(".simple").fadeIn();
	});
	$(".button1").toggle(function () {
		$(".simple1").hide();
		$(".all1").fadeIn();
	}, function () {
		$(".all1").hide();
		$(".simple1").fadeIn();
	});
	$(".button2").toggle(function () {
		$(".simple2").hide();
		$(".all2").fadeIn();
	}, function () {
		$(".all2").hide();
		$(".simple2").fadeIn();
	});
	$(".button3").toggle(function () {
		$(".simple3").hide();
		$(".all3").fadeIn();
	}, function () {
		$(".all3").hide();
		$(".simple3").fadeIn();
	});
	$(".button4").toggle(function () {
		$(".simple4").hide();
		$(".all4").fadeIn();
	}, function () {
		$(".all4").hide();
		$(".simple4").fadeIn();
	});

});
