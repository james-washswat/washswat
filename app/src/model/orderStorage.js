"use strict";

// const db = require("../config/db");
import db from '../config/db.js';

class OrderStorage {
    static getCategoryInfo(categoryId) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM categories;";
            db.query(
                query, 
                (err, data) => {
                    if(err) reject(`DB 조회중 에러 발생:\n${err}`);
                    else resolve({
                        success: true,
                        list: data,
                    });
                }
            );
        })
    }
    static getOrderDetails(orderId) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM orders WHERE id = ?;";
            db.query(
                query, [orderId], 
                (err, data) => {
                    if(err) reject(`DB 조회중 에러 발생:\n${err}`);
                    else {
                        const query = "SELECT * FROM item WHERE order_id = ?;";
                        db.query(
                            query, [orderId], 
                            (err, data) => {
                                if(err) reject(`DB 조회중 에러 발생:\n${err}`);
                                else resolve({
                                    success: true,
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
            const query = "SELECT O.id, count(I.order_id) item_cnt \
                FROM (SELECT * FROM orders WHERE category_id = ?) O LEFT OUTER JOIN item I \
                ON O.id = I.order_id \
                GROUP BY O.id;";
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

// module.exports = OrderStorage;
export default OrderStorage;