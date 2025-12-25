window.onload = function () {
    const sumBtn =  document.getElementById('sum-btn');
    const subtractBtn =  document.getElementById('subtract-btn');
    const multiplyBtn =  document.getElementById('multiply-btn');
    const divideBtn =  document.getElementById('divide-btn');

    sumBtn.addEventListener('click', () => calculate("sum"))
    subtractBtn.addEventListener('click', () => calculate("subtract"))
    multiplyBtn.addEventListener('click', () => calculate("multiply"))
    divideBtn.addEventListener('click', () => calculate("divide"))
}

/**
 * Функция калькулятора
 *
 * @param operation операция (sum/subtract/multiply/divide)
 */
function calculate(operation) {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const resultDiv = document.getElementById('result');

    resultDiv.classList.remove('error');
    resultDiv.innerHTML = "";

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.classList.add('error');
        resultDiv.innerHTML = "Ошибка: Введите действительные числа.";
        return;
    }

    let result;

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultDiv.classList.add('error');
                resultDiv.innerHTML = "Ошибка: Деление на ноль невозможно.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDiv.classList.add('error');
            resultDiv.innerHTML = "Ошибка: Неверная операция.";
            return;
    }

    resultDiv.innerHTML = `Результат: ${result}`;
}
