(function(window) {
    "use strict";
    
    // private objects
    var divNumbers = document.getElementById("div-numbers");
    
    // public object
    var VIEW = {
        /*
         * clearNumbers()
         *
         *  Clears div where drawn numbers are shown
         *
         */
        clearNumbers: function() {
            
            // iterate through div removing all elements
            while (divNumbers.firstChild) {
                divNumbers.removeChild(divNumbers.firstChild);
            };
            
        },
        /*
         * addNumber()
         *
         *  Adds a new div showing a new drawn number
         *
         */
        addNumber: function(n) {
            
            // create new div element
            var newNumberElement = document.createElement("div");
            newNumberElement.className = "number";
            newNumberElement.innerHTML = n.toString();
            
            // add new div element to numbers div
            divNumbers.appendChild(newNumberElement);
            
        },
    };
    
    // Expose object to window
    window._VIEW = VIEW;
    
} (window));