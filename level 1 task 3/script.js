document.addEventListener('DOMContentLoaded', function () {
    let currentInput = '';
    let operator = '';
    let result = '';

    const resultInput = document.getElementById('result');

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            handleButtonClick(button.textContent);
        });
    });

    function handleButtonClick(value) {
        if (value >= '0' && value <= '9') {
            currentInput += value;
        } else if (value === '.') {
            if (!currentInput.includes('.') && currentInput !== '') {
                currentInput += value;
            }
        } else if (value === 'C') {
            clearCalculator();
        } else if (value === '←') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            if (operator && result !== '' && currentInput !== '') {
                calculateResult();
            }
        } else {
            if (operator !== '') {
                calculateResult();
            }
            operator = value;
            result = currentInput;
            currentInput = '';
        }

        updateResultDisplay();
    }

    function clearCalculator() {
        currentInput = '';
        operator = '';
        result = '';
        updateResultDisplay();
    }

    function calculateResult() {
        let num1 = parseFloat(result);
        let num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error';
                }
                break;
        }

        currentInput = result.toString();
        operator = '';
    }

    function updateResultDisplay() {
        resultInput.value = currentInput;
    }
});
