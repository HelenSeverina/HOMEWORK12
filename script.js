//1)
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.open("GET", "/buttonText.json");
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const text = JSON.parse(request.responseText);
            request.onload = function () {
                button.innerText = text.buttonText + ': ' + new Date();
            };
        }
    })
});


//2)

const download = document.querySelector('#button');

download.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.open("GET", "/books.json");
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const booksList = JSON.parse(request.responseText)
            const authors = booksList.books;
            authors.forEach(el => {
                let li = document.createElement("li");
                li.innerHTML = el.author;
                document.querySelector("body").appendChild(li);
            })
        }
    })
});