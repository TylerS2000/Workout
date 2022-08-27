function lift(){
  
let workout = document.getElementById("input"); 
let usein = workout.value;
let workarr = [];
if (usein.toLowerCase() == "push"){
    //create array for two heavy ex
let pushH = ["Bench Press 3 x 8-12","Incline Bench Press 3 x 8-12", "Decline Bench Press 3 x 8-12", "Dips 3 x Failure","Shoulder Press 3 x 8-12"]
let p1 = Randomarray(pushH);
let p2 = Randomarray(pushH);
while (p1 == p2){p2 = Randomarray(pushH);}
workarr.push(pushH[p1]);
workarr.push(pushH[p2]);

    //create array for two light ex
let pushL = ["Tricep Pushdown 3 x 15","Skull Crushers 3 x 12", "DB bench press 3 x 8-12", "Chest Flys 3 x 15-20"," DB Shoulder Press 3 x 8-12"]
let p3 = Randomarray(pushL);
let p4 = Randomarray(pushL);
while (p3 == p4){p4 = Randomarray(pushL);}
workarr.push(pushL[p3]);
workarr.push(pushL[p4]);

    //create array for two medium ex
let pushM = ["Push Ups 3 x Failure","Rope Pulldowns 3 x 15-20",  "Bench Press(light weight) 3 x failure"]
let p5 = Randomarray(pushM);
let p6 = Randomarray(pushM);
while (p5 == p6){p6 = Randomarray(pushM);}
workarr.push(pushM[p5]);
workarr.push(pushM[p6]);
    
    
    }

if (usein.toLowerCase() == "pull"){
        //create array for two heavy ex
    let pushH = ["Lat Pulldowns (wide) 3 x 8-12","Lat pulldowns (narrow) 3 x 8-12", "Machine Rows 3x 8-12", "Chin ups 3 x Failure"]
    let p1 = Randomarray(pushH);
    let p2 = Randomarray(pushH);
    while (p1 == p2){p2 = Randomarray(pushH);}
    workarr.push(pushH[p1]);
    workarr.push(pushH[p2]);
    
        //create array for two light ex
    let pushL = ["Rope curls 3 x 15","DB Hammer Curls 3 x 12", "Narrow grip ezbar curls 3 x 8-12", "Ezbar curls 3 x 15-20"]
    let p3 = Randomarray(pushL);
    let p4 = Randomarray(pushL);
    while (p3 == p4){p4 = Randomarray(pushL);}
    workarr.push(pushL[p3]);
    workarr.push(pushL[p4]);
    
        //create array for two medium ex
    let pushM = ["Deadlift 3 x 6-10",  "Preacher curls 3 x 8-12"]
    let p5 = Randomarray(pushM);
    let p6 = Randomarray(pushM);
    while (p5 == p6){p6 = Randomarray(pushM);}
    workarr.push(pushM[p5]);
    workarr.push(pushM[p6]);
}

if (usein.toLowerCase() == "legs"){
    //create array for two heavy ex
let pushH = ["Barbell Squats 3 x 8-12"," DB Lunges 3 x 8-12", "Leg Press 3x 8-12"]
let p1 = Randomarray(pushH);
let p2 = Randomarray(pushH);
while (p1 == p2){p2 = Randomarray(pushH);}
workarr.push(pushH[p1]);
workarr.push(pushH[p2]);

    //create array for two light ex
let pushL = ["Calf Raises 3 x 20","Hamstring Curls 3 x 12", "Goblet Squat 3 x 8-12", "Suitcase Lunges 3 x 15-20"]
let p3 = Randomarray(pushL);
let p4 = Randomarray(pushL);
while (p3 == p4){p4 = Randomarray(pushL);}
workarr.push(pushL[p3]);
workarr.push(pushL[p4]);

    //create array for two medium ex
let pushM = ["Kickbacks 3 x 25",  "Stair Climber 5 minutes"]
let p5 = Randomarray(pushM);
let p6 = Randomarray(pushM);
while (p5 == p6){p6 = Randomarray(pushM);}
workarr.push(pushM[p5]);
workarr.push(pushM[p6]);
}

if (usein.toLowerCase() == "cardio"){
    //create array for two heavy ex
let pushH = ["1 mile moderate pace", "2 mile run light pace", "stair climber 10 minutes intense pace", "run 1 mile as fast as possible with break at 1/2 mile"]
let p1 = Randomarray(pushH);
workarr.push(pushH[p1]);
}
//loop over array and diaply each element inside html p 
let para = document.getElementById("para");
for(let element of workarr){para.innerHTML+= "<br />" + "<br />" +
 element}
}

function clears(){
    let para = document.getElementById("para");   
    para.innerHTML="";
}

//select random element from any array
function Randomarray(x){
   let sel = Math.floor(Math.random()*(x.length))
return sel
}

