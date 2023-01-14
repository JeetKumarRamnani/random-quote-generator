const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#my-btn");

btn.addEventListener("click", () => {
    fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((data) => {
            const rand = Math.floor(Math.random() * data.length + 1);
            quote.innerHTML = data[rand].text;
            author.innerText = data[rand].author;
        })
        .catch((err) => {
            return (
                (quote.innerHTML = "Sorry There IS Problem While Fetching"),
                (author.innerHTML = err)
            );
        });
});
