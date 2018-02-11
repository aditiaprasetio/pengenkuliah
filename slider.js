/* Slider Widget
--------------------------------------*/

  var numOfSliderPosts = 5;
  var slider = $('#slider .widget-content');
  var sliderContent = slider.text().trim();
  var sliderTitle = $('#slider .title').text();

  slider.removeClass('widget-content').addClass(''+ sliderTitle +' clearfix');

  if(sliderTitle === "slider1" || sliderTitle === "slider2") {

  if((sliderContent !== "random") && (sliderContent.charAt(0) !== "[")) {
      $.ajax({
        url: "/feeds/posts/default/-/" + sliderContent + "?alt=json-in-script&max-results="+ numOfSliderPosts +"",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var img  = new Array();

          for (var i = 0; i < 5; i++) {
            var entry = e.feed.entry[i];
            var posttitle = entry.title.$t;
            var posturl;

            var category = '<a class="post-category" href="/search/label/'+entry.category[0].term+'?max-results=7">'+entry.category[0].term+'</a>';		
            
            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

            if(i===0) {
              var trtd1 = '<div class="left-box-wrapper clearfix"><div class="left-box left1" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
            }

            if(i===1) {
              var trtd2 = '<div class="left-box left2" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div></div>';
            }

            if(i===2) {
              var trtd3 = '<div class="center-box clearfix" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
            }

            if(i===3) {
              var trtd4 = '<div class="right-box-wrapper clearfix"><div class="right-box right1" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
            }

            if(i===4) {
              var trtd5 = '<div class="right-box right2" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div></div>';
            }

            if(sliderTitle === "slider1") {
              slider.html(trtd1 + trtd2 + trtd3 + trtd4 + trtd5); 
            }
            if(sliderTitle === "slider2") {
              slider.html(trtd3 + trtd1 + trtd2 + trtd4 + trtd5); 
            }
          }

        }

      });
    } else if(sliderContent.charAt(0) === "[") {

      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var r = sliderContent.match(/[^[\]]+(?=])/g);
        var postsLength = e.feed.entry.length;

        for (var i = 0; i < postsLength; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t.toLowerCase();

          if(r[0].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

            var trtd1 = '<div class="left-box-wrapper clearfix"><div class="left-box left1" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
          }

          if(r[1].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

            var trtd2 = '<div class="left-box left2" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div></div>';
          }


          if(r[2].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

            var trtd3 = '<div class="center-box clearfix" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
          }

          if(r[3].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

            var trtd4 = '<div class="right-box-wrapper clearfix"><div class="right-box right1" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
          }

          if(r[4].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

            var trtd5 = '<div class="right-box right2" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div></div>';
          }

        }

        if(sliderTitle === "slider1") {
          slider.html(trtd1 + trtd2 + trtd3 + trtd4 + trtd5); 
        }
        if(sliderTitle === "slider2") {
          slider.html(trtd3 + trtd1 + trtd2 + trtd4 + trtd5); 
        }
      }

      });
  } else if(sliderContent.match("random")) {

      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var entryLength = e.feed.entry.length,
            a = entryLength - 5,
            n = Math.floor(Math.random() * (a + 1));

        $.ajax({
          url: "/feeds/posts/default?alt=json-in-script&end-index=" + n + "",
          type: "get",
          dataType: "jsonp",
          success: function (e) {

            var img  = new Array();

            for (var i = 0; i < 5; i++) {
              var entry = e.feed.entry[n+i];
              var posttitle = entry.title.$t;
              var posturl;
              
              var category = '<a class="post-category" href="/search/label/'+entry.category[0].term+'?max-results=7">'+entry.category[0].term+'</a>';		

              for (var k = 0; k < entry.link.length; k++) {
                if (entry.link[k].rel == 'alternate') {
                  posturl = entry.link[k].href;
                  break;
                }
              }

              if ("content" in entry) {
                var postcontent = entry.content.$t;
              }

              s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

              if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[n] = d;

              var tmb = img[n].replace('s1600/','s500-c/');

              if(i===0) {
                var trtd1 = '<div class="left-box-wrapper clearfix"><div class="left-box left1" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
              }

              if(i===1) {
                var trtd2 = '<div class="left-box left2" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div></div>';
              }

              if(i===2) {
                var trtd3 = '<div class="center-box clearfix" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
              }

              if(i===3) {
                var trtd4 = '<div class="right-box-wrapper clearfix"><div class="right-box right1" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div>';
              }

              if(i===4) {
                var trtd5 = '<div class="right-box right2" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></div></div>';
              }

            }

            if(sliderTitle === "slider1") {
              slider.html(trtd1 + trtd2 + trtd3 + trtd4 + trtd5); 
            }
            if(sliderTitle === "slider2") {
              slider.html(trtd3 + trtd1 + trtd2 + trtd4 + trtd5); 
            }
          }

        });

      }
    });

}

  } else if(sliderTitle === "slider3" || sliderTitle === "slider4") {

  if((sliderContent !== "random") && (sliderContent.charAt(0) !== "[")) {
      $.ajax({
        url: "/feeds/posts/default/-/" + sliderContent + "?alt=json-in-script&max-results=7",
        type: "get",
        dataType: "jsonp",
        success: function (e) {

          var img  = new Array();

          for (var i = 0; i < 7; i++) {
            var entry = e.feed.entry[i];
            var posttitle = entry.title.$t;
            var posturl;
          
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		
         
            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

            if(i===0) {
              var trtd1 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===1) {
              var trtd2 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===2) {
              var trtd3 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===3) {
              var trtd4 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===4) {
              var trtd5 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===5) {
              var trtd6 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===6) {
              var trtd7 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

          }
          if(sliderTitle === "slider3") {
            slider.html('<ul class="top-box-wrapper clearfix">' + trtd1 + trtd2 + trtd3 + trtd4 + '</ul><ul class="bottom-box-wrapper clearfix">' + trtd5 + trtd6 + trtd7 + '</ul>');
          } else if (sliderTitle === "slider4") {
            slider.html('<ul class="bottom-box-wrapper clearfix">' + trtd5 + trtd6 + trtd7 + '</ul>' + '<ul class="top-box-wrapper clearfix">' + trtd1 + trtd2 + trtd3 + trtd4 + '</ul>');
          } 

        }

      });

    } else if(sliderContent.charAt(0) === "[") {

      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var r = sliderContent.match(/[^[\]]+(?=])/g);
        var postsLength = e.feed.entry.length;

        for (var i = 0; i < postsLength; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t.toLowerCase();

          if(r[0].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+entry.category[0].term+'?max-results=7">'+entry.category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

var trtd1 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
          }

          if(r[1].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+entry.category[0].term+'?max-results=7">'+entry.category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

var trtd2 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
          }


          if(r[2].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

var trtd3 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
          }

          if(r[3].toLowerCase() === posttitle) {
          var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s400-c/');

         var trtd4 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';

          }

          if(r[4].toLowerCase() === posttitle) {
            var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s500-c/');

            var trtd5 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
          }

          if(r[5].toLowerCase() === posttitle) {
            var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s500-c/');

            var trtd6 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
          }

          if(r[6].toLowerCase() === posttitle) {
            var img  = new Array();

            var posturl;
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		

            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

            var tmb = img[i].replace('s1600/','s500-c/');

            var trtd7 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
          }


        }

        if(sliderTitle === "slider3") {
          slider.html('<ul class="top-box-wrapper clearfix">' + trtd1 + trtd2 + trtd3 + trtd4 + '</ul><ul class="bottom-box-wrapper clearfix">' + trtd5 + trtd6 + trtd7 + '</ul>');
        } else if (sliderTitle === "slider4") {
          slider.html('<ul class="bottom-box-wrapper clearfix">' + trtd5 + trtd6 + trtd7 + '</ul>' + '<ul class="top-box-wrapper clearfix">' + trtd1 + trtd2 + trtd3 + trtd4 + '</ul>');
        } 
      }

      });
  } else if(sliderContent.match("random")) {

      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var entryLength = e.feed.entry.length,
            a = entryLength - 5,
            n = Math.floor(Math.random() * (a + 1));

        $.ajax({
          url: "/feeds/posts/default?alt=json-in-script&end-index=" + n + "",
          type: "get",
          dataType: "jsonp",
          success: function (e) {

            var img  = new Array();

          for (var i = 0; i < 7; i++) {
            var entry = e.feed.entry[n+i];
            var posttitle = entry.title.$t;
            var posturl;
          
            var category = '<a class="post-category" href="/search/label/'+e.feed.entry[i].category[0].term+'?max-results=7">'+e.feed.entry[i].category[0].term+'</a>';		
         
            for (var k = 0; k < entry.link.length; k++) {
              if (entry.link[k].rel == 'alternate') {
                posturl = entry.link[k].href;
                break;
              }
            }

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[n] = d;

            var tmb = img[n].replace('s1600/','s500-c/');

            if(i===0) {
              var trtd1 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===1) {
              var trtd2 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===2) {
              var trtd3 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===3) {
              var trtd4 = '<li class="top-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===4) {
              var trtd5 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===5) {
              var trtd6 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

            if(i===6) {
              var trtd7 = '<li class="bottom-box-item" style="background: url('+ tmb +') no-repeat center;background-size: cover">'+ category +'<a href="'+ posturl +'" class="slider-post-title"><h3 class="heading">'+ posttitle +'</h3></a></li>';
            }

          }
          if(sliderTitle === "slider3") {
            slider.html('<ul class="top-box-wrapper clearfix">' + trtd1 + trtd2 + trtd3 + trtd4 + '</ul><ul class="bottom-box-wrapper clearfix">' + trtd5 + trtd6 + trtd7 + '</ul>');
          } else if (sliderTitle === "slider4") {
            slider.html('<ul class="bottom-box-wrapper clearfix">' + trtd5 + trtd6 + trtd7 + '</ul>' + '<ul class="top-box-wrapper clearfix">' + trtd1 + trtd2 + trtd3 + trtd4 + '</ul>');
          } 

        }

        });

      }
    });

}

  } /* if(sliderTitle === "slider3") */



/* Main content Widgets
--------------------------------------*/

$(".home-widgets .HTML").each(function () {

  var widget = $(this);
  var widgetContent = widget.children(".widget-content");
  var widgetContentText = widgetContent.text().trim();
  var a = widgetContentText.match(/[^[\]]+(?=])/g);
  widgetContent.removeClass("widget-content").addClass(a[1]);

  if(a[1] === "bleft") {

    $.ajax({
      url: "/feeds/posts/default/-/" + a[0] + "?alt=json-in-script&max-results=6",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var img = new Array();
        var trtd2= '';

        for (var i = 0; i < 6; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t;
          var posturl;

          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 

          if (i === 0) {

            var category = '<a class="post-category" href="/search/label/' + entry.category[0].term + '?max-results=7">'+ entry.category[0].term +'</a>'

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);

            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;

            var post_image = img[i].replace('s1600/', 's500-c/');

            var trtd1 = '<div class="big-post clearfix" style="background: url(' + post_image + ') no-repeat center; background-size: cover;">'+ category +'<a href="' + posturl + '" class="post-title"><h2>' + posttitle + '</h2></a></div>';
          } else {

            trtd2 = trtd2 + '<li class="content-item"><a href="' + posturl + '" class="post-title"><h2>' + posttitle + '</h2></a></li>';

          }
        }

        widgetContent.html(trtd1 + "<ul class='other-posts'>" + trtd2 + "</ul>");
      }

    });

  } else if(a[1] === "grids") {

    $.ajax({
      url: "/feeds/posts/default/-/" + a[0] + "?alt=json-in-script&max-results="+ gridsPostsNum +"",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var img = new Array();
        var trtd = '';

        for (var i = 0; i < gridsPostsNum; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t;
          var posturl;
          var post_comments;
		  var comment_url;

          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 

          for (var k = 0; k < entry.link.length; k++) {
            if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
              post_comments = entry.link[k].title;
			  comment_url = entry.link[k].href;
              break;
            }
          } 

          if(post_comments === "0 Comments") {
            post_comments = "No comments";
          } else if (post_comments === "1 Comments") {
            post_comments = "1 Comment";
          }

          postdate = entry.published.$t;

          var day = postdate.split("-")[2].substring(0,2);
          var m = postdate.split("-")[1];
          var y = postdate.split("-")[0];

          var daystr = day+ '/' + m + '/' + y;

          if ("content" in entry) {
            var postcontent = entry.content.$t;
          }

          s = postcontent;
          a = s.indexOf("<img");
          b = s.indexOf("src=\"", a);
          c = s.indexOf("\"", b + 5);
          d = s.substr(b + 5, c - b - 5);

          if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;

          var post_image = img[i].replace('s1600/', 's500-c/');
          var summary = postcontent.replace(/<.+?>/g, '').substring(0, 120) + "...";

            var trtd = trtd + '<li class="grid_item"><a href="'+ posturl +'" class="grid_post-image" style="background: url('+ post_image +') no-repeat center; background-size: cover;"></a><a href="'+ posturl +'" class="grid_post-title"><h2 class="heading">'+ posttitle +'</h2></a><p class="grid_summary">'+ summary +'</p><div class="grid_post-info"><span class="publish-date"><i class="fa fa-clock-o icon"></i>'+ daystr +'</span><a class="comments" href="'+comment_url +'"><i class="fa fa-comment-o icon"></i>'+ post_comments +'</a></div></li>';
          
        }

        widgetContent.html("<ul class='grids_wrapper'>" + trtd + "</ul>");
      }

    });

  } else if(a[1] === "list") {

    $.ajax({
      url: "/feeds/posts/default/-/" + a[0] + "?alt=json-in-script&max-results=5",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var img = new Array();
        var trtd2 = '';

        for (var i = 0; i < 5; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t;
          var posturl;

          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 

          for (var k = 0; k < entry.link.length; k++) {
            if ((entry.link[k].rel === 'replies') && (entry.link[k].type === 'text/html')) {
              post_comments = entry.link[k].title;
			  comment_url = entry.link[k].href;
              break;
            }
          } 

          if(i===0) {

            if ("content" in entry) {
              var postcontent = entry.content.$t;
            }

            s = postcontent;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);

            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;

            var post_image = img[i].replace('s1600/', 's500-c/');
            var summary = postcontent.replace(/<.+?>/g, '').substring(0, 100) + "...";

            var trtd1 = '<div class="list_big-post"><a href="'+ posturl +'" class="post-image" style="background: url('+ post_image +') no-repeat center; background-size: cover;"></a><a href="'+ posturl +'" class="post-title"><h2>'+ posttitle +'</h2></a><p class="post-summary">'+ summary +'</p></div>';
          } else {
             var trtd2 = trtd2 + '<li class="list-item"><a href="'+ posturl +'" class="list_post-title"><h2 class="heading">'+ posttitle +'</h2></a></li>';
          }
          
        }

        widgetContent.html(trtd1 + "<ul class='list_other-posts'>" + trtd2 + "</ul>");
      }

    });

  } else if(a[1] === "threecolumns") {

    $.ajax({
      url: "/feeds/posts/default/-/" + a[0] + "?alt=json-in-script&max-results="+ threecolumnsPostsNum +"",
      type: "get",
      dataType: "jsonp",
      success: function (e) {

        var img = new Array();
        var trtd = '';

        for (var i = 0; i < threecolumnsPostsNum; i++) {
          var entry = e.feed.entry[i];
          var posttitle = entry.title.$t;
          var posturl;

          for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
              posturl = entry.link[k].href;
              break;
            }
          } 

          if ("content" in entry) {
            var postcontent = entry.content.$t;
          }

          s = postcontent;
          a = s.indexOf("<img");
          b = s.indexOf("src=\"", a);
          c = s.indexOf("\"", b + 5);
          d = s.substr(b + 5, c - b - 5);

          if ((a != -1) && (b != -1) && (c != -1) && (d != "")) img[i] = d;

          var post_image = img[i].replace('s1600/', 's500-c/');

          var trtd = trtd + '<li class="item clearfix"><a href="'+ posturl +'" class="post-image" style="background: url('+ post_image +') no-repeat center; background-size: cover;"></a><a href="'+ posturl +'" class="post-title"><h2 class="heading">'+ posttitle +'</h2></a></li>';
          
        }

        widgetContent.html("<ul class='items-wrapper'>" + trtd + "</ul>");
      }

    });

  }

});