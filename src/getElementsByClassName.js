// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var result = []
  var hasClass = function(element) {
    if(element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if(element.hasChildNodes()) {
      for(var i = 0; i< element.childNodes.length; i++) {
        hasClass(element.childNodes[i]);
      }
    }
  }
  hasClass(document.body);
  return result;
  };