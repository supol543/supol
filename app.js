let input = document.getElementById('input');

function addToScreen(value) {
    input.value += value;
}

function clearScreen() {
    input.value = '';
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}
