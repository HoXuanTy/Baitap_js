function myfunction(){
    var number=document.getElementById("Input").value;
    var greeting;
    if(number==0){
        greeting="So nay bang 0"
    }else if(number>0){
        greeting="So duong"
    }else{
        greeting="So am"
    }
    document.getElementById("xemso").innerHTML= greeting;
}