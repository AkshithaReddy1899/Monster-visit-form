//this form dosnt submit data do it
//aparently the javascript doesnt work! come back and finish it.
//const button = document.querySelector('.submit')

//button.addEventListener('click',meassage)

//function meassage(){
//    alert("For few technical reasons, the monster's visit to your house maybe delayed or canceled. We would like to apologise for the inconvenience on before hand!")
//}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxOEgiD7Tq15EO1p-tG8akWSHL74ZEZ2b5gaXvuGGZ7FbK2q6EfGbKtvhXbnsT12R-mzQ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("For few technical reasons, the monster's visit to your house maybe delayed or canceled. We would like to apologise for the inconvenience on before hand"))
    .catch(error => console.error('Error!', error.message))
})