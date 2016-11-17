$( document ).ready(function() {
  $(".layer1").delay(0).fadeIn();
  console.log("The screen loaded");
});

$(window).on("orientationchange",function(){

  if($('.layer1').is(':visible'))
{
  console.log("Layer is blue");
  $('.layer1').fadeIn();


  if (window.orientation == -90)
  {
    console.log("moved right when blue");
    $('.layer1').hide();
    $('.layer3').hide();
    $('.layer4').hide();
    $('.layer1_horiz').hide();
    $('.layer3_horiz').hide();
    $('.layer4_horiz').hide();
    $(".layer2_horiz").delay(0).fadeIn();

  }

  else if (window.orientation == 90) // Landscape
  {
    console.log("moved left when blue");

    $('.layer1').hide();
    $('.layer2').hide();
    $('.layer3').hide();
    $('.layer1_horiz').hide();
    $('.layer2_horiz').hide();
    $('.layer3_horiz').hide();
    $(".layer4_horiz").delay(0).fadeIn();


  }
  else
  {
    return;
  }

}

else if($('.layer2').is(':visible'))
{
console.log("Layer is Yellow");
$('.layer2').fadeIn();



if (window.orientation == -90)


{

  console.log("moved right when yellow");
  $('.layer2').hide();
  $('.layer2_horiz').hide();
  $('.layer1').hide();
  $('.layer4').hide();
  $('.layer1_horiz').hide();
  $('.layer4_horiz').hide();
  $(".layer3").delay(0).fadeIn();


}

else if (window.orientation == 90) // Landscape
{
  console.log("moved left when yellow");

  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer2').hide();
  $('.layer3').hide();
  $('.layer4').hide();
  $('.layer2_horiz').hide();
  $('.layer3_horiz').hide();
  $('.layer4_horiz').hide();
  $(".layer1").delay(0).fadeIn();


}
else {
  return;
}

}

else if($('.layer3').is(':visible'))

{
  console.log("Layer is Red");
  $('.layer3').fadeIn();


if (window.orientation == -90)
{
  console.log("moved right when red");

  $('.layer3').hide();
  $('.layer2').hide();
  $('.layer1').hide();
  $('.layer3_horiz').hide();
  $('.layer2_horiz').hide();
  $('.layer1_horiz').hide();
  $(".layer4").delay(0).fadeIn();


}

else if (window.orientation == 90) // Landscape
{
  console.log("moved left when red");

  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer3').hide();
  $('.layer4').hide();
  $('.layer1').hide();
  $('.layer3_horiz').hide();
  $('.layer4_horiz').hide();
  $('.layer1_horiz').hide();
  $(".layer2").delay(0).fadeIn();


}
else {
  return;
}

}

else if($('.layer4').is(':visible'))

{
  $('.layer4').fadeIn();

  console.log("Layer is Green");

if (window.orientation == -90)
{
  console.log("moved right when green");

  $('.layer4').hide();
  $('.layer3').hide();
  $('.layer2').hide();
  $('.layer4_horiz').hide();
  $('.layer3_horiz').hide();
  $('.layer2_horiz').hide();
  $(".layer1").delay(0).fadeIn();


}

else if (window.orientation == 90) // Landscape
{
  console.log("moved left when green");

  $('.layer4').hide();
  $('.layer2').hide();
  $('.layer1').hide();
  $('.layer4_horiz').hide();
  $('.layer2_horiz').hide();
  $('.layer1_horiz').hide();
  $(".layer3").delay(0).fadeIn();


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
