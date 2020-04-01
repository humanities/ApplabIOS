var sw = window.screen.width;// (window.innerWidth > 0) ? window.innerWidth : screen.width;//screen.width;
//alert("hello"+screen.width);
 $(document).ready(function () {
                $('#divApplab').children().children().each(function (index) {
                    //alert('index: ' + index + ', text: ' + $(this).attr('id'));
                      var x = getProperty($(this).attr('id'),"x");
                      var nx = x+ ((sw-320)/2);
                      setProperty($(this).attr('id'),"x",nx);

                });
        });

var words = ["organelle","nucleus","cell membrane","cytoplasm","chloroplasts","cell wall","ribosome","endoplasmic reticulum","mitochondria","Golgi complex","vacuole","lysosome"];
var definitions =["a tiny cell structure that carries out a specific function within a cell","the control center of the cell that directs the cell's activities; it contains the chemical instructions that direct all the cell's activities (DNA)","thin  flexible barrier around a cell","The area inside a cell between the nucleus and the cell membrane","organelles that capture energy from the sunlight and use it to produce food for the cell","In plant cells  this stiff wall surrounds the cell membrane","the organelle in which amino acids are hooked together to make proteins","the organelle that makes lipids","the organelle that breaks down food molecules to make energy available (ATP)","the organelle that processes and transports proteins and other materials out of the cell","the organelle that stores water and other materials","the organelle that digests food particles"];
var index = 0;
onEvent("home_study_button", "click", function(event) {
  console.log("home_study_button clicked!");
  setScreen("study_screen")
});
onEvent("button4", "click", function(event) {
  console.log("text_area1 entered text: " + getText("text_area1"));
setScreen("home");
  
});

// quiz

onEvent("radio_button1", "change", function(event) {
setScreen("incorrectScreen");
});
onEvent("radio_button2", "change", function(event) {
setScreen("correctScreen");
});
onEvent("radio_button3", "change", function(event) {
setScreen("incorrectScreen");
});
onEvent("radio_button4", "change", function(event) {
setScreen("incorrectScreen");
});
onEvent("IncorrectScreen_back_button", "click", function(event) {
  setScreen("Quiz");
});
onEvent("correctScreen_back_button", "click", function(event) {
  setScreen("Quiz");
});

onEvent("button3", "click", function(event) {
  console.log("button3 clicked!");
setScreen("Quiz")
  
});
onEvent("button6", "click", function(event) {
  console.log("button6 clicked!");
setScreen("home");
  
});
onEvent("button2", "click", function(event) {
  console.log("button2 clicked!");
  setScreen("Flash_Cards")
  
});
onEvent("button10", "click", function(event) {
  console.log("button10 clicked!");

  setProperty("definition","hidden",false);
  
  
  
});
onEvent("button9", "click", function(event) {
  console.log("button9 clicked!");
  setScreen("home")
});
onEvent("next_word_button11", "click", function(event) {
  console.log("next_word_button11 clicked!");
  setProperty("definition","hidden",true);
var rand = randomNumber(0,words.length-1);
  index = rand;
  var word = words[index];
  var definition = definitions[index]; 
setText("Word",word);
setText("definition",definition);
  
});
