document.addEventListener("DOMContentLoaded", function () {
      var squareDiv = document.getElementById("square");
      var triangleDiv = document.getElementById("triangle");
      var circleDiv = document.getElementById("circle");
      var response = document.getElementById("feedback");
  
      squareDiv.addEventListener("mouseover", function () {
          response.innerHTML = "You're hovering over the square";
      });
  
      squareDiv.addEventListener("mouseout", function () {
          response.innerHTML = "";
      });
  
      triangleDiv.addEventListener("mouseover", function () {
          response.innerHTML = "You're hovering over the triangle";
      });
  
      triangleDiv.addEventListener("mouseout", function () {
          response.innerHTML = "";
      });
  
      circleDiv.addEventListener("mouseover", function () {
          response.innerHTML = "You're hovering over the circle";
      });
  
      circleDiv.addEventListener("mouseout", function () {
          response.innerHTML = "";
      });
  });
  