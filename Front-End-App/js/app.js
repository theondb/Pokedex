$(document).ready(function(){$(".nav-toggler").each(function(t,n){const a=$(n).data("target");$(n).on("click",function(){$(a).animate({height:"toggle"})})})});