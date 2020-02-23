//Align text and change font color

$(document).ready(function(){
  $("#header").css({
    "text-align": "center",
    "font-style": "bold",
    "color": "white"
  });
  $("#header2").css({
    "text-align": "center",
    "color": "white"
  });
  $("#identity").css({
    "text-align":"center"
  });
  $("#services").css({
    "text-align":"center",
    "color":"white",
    "padding":"60px"
  });
  $("#intouch").css({
    "color":"white",
  });
}
);

//Validate users' input
validaterUserInput();

function validaterUserInput(){
  let userName = document.getElementById("cname").value;
  if(userName === "" || username === null){
    alert("Please enter your name");
    return false;
  }
}

$("#intouch").submit(function(event){
  $()
})

// Add toggle effect

$(document).ready(function(){
  $(".clickable").click(function(){
    $("#arrow-hidden").slideToggle();
    $("#arrow-showing").slideToggle();
  });
  $(".clickableOne").click(function(){
    $("#folder-hidden").slideToggle();
    $("#folder-showing").slideToggle();
  });
  $(".clickableTwo").click(function(){
    $("#clipboard-hidden").slideToggle();
    $("#clipboard-showing").slideToggle();
  });

  //Add hover effect

  $("#work4").mouseenter(function(){
    $("#overlay").show();
  }).mouseleave(function(){
    $("#overlay").hide();
  });
  $("#work3").mouseenter(function(){
    $("#overlayUn").show();
  }).mouseleave(function(){
    $("#overlayUn").hide();
  });
  $("#work2").mouseenter(function(){
    $("#overlayDeux").show();
  }).mouseleave(function(){
    $("#overlayDeux").hide();
  });
  $("#work1").mouseenter(function(){
    $("#overlayTrois").show();
  }).mouseleave(function(){
    $("#overlayTrois").hide();
  });
  $("#work5").mouseenter(function(){
    $("#overlayQuatre").show();
  }).mouseleave(function(){
    $("#overlayQuatre").hide();
  });
  $("#work6").mouseenter(function(){
    $("#overlayCinq").show();
  }).mouseleave(function(){
    $("#overlayCinq").hide();
  });
  $("#work7").mouseenter(function(){
    $("#overlaySix").show();
  }).mouseleave(function(){
    $("#overlaySix").hide();
  });
  $("#work8").mouseenter(function(){
    $("#overlaySept").show();
  }).mouseleave(function(){
    $("#overlaySept").hide();
  });
});
