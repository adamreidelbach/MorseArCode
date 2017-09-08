// // Create a model for the Morse Code interpreter.
// var morseCode = (function(){
    
    
//     // Define the duration of the dot in milliseconds.
//     this._dotDuration = 200;

//     // Define the duration of the dash in milliseconds. The
//     // dash is supposed to be 3x that of the dot.
//     this._dashDuration = (this._dotDuration * 3);

//     // Define the pause duration. This is the time between
//     // letters and is supposed to be 1x that of the dot.
//     this._pauseDuration = (this._dotDuration * 1);

//     // Define the pattern map for the morse code patterns
//     // as the relate the alpha-numeric characters that they
//     // represent.
//     this._patternMap = {
//         ".-": "A",
//         "-...": "B",
//         "-.-.": "C",
//         "-..": "D",
//         ".": "E",
//         "..-.": "F",
//         "--.": "G",
//         "....": "H",
//         "..": "I",
//         ".---": "J",
//         "-.-": "K",
//         ".-..": "L",
//         "--": "M",
//         "-.": "N",
//         "---": "O",
//         ".--.": "P",
//         "--.-": "Q",
//         ".-.": "R",
//         "...": "S",
//         "-": "T",
//         "..-": "U",
//         "...-": "V",
//         ".--": "W",
//         "-..-": "X",
//         "-.--": "Y",
//         "--..": "Z",
//         "-----": "0",
//         ".----": "1",
//         "..---": "2",
//         "...--": "3",
//         "....-": "4",
//         ".....": "5",
//         "-....": "6",
//         "--...": "7",
//         "---..": "8",
//         "----.": "9"
//     };

//     // I am the current, transient sequence being evaluated.
//     this._sequence = "";


//     // ---------------------------------------------- //
//     // ---------------------------------------------- //


//     // I add the given value to the current sequence.
//     //
//     // Throws InvalidTone if not a dot or dash.
//     this.addSequence = function( value ){

//         // Check to make sure the value is valid.
//         if (
//             (value !== ".") &&
//             (value !== "-")
//             ){

//             // Invalid value.
//             throw( new Error( "InvalidTone" ) );

//         }

//         // Add the given value to the end of the current
//         // sequence value.
//         this._sequence += value;

//         // Return this object reference.
//         return( this );

//     };


//     // I add a dash to the current sequence.
//     this.dash = function(){

//         // Reroute to the addSequence();
//         return( this.addSequence( "-" ) );

//     };


//     // I add a dot to the current sequence.
//     this.dot = function(){

//         // Reroute to the addSequence(); 
//         return( this.addSequence( "." ) );

//     };


//     // I get the alpha-numeric character set as an array of
//     // sequence-character pairs.
//     this.getAlphabet = function(){

//         // Create the empty set.
//         var characterSet = [];

//         // Loop over the patterns to map them to a character
//         // set item.
//         for (var pattern in this._patternMap){

//             // Push it onto the set.
//             characterSet.push({
//                 sequence: pattern,
//                 character: this._patternMap[ pattern ]
//             });

//         }

//         // Sort the character set alphabetically.
//         characterSet.sort(
//             function( a, b ){
//                 return( a.character <= b.character ? -1 : 1 );
//             }
//         );

//         // Return the character set.
//         return( characterSet );

//     };


//     // I get the dash duration.
//     this.getDashDuration = function(){

//         return( this._dashDuration );

//     };


//     // I get the dot duration.
//     this.getDotDuration = function(){

//         return( this._dotDuration );

//     };


//     // I get the pause duration.
//     this.getPauseDuration = function(){

//         return( this._pauseDuration );

//     };


//     // I reset the current sequence.
//     this.resetSequence = function(){

//         // Clear the sequence.
//         this._sequence = "";

//     };


//     // I get the possible character matches based on the
//     // current sequence.
//     this.resolvePartial = function(){

//         // Create an array to hold our possible characters.
//         var potentialCharacters = [];

//         // Loop over the pattern match to find partial matches.
//         for (var pattern in this._patternMap){

//             // Check to see if the current sequence can be
//             // the start of the given pattern.
//             if (pattern.indexOf( this._sequence ) === 0){

//                 // Add this character to the list.
//                 potentialCharacters.push(
//                     this._patternMap[ pattern ]
//                 );

//             }

//         }

//         // Return the potential character matches.
//         return( potentialCharacters.sort() );

//     };


//     // I get the alpha-numeric charater repsented by the
//     // current sequence. I also also reset the internal
//     // sequence value.
//     //
//     // Throws InvalidSequence if it cannot be mapped to a
//     // valid alpha-numeric character.
//     this.resolveSequence = function(){

//         // Check to see if the current sequence is valid.
//         if (!this._patternMap.hasOwnProperty( this._sequence )){

//             // The sequence cannot be matched.
//             throw( new Error( "InvalidSequence" ) );

//         }

//         // Get the alpha-numeric mapping.
//         var character = this._patternMap[ this._sequence ];

//         // Reset the sequence.
//         this._sequence = "";

//         // Return the mapped character.
//         return( character );

//     };


//     // ---------------------------------------------- //
//     // ---------------------------------------------- //


//     // Return this object reference.
//     return( this );


// }).call( {} );

// // Initialize the alphabet display.
// (function( $, container, morseCode ){
    
//     // Get the dom elements in this module.
//     var dom = {
//         characters: container.find( "ul.characters" ),
//         template: container.find( "script.template" )
//     };

//     // Get the the alphabet from the morse code model.
//     var alphabet = morseCode.getAlphabet();

//     // Loop over the alphabet to build the output.
//     for (var i = 0 ; i < alphabet.length ; i++){

//         // Get the current letter short-hand.
//         var letter = alphabet[ i ];

//         // Create a new instance of the template.
//         var template = $( dom.template.html() );

//         // Set the character.
//         template.find( "span.character" ).text(
//             letter.character
//         );

//         // Set the sequence.
//         template.find( "span.sequence" ).text(
//             letter.sequence
//         );

//         // Add the template to the output.
//         dom.characters.append( template );

//     }

// })( jQuery, $( "div.alphabet" ), morseCode );


// // -------------------------------------------------- //
// // -------------------------------------------------- //


// // Initialize the interpreter.
// (function( $, container, morseCode ){

//     // Get the dom elements in this module.
//     var dom = {
//         characters: container.find( "span.characters" ),
//         possibleCharacters: container.find( "span.possibleCharacters" )
//     };

//     // Get the dot and dash durations (in milliseconds).
//     var dotDuration = morseCode.getDotDuration();
//     var dashDuration = morseCode.getDashDuration();
//     var pauseDuration = morseCode.getPauseDuration();

//     // Store the date/time for the keydown.
//     var keyDownDate = null;

//     // Keep a timer for post-key resolution for characters.
//     var resolveTimer = null;

//     // Keep a timer for adding a new space to the message.
//     var spaceTimer = null;


//     // For this module, we are going to bind to any key click
//     // to indicate an interaction with the interpreter. There
//     // will be no other key interaction.
//     $( document ).keydown(
//         function( event ){

//             // Prevent any default action.
//             event.preventDefault();

//             // Check to see if there is a key-down date. If
//             // so, then exit - we only want the first press
//             // event to be registered.
//             if (keyDownDate){

//                 // Don't process this event.
//                 return;

//             }

//             // Clear the resolution timer.
//             clearTimeout( resolveTimer );

//             // Clear the space timer.
//             clearTimeout( spaceTimer );

//             // Store the date for this key-down.
//             keyDownDate = new Date();

//         }
//     );


//     $( document ).keyup(
//         function( event ){

//             // Prevent any default action.
//             event.preventDefault();

//             // Determine the keypress duration.
//             var keyPressDuration = ((new Date())- keyDownDate);

//             // Clear the key down date so subsequent key
//             // press events can be processed.
//             keyDownDate = null;

//             // Check to see if the duration indicates a dot
//             // or a dash.
//             if (keyPressDuration <= dotDuration){

//                 // Push a dot.
//                 morseCode.dot();

//             } else {

//                 // Push a dash.
//                 morseCode.dash();

//             }

//             // Display the possible characters for the current
//             // sequence.
//             dom.possibleCharacters.text(
//                 morseCode.resolvePartial().join( " , " )
//             );

//             // Now that the key has been pressed, we need to
//             // wait a bit to see if we need to resolve the
//             // current sequence (if the user doesn't interact
//             // with the interpreter, we'll resolve).
//             resolveTimer = setTimeout(
//                 function(){

//                     // Try to resolve the sequence.
//                     try {

//                         // Get the character respresented by
//                         // the current sequence.
//                         var character = morseCode.resolveSequence();

//                         // Add it to the output.
//                         dom.characters.text(
//                             dom.characters.text() + character
//                         );

//                     } catch (e) {

//                         // Reset the sequence - something
//                         // went wrong with the user's input.
//                         morseCode.resetSequence();

//                     }

//                     // Clear the possible matches.
//                     dom.possibleCharacters.empty();

//                     // Set a timer to add a new space to the
//                     // message.
//                     spaceTimer = setTimeout(
//                         function(){

//                             // Add a "space".
//                             dom.characters.text(
//                                 dom.characters.text() + "__"
//                             );

//                         },
//                         3500
//                     );

//                 },
//                 (pauseDuration * 3)
//             );

//         }
//     );

// })( jQuery, $( "div.output" ), morseCode );