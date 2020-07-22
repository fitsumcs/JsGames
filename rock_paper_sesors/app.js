// selecet images
const imgs = document.querySelectorAll('img');

// add action listener 
imgs.forEach((img) => img.addEventListener('click', myfun));


function myfun(e) {
    console.log(e.target.id);
    // loadModal();
}


















function loadModal() {
    $('#exampleModalCenter').modal('show');
}