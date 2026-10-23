function task_adder(){
    var del=document.createElement("button");
    var check=document.createElement("input");
    check.type="checkbox";
    check.className="check";    
    del.textContent="del";
    del.className="del";
    var newtask = document.createElement("li");
    var task_text=document.getElementById("task").value;
    newtask.textContent=task_text;
    document.getElementById("list").appendChild(newtask);
    newtask.append(check);
    newtask.append(del);
    document.getElementById("task").value="";
    function strike(){
        if(check.checked){
            newtask.style.textDecoration="line-through";
        }
        else{
            newtask.style.textDecoration="none";
        }
    }
    del.onclick=function(){
    document.getElementById("list").removeChild(newtask);
}
   check.addEventListener("change",strike);
}
async function quote(){
    const response=await fetch('https://dummyjson.com/quotes/1');
    const data=await response.json();
    document.getElementById("quote").textContent=data.quote;
}
document.getElementById("button").addEventListener("click",quote);
