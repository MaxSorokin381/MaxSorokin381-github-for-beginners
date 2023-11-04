const Auth = document.querySelector('#Auth');
const modalAuth = document.querySelector('.modalAuth')
const closeAuth = document.querySelector('.closeAuth')
const logInForm = document.querySelector('#logInForm')
const loginInput = document.querySelector('#login')
let login = '';



 function authorized(){
    console.log('Авторизован');
 }
 
function notAuthorized() {
    console.log('Не авторизован')

    function logIn(event){
        event.preventDefault();
        console.log('Логин');
        console.log(loginInput.value)
    }
    
     logInForm.addEventListener('submit', logIn) 
}
if (login) {
    authorized();
} else {
    notAuthorized();
}
Auth.addEventListener('click', function(event){
    modalAuth.classList.add('is-open')
})
closeAuth.addEventListener("click", function(event) {
    modalAuth.classList.remove("is-open");
 });










const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")


cartButton.addEventListener("click", function(event) {
   modal.classList.add("is-open");
} );
close.addEventListener("click", function(event) {
    modal.classList.remove("is-open");
 });

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
function toggleModal() {
    modal.classList.toggle('is-open');
};
