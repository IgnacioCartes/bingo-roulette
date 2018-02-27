(function(window) {
    "use strict";
    
    // Global variables
    var poll = [];
    var drawn = [];
    
    // Constants
    const MAX_NUMBER = 90;
    
    // Listeners
    document.getElementById("btn-draw").addEventListener("click", drawFunc);
    document.getElementById("btn-reset").addEventListener("click", resetFunc);
    
    // call Reset function to initialize
    resetFunc();
    
    
    
    /*
     * resetFunc()
     *
     * Initializes arrays, resets game
     *
     */
    function resetFunc() {
      
        // initializes arrays
        drawn = [];
        poll = [];
        for (var i = 1; i <= MAX_NUMBER; i++) poll.push(i);
        
        // clear div
        window._VIEW.clearNumbers();
        
    };
    
    
    
    
    /*
     * drawFunc()
     *
     * Draws a number from the poll
     *
     */
    function drawFunc() {
      
        // Gets a random number from the poll
        var randomPosition = Math.floor(Math.random() * poll.length);
        
        // Get number, splice from poll and push to drawn numbers array
        var polledNumber = poll[randomPosition];
        drawn.push(polledNumber);
        poll.splice(randomPosition, 1);
        
        // add number to div
        window._VIEW.addNumber(polledNumber);
        
    };
    
    
    
} (window));