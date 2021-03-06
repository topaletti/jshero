if (typeof jshero === "undefined") {
  var jshero = {};
}

/**
 * Only for usuage in pages build from main.html!
 */
jshero.actualKoan = (function() {

  var nextButtonHref = document.getElementById("next-button").href;

  var nextPageUrl = function() {
    return nextButtonHref;
  };

  var getId = function() {
    var parts = window.location.href.split("/");
    var lastPart = parts[parts.length -1];
    return lastPart.split(".")[0];
  };

  return {
    getId: getId,
    nextPageUrl: nextPageUrl
  };

})();
