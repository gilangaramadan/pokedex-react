/**
 * Created by gilangaramadan on 17-12-17.
 */


// A solution for React 16 complaining of missing rAF.

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
