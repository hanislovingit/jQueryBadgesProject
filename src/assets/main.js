$(function() {
  $.ajax({
    url: "https://www.codeschool.com/users/1250549.json",
    dataType: 'jsonp',
    success: function (response) {
      console.log(response);

      var innerHtml = "";

      response.courses.completed.forEach(function (course) {
        var divHtml = "<div class='course'><h3>" + course.title + "</h3><img src='" + course.badge + "'/><a href='" + course.url +
                      "' target='_blank' class='btn btn-primary'>Go to course</a></div>";
        innerHtml += divHtml;
      });

      $("#badges").html(innerHtml);
    }
  });
});
