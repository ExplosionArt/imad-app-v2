//Counter Code//
var button = document.getElementById("counter");
var counter = 0;

button.onClick = function() {
    //Make a request to counter endpoint//
  //  var request= new XMLHttpRequest();
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    //Capture the response and store it in a variable//
   /* request.onReadyStateChange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Action//
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not Done yet//
    };
   
    //Make the request//
    request.open('GET','http://explosionart.imad.hasura-app.io/counter',true);
    request.send(null);*/
};