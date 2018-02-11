//<![CDATA[

var bloggerSection = document.getElementById("blogger-section");
var facebookSection = document.getElementById("facebook-section");

var bloggerTab = document.getElementById("blogger-tab");
var facebookTab = document.getElementById("facebook-tab");

var facebookActive = true;
var bloggerActive = false;

bloggerTab.addEventListener("click", function () {
  if(!bloggerActive) {
	bloggerTab.classList.add("active-comment-tab");
	bloggerSection.classList.add("active-comment-section");
	facebookSection.classList.remove("active-comment-section");
	facebookTab.classList.remove("active-comment-tab");
	bloggerActive = true;
	facebookActive = false;
  } 
});


facebookTab.addEventListener("click", function () {
  if(!facebookActive) {
	facebookTab.classList.add("active-comment-tab");
	facebookSection.classList.add("active-comment-section");
	bloggerSection.classList.remove("active-comment-section");
	bloggerTab.classList.remove("active-comment-tab");
	facebookActive = true;
	bloggerActive = false;

  } 
});

//]]>