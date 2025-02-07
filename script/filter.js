
    
function liveSearch() {
    let boxes = document.querySelectorAll("card-image")
    let search_query = document.getElementById("myInput").value;

    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].getAttribute('alt').toLowerCase()
            .includes(search_query.toLowerCase())) {
            boxes[i].classList.remove("is-hidden");
        } else {
            boxes[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('myInput');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});