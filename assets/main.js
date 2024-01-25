count=0  
document.getElementsByClassName("change2")[0].onclick = function(){
  
    a = Math.random()
    m = parseInt(a*3+1)
        document.getElementsByTagName("h1")[2].textContent = m
         document.getElementsByClassName("change2")[0].disabled = true;
         document.getElementsByClassName("change3")[0].disabled = false;
}

    document.getElementsByClassName("change3")[0].onclick = function(){
        count++
    document.getElementsByClassName("count1")[0].textContent = count
    a = Math.random()
    n =  parseInt(a*3+1)
        document.getElementsByTagName("h1")[3].textContent = n

    if (m==n){
        document.getElementsByClassName("change3")[0].disabled = true;

        first = parseInt(document.getElementsByClassName("count")[0].textContent)
        second = parseInt(document.getElementsByClassName("count1")[0].textContent)

    if(first<second){
        document.getElementsByClassName("res")[0].textContent = "Winner"
        document.getElementsByClassName("res1")[0].textContent = "Loser"
 }

    else if(first==second){
        document.getElementsByClassName("res")[0].textContent = "Tie"
        document.getElementsByClassName("res1")[0].textContent = "Tie"
 }
 
    else{
        document.getElementsByClassName("res")[0].textContent = "Loser"
        document.getElementsByClassName("res1")[0].textContent = "Winner"
 }

    }
}
 





