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
  }
  );
  $("#services").css({
    "text-align":"center",
    "color":"white",
    "padding":"60px"
  }
  );
  $("#intouch").css({
    "color":"white",
  }
  );
  $(".clickable").click(function(){
    $("#arrow-hidden").toggle();
    $("#arrow-showing").toggle();
  }
  );
  $(".clickableOne").click(function(){
    $("#folder-hidden").toggle();
    $("#folder-showing").toggle();
  }
  );
  $(".clickableTwo").click(function(){
    $("#clipboard-hidden").toggle();
    $("#clipboard-showing").toggle();
  }
  )
}
)