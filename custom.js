$( document ).ready(function() //Function recognises change in phone orientation
{
  $(".layer1").delay(0).fadeIn(); //Initialise screen with a colour as all layers set to hidden in CSS
  console.log("The screen loaded");
});

$(window).on("orientationchange",function(){
  if($('.layer1').is(':visible') || $('.layer1_horiz').is(':visible')) //Layer 1 is visible
{
  $('.layer1').fadeIn(); //Show portrait version of layer
  $('.layer1_horiz').hide(); //Remove horizontal version of layer

  if (window.orientation == -90) //Phone rotated horizontally to the right
  {
    $('.layer1').hide();
    $('.layer3').hide();
    $('.layer4').hide();
    $(".layer2_horiz").delay(0).fadeIn();

  }

  else if (window.orientation == 90) //Phone rotated horizontally to the left 
  {
    $('.layer1').hide();
    $('.layer2').hide();
    $('.layer3').hide();
    $(".layer4_horiz").delay(0).fadeIn();
  }
  else
  {
    return;
  }
}

else if($('.layer2').is(':visible') || $('.layer2_horiz').is(':visible') )
{
$('.layer2').fadeIn();
$('.layer2_horiz').hide();

if (window.orientation == -90)
{
  console.log("moved right when yellow");
  $('.layer2').hide();
  $('.layer2_horiz').hide();
  $('.layer1').hide();
  $('.layer4').hide();
  $(".layer3_horiz").delay(0).fadeIn();
}

else if (window.orientation == 90) // Landscape
{
  $('.layer2').hide();
  $('.layer3').hide();
  $('.layer4').hide();
  $(".layer1_horiz").delay(0).fadeIn();
}
else {
  return;
}
}

else if($('.layer3').is(':visible')|| $('.layer3_horiz').is(':visible'))

{
  $('.layer3').fadeIn();
  $('.layer3_horiz').hide();

if (window.orientation == -90)
{
  $('.layer3').hide();
  $('.layer2').hide();
  $('.layer1').hide();
  $(".layer4_horiz").delay(0).fadeIn();


}

else if (window.orientation == 90) // Landscape
{  $('.layer3').hide();
  $('.layer4').hide();
  $('.layer1').hide();
  $(".layer2_horiz").delay(0).fadeIn();
}
else {
  return;
}
}

else if($('.layer4').is(':visible') || $('.layer4_horiz').is(':visible'))

{
  $('.layer4').fadeIn();
  $('.layer4_horiz').hide();

if (window.orientation == -90)
{
  $('.layer4').hide();
  $('.layer3').hide();
  $('.layer2').hide();
  $(".layer1_horiz").delay(0).fadeIn();
}

else if (window.orientation == 90) // Landscape
{
  $('.layer4').hide();
  $('.layer2').hide();
  $('.layer1').hide();
  $(".layer3_horiz").delay(0).fadeIn();

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
