// let $ = document;
let radiobuttons = document.querySelectorAll('.test__radioButton');
let submitButton = document.querySelector('.test__submit');
let submitButtonAlert = document.querySelector('.test__buttonAlert');
let testItems = document.querySelectorAll('.test__item');

if(!testItems[0].classList.contains('test__item--active')){
    testItems[0].classList.add('test__item--active');
}


radiobuttons.forEach(radiobutton => {
    radiobutton.addEventListener("change", function (event) {
        let currentTarget = event.target;
        let testItem = currentTarget.closest(".test__item");
        let alart = testItem.querySelector(".test__alert");
        let prevTestItem = testItem.previousElementSibling;
        let isChecked =true;
        if (prevTestItem){
            isChecked = prevTestItem.querySelector(".test__radioButton:checked");
        }
        if (isChecked){
            document.querySelectorAll(`.test__label .test__radioButton[name="${currentTarget.name}"]`).forEach(radiobutton => {
                radiobutton.closest("label").classList.remove("test__label--active");
            })
            currentTarget.closest("label").classList.add("test__label--active");

            if (!testItem.classList.contains("test__item--active")) {
                testItem.classList.add("test__item--active");
            }
            alart.style.display = "none";
            let nextTestItem = testItem.nextElementSibling.classList.contains("test__item")?testItem.nextElementSibling:false;
            console.log(nextTestItem);
            if (nextTestItem){
                nextTestItem.classList.add("test__item--active");
            }else {

                if (!submitButton.classList.contains("test__submit--active")){
                    submitButton.classList.add("test__submit--active");
                    submitButton.setAttribute("type", "submit");
                    submitButtonAlert.style.display = "none";
                }
            }
        }else {
            alart.style.display = "inline";
            currentTarget.checked = false;
        }

    })

})

submitButton.addEventListener("click", function (event) {
    let countChecked = 0;
    radiobuttons.forEach(radiobutton => {
        if (radiobutton.checked){
            countChecked++;
        }
    })
    if (countChecked === testItems.length){
        submitButton.classList.add("test__submit--active");
        submitButton.setAttribute("type", "submit");
    }else {
        submitButtonAlert.style.display = "block";
    }
})