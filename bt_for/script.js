
function myFunction(){
    for(var i=0;i<listProduct.length;i++){
        if(listProduct[i].status==1){
            var demo='<div class="col-2" >';
            demo +='<div class="card-group" style="width: 200px">';
            demo += '<img src="'+listProduct[i].image+'" class="card-img-top" >';   
            demo += '<div class="card-body" style=" text-overflow: ellipsis; ">';
            demo += '<h6 class="card-title">'+listProduct[i].name+'</h6>';
            demo += '<p class="card-text">'+listProduct[i].price +'</p>';
            demo +='</div>';
            demo +='</div>';
            demo +='</div>';
            console.log(demo);
            document.getElementById('selling1').innerHTML+=demo;
        }else if(listProduct[i].status==2){
            var demo='<div class="col-3" >';
            demo += '<img src="'+listProduct[i].image+'" class="card-img-top" >';  
            console.log(demo);
            document.getElementById('selling2').innerHTML+=demo;
        }

    }
}
    
