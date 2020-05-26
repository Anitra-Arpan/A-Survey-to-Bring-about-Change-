var button , greeting;

function setup(){
  
  var canvas = createCanvas(750,600);

  // The First Coloumn

  button = createButton ( "Yes" ) ;
  button . position ( 550 , 160 ) ;
  button . mouseClicked ( vote1 ) ;
  button = createButton ( "No" ) ;
  button . position ( 550 , 190 ) ;
  button . mouseClicked ( vote1 ) ;

  greeting = createElement ( "h3" ) ;
  greeting . html ( " 1) Do you think that lockdown is beneficial in any way other than protecting you from COVID-19 ?" ) ;
  greeting . position ( 370 , 100 ) ;


  // The Second Coloumn

  button = createButton( "Good" ) ;
  button . position ( 550 , 300 ) ;
  button . mouseClicked ( vote2 ) ;
  button = createButton ( "Bad" ) ;
  button . position ( 550 , 330 ) ;
  button . mouseClicked ( vote2 ) ;
  
  greeting = createElement ( "h3" ) ;
  greeting . html ( " 2) Has it affected our activities in a good or a bad way ?" )  ;
  greeting . position ( 370 , 250 ) ;


  // The Third Coloumn

  button = createButton ( "Yes" ) ;
  button . position ( 550 , 460 ) ;
  button . mouseClicked ( vote3 ) ;
  button = createButton ( "No" ) ;
  button . position ( 550 , 490 ) ;
  button . mouseClicked ( vote3 ) ;
  
  greeting = createElement ( "h3" ) ;
  greeting . html ( " 3) Have you used your time productively and effectively ?" ) ;
  greeting . position ( 370 , 400 ) ;
  input = createInput ( "Name" ) ;
  input . position ( 750 , 50 ) ;
  
}


function draw () {
  background ( "pink" ) ;
}

 
function vote1(){
  greeting = createElement( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 165 ) ;
}

function vote2 () {
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 320 ) ;
}

function vote3 () {
  greeting = createElement ( "h2" ) ;
  greeting . html ( "Voted !!!" ) ;
  greeting . position ( 800 , 500 ) ;
  
  button = createButton ( "Submit" ) ;
  button . position ( 800 , 600 ) ;
  button . mouseClicked ( vote3 ) ;

  greeting = createElement ( "h2" ) ;
  greeting . html ( "Your votes have been submitted!!!  Thank You For Voting!!!" ) ;
  greeting . position ( 500 , 640 ) ;
}