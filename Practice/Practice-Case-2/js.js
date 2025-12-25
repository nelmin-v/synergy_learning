window.onload = function () {
    const resultSpan = getResultElement();
    resultSpan.textContent = "0";

    const plusBtn = document.getElementById('plus-btn');
    const minusBtn = document.getElementById('minus-btn');

    plusBtn.addEventListener('click', plus);
    minusBtn.addEventListener('click', minus);
}

function plus() {
    // console.log('!!!!!!!!!!! +++ ');
    const currentValue = getCurrentValue();
    setCurrentValue(currentValue + 1);
}

function minus() {
    // console.log('!!!!!!!!!!! --- ');
    const currentValue = getCurrentValue();
    setCurrentValue(currentValue - 1);
}

function getCurrentValue() {
    const resultElement = getResultElement();
    return Number.parseInt(resultElement.textContent);
}

/**
 * Задать новые значение для блока результатов и пересчитать зависимые условия
 *
 * @param value новое значение
 */
function setCurrentValue(value) {
    const resultElement = getResultElement();
    resultElement.textContent = value;
    const currentValue = getCurrentValue();

    const plusBtn = document.getElementById('plus-btn');
    const minusBtn = document.getElementById('minus-btn');
// console.log(currentValue, plusBtn.disabled);

    if (currentValue > -10 && currentValue < 10) {
        minusBtn.disabled = false;
        setVisibilityResultTestBlock(false);
    }

    if (currentValue < 10 && currentValue > -10) {
        plusBtn.disabled = false;
        setVisibilityResultTestBlock(false);
    }

    if (currentValue === 10) {
        plusBtn.disabled = true;
        setVisibilityResultTestBlock(true);
    } else if (currentValue === -10) {
        minusBtn.disabled = true;
        setVisibilityResultTestBlock(true);
    }

    if (currentValue === 0) {
        resultElement.style.background = "red"
    } else if (currentValue > 0) {
        resultElement.style.background = "yellow"
    } else if (currentValue < 0) {
        resultElement.style.background = "green"
    }
}

function getResultElement() {
    return document.getElementById('result');
}

/**
 * Показать текст
 */
function setVisibilityResultTestBlock(value) {
    const block = document.getElementById('result-text');
    block.textContent = value ? "Вы достигли экстремального значения" : "";
    console.log(value, block.style.display);
}