function getNumber(num){
    var result = document.getElementById("result");
   result.value += num
   }
   function clearResult(){
    var result = document.getElementById("result");
    result.value = ""  
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)  
}
   
function ac(){
    var result = document.getElementById("result");
    result.value = ""  
}


function backspace(){
    var prevalue = result.value
     result.value = prevalue.substr(0,prevalue.length-1);
}
function square(){
    result.value= Math.pow(result.value,2);
}

function qubbed(){
    result.value= Math.pow(result.value,3);

}


function sqrt2(){
    result.value= Math.pow(result.value,1/2);

}
function sqrt3(){
    result.value= Math.pow(result.value,1/3);

}
function sin(){
   result.value= Math.sin(result.value);
 
}

function cos(){
    result.value= Math.cos(result.value);

}
function tan(){
    result.value= Math.tan(result.value);

}



