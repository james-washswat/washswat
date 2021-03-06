"use strict";

import db from '../config/db.js';
import fetch from 'node-fetch';

class OrderStorage {
    static ServiceAddr = process.env.ORDER_SERVICE_HOST || 'localhost';
    static ServicePort = process.env.ORDER_SERVICE_PORT || 3000;
    static ServiceUrl = `http://${OrderStorage.ServiceAddr}:${OrderStorage.ServicePort}/orders`;

    static deleteOrder(orderId) {
        return new Promise((resolve, reject) => {
            const url = `${OrderStorage.ServiceUrl}/${orderId}`;
            const options = {
                method: "DELETE",
            }

            fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                const result = JSON.parse(data);
                if (result.success) {
                    resolve(result);
                } else {
                    reject(result.err);
                }
            })
            .catch((err) => {
                console.log(err);
                resolve(err);
            });
        })
    }

    static getOrderDetails(orderId) {
        return new Promise((resolve, reject) => {
            const url = `${OrderStorage.ServiceUrl}/${orderId}`;
            const options = {
                method: "GET",
            }

            fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                const result = JSON.parse(data);
                if (result.success) {
                    resolve(result);
                } else {
                    reject(result.err);
                }
            })
            .catch((err) => {
                console.log(err);
                resolve(err);
            });
        })
    }

    static getCategoryInfo(categoryId) {
        return new Promise((resolve, reject) => {
            OrderStorage.mySQLQuery({
                text: "SELECT * FROM categories",
            })
            .then((data) => resolve({
                success: true,
                list: data,
            }))
            .catch((err) => reject(`DB ????????? ?????? ??????:\n${err}`));
        })
    }

    static getOrderList(categoryId) {
        return new Promise((resolve, reject) => {
            OrderStorage.mySQLQuery({
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

    static mySQLQuery(query) {
        return new Promise(function (resolve, reject) {
            try {
                db.query(
                    query.text,
                    query.placeholder_arr,
                    (err, rows, fields) => {
                        if(err) {
                            return reject(err);
                        } else {
                            return resolve(rows);
                        }
                    });
            } catch(err) {
                return reject(err);
            }
        });
    }
}

export default OrderStorage;