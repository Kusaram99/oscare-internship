const barBtn = document.querySelector('.bar-btn');
const closeBtn = document.querySelector('.close-btn');


// nav toggle hadler function
function toggleNav() {
    document.querySelector('nav').classList.toggle('toggle');
}

barBtn.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);

// callapse buttons for frequesncy ask question--------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    var faqQuestions = document.querySelectorAll('.faq-btn');
    // console.log(faqQuestions.length);

    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            var answer = this.nextElementSibling;

            // Toggle the answer visibility
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.padding = null;
                answer.style.opacity = 0;
            } else {
                answer.style.maxHeight = (answer.scrollHeight * 10) + "px";
                // console.log("answer.scrollHeight", answer.scrollHeight);
                answer.style.padding = "28px 51px 28px 45px";
                answer.style.opacity = 1;
            }

            // Toggle active class for the clicked question
            this.classList.toggle('active');
        });
    });
});


// ------------------------------------------------------- Validation for form
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Form submitted');
    let isValid = true;

    // Name validation 
    if (name.value.trim() === '') {
        isValid = false;
        name.style.border = '1px solid red'; 
    } else {
        name.style.border = '1px solid #C7C7C7';
    }

    // Phone validation 
    if (phone.value.trim() === '') {
        isValid = false;
        phone.style.border = '1px solid red';
    } else if (!/^\d{10}$/.test(parseInt(phone.value))) {
        isValid = false;
        phone.style.border = '1px solid red'; 
    } else {
        phone.style.border = '1px solid #C7C7C7';
    }

    // Email validation 
    if (email.value.trim() === '') {
        isValid = false;
        email.style.border = '1px solid red';
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        isValid = false;
        email.style.border = '1px solid red';
    } else {
        email.style.border = '1px solid #C7C7C7';
    }

    // Message validation 
    if (message.value.trim() === '') {
        isValid = false;
        message.style.border = '1px solid red';
    } else {
        message.style.border = '1px solid #C7C7C7';
    }

    // console.log(isValid);
    if (isValid) {
        
        // alert success message
        alert('Form submitted successfully!'); 
        
        // clear the form
        name.value = '';
        phone.value = '';
        email.value = '';
        message.value = '';

    }
});