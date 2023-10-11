var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(getData, 500));
form.addEventListener('submit', clearData)

const data = {
};

autoComplete();
function autoComplete() {
    if (localStorage.getItem("feedback-form-state")) {
        const storageData = localStorage.getItem("feedback-form-state");
        const { email, message } = JSON.parse(storageData);
        form.email.value = email;
        form.message.value = message;
    }
}

function getData(event) {
    data.email = form.email.value;
    data.message = form.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
};


function clearData(event) { 
    event.preventDefault();
    const data = localStorage.getItem("feedback-form-state");
    console.log(JSON.parse(data));
    localStorage.removeItem("feedback-form-state")
    event.currentTarget.reset();
}
