//<![CDATA[

  var tab1 = $("#sidebartab-item1");
  var tab2 = $("#sidebartab-item2");
  var tabWidget = document.querySelectorAll(".sidebartabs-wrapper .section .widget");
  var active = false;

  tab1.on("click", function () {
    if(active) {
      tab1.addClass("activetab"); 
	  tab2.removeClass("activetab");
      tabWidget[1].style.display = "none";
      tabWidget[0].style.display = "block"; 
      active = false;
    } 
  });

  tab2.on("click", function () {
    if(!active) {
      tab2.addClass("activetab");
      tab1.removeClass("activetab");
      tabWidget[0].style.display = "none";
      tabWidget[1].style.display = "block"; 
      active = true;
    } 
  });

  var bars = $(".top-nav-icon");
  var navMenu = $(".top-nav-wrapper .widget:first-child ul");

  bars.on("click", function () {
    navMenu.slideToggle();
  });


//]]>