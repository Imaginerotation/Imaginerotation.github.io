$(window).on("orientationchange",function(){
  var currentLayer = "Blue";

  if(currentLayer == "Blue")
{
  if (window.orientation == 90)
  {
    $('.layer1').hide();
    $('.layer3').hide();
    $('.layer4').hide();
    $('.layer2').show();
    currentLayer = "Yellow";
  }
  else if (window.orientation == -90) // Landscape
  {
    // $("p").css({"background-color":"pink","font-size":"200%"});
    $('.layer1').hide();
    $('.layer2').hide();
    $('.layer3').hide();
    $('.layer4').show();
    currentLayer = "Green";

  }

}

else if(currentLayer == "Yellow")
{
if (window.orientation == 90)
{
  $('.layer2').hide();
  $('.layer1').hide();
  $('.layer4').hide();
  $('.layer3').show();
  currentLayer = "Red";

}
else if (window.orientation == -90) // Landscape
{
  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer2').hide();
  $('.layer3').hide();
  $('.layer4').hide();
  $('.layer1').show();
  currentLayer = "Blue";

}

}

else if(currentLayer == "Red")
{
if (window.orientation == 90)
{
  $('.layer3').hide();
  $('.layer2').hide();
  $('.layer1').hide();
  $('.layer4').show();
  currentLayer = "Green";

}
else if (window.orientation == -90) // Landscape
{
  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer3').hide();
  $('.layer4').hide();
  $('.layer1').hide();
  $('.layer2').show();
  currentLayer = "Yellow";

}

}

else if(currentLayer == "Green")
{
if (window.orientation == 90)
{
  $('.layer4').hide();
  $('.layer3').hide();
  $('.layer2').hide();
  $('.layer1').show();
  currentLayer = "Blue";

}
else if (window.orientation == -90) // Landscape
{
  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer4').hide();
  $('.layer2').hide();
  $('.layer1').hide();
  $('.layer3').show();
  currentLayer = "Red";

}

}




});
