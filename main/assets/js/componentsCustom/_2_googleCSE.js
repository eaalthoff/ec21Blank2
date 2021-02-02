// adding attributes so it's easier to understand the forms purpose
  // callback executed when canvas was found
  function handleCanvas(canvas) { 
    var b = document.querySelector('#gsc-i-id1');
    b.setAttribute("placeholder", "Search...");
      b.setAttribute("aria-label", "Search");
   }
  
  // set up the mutation observer
  var observer = new MutationObserver(function (mutations, me) {
    // `mutations` is an array of mutations that occurred
    // `me` is the MutationObserver instance
    var canvas = document.getElementById('gsc-i-id1');
    if (canvas) {
      handleCanvas(canvas);
      me.disconnect(); // stop observing
      return;
    }
  });
  
  // start observing
  observer.observe(document, {
    childList: true,
    subtree: true
  });