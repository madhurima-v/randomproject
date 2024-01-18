count=0  



document.getElementsByClassName("change2")[0].onclick = function(){
    a = Math.random()
    m = parseInt(a*6+1)
        document.getElementsByTagName("h1")[2].textContent = m
         document.getElementsByClassName("change2")[0].disabled = true;

    document.getElementsByClassName("change3")[0].onclick = function(){
        count++
    document.getElementsByClassName("count1")[0].textContent = count
    a = Math.random()
    n =  parseInt(a*6+1)
        document.getElementsByTagName("h1")[3].textContent = n

    if (m==n){
        document.getElementsByClassName("change3")[0].disabled = true;
        
    }
    }
}

