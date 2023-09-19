let head1 = document.querySelector("h1");
let head2 = document.querySelector("h2");
let head3 = document.getElementById("h3");


function genQuotes() {
    fetch("https://randomuser.me/api/").then((res) => res.json()).then((data) => {
        console.log(data.results[0].name.first);
        head1.innerText = data.results[0].name.first;

       
        head2.innerText = data.results[0].location.street.number;

        head3.innerText = data.results[0].picture.large;

    });

}