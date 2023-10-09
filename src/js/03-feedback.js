var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(getData, 500));
form.addEventListener('submit', cleanData)

const data = {
};

autoComplete();
function autoComplete() {
    const storageData = localStorage.getItem("feedback-form-state");
    const { email, message } = JSON.parse(storageData);
        form.email.textContent = email;
        form.message.textContent = message;
}

function getData(event) {
    data.email = form.email.value;
    data.message = form.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
};


function cleanData(event) { 
    event.preventDefault();
    const data = localStorage.getItem("feedback-form-state");
    console.log(JSON.parse(data));
    localStorage.removeItem("feedback-form-state")
    event.currentTarget.reset();
}
