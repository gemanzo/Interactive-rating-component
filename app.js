const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submit');
const startForm = document.querySelector('.start-container');
const thankyouForm = document.querySelector('.thankyou-form');
let selectedRating = document.querySelector('.selected-rating');
console.log(startForm, thankyouForm);
ratings.forEach((rating) =>
  rating.addEventListener('click', () => {
    resetSelect();

    rating.classList.toggle('selected');
    selectedRating.textContent = rating.dataset.rating;
  })
);

function resetSelect() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('selected');
  }
}

submitBtn.addEventListener('click', switchForm);

function switchForm() {
  startForm.classList.add('hide');
  thankyouForm.classList.remove('hide');
}
