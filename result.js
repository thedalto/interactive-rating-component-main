const result = document.querySelector('.result');

function getDataOnLocalStorage() {
    const data = localStorage.getItem('buttonSelected');
    return JSON.parse(data);
}

function addDataOnHtml() {
    const value = getDataOnLocalStorage();
    result.innerHTML = `${value}`;
}

addDataOnHtml();