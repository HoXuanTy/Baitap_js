function tinhtuoi(){
    var d = new Date(prompt("Input birthday: "));
    var date = d.getDate();
    var month=  d.getMonth()+1;
    var year =d.getFullYear();
    var currentDate =new Date();
    var currentDate = currentDate.getFullYear();
    alert("day is:"+ date);
    alert("month is:"+ month);
    alert("Year is:"+ year);
    alert("Tuoi:"+(currentDate-year))
}

function myfunction(){
        alert("You are is my love")
        var x=parent(document.getElementById(f.name).value)
        
}