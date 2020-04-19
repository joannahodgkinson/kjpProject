document.getElementById("quizForm").onsubmit = function() {


        q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);

        q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);

        q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);

        q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);

        q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);

        q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);

        q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);

        q8 = parseInt(document.querySelector('input[name = "q8"]:checked').value);

        total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8


        if (total <= 8) {
            document.getElementById("answer").innerHTML = "You got 'The Oblivious'.";
        } else if (total > 8 && total <= 16) {
            document.getElementById("answer").innerHTML = "You got 'The Facebook Expert'.";
        } else if (total > 16 && total <= 24) {
            document.getElementById("answer").innerHTML = "You got 'The Hoarder'.";
        } else if (total > 24 && total <= 32) {
            document.getElementById("answer").innerHTML = "You got 'The Motivated Self-Improver'.";
        } else if (total > 32 && total <= 40) {
            document.getElementById("answer").innerHTML = "You got 'The Hypochondriac'.";
        }

        return false; // required to not refresh the page; just leave this here
    } // end the submit function