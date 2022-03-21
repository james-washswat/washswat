"use strict";

const db = require("../config/db");

class OrderStorage {
    static getCategoryInfo(categoryId) {
        return new Promise((resolve, reject) => {
            const query = "select * from categories;";
            db.query(
                query, 
                (err, data) => {
                    if(err) reject(`${err}`);
                    else resolve(data);
                }
            );
        })
    }
    static getOrderDetails(orderId) {
        return new Promise((resolve, reject) => {
            const query = "select * from orders where id = ?;";
            db.query(
                query, [orderId], 
                (err, data) => {
                    if(err) reject(`${err}`);
                    else {
                        const query = "select * from item where order_id = ?;";
                        db.query(
                            query, [orderId], 
                            (err, data) => {
                                if(err) reject(`${err}`);
                                else resolve({
                                    orderId: orderId,
                                    items: data,
                                });
                            }
                        );
                    }
                }
            );

        });
    }
    static getOrderList(categoryId) {
        return new Promise((resolve, reject) => {
            const query = "select * from orders where category_id = ?;";
            db.query(
                query, [categoryId], 
                (err, data) => {
                    if(err) reject(`${err}`);
                    else resolve(data);
                }
            );

        });
    }
}

module.exports = OrderStorage;