let item;

function getItem() {
    item = JSON.parse(localStorage.getItem("item") || "[]");
    const p = document.querySelector('.chizish')
    const id = document.querySelector('.id')
    const name = document.querySelector('.name')
    item.forEach(element => {
        p.innerHTML = JSON.stringify(element)
        id.innerHTML = JSON.stringify(element.id)
        name.innerHTML = JSON.stringify(element.name)
    });
}

getItem()

