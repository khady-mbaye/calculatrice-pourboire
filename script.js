let affiche1 = document.querySelector('.affiche1');
let affiche2 = document.querySelector('.affiche2');
let pb = document.querySelector(".long1");
let x = document.querySelector(".long2");
let pbchoisie = document.querySelector('.val');
let reset = document.querySelector(".reset");
let btns = document.querySelectorAll(".btn");
//calcul pour les boutons definie 
btns.forEach((boutons) => {
   boutons.addEventListener("click", (btnclicked)=> {
    if (pb.value <= 0 || x.value <= 0 || isNaN(pb.value) || isNaN(x.value)) {
      alert('Veuillez vérifier les données');
    } else {
      let lepb = (pb.value * btnclicked.target.value) / (100 * x.value);
      let total = pb.value / x.value + lepb;
      affiche1.textContent = `$${lepb.toFixed(2)}`
      affiche2.textContent = `$${total.toFixed(2)}`
      reset.classList.add("btnactive")
      
      
    }
    
  });
});

//pour le bouton custom on va utiliser l'evenement oninput
const custom = document.querySelector(".val");
custom.addEventListener("input", calcul);

function calcul(e) {
  if (pb.value <= 0 || x.value <= 0 || e.target.value <= 0 || isNaN(pb.value) || isNaN(x.value) || isNaN(e.target.value)) {
    alert('Veuillez vérifier les données');
  } else {
    let lepb = (pb.value * e.target.value) / (100 * x.value);
    let total = pb.value / x.value + lepb;
    affiche1.textContent = `$${lepb.toFixed(2)}`
    affiche2.textContent = `$${total.toFixed(2)}`
    reset.classList.add('reset-active');
  }
}

