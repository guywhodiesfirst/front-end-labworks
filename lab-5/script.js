const nameRegex = /^[А-ЯІЄЇ][а-яієї]* [А-ЯІЄЇ]\.\s?[А-ЯІЄЇ]\.$/
const groupRegex = /^[А-ЯІЄЇ]{2}\-[0-9][1-9]$/
const phoneRegex = /^(\(?[0-9]{3}\)|[0-9]{3})?\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/
const addressRegex = /^(м\.|с\.) [А-ЯІЄЇ][а-яієї]+$/
const emailRegex = /^([a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/

const regularExpressions = [nameRegex, groupRegex, phoneRegex, addressRegex, emailRegex]
const inputFields = Array.from(document.querySelectorAll(".text-input"))

const submitBtn = document.getElementById("submit-btn")
const userInfo = document.getElementById("user-info")

const fieldRegexPairs = inputFields.map((item, index) => ({
    field: item,
    regex: regularExpressions[index]
}))
submitBtn.addEventListener("click", () => {
    let flag = true;
    
    // Validation of fields
    fieldRegexPairs.forEach((pair) => {
        if (!pair.regex.test(pair.field.value)) {
            flag = false;
            pair.field.classList.add("input-fail");
        } else {
            pair.field.classList.remove("input-fail");
        }
    });

    if (flag) {
        userInfo.innerHTML = ""
        removeClass(userInfo, 'hide')
        const header = document.createElement('h2');
        header.textContent = "Введені дані:";
        userInfo.appendChild(header);

        inputFields.forEach((field) => {
            let paragraph = document.createElement("p");
            paragraph.textContent = field.value;  
            userInfo.appendChild(paragraph);
        });
    }
});

function removeClass(element, nameOfClass) {
    if (element.classList.contains(nameOfClass)) {
        element.classList.remove(nameOfClass)
    }
}

for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].setAttribute('autocomplete', 'none')
    inputFields[i].addEventListener("focus", function() {
        removeClass(this, 'input-fail')
        if(!userInfo.classList.contains('hide')) {
            userInfo.classList.add('hide')
        } 
    })
}
