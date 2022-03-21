function showItems(orderId) {
    const expanded = document.querySelector(`#${orderId}`).getAttribute("aria-expanded");
    console.log(expanded)
    if (expanded == "false") {
        return;
    }
    fetch(`orders/${orderId}`)
    .then(response => response.json())
    .then(json => {
        displayItems(orderId, json);
    });
}
 
function displayItems(orderId, json) {
    const container = document.querySelector(`#itemlist-${orderId}`);
    container.innerHTML = createHTMLStringOpen(json);
}

function createHTMLStringOpen(json) { 
    const data = JSON.parse(json);
    const items = data.items;

    if (items.length < 1) return "";

    let html = `<div class="accordion-body">`;
    for (let i in items) {
        html = html.concat(`<h6>${items[i].name}</h6>`);
    }
    html = html.concat(`<div>`);

    return html;
}
