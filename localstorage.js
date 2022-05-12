// formData object
let formData = {
  fullname: '',
  email: '',
  description: '',
};
/* eslint-disable */

// retrieving the local storage
if (localStorage.getItem('formData') !== null) {
  const data = localStorage.getItem('formData');
  formData = JSON.parse(data);
}

/* eslint-disable */

// getting form input fields and textarea
const formElements = document.querySelectorAll('input, textarea');
// looping through the elements
formElements.forEach((element) => {
  // displaying the formData values to input fields
  element.value = formData[element.name];
  // applying input event listener on elements
  element.addEventListener('input', (e) => {
 // setting the values of input fields to the respective keys in object
  formData[e.target.name] = e.target.value;
 // saving the data in local storage
 localStorage.setItem('formData', JSON.stringify(formData));
  });
});
