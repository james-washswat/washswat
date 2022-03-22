"use strict";

import OrderStorage from './orderStorage.js';

class Order {
    async delete(orderId) {
        try {
            const result = await OrderStorage.deleteOrder(orderId);
            return result;
        } catch (err) {
            return { success: false, err };
        }
    }

    async info(orderId) {
        try {
            const orderInfo = await OrderStorage.getOrderDetails(orderId);
            console.log(orderInfo);
            return orderInfo;
        } catch (err) {
            return { success: false, err };
        }
    }

    async listAll() {
        try {
            const categoryInfo = await OrderStorage.getCategoryInfo();
            if (!categoryInfo.success) {
                return categoryInfo;
            }

            const response = {
                success: true,
                info: [],
            }
            for (var i in categoryInfo.list) {
                const cateId = categoryInfo.list[i].id
                const cateName = categoryInfo.list[i].name
                const cateOrderCnt = categoryInfo.list[i].order_cnt

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

export default Order;