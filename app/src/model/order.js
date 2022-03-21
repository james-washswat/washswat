"use strict";

const OrderStorage = require("./orderStorage");

class Order {
    async info(orderId) {
        try {
            const order = await OrderStorage.getOrderDetails(orderId);
            if (!order) {
                return { success: false, msg: `There is no order for id: ${orderId}` };
            }
            return {
                success: true,
                orderId: orderId,
                items: order.items,
            }
        } catch (err) {
            return { success: false, err };
        }
    }

    async listAll() {
        try {
            const categories = await OrderStorage.getCategoryInfo();
            if (!categories) {
                return { success: false, msg: "There is no category registered" };
            }

            const response = {
                success: true,
                info: [],
            }
            for (var i in categories) {
                const cateId = categories[i].id
                const cateName = categories[i].name
                const cateOrderCnt = categories[i].order_cnt

                const orders = await OrderStorage.getOrderList(cateId);
                if (orders) {
                    response.info.push({
                        category: cateId,
                        categoryName: cateName,
                        orderCount: cateOrderCnt,
                        orders: orders,
                    });
                };
            }
            return response;

        } catch (err) {
            return { success: false, err };
        }
    }
}

module.exports = Order;