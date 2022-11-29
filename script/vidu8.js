function myfunction(){
    var number=document.getElementById("Input").value;
    var greeting;
    if(number==0){
        document.getElementById("demo").innerHTML="No la so 0";
        document.getElementById("demo").style.color="yellow";
    }else if(number>0){
        document.getElementById("demo").innerHTML="No la so duong";
        document.getElementById("demo").style.background="red";
    }else{
        document.getElementById("demo").innerHTML="No la so duong";
        document.getElementById("demo").style.background="green";
    }
    
}