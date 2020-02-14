

(function(){
	'use strict'
 
 // listen for the submission of the form
        document.getElementById("myform").addEventListener("submit", function(event){
            // prevent the default behavior
            event.preventDefault();

            // get all the text fields from the form
            const formData = document.querySelectorAll("input[type=text]");
            // create an array to hold values from the form
            const words = [];

            //loop through the fields and add the words to the array, one at a time.
            for( var i=0; i<formData.length; i++){
                words.push(formData[i].value);    
            }
            //You can see the array in the console, if you want...
            console.log(words);

            //run a function to put the words into the madlib... Function below...
            //Pass the array of words the user typed into the function
            makeMadLib(words);

        });

        //This function takes an array input, then constructs the madlib, peppering
        //in the user's words where necessary.
        function makeMadLib(theWords){
            const madlib = `In ${theWords[0]} years you will be  ${theWords[1]} married to ${theWords[2]} and live in ${theWords[3]}. You're in love, but you love your ${theWords[4]} more! Every morning you wake up at ${theWords[5]} and go to your job as a ${theWords[6]}. You are ${theWords[7]} at your job, but wish you could ${theWords[8]} instead!`;

            //Get the madlib container
            const mlContainer = document.getElementById('madlib');

            //Change the guts of the container to your madlib
            mlContainer.innerHTML = `<p>${madlib}</p>`;

            //change the class on the madlib container so you can see it.
            mlContainer.setAttribute("class", "visible");
        }
    }());