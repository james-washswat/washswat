function showItems(orderId) {
    const expanded = document.querySelector(`#${orderId}`).getAttribute("aria-expanded");
    if (expanded == "false") {
        return;
    }
    fetch(`orders/${orderId}`)
    .then(response => response.json())
    .then(json => {
        const data = JSON.parse(json);
        if(!data.success) {
            alert(data.err);
            return;
        }
        displayItems(orderId, data);
    });
}
 
function displayItems(orderId, data) {
    const container = document.querySelector(`#itemlist-${orderId}`);
    container.innerHTML = createHTMLStringOpen(data);
}

function createHTMLStringOpen(data) { 
    const items = data.items;

    if (items.length < 1) return "";

    let html = `<div class="accordion-body">`;
    for (let i in items) {
        html = html.concat(`<h6><span class="badge rounded-pill bg-light text-dark">${items[i].name}</span></h6>`);
    }
    html = html.concat(`<div>`);

    return html;
}
