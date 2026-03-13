 
const scoreInput = document.getElementById('score');
const gradeOutput = document.getElementById('grade');

function calculateGrade(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
}

document.getElementById('calculate').addEventListener('click', function() {
    const sub1 = parseFloat(document.getElementById('sub1').value);
    const sub2 = parseFloat(document.getElementById('sub2').value);
    const sub3 = parseFloat(document.getElementById('sub3').value);


const average = (sub1 + sub2 + sub3) / 3;
const letterGrade = calculateGrade(average);
gradeOutput.textContent = `Your grade is: ${letterGrade}`;

document.getElementById('average').innerHTML= `Average Score: ${average.toFixed(2)}`;

document.getElementById('grade').innerHTML='Grade:'+letterGrade;

});