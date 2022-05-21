/*All Caps*/
function shout(string){
    return string.toUpperCase();
}
/*All lowercase*/
function whisper(string){
    return string.toLowerCase();
}
/*Logs*/
function logShout(string){
    console.log(shout(string));
}
function logWhisper(string){
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate (string) {
    if (string === string.toLowerCase())
{
    return("I can\'t hear you!");
}   else if (string === string.toUpperCase()) {
        return ("YES INDEED!");
    } 
       else if (string == "Let's have dinner together!"){
          return ("I would love to!");
       } 
       else {
           return ("Unable to Response");
       }

}