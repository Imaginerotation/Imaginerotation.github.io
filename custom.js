$(window).on("orientationchange",function(){

  if(!$('.layer1').is(':visible'))
{
  if (window.orientation == 90)
  {
    $('.layer1').hide();
    $('.layer2').show();
  }
  else if (window.orientation == -90) // Landscape
  {
    // $("p").css({"background-color":"pink","font-size":"200%"});
    $('.layer1').hide();
    $('.layer4').show();
  }

}

else if(!$('.layer2').is(':visible'))
{
if (window.orientation == 90)
{
  $('.layer2').hide();
  $('.layer3').show();
}
else if (window.orientation == -90) // Landscape
{
  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer2').hide();
  $('.layer1').show();
}

}

else if(!$('.layer3').is(':visible'))
{
if (window.orientation == 90)
{
  $('.layer3').hide();
  $('.layer4').show();
}
else if (window.orientation == -90) // Landscape
{
  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer3').hide();
  $('.layer2').show();
}

}

else if(!$('.layer4').is(':visible'))
{
if (window.orientation == 90)
{
  $('.layer4').hide();
  $('.layer1').show();
}
else if (window.orientation == -90) // Landscape
{
  // $("p").css({"background-color":"pink","font-size":"200%"});
  $('.layer4').hide();
  $('.layer3').show();
}

}




});
