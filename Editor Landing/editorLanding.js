var json;
function start() {
    function loadJSON(callback) {   

        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', '../EmptyUnits/ENG/v1_0.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
        };
        xobj.send(null);  
    }
    function init() {
        loadJSON(function(response) {
         // Parse JSON string into object
            json = JSON.parse(response);
            console.log(json);
            
        });
    }
    init();
}
function empty() {
    window.location.href = `../Editor/editor.html?load=${JSON.stringify(json)}`;
}
function load() {
    window.location.href = `../Editor/editor.html?load=${document.getElementById("loadThis").value}`;
}