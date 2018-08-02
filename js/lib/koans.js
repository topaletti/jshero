if (typeof jshero === "undefined") {
  var jshero = {};
}

jshero.koans = (function(storage) {

  var index = 0;
  var koans = [];

  var add = function(koan) {
    koan.setSolution = function(solution) {
      storage.setSolution(koan, solution);
    };
    koan.getSolution = function() {
      return storage.getSolution(koan);
    };
    koan.setShot = function(solution) {
      storage.setShot(koan, solution);
    };
    koan.getShot = function() {
      return storage.getShot(koan);
    };
    koans.push(koan);
  };

  /**
   * Pass an array of all koan ids that should appear in the tutorial.
   * This order in the array will define
   * the order in which the koans appear in the tutorial.
   */
  var initReorder = function(idArray) {

    if (idArray.length !== koans.length) {
      // This should not happend in production.
      console.log("ERROR: Koans-Order-Array length unequal to Koans length!");
    }

    var koan;
    var koansIdMap = {};
    for (var i = 0, l = koans.length; i < l; i++) {
      koan = koans[i];
      koansIdMap[koan.id] = koan;
    }

    koans = [];
    for (var i = 0, l = idArray.length; i < l; i++) {
      koan = koansIdMap[idArray[i]];
      if (koan != null) {
        koans.push(koan);
      } else {
        console.log("ERROR: No koan for koan-Id in order array!");
      }
    }
  }

  var getKoan = function() {
    return koans[index];
  };

  var hasNext = function() {
    return index + 1 < koans.length;
  };

  var nextId = function() {
    if (hasNext()) {
      return koans[index + 1].id;
    }
    return null;
  };

  var hasPrev = function() {
    return index > 0;
  };

  var prevId = function() {
    if (hasPrev()) {
      return koans[index - 1].id;
    }
    return null;
  };

  var setIndexByUrl = function() {
    var id = getKoanIdFromUrl();
    setIndexById(id);
  };

  var getIndex = function() {
    return index;
  };

  var getKoans = function() {
    return koans;
  };

  var clearSolutions = function() {
    for (var i = 0, l = koans.length; i < l; i++) {
      var koan = koans[i];
      storage.removeSolution(koan);
      storage.removeShot(koan);
    }
  };

  // --- private methods ---

  var getKoanIdFromUrl = function() {
    var parts = window.location.search.split("=");
    if (parts.length === 2) {
      if (parts[0] === "?koan") {
        return parts[1];
      } else if (parts[0] === "?pos" && parts[1] === "last") {
        return koans[koans.length - 1].id;
      }
    }
    return null;
  };

  var setIndexById = function(id) {
    for (var i = 0, l = koans.length; i < l; i++) {
      if (koans[i].id === id) {
        index = i;
        break;
      }
    }
  };

  return {
    add: add,
    initReorder: initReorder,
    nextId: nextId,
    hasNext: hasNext,
    prevId: prevId,
    hasPrev: hasPrev,
    getKoan: getKoan,
    setIndexByUrl: setIndexByUrl,
    getIndex: getIndex,
    getKoans: getKoans,
    clearSolutions: clearSolutions
  };

})(jshero.storage);
