Quick_draw=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye"];
score=0;
timer_counter=0;
answer_holder="";
timer_check="";
randomnumber=Math.floor(Math.random() *Quick_draw.length)+1;

sketch=Quick_draw[randomnumber];
document.getElementById("draw_sketch").innerHTML=sketch;
function updateCanvas(){
    background("white");
    randomnumber=Math.floor(Math.random() *Quick_draw.length)+1;
sketch=Quick_draw[randomnumber];
document.getElementById("draw_sketch").innerHTML=sketch;
}
function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");

}
function draw(){
    check_sketch();
    if(drawn_sketch==sketch){
        answer_holder="set";
        score++;
        document.getElementById("score").innerHTML="score:"+score;

    }
}
function check_sketch(){
   timer_counter++; 
   document.getElementById("time").innerHTML="time:"+timer_counter;
   if(timer_counter>400){
       timer_counter=0;
       timer_check="completed";
   }
   if(timer_check=="completed"||answer_holder=="set"){
       timer_check="";
       answer_holder="";
       updateCanvas();


   }

}