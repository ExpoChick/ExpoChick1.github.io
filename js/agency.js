$(function(){$("a.page-scroll").bind("click",function(t){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1500,"easeInOutExpo"),t.preventDefault()})}),$("body").scrollspy({target:".navbar-fixed-top"}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});var imageHeight=parseInt($(".headlogo").css("height")),stopHeight=imageHeight/2,marginHeight=parseInt($(".navbar").css("margin-top"));stopMargin=marginHeight/2,$(window).scroll(function(t){var a=$(window).scrollTop(),e=marginHeight-a,i=imageHeight-a;i>=stopHeight?($(".headlogo").css("height",i),$(".navbar").css("margin-top",e)):$(".headlogo").css("height",stopHeight)}),$(document).ready(function(){$("#quote-carousel").carousel({pause:!0,interval:6e3})});