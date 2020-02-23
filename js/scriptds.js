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
    $("#arrow-hidden").slideToggle();
    $("#arrow-showing").slideToggle();
  }
  );
  $(".clickableOne").click(function(){
    $("#folder-hidden").slideToggle();
    $("#folder-showing").slideToggle();
  }
  );
  $(".clickableTwo").click(function(){
    $("#clipboard-hidden").slideToggle();
    $("#clipboard-showing").slideToggle();
  }
  )
}
)