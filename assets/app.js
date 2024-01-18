count=0  
document.getElementsByClassName("change")[0].onclick = function(){
    a = Math.random()
    x = parseInt(a*6+1)
        document.getElementsByTagName("h1")[0].textContent = x
         document.getElementsByClassName("change")[0].disabled = true;


    document.getElementsByClassName("change1")[0].onclick = function(){
        count++
    document.getElementsByClassName("count")[0].textContent = count
    a = Math.random()
    y =  parseInt(a*6+1)
        document.getElementsByTagName("h1")[1].textContent = y

    if (x==y){
        document.getElementsByClassName("change1")[0].disabled = true;
        
    }
    }
    }
