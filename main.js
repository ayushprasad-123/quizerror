var pos=1;
var turn=1;
var subject="";
var s1=0;
var s2=0;
var qo=0;
var geoq=[
    "Capital of Quebec(No diacritics)","What country owns Easter Island?"
]
var geoa=[
    "Montreal","Chile"
]
function login(){
    localStorage.setItem("Player 1", document.getElementById("name1").value);
    localStorage.setItem("Player 2", document.getElementById("name2").value);
    localStorage.setItem("Subject", document.getElementById("subjectdrop").value);
    localStorage.setItem("Score 1", 0);
    localStorage.setItem("Score 2", 0);
    window.location.assign("main.html");
    subject=localStorage.getItem("Subject");
    document.getElementById("ql").innerHTML="Text";
    console.log("a");
}
function getq(){
    if(subject="Geo."){
        pos+=1;
        if(pos==geoq.length){
            pos=0;
        }
        return {
            q:geoq[pos],
            a:geoa[pos]
        }
    }else{
        pos+=1;
        if(pos==vexq.length){
            pos=0;
        }
        return{
            q:vexq[pos],
            a:vexa[pos]
        }
    }
}