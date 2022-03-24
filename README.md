# 세탁 주문 관리
![CI](https://github.com/nodejs/nodejs.org/actions/workflows/ci.yml/badge.svg)
![nodejs](https://img.shields.io/badge/nodejs-%5E16.14.0-red)
![javascript](https://img.shields.io/badge/javascript-100%25-yellow)
![license](https://img.shields.io/badge/license-MIT-blue)
![washswat](https://img.shields.io/badge/wash-swat-green)


과제로 주어진 WebApp과 Backend 서비스를 구현한다

## Description

이 프로젝트는 다음 두 개의 모듈로 구성된다.
* WebApp: 카테고리별로 구분된 주문과 주문에 포함된 아이템을 조회하고 관리하는 웹 UI
* Backend: WebApp에 주문 정보 관리기능을 제공

### Screenshot

![screenshot](/app/src/resource/images/screenshot.JPG)

WebApp은 다음 기능을 제공한다.
* 브라우저로 접속시, 주문 DB를 직접 조회하여 전체 주문을 카테고리별로 구분하여 UI 출력
* 개별 주문 클릭시, Backend를 연동하여 해당 주문의 상세정보(아이템 리스트)를 조회하여 UI 출력
* 개별 주문 삭제 클릭시, Backend를 연동하여 해당 주문정보 삭제를 요청하고 UI에서 제거

Backend는 MariaDB database를 사용하며 다음 기능을 제공한다.
* 주문 상세 정보 조회 요청 수신시, DB에서 해당 주문 정보를 조회하여 응답
    * API : GET /orders/${orderId}
* 주문 삭제 요청 수신시, DB에서 해당 주문 정보를 삭제
    * API : DELETE /orders/${orderId}

## Getting Started

### Dependencies

* npm 8.3.1
* node 16.14.0
* nodemon 2.0.15
* mariadb 10.3

### Configuration

* WebApp 환경변수 설정

    app/.env 파일을 만들고 다음 정보를 실제 환경에 맞게 설정한다
    ```
    NODE_ENV="dev"

    PORT=8080

    DB_HOST="localhost"
    DB_USER="username"
    DB_PASSWD="password"
    DB_DATABASE="washswat"

    ORDER_SERVICE_HOST="localhost"
    ORDER_SERVICE_PORT=3000
    ````
* Backend 환경변수 설정

    services/.env 파일을 만들고 다음 정보를 실제 환경에 맞게 설정한다
    ```
    NODE_ENV="dev"

    PORT=3000

    DB_HOST="localhost"
    DB_USER="username"
    DB_PASSWD="password"
    DB_DATABASE="washswat"
    ````
* DB 구성

    Database와 User를 생성하고 mysql 클라이언트를 사용하여 다음 파일을 실행하면, 필요한 테이블을 생성하고 샘플 데이터까지 입력한다

    * app/src/resource/ddl/init.sql

### Executing program

* WebApp

    ```
    cd app
    npm install
    npm start
    ```
* Backend

    ```
    cd services
    npm install
    npm start
    ```

## Authors

* [Kim Jiyoung](mailto:podomat.ex@gmail.com)

## Tag History

* v0.4.0
    * README 작성
    * 코드 구조 정리
* v0.3.0
    * 주문 삭제 개발
    * Backend 서비스 분리
* v0.2.0
    * bootstrap 디자인 적용
    * ES6 import/export 적용
* v0.1.0
    * 코드 구조 설계 및 적용
    * 전체 주문 조회 화면 구현
    * 개별 주문 상세 조회 개발

## License

* MIT

## Acknowledgments

* [MDN](https://developer.mozilla.org/)
* [nodejs](https://nodejs.org/)
* [express](https://expressjs.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Dom-Pizza](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)