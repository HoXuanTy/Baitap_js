function myfunction(){
    var sesmester1=document.getElementById("s1").value;
    var sesmester2=document.getElementById("s2").value;
    var y = document.getElementById("years_select").value;
    // var dh = document.getElementById("vb").value;
    var resul=0;
    if(y==1){
        resul=((parseInt(sesmester1)+ (parseInt(sesmester2)*2))/3);
        if(resul>=8){
            document.getElementById("vb").innerHTML="Học Sinh Giỏi";
            document.getElementById("vb").style.color="red";
        }else if(resul>=7){
            document.getElementById("vb").innerHTML="Học Sinh Khá";
            document.getElementById("vb").style.color="red";
        }else if(resul>5){
            document.getElementById("vb").innerHTML="Học Sinh TB";
            document.getElementById("vb").style.color="red";
        }else{
            document.getElementById("vb").innerHTML="Học Sinh yếu";
            document.getElementById("vb").style.color="red";
        }
    }else if(y==2){
        resul=((parseInt(sesmester1)+ (parseInt(sesmester2)*3))/4);
    }else{
        resul=((parseInt(sesmester1)+ (parseInt(sesmester2)*4))/5);
    }
    document.getElementById("sum").value= resul;
}  

function myfunction2(){
    document.getElementById("sum").value= "";
    document.getElementById("s1").value= "";
    document.getElementById("s2").value= "";
    
}