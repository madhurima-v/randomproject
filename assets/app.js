document.getElementsByClassName("change1")[0].disabled = true;
document.getElementsByClassName("change2")[0].disabled = true;
document.getElementsByClassName("change3")[0].disabled = true;
count1=0  
document.getElementsByClassName("change")[0].onclick = function(){
    a = Math.random()
    x = parseInt(a*3+1)
        document.getElementsByTagName("h1")[0].textContent = x
         document.getElementsByClassName("change")[0].disabled = true;
         document.getElementsByClassName("change1")[0].disabled = false;

}

    document.getElementsByClassName("change1")[0].onclick = function(){
        
        count1++
    document.getElementsByClassName("count")[0].textContent = count1
    a = Math.random()
    y =  parseInt(a*3+1)
        document.getElementsByTagName("h1")[1].textContent = y

    if (x==y){
        document.getElementsByClassName("change1")[0].disabled = true;
        document.getElementsByClassName("change2")[0].disabled = false;
    }
    }
