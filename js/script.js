$(document).ready(function(){
  // setTimeout(function(){
  //   console.log("this is 5 seconds long");
  // }, 5000);

  // var int = setInterval(function(){
  //   console.log('this is happening every 2 seconds');
  // }, 2000)
  //
  // setTimeout(function(){
  //   clearTimeout(int);
  //   console.log('timeout has been stopped');
  // }, 10000)

  //var timerNum= 0;

  // var startTrigger= setInterval(function(){
  //   timerNum++;
  //   console.log('this is happening every 1 second');
  // }, 1000);

  // var stopTrigger= setTimeout(function(){
  //   clearTimeout(startBtn);
  //   console.log('timeout has been cleared');
  // }, 10000);

  // document.getElementById('startBtn').onclick = function(startTimer){
  //   for (var i = 0; i < startTrigger.length; i++) {
  //
  //   }
  // }

//start button//
  $('#startBtn').click(function(){
    var seconds= 0;
    var minutes= 0;

    setInterval(function(){
      seconds++;
      if (seconds == 60) {
        minutes ++;
        seconds = 0;
      }


      console.log(seconds);
      //console.log('this is happening every 1 second');
      $('#seconds').text(seconds) + '0';



    }, 1000);



  });




//stop button//
  // $('#stopBtn').click(function(){
  //   clearTimeout('#startBtn');
  //   console.log('timeout has been cleared');
  // }, 10000);


});
