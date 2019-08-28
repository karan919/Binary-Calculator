let res = document.getElementById("res");
let result = "";
function valid(){
    const x = result[result.length-1];
    // console.log("x",x);
    if(x==undefined||x==""||x=="+"||x=="-"||x=="*"||x=="/")
        return false;
    else return true;
}
function btnZero(){
    result+="0";
    res.innerHTML=result;
}
function btnOne(){
    result+="1";
    res.innerHTML=result;
}
function btnClr(){
    result="";
    res.innerHTML=result;
}
function btnSum(){
    if(valid()){
        result+="+";
    }
    res.innerHTML=result;
}
function btnDiv(){
    if(valid()){
        result+="/";
    }
    res.innerHTML=result;
}
function btnSub(){
    if(valid()){
        result+="-";
    }
    res.innerHTML=result;
}
function btnMul(){
    if(valid()){
        result+="*";
    }
    res.innerHTML=result;
}
function btnEql(){
    let x = result.split(/\+|\-|\*|\//);
    let num1 = parseInt(x[0],2);
    let num2 = parseInt(x[1],2);
    let total = num1 + num2;
    total = (+total).toString(2);
    res.innerHTML=total;
}