-- 카테고리 테이블
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(64) NOT NULL, 
    order_cnt INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

-- 주문 테이블
DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
    id VARCHAR(16) NOT NULL,
    category_id INT NOT NULL,
    -- customer_id INT NOT NULL,
    ordered_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 아이템(의류) 테이블 
DROP TABLE IF EXISTS item;
CREATE TABLE item (
    order_id VARCHAR(16) NOT NULL,
    name VARCHAR(64) NOT NULL, -- << 의류에 부탁된 바코드 숫자
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders(id)
);
SET foreign_key_checks = 1;


-- 카테고리별 주문 조회
SELECT O.* FROM orders O, categories C WHERE O.category_id = C.id and C.id = 1;


-- 샘플 데이터 입력
DELETE FROM categories;
ALTER TABLE categories AUTO_INCREMENT = 1;
INSERT INTO categories (id, name, order_cnt) VALUES 
(1, '잠겨있는 주문', 1), (2, '아이템 생성 안됨', 558), (3, '가격 설정 안됨', 536), 
(4, '보풀 제거 필요', 3), (5, '얼룩 케어 필요', 13), (6, '컴플레인', 1), 
(7, '수선', 2), (8, '바지 앞주름 잡기', 2);

DELETE FROM orders;
INSERT INTO orders (id, category_id) VALUES 
('YJA352CB0302927', 1), 
('YJA352CB0302928', 2),('YJA352CB0302929', 2),('YJA352CB0302930', 2),('YJA352CB0302931', 2),('YJA352CB0302932', 2),('YJA352CB0302933', 2),('YJA352CB0302934', 2),('YJA352CB0302935', 2),('YJA352CB0302936', 2),('YJA352CB0302937', 2),
('YJA352CB0302938', 2),('YJA352CB0302939', 2),('YJA352CB0302940', 2),('YJA352CB0302941', 2),('YJA352CB0302942', 2),('YJA352CB0302943', 2),('YJA352CB0302944', 2),('YJA352CB0302945', 2),('YJA352CB0302946', 2),('YJA352CB0302947', 2),
('YJA352CB0302948', 2),('YJA352CB0302949', 2),('YJA352CB0302950', 2),('YJA352CB0302951', 2),('YJA352CB0302952', 2),('YJA352CB0302953', 2),('YJA352CB0302954', 2),('YJA352CB0302955', 2),('YJA352CB0302956', 2),('YJA352CB0302957', 2),
('YJA352CB0302958', 2),('YJA352CB0302959', 2),('YJA352CB0302960', 2),('YJA352CB0302961', 2),('YJA352CB0302962', 2),('YJA352CB0302963', 2),('YJA352CB0302964', 2),('YJA352CB0302965', 2),('YJA352CB0302966', 2),('YJA352CB0302967', 2),
('YJA352CB0302968', 2),('YJA352CB0302969', 2),('YJA352CB0302970', 2),('YJA352CB0302971', 2),('YJA352CB0302972', 2),('YJA352CB0302973', 2),('YJA352CB0302974', 2),('YJA352CB0302975', 2),('YJA352CB0302976', 2),('YJA352CB0302977', 2),
('YJA352CB0302978', 2),('YJA352CB0302979', 2),('YJA352CB0302980', 2),('YJA352CB0302981', 2),('YJA352CB0302982', 2),('YJA352CB0302983', 2),('YJA352CB0302984', 2),('YJA352CB0302985', 2),('YJA352CB0302986', 2),('YJA352CB0302987', 2),
('YJA352CB0302988', 2),('YJA352CB0302989', 2),('YJA352CB0302990', 2),('YJA352CB0302991', 2),('YJA352CB0302992', 2),('YJA352CB0302993', 2),('YJA352CB0302994', 2),('YJA352CB0302995', 2),('YJA352CB0302996', 2),('YJA352CB0302997', 2),
('YJA352CB0302998', 2),('YJA352CB0302999', 2),('YJA352CB0303000', 2),('YJA352CB0303001', 2),('YJA352CB0303002', 2),('YJA352CB0303003', 2),('YJA352CB0303004', 2),('YJA352CB0303005', 2),('YJA352CB0303006', 2),('YJA352CB0303007', 2),
('YJA352CB0303008', 2),('YJA352CB0303009', 2),('YJA352CB0303010', 2),('YJA352CB0303011', 2),('YJA352CB0303012', 2),('YJA352CB0303013', 2),('YJA352CB0303014', 2),('YJA352CB0303015', 2),('YJA352CB0303016', 2),('YJA352CB0303017', 2),
('YJA352CB0303018', 2),('YJA352CB0303019', 2),('YJA352CB0303020', 2),('YJA352CB0303021', 2),('YJA352CB0303022', 2),
('YJA352CB0304001', 3),('YJA352CB0304002', 3),('YJA352CB0304003', 3),('YJA352CB0304004', 3),('YJA352CB0304005', 3),('YJA352CB0304006', 3),('YJA352CB0304007', 3),('YJA352CB0304008', 3),('YJA352CB0304009', 3),('YJA352CB0304010', 3),
('YJA352CB0304011', 3),('YJA352CB0304012', 3),('YJA352CB0304013', 3),('YJA352CB0304014', 3),('YJA352CB0304015', 3),('YJA352CB0304016', 3),('YJA352CB0304017', 3),('YJA352CB0304018', 3),('YJA352CB0304019', 3),('YJA352CB0304020', 3),
('YJA352CB0304021', 3),('YJA352CB0304022', 3),('YJA352CB0304023', 3),('YJA352CB0304024', 3),('YJA352CB0304025', 3),('YJA352CB0304026', 3),('YJA352CB0304027', 3),('YJA352CB0304028', 3),('YJA352CB0304029', 3),('YJA352CB0304030', 3),
('YJA352CB0304031', 3),('YJA352CB0304032', 3),('YJA352CB0304033', 3),('YJA352CB0304034', 3),('YJA352CB0304035', 3),('YJA352CB0304036', 3),('YJA352CB0304037', 3),('YJA352CB0304038', 3),('YJA352CB0304039', 3),('YJA352CB0304040', 3),
('YJA352CB0304041', 3),('YJA352CB0304042', 3),('YJA352CB0304043', 3),('YJA352CB0304044', 3),('YJA352CB0304045', 3),('YJA352CB0304046', 3),('YJA352CB0304047', 3),('YJA352CB0304048', 3),('YJA352CB0304049', 3),('YJA352CB0304050', 3),
('YJA352CB0304051', 3),('YJA352CB0304052', 3),('YJA352CB0304053', 3),('YJA352CB0304054', 3),('YJA352CB0304055', 3),('YJA352CB0304056', 3),('YJA352CB0304057', 3),('YJA352CB0304058', 3),('YJA352CB0304059', 3),('YJA352CB0304060', 3),
('YJA352CB0304061', 3),('YJA352CB0304062', 3),('YJA352CB0304063', 3),('YJA352CB0304064', 3),('YJA352CB0304065', 3),('YJA352CB0304066', 3),('YJA352CB0304067', 3),('YJA352CB0304068', 3),('YJA352CB0304069', 3),('YJA352CB0304070', 3),
('YJA352CB0304071', 3),('YJA352CB0304072', 3),('YJA352CB0304073', 3),('YJA352CB0304074', 3),('YJA352CB0304075', 3),('YJA352CB0304076', 3),('YJA352CB0304077', 3),('YJA352CB0304078', 3),('YJA352CB0304079', 3),('YJA352CB0304080', 3),
('YJA352CB0304081', 3),('YJA352CB0304082', 3),('YJA352CB0304083', 3),('YJA352CB0304084', 3),('YJA352CB0304085', 3),('YJA352CB0304086', 3),('YJA352CB0304087', 3),('YJA352CB0304088', 3),('YJA352CB0304089', 3),('YJA352CB0304090', 3),
('YJA352CB0304091', 3),('YJA352CB0304092', 3),('YJA352CB0304093', 3),('YJA352CB0304094', 3),('YJA352CB0304095', 3),('YJA352CB0304096', 3),('YJA352CB0304097', 3),('YJA352CB0304098', 3),('YJA352CB0304099', 3),
('YJA352CB0305001', 4),('YJA352CB0305002', 4),('YJA352CB0305003', 4),
('YJA352CB0306001', 5),('YJA352CB0306002', 5),('YJA352CB0306003', 5),('YJA352CB0306004', 5),('YJA352CB0306005', 5),('YJA352CB0306006', 5),('YJA352CB0306007', 5),('YJA352CB0306008', 5),('YJA352CB0306009', 5),('YJA352CB0306010', 5),
('YJA352CB0306011', 5),('YJA352CB0306012', 5),('YJA352CB0306013', 5),
('YJA352CB0307001', 6),
('YJA352CB0308001', 7),('YJA352CB0308002', 7),
('YJA352CB0309001', 8),('YJA352CB0309002', 8);

DELETE FROM item;
INSERT INTO item (order_id, name) VALUES 
('YJA352CB0304001', '46-0-330'),('YJA352CB0304001', '46-0-331'),('YJA352CB0304001', '46-0-332'),('YJA352CB0304001', '46-0-333'),('YJA352CB0304001', '46-0-334'),('YJA352CB0304001', '46-0-335'),('YJA352CB0304001', '46-0-336'),('YJA352CB0304001', '46-0-337'),('YJA352CB0304001', '46-0-338'),('YJA352CB0304001', '46-0-339'),
('YJA352CB0304002', '46-0-340'),('YJA352CB0304002', '46-0-341'),('YJA352CB0304002', '46-0-342'),('YJA352CB0304002', '46-0-343'),('YJA352CB0304002', '46-0-344'),('YJA352CB0304002', '46-0-345'),('YJA352CB0304002', '46-0-346'),('YJA352CB0304002', '46-0-347'),('YJA352CB0304002', '46-0-348'),('YJA352CB0304002', '46-0-349'),
('YJA352CB0304003', '46-0-350'),('YJA352CB0304003', '46-0-351'),('YJA352CB0304003', '46-0-352'),('YJA352CB0304003', '46-0-353'),('YJA352CB0304003', '46-0-354'),
('YJA352CB0304004', '46-0-355'),('YJA352CB0304004', '46-0-356'),('YJA352CB0304004', '46-0-357'),('YJA352CB0304004', '46-0-358'),('YJA352CB0304004', '46-0-359'),
('YJA352CB0305001', '46-0-360'),('YJA352CB0305001', '46-0-361'),('YJA352CB0305002', '46-0-362'),('YJA352CB0305003', '46-0-363'),
('YJA352CB0306001', '46-0-364'),('YJA352CB0306001', '46-0-365'),('YJA352CB0306002', '46-0-366'),('YJA352CB0306003', '46-0-367'),('YJA352CB0306004', '46-0-368'),('YJA352CB0306005', '46-0-369'),
('YJA352CB0307001', '46-0-370'),('YJA352CB0308001', '46-0-371'),
('YJA352CB0308002', '46-0-372'),('YJA352CB0309001', '46-0-373'),('YJA352CB0309002', '46-0-374');

UPDATE categories SET order_cnt = (SELECT count(*) FROM orders WHERE category_id = 1) where id = 1;
UPDATE categories SET order_cnt = (SELECT count(*) FROM orders WHERE category_id = 2) where id = 2;
UPDATE categories SET order_cnt = (SELECT count(*) FROM orders WHERE category_id = 3) where id = 3;
UPDATE categories SET order_cnt = (SELECT count(*) FROM orders WHERE category_id = 4) where id = 4;
UPDATE categories SET order_cnt = (SELECT count(*) FROM orders WHERE category_id = 5) where id = 5;
UPDATE categories SET order_cnt = (SELECT count(*) FROM orders WHERE category_id = 6) where id = 6;
UPDATE categories SET order_cnt = (SELECT count(*) FROM orders WHERE category_id = 7) where id = 7;
UPDATE categories SET order_cnt = (SELECT count(*) FROM orders WHERE category_id = 8) where id = 8;