//Counter Code//
var button = document.getElementById('counter');
var counter = 0;
var span = document.getElementById('count');

button.onclick = function() {
    //Make a request to counter endpoint//
    var request= new XMLHttpRequest();

    //Capture the response and store it in a variable//
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Action//
            if(request.status === 200) {
                var counter = request.responseText;
                span.innerHTML = counter.toString();
            }
        }
        //Not Done yet//
    };
   
    //Make the request//
    request.open('GET','http://explosionart.imad.hasura-app.io/counter',true);
    request.send(null);
};