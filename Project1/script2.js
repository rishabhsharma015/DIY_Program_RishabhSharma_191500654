function addItem(){
    var ul = document.getElementById('dynamic-list');
    var firstName = document.getElementById("candidate");
    var lastName = document.getElementById("surname");
    var country = document.getElementById("country");
    var score = document.getElementById("score");
    var errorElement = document.getElementById("error");

    var aud = new Audio('successding.mp3');
    var aud2 = new Audio('delete.wav');

    // Validation
    if(firstName.value==="" || firstName.value==null || lastName.value==="" || surname.value==null || country.value==="" || country.value==null || score.value===""){
        errorElement.innerHTML = "All fields are required";
        return;
    }
    else{
        errorElement.innerHTML = "";
    }



    // Creating List Element.
    var li = document.createElement("li");
    li.setAttribute('id', "myid");
    var liFullName = document.createElement("p");
    liFullName.innerHTML = firstName.value + " " + lastName.value;
    var liCountry = document.createElement("p");
    liCountry.innerHTML = country.value;
    var liScore = document.createElement("p");
    liScore.innerHTML = score.value;
    var liDelButton = document.createElement("button");
    liDelButton.setAttribute('id', "delButton");
    liDelButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    var liIncButton = document.createElement("button");
    liIncButton.setAttribute('id', "increment");
    liIncButton.innerHTML = "+5";
    var liDecButton = document.createElement("button");
    liDecButton.setAttribute('id', "decrement");
    liDecButton.innerHTML = "-5";
    

    // liFullName.style.fontSize = "17px"
    // liScore.style.fontSize = "17px"
    // liCountry.style.fontSize = "17px";


    liIncButton.style.height = "30px";
    liIncButton.style.width = "40px";
    liIncButton.style.backgroundColor = "#ffb908";
    liIncButton.style.fontSize = "20px";
    liIncButton.style.borderRadius = "3px";
    liIncButton.style.borderWidth = "0ch";


    liDecButton.style.height = "30px";
    liDecButton.style.width = "40px";
    liDecButton.style.backgroundColor = "#ffb908";
    liDecButton.style.fontSize = "20px";
    liDecButton.style.borderRadius = "3px";
    liDecButton.style.borderWidth = "0ch";



    liDelButton.style.height = "30px";
    liDelButton.style.width = "90px";
    liDelButton.style.backgroundColor = "#ffb908";
    liDelButton.style.fontSize = "20px"
    liDelButton.style.borderRadius = "3px";
    liDelButton.style.borderWidth = "0ch";
    liDelButton.style.transition = "all 2s";

    // Remove list item
    liDelButton.addEventListener('click', function(){
        var parentLi = liDecButton.parentElement;
        aud2.play();
        document.getElementById("dynamic-list").removeChild(parentLi);
    });

    // Increment
    liIncButton.addEventListener('click', function(){
        liScore.innerHTML = parseInt(liScore.innerHTML) + 5;
    });

    // Decrement
    liDecButton.addEventListener('click', function(){
        liScore.innerHTML = parseInt(liScore.innerHTML) - 5; 
    });

    li.appendChild(liFullName);
    li.appendChild(liCountry);
    li.appendChild(liScore);
    li.appendChild(liDelButton);
    li.appendChild(liIncButton);
    li.appendChild(liDecButton);
    

    ul.appendChild(li);
    aud.play();
    
   
    candidate.value = "";
    surname.value = "";
    country.value = "";
    score.value = "";
}
