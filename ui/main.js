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

//Submit name//
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to server and send the name
        var request= new XMLHttpRequest();

    //Capture the response and store it in a variable//
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Action//
            if(request.status === 200) {
                    var names = request.responseText;
                    names = JSON.parse(names);
                    var list = '';
                    for(var i=0; i< names.length; i++){
                        list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        //Not Done yet//
    };
   
    //Make the request//
    var nameInput = document.getElementById('name'); //Extract names after clicking submit, not before//
    var name = nameInput.value;
    request.open('GET','http://explosionart.imad.hasura-app.io/submit-name?name=' +name,true);
    request.send(null);
    
    //Capture a list of names and render it as a list//

};