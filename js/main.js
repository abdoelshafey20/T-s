var counter=0;

function add(){
    counter ++;
    document.getElementById("number").innerHTML=counter;

}

function decrement(){
    counter --;
    document.getElementById("number").innerHTML=counter;

}
// --------------------------------

function mouse(){
  var x=  document.getElementById("cash").value;
  var result=  document.getElementById("result");
  
  if(isNaN(x)){
    result.innerHTML = "Enter Number Not Text";
    return false;
  }
  else if(x<0){
    result.innerHTML = "Enter Postive Number";
    return false;
  }
  else if(x==0){
    result.innerHTML = "Enter Number Rather Than Zero";
    return false;
  }
  
  else{


    result.innerHTML=x*50;

    return false;
}
  }
  
  
  
  
  
