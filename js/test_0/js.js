const AREA_ID_1 = "test-area-1";
const AREA_ID_2 = "test-area-2";
const AREA_ID_3 = "test-area-3";
const AREA_ID_4 = "test-area-4";
const AREA_ID_5 = "test-area-5";
const TEXT_CONTENT = "Hello World !";

window.onload = function () {
    firstPart();
    secondPart();
    thirdPart();
    fourthPart();
    fifthPart();
}

// Первое задание
function firstPart() {
    const area = document.getElementById(AREA_ID_1);
    const element = document.createElement("h1");
    element.textContent = TEXT_CONTENT;
    area.appendChild(element);
}

// Второе задание
function secondPart() {
    class Employee {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }
    }

    const employees = [
        new Employee("John", "Wick"),
        new Employee("Bob", "Sad"),
        new Employee("Jenny", "Dorwell"),
        new Employee("Man", "Angry"),
        new Employee("Tony", "Soprano"),
    ];

    const area = document.getElementById(AREA_ID_2);
    const element = document.createElement("ol");

    employees.forEach(function (it) {
        const li = document.createElement("li");
        li.textContent = `${it.firstName} ${it.lastName}`;
        element.appendChild(li);
    })

    area.appendChild(element);
}

// Третье задание
function thirdPart() {
    const area = document.getElementById(AREA_ID_3);
    const container = document.createElement("div");
    container.id = "magic-container";
    container.style.width = "50px";
    container.style.height = "50px";
    container.style.backgroundColor = "red";
    container.style.transition = "border-radius 0.5s ease";
    container.style.cursor = "pointer";

    container.addEventListener("click", function () {
        if (container.style.borderRadius === "50%") {
            container.style.borderRadius = "0";
        } else {
            container.style.borderRadius = "50%";
        }
    });

    area.appendChild(container);
}

const calc = {
    doSomething(action, a, b) {
        let res = 0
        const parsedA = parseInt(a);
        const parsedB = parseInt(b);

        if (isNaN(parsedA)) {
             return "В первом поле не число"
        }

        if (isNaN(parsedB)) {
            return "Во втором поле не число"
        }

        switch (action) {
            case "+":
                res = parsedA + parsedB;
                break;
            case "-":
                res = parsedA - parsedB;
                break;
            case "*":
                res = parsedA * parsedB;
                break;
            case "/":
                res = parsedA / parsedB;
                break;
        }

        return res;
    }
}

// Четвертое задание
function fourthPart() {
    const area = document.getElementById(AREA_ID_4);
    const container1 = document.createElement("input");
    const action = document.createElement("select");
    ["+", "-", "*", "/"].forEach(function (it) {
        const option = document.createElement("option");
        option.text = it;
        action.appendChild(option);
    });

    const container2 = document.createElement("input");
    const button = document.createElement("button");
    const res = document.createElement("div");
    button.type = "button";
    button.textContent = "Посчитать";
    button.addEventListener("click", function () {
        const operand = action.selectedOptions.item(0).text;
        console.log(operand);
        res.textContent = calc.doSomething(operand, container1.value, container2.value);
    });

    area.appendChild(container1);
    area.appendChild(action);
    area.appendChild(container2);
    area.appendChild(button);
    area.appendChild(res);
}

// Пятое задание
function fifthPart() {
    const area = document.getElementById(AREA_ID_5);
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Сохранить";

    button.addEventListener("click", function () {
        const value = input.value;
        localStorage.setItem("Text", value);

        setTimeout(function () {
            console.log(localStorage.getItem("Text"));
        }, 2000);
    });

    area.appendChild(input);
    area.appendChild(button);
}