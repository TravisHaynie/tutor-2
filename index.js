const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const array = ["name", "email"];
const renderHtml = document.getElementById('render-html')

function renderFormInputs() {
    
    for(value of array) {
        console.log(value);
        renderHtml.innerHTML += 
            `
                <label for=${value}>${value}</label>
                <input name=${value} type=${value} id=${value} />
            `;
    }
    
}

renderFormInputs();

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
        const formData = new FormData(form);
        const newFormDataName = formData.get('name');
        const newFormDataEmail = formData.get('email');
        console.log(newFormDataName);
        console.log(newFormDataEmail);
});

