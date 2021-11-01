
var search = document.getElementById('search');
search.addEventListener('click', ()=>{

    var httpRequest = new XMLHttpRequest(); 
    var url = "http://localhost:8080/superheroes.php"; 
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) { 
            if (httpRequest.status === 200) { 
              var response = httpRequest.responseText; 
              alert(response); 
            } else { 
              alert('There was a problem with the request.'); 
            } 
          } 
    }
    httpRequest.open('GET', url); 
    httpRequest.send();

})