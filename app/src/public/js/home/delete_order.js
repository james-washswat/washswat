function delete_order(orderId) {
    deleteOrder(orderId);

    fetch(`orders/${orderId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(json => {
        const data = JSON.parse(json);
        if(!data.success) {
            alert(data.err);
            return;
        }
        deleteOrder(orderId);
    });
}

function deleteOrder(orderId) {
    const container = document.querySelector(`#box-${orderId}`);
    container.remove();
}
