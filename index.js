let val = document.getElementById("val");
    let count = 0;
    document.getElementById("b1").addEventListener("click",()=>{
        count++;
        val.innerHTML = count;
    });
    document.getElementById("b2").addEventListener("click",()=>{
        count--;
        count = count<0?0:count;
        val.innerHTML = count;
    });