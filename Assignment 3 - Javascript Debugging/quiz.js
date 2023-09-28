document.addEventListener('DOMContentLoaded', function() {
    function quiz() {
        const questions = [
          'How many moons does Earth have?',
          'How many moons does Saturn have?',
          'How many moons does Venus have?'
        ];
        const answers = [1, 82, 0];
      
        let score = 0;
      
        let num = Math.floor(Math.random() * 3);
      
        for (let i = 0; i < questions.length; i++) {
            
          const question = questions[num];
          console.log(answers[num]);
          let answer = prompt(question);
          console.log(answer);
          
          if (parseInt(answer) === answers[num]) {
            score++;
            alert('Correct!');
          } else {
            alert('Wrong!');
          }
          num++;
          if (num === questions.length) {
            num = 0;
          }
        }
      
        const scoreArea = document.getElementById('score-area');
        scoreArea.innerHTML = `You got ${score} out of ${questions.length} questions correct!`;
      }
      
      alert('Are you ready for a quiz?');
      quiz();
});