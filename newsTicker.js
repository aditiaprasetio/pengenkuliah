/* News Ticker Widget
--------------------------------------*/
 
  var newsTicker = $('#newsTicker .widget-content');
  var newsTickerContent = newsTicker.text().trim();
  var newsTickerUl = $('#news-ticker');
  newsTicker.remove();

  if(newsTickerContent !== "recent") {
      $.ajax({
        url: "/feeds/posts/default/-/" + newsTickerContent + "?alt=json-in-script&max-results="+ newsTickerPostsNum +"",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var trtd = '';

          for (var i = 0; i < newsTickerPostsNum; i++) {
            var entry = e.feed.entry[i];
            var posttitle = entry.title.$t;
            var posturl;

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            postdate = entry.published.$t;

            var month = [1,2,3,4,5,6,7,8,9,10,11,12];
            var month2 = ["01","02","03","04","05","06","07","08","09","10","11","12"];

            var day = postdate.split("-")[2].substring(0,2);
            var m = postdate.split("-")[1];
            var y = postdate.split("-")[0];

            for(var u2=0;u2<month.length;u2++){
              if(parseInt(m)==month[u2]) {
                m = month2[u2] ; break;
              }
            }

            var daystr = day+ '/' + m + '/' + y;

            var trtd = trtd + '<li><span class="news-ticker-post-timestamp">'+daystr+'</span><a class="ticker-title" href="'+posturl+'"><h3>'+posttitle+'</h3></a></li>';

          }

        newsTickerUl.html(trtd);

        }

      });

    } else {

      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results="+ newsTickerPostsNum +"",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var trtd= '';

          for (var i = 0; i < newsTickerPostsNum; i++) {
            var entry = e.feed.entry[i];
            var posttitle = entry.title.$t;
            var posturl;

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            postdate = entry.published.$t;

            var month = [1,2,3,4,5,6,7,8,9,10,11,12];
            var month2 = ["01","02","03","04","05","06","07","08","09","10","11","12"];

            var day = postdate.split("-")[2].substring(0,2);
            var m = postdate.split("-")[1];
            var y = postdate.split("-")[0];

            for(var u2=0;u2<month.length;u2++){
              if(parseInt(m)==month[u2]) {
                m = month2[u2] ; break;
              }
            }

            var daystr = day+ '/' + m + '/' + y;

            var trtd = trtd + '<li><span class="news-ticker-post-timestamp">'+daystr+'</span><a class="ticker-title" href="'+posturl+'"><h3>'+posttitle+'</h3></a></li>';

          }

        newsTickerUl.html(trtd);
      }

      });
  }
  
var htmlElement = document.querySelector('&quot;html&quot;');
var leftOrRight = htmlElement.getAttribute('&quot;dir&quot;');
  
  if(leftOrRight === '&quot;ltr&quot;') {
    jQuery(function(){
      jQuery(&#39;#news-ticker&#39;).webTicker({
             speed: 100,
             });
    });
  }

  if(leftOrRight === '&quot;rtl&quot;') {
    jQuery(function(){
      jQuery(&#39;#news-ticker&#39;).webTicker({
             speed: 100,
             direction: '&quot;right&quot';
             });
    });
  }