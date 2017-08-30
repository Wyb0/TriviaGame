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

    $(document).ready(function() {
        $(".questions").hide()

        $('#start').on('click', function(){
            startGame();
        })


        function startGame() {
            $(".questions").fadeIn()
        }
    });