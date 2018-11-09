var classList;
var URL_list;
var tag_list;
var image_notfound = "noimage.png";

$(document).ready(function(){
  classList = $(".article");

  URL_list = [];
  tag_list = [];
  classList.each(function(){
    URL_list.push($(this).attr("href"));
    var currentTagList = $(this).attr("tag").split(" ");
    tag_list.push(currentTagList);
  });

  for(var i=0;i<classList.length;i++){
    ajax(i);
  }
});


function ajax(index){
  $.ajax( {
    type: 'GET',
    url: URL_list[index],
    complete: function(d){
      var responseText = $( "<div>" + d.responseText + "</div>" );
      var notFound;
      var title, desk, image;
      var image_notfound = "../src/noimage.png";
      var pdf_image = "../src/pdf_image.png";

      notFound = true;
      propertyList = ["og:title", "title"];
      for(var j=0;j<propertyList.length;j++){
        var m = responseText.find("meta[property=\"" +  propertyList[j]  + "\"]");
        if(m.length>0){
          title = m.attr("content").replace("\r","").replace("\n","");
          if(title.length >= 41){
            title = title.substring(0,90) + "...";
          }
          notFound = false;
          break;
        }else{
          var m = responseText.find("meta[name=\"" +  propertyList[j]  + "\"]");
          if(m.length>0){
            var title = m.attr("content").replace("\r","").replace("\n","");
            if(desk.length >= 41){
              title = title.substring(0,90) + "...";
            }
            notFound = false;
            break;
          }
        }
      }
      if(notFound){
        if(responseText.find("title").length>0){
          title = responseText.find("title")[0].text;
        }else {
          title = "no title";
        }
      }
      if($(classList[index]).attr("title") != null){
        title = $(classList[index]).attr("title");
      }

      notFound = true;
      propertyList = ["og:description", "description"];
      for(var j=0;j<propertyList.length;j++){
        var m = responseText.find("meta[property=\"" +  propertyList[j]  + "\"]");
        if(m.length>0){
          desk = m.attr("content").replace("\r","").replace("\n","");
          if(desk.length >= 91){
            desk = desk.substring(0,90) + "...";
          }
          console.log(desk);
          notFound = false;
          break;
        }else{
          var m = responseText.find("meta[name=\"" +  propertyList[j]  + "\"]");
          if(m.length>0){
            var desk = m.attr("content").replace("\r","").replace("\n","");
            if(desk.length >= 101){
              desk = desk.substring(0,90) + "...";
            }
            console.log(desk);
            notFound = false;
            break;
          }
        }
      }
      if(notFound) desk="";
      if($(classList[index]).attr("description") != null){
        desk = $(classList[index]).attr("description");
      }

      notFound = true;
      propertyList = ["og:image", "image"];
      for(var j=0;j<propertyList.length;j++){
        var m = responseText.find("meta[property=\"" +  propertyList[j]  + "\"]");
        if(m.length>0){
          image = m.attr("content");
          notFound = false;
          break;
        }else{
          var m = responseText.find("meta[name=\"" +  propertyList[j]  + "\"]");
          if(m.length>0){
            var image = m.attr("content");
            notFound = false;
            break;
          }
        }
      }
      if(notFound) image = image_notfound;
      if($(classList[index]).attr("image") != null){
        image = $(classList[index]).attr("image");
      }
      if(URL_list[index].indexOf(".pdf")==URL_list[index].length-4) image = pdf_image;

      var currentURL = URL_list[index];
      var omittedURL = currentURL.substring(currentURL.indexOf("//")+2,currentURL.length);
      var domain = omittedURL.substring(0,omittedURL.indexOf("/"));

      var initCode = "<div>"
      var titleCode = "<h2 class=\"title\">" + title + "</h2><br>";
      var deskCode = "<div class=\"description\">" + desk + "</div><br>";
      var domainCode = "<div class=\"domain\">" + domain + "</div>";
      var tagCode = "<div class=\"tagList\">tag:";
      for(var i=0;i<tag_list[index].length;i++){
        tagCode = tagCode + "<span class=\"tag\">" + tag_list[index][i] + "</span>";
      }
      tagCode = tagCode +  "</div>";
      var imageCode = "<img src=\"" + image + "\" class=\"thumbnail\">";
      var finalCode = "</div>";

      classList[index].innerHTML = initCode + titleCode + deskCode + domainCode + tagCode + imageCode + finalCode;

      $(classList[index]).find('img').on('error',function(e){
        $(this).attr("src",image_notfound);
      });
    }
  });
}
