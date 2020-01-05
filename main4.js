//1 

function a() {
    window.scrollTo({
        top: 1000,
        behavior: "smooth"
    });
}

function b() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

var idInterval = setInterval(function() {
    setTimeout(a, 3000);
    setTimeout(b, 4000);
}, 4000)



//2.

var element = document.querySelectorAll('li')[2];
var parent = document.querySelectorAll('ol')[0];
console.log(element);
console.log(parent);

function throwAway() {
    parent.removeChild(element)
}
setTimeout(throwAway, 3000);

//<!DOCTYPE html>
//<html lang="en">

//<head>
//<meta charset="UTF-8">
//<meta name="viewport" content="width=device-width, initial-scale=1.0">
//<meta http-equiv="X-UA-Compatible" content="ie=edge">
//<title>Document</title>
//<link rel="stylesheet" href="css/style.css">

//</head>

//<body>
//<ol>
//<li>Maxim</li>
//<li>Anton</li>
//<li>Ihor</li>
//</ol>
//<script src="js/main.js"></script>
//</body>


//</html>

//3

var myInput = document.getElementById('txt')
myInput.oninput = function(event) {
    if (!isNaN(this.value)) {
        return this.style.color = 'green'
    }
    this.style.color = 'red'
}

//<!DOCTYPE html>
//<html lang="en">

//<head>
//<meta charset="UTF-8">
//<meta name="viewport" content="width=device-width, initial-scale=1.0">
//<meta http-equiv="X-UA-Compatible" content="ie=edge">
//<title>Document</title>
//<link rel="stylesheet" href="css/style.css">

//</head>

//<body>
//<input type="text" id=txt>
//<script src="js/main.js"></script>
//</body>


//</html>

//4-5
var element = document.getElementById('myunique')
element.classList.add("www.")

element.classList.remove("www.")


}

//<!DOCTYPE html>
//<html lang="en">

//<head>
//<meta charset="UTF-8">
//<meta name="viewport" content="width=device-width, initial-scale=1.0">
//<meta http-equiv="X-UA-Compatible" content="ie=edge">
//<title>Document</title>
//<link rel="stylesheet" href="css/style.css">

//</head>

//<body>
//<div id=myunique></div>
//<script src="js/main.js"></script>
//</body>


//</html>

//6
var id = document.getElementById('myunique')
for (var x in id.classList) {
    if (id.classList[x] === 'www') {
        alert('Class found')
        break
    } else {
        alert('Class not found')
        break
    }
}

//7

var id = document.getElementById('myunique')
for (var x in id.classList) {
    if (id.classList[x] === 'www') {
        id.classList.remove('www')
    } else {
        id.classList.add('www')
    }
}

//8

var element = document.getElementById('myunique')
console.log(element)
console.log(element.classList.length)

//9

var element = document.getElementById('myunique')
element.onclick = function(event) {
    console.log(element.tagName)
}

//10

var element = document.getElementById('myunique')
element.onclick = function(event) {
    console.log(element.tagName.toLowerCase())
}

//11

element = document.getElementsByClassName('elem')
for (i = 0; i < 3; i++) {
    element[i].innerText = 'div'
}
console.log(element)

//12

var element = document.getElementById('ihor')
console.log(element)
var createAndAppend = tag => document.body.appendChild(document.createElement(tag))
element2 = element.appendChild(document.createElement('li'))
console.log(element2)
element2.innerText = 'HELO WORLD!'

//13 

var parent = document.getElementsByTagName('ul')[0]
console.log(parent)
var element = document.getElementById('myunique')
console.log(element)
var newElement = document.createElement('li')
newElement.innerText = '!!!'
console.log(newElement)
var insert = parent.insertBefore(newElement, element);
console.log(insert)

//14

element = document.getElementById('elem')
console.log(element)
element1 = element.previousElementSibling
element1.innerText = '!'
console.log(element1)