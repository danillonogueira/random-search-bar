const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");
const btnIcon = document.querySelector(".icon");

// CHANGING INPUT STATE WHEN USER TYPES

input.addEventListener("input", function() {
  
  if (input.value !== "") {
  btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
  
});

// BASE FUNCTION FOR BUTTON CLICK

function btnClick() {

  if (input.value !== "") {

    const randomBool = Boolean(Math.round(Math.random()));
    
    if (randomBool === true) {
      btn.classList.add("btn--success");
      input.classList.add("input--success");
      btnIcon.classList.add("fa-check");
      btnIcon.classList.remove("fa-location-arrow");
      alert.textContent = "A mensagem foi enviada com sucesso!";
      alert.classList.remove("hidden");
      input.value = "";
      setTimeout(function(){
        btn.classList.remove("btn--success");
        input.classList.remove("input--success");
        btn.classList.remove("btn--active");
        btnIcon.classList.remove("fa-check");
        btnIcon.classList.add("fa-location-arrow");       
        alert.classList.add("hidden");
      }, 1000)
    } else {      
      btn.classList.add("btn--error");
      input.classList.add("input--error");
      btnIcon.classList.add("fa-times");
      btnIcon.classList.remove("fa-location-arrow");
      alert.textContent = "Ocorreu um erro ao enviar sua mensagem!";
      alert.classList.remove("hidden");
      setTimeout(function() {
        btn.classList.remove("btn--error");
        input.classList.remove("input--error");
        btnIcon.classList.remove("fa-times");
        btnIcon.classList.add("fa-location-arrow");
        alert.classList.add("hidden");
      }, 1000)
    } 
  } 
}
 
// BUTTON CLICK

btn.addEventListener("click", btnClick)

// ENTER PRESS

input.addEventListener("keyup", function(e){
  if (e.keyCode === 13) {
    btnClick()
  }
})

// GABRIEL'S REVIEW (ICON VARIATION ON STATUS CHANGE MISSING)

/*

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");

function randomizeValidation() {
  return Boolean(Math.round(Math.random()));
}

function setInputState(state) {
  const btnClass = `btn--${state}`;
  const inputClass = `input--${state}`

  btn.classList.add(btnClass);
  input.classList.add(inputClass);

  alert.textContent = (state === 'success')
    ? 'A mensagem foi enviada com sucesso!'
    : 'Ocorreu um erro ao enviar sua mensagem!';

  alert.classList.remove('alert--hidden');
  
  setTimeout(function (){
    btn.classList.remove(btnClass);
    input.classList.remove(inputClass);       
    alert.classList.add("alert--hidden");

    if(state === 'success') {
      input.value = '';
    }
  }, 1000);
}

input.addEventListener("input", function() {
  (input.value)
    ? btn.classList.add("btn--active")
    : btn.classList.remove("btn--active");
});

btn.addEventListener("click", function (){
  if (input.value) {
    setInputState(
      randomizeValidation() ? 'success' : 'error'
    );
  }
});

*/

