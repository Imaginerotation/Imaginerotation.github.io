$( document ).ready(function() {
  $(".layer1").delay(0).fadeIn();
  console.log("The screen loaded");
});

$(window).on("orientationchange",function(){
  var currentLayer = "Blue";

  if($('.layer1').is(':visible'))
{
  console.log("Layer is blue");

  if (window.orientation == -90)
  {
    console.log("moved right when blue");
    $('.layer1').hide();
    $('.layer3').hide();
    $('.layer4').hide();
    $(".layer2_horiz").delay(0).fadeIn();

    currentLayer = "Yellow";
  }

  else if (window.orientation == 90) // Landscape
  {
    // $("p").css({"background-color":"pink","font-size":"200%"});
    console.log("moved left when blue");

    $('.layer1').hide();
    $('.layer2').hide();
    $('.layer3').hide();
    $(".layer4").delay(0).fadeIn();

    currentLayer = "Green";

  }
  else
  {
    return;
  }

}

else if($('.layer2').is(':visible'))
{
console.log("Layer is Yellow");


if (window.orientation == -90)
{
  console.log("moved right when yellow");

  $('.layer2').hide();
  $('.layer2_horiz').hide();
  $('.layer1').hide();
  $('.layer4').hide();
  $(".layer3").delay(0).fadeIn();

  currentLayer = "Red";

}

else if (window.orientation == 90) // Landscape
{
  console.log("moved left when yellow");

  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer2').hide();
  $('.layer3').hide();
  $('.layer4').hide();
  $(".layer1").delay(0).fadeIn();

  currentLayer = "Blue";

}
else {
  return;
}

}

else if($('.layer3').is(':visible'))

{
  console.log("Layer is Red");

if (window.orientation == -90)
{
  console.log("moved right when red");

  $('.layer3').hide();
  $('.layer2').hide();
  $('.layer1').hide();
  $(".layer4").delay(0).fadeIn();

  currentLayer = "Green";

}

else if (window.orientation == 90) // Landscape
{
  console.log("moved left when red");

  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer3').hide();
  $('.layer4').hide();
  $('.layer1').hide();
  $(".layer2").delay(0).fadeIn();

  currentLayer = "Yellow";

}
else {
  return;
}

}

else if($('.layer4').is(':visible'))

{
  console.log("Layer is Green");

if (window.orientation == -90)
{
  console.log("moved right when green");

  $('.layer4').hide();
  $('.layer3').hide();
  $('.layer2').hide();
  $(".layer1").delay(0).fadeIn();

  currentLayer = "Blue";

}

else if (window.orientation == 90) // Landscape
{
  console.log("moved left when green");

  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer4').hide();
  $('.layer2').hide();
  $('.layer1').hide();
  $(".layer3").delay(0).fadeIn();

  currentLayer = "Red";

}
else {
  return;
}

}
else {
  return;
}

}

);
