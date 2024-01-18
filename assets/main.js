document.getElementsByClassName("change")[0].onclick = function(){
        a = Math.random()
            document.getElementsByTagName("h1")[0].textContent = parseInt(a*6+1)
        document.getElementsByClassName("change")[0].disabled = true;
    }
    
    
    document.getElementsByClassName("change1")[0].onclick = function(){  
        b = Math.random()
            document.getElementsByTagName("h1")[1].textContent = parseInt(a*6+1) 
    }
    
    