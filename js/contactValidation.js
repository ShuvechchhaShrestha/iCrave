form = document.querySelector('#contactForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})

function formValidate(){
    fullname = document.querySelector("#name").value;
    email = document.querySelector("#email").value;
    message = document.querySelector("#message").value;

    if(fullname == "" || 
    fullname == undefined
    || fullname == null){
        showError('Name is required.');
    }else if(email == "" || 
    email == undefined
    || email == null){
        showError('Email is required.');
    }else if(message == "" || 
    message == undefined
    || message == null){
        showError('Message is required.');
    }else{
        showError('We will contact you at '+email);
        form.reset();
    }
}

function showError(msg){
    document.querySelector('#error').textContent = msg;

    error.classList.remove('noOpacity');
    setTimeout(() => {
        error.classList.add('noOpacity');
    }, 2000);
}