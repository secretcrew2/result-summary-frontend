function someFunction() {
    let reactionScore = Math.floor(Math.random()*100);
    let memoryScore = Math.floor(Math.random()*100);
    let verbalScore = Math.floor(Math.random()*100);
    let visualScore = Math.floor(Math.random()*100);

    let score = Math.round((reactionScore + memoryScore + verbalScore + visualScore ) / 4)
    
    const container = document.querySelector('.container');

    container.querySelector('#reaction-score').innerHTML=reactionScore + " ";
    container.querySelector('#memory-score').innerHTML=memoryScore + " ";
    container.querySelector('#verbal-score').innerHTML=verbalScore + " ";
    container.querySelector('#visual-score').innerHTML=visualScore + " ";
    container.querySelector('#stat-score').innerHTML=score;

    let description;
    let scoreWord;
    if(score < 25){
        description = "Unfortunately, your score falls in the bottom 25% of test takers. This means that you performed worse than 75% of the people who have taken this test. Don't give up, though - with practice, you can improve your score.";
        scoreWord= 'Poor';
    } else if(score < 50) {
        description = "Your score is below the average of test takers. You performed worse than 50% of the people who have taken this test, but don't be discouraged - there are plenty of opportunities to improve.";
        scoreWord= 'Fair';
    } else if(score < 75) {
        description = "You scored higher than 50% of the people who have taken this test. While this is a good score, there is still room for improvement.";
        scoreWord= 'Good';
    } else if(score < 94){
        description = "Great job! Your score is in the top 25% of test takers, indicating that you outperformed 75% of the people who have taken this test.";
        scoreWord= 'Great';
    } else {
        description = "Congratulations! Your score is in the top 5% of test takers, meaning that you performed better than 95% of the people who have taken this test.";
        scoreWord= 'Excellent';
    }
    container.querySelector('#criteria').innerHTML= description;
    container.querySelector('#score-word').innerHTML= scoreWord;
}