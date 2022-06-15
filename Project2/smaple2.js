// var alltitles = document.querySelectorAll('h1');

// alltitles[3].id = 'myId';

// alltitles[3].className = 'myClass';

// alltitles[3].classList.add('class1', 'class2', 'class3');

// console.log(alltitles[3].classList);

// alltitles[3].classList.remove('class1', 'class2', 'class3');

// console.log(alltitles[3].classList);

// alltitles = document.querySelectorAll('h1')
// alltitles[3].textContent = 'Fourth Title'

// console.log(alltitles[3].textContent);

// 💻Points to remember💻

// if you use '.className' property to add multiple classes then everytime it will override the classes, which means the last added class will be the only class.

// But if you use '.classList.add(class1, class2, class3, ...)' then without overriding the classes it will ad multiple class name to the HTML element.

// Difference between 'textContent' and 'innerHTML' is that 'textContent' only gets or sets the text to the HTML element. But 'innerHTML' returns the text and child elements.



// mc.style.width = "150px";
// mc.style.height = "100vh";

// mc.style.display = "flex";

function isPrime(i){
    let k;
    for(k=2;k<i;k++){
        if(i%k==0){
            return false;
        }
    }

    if(k==i){
        return true;
    }
}


let mydiv;
for(let i=0;i<=101;i++){
	mydiv= document.createElement('div')
    mydiv.textContent = i;
    mydiv.style.width = "30px";
    mydiv.style.height = "30px";
    if(i%2==0 && isPrime(i)){
        mydiv.style.backgroundColor = "red";
    }
    else if(i%2!=0 && isPrime(i)){
        mydiv.style.backgroundColor = "red";
    }
    else if(i%2==0 && !isPrime(i)){
        mydiv.style.backgroundColor = "green";
    }
    else if(i%2!=0 && !isPrime(i)){
        mydiv.style.backgroundColor = "yellow";
    }

    document.body.appendChild(mydiv);
}
