"use strict";

const db = require('../config/db.js');

class OrderStorage {
    static deleteOrder(orderId) {
        return new Promise((resolve, reject) => {
            mySQLQuery({
                text: "DELETE FROM item WHERE order_id = ?",
                placeholder_arr: [orderId],
            })
            .then(mySQLQuery({
                text: "DELETE FROM orders WHERE id = ?",
                placeholder_arr: [orderId],
            }))
            .then(resolve({
                success: true,
                orderId: orderId,
            }))
            .catch((err) => reject(`DB 삭제중 에러 발생:\n${err}`));
        })
    }

    static getCategoryInfo(categoryId) {
        return new Promise((resolve, reject) => {
            mySQLQuery({
                text: "SELECT * FROM categories",
            })
            .then((data) => resolve({
                success: true,
                list: data,
            }))
            .catch((err) => reject(`DB 조회중 에러 발생:\n${err}`));
        })
    }

    static getOrderDetails(orderId) {
        return new Promise((resolve, reject) => {
            mySQLQuery({
                text: "SELECT * FROM item WHERE order_id = ?",
                placeholder_arr: [orderId],
            })
            .then((data) => resolve({
                success: true,
                orderId: orderId,
                items: data,
            }))
            .catch((err) => reject(`DB 조회중 에러 발생:\n${err}`));

        });
    }

    static getOrderList(categoryId) {
        return new Promise((resolve, reject) => {
            mySQLQuery({
                text: "SELECT O.id, count(I.order_id) item_cnt \
                FROM (SELECT * FROM orders WHERE category_id = ?) O LEFT OUTER JOIN item I \
                ON O.id = I.order_id \
                GROUP BY O.id;",
                placeholder_arr: [categoryId]
            })
            .then(resolve)
            .catch(reject);
        });
    }
}

function mySQLQuery(query) {
    return new Promise(function (resolve, reject) {
        try {
            db.query(query.text, query.placeholder_arr, function (err, rows, fields) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(rows);
                }
            });
        } catch (err) {
            return reject(err);
        }
    });
}

module.exports = OrderStorage;