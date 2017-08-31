$(document).ready(function() {
        $(".questions").hide()
        $("#final").hide()

        $('#start').on('click', function(){
            startGame();
        })
        
        function startGame() {
            $(".questions").fadeIn()
            $(".start").hide()
            startTimer();
            decrement();
        }

        var seconds = 30;
        var intervalId;
        
        function startTimer() {
            intervalId = setInterval(decrement, 1000);
        }

        function decrement () {
            seconds--;
            $("#timer").html("<h2>" + seconds + " seconds remaining" + "</h2>");
            if (seconds === 0) {
                stop()
                alert("Time is up!")
            }   
            }
        
        function stop() {
            clearInterval(intervalId);
        }
    });

    function handleClick() {         
        var numCorrect = 0;   
        
        for(var i = 1; i <= 5; i++) {
            var radios = document.getElementsByName('group'+i);
        for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
        if(radio.value == "true" && radio.checked) {
            numCorrect++;
        }
        }
        }                   
        alert("Correct Answers: " + numCorrect);
    }