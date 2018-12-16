function final (name,scores,numbers,letters) {
let letter = "";
let pos = 0;

  for (let i = 0 ; i < scores.length; i++ )
  {
    if (scores[i] > numbers[4])
    {
      while (scores[i] < numbers[pos])
      {
        pos++;

      }

      
        letter = letters[pos]
      
  
      
    console.log(name[i] + " passed with a " + scores[i] + ", resulting in an " + letter +".");

    }
    else {
      console.log(name[i] + " failed with a " + scores[i] + ", resulting in an " + letters[4] +".");
    }
    pos = 0;
  }

}


function score (a,b){
  let c = a  + b
  return c;
}

let scores = [];

let students = {
  name:['John','Bob','Nick','Alex'],
  score1:[47,23,40,44],
  score2:[46,24,35,45]
};


let grades = {
  letter : ['A','B','C','D','F'],
  number : [91,81,71,61,51]
};


for (let i = 0 ; i < students.score1.length;i++)
{
   scores[i] = score(students.score1[i],students.score2[i]);
}
   console.log(scores);

 final (students.name,scores,grades.number,grades.letter);