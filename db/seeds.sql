USE company_db;

INSERT INTO
    departments (dept_name)
VALUES
    ("Administration"),
    ("Accounting"),
    ("Human Resources"),
    ("Product Oversight"),
    ("Reception"),
    ("Sales"),
    ("Warehouse");

INSERT INTO
    roles(title, salary, department_id)
VALUES
    ("Regional Manager", 60000, 1),
    ("Assistant Regional Manager", 55000, 1),
    ("Human Resources Representative", 50000, 3),
    ("Senior Accountant", 56500, 2),
    ("Accountant", 51000, 2),
    ("Junior Accountant", 37500, 6),
    ("Supplier Relations Representative", 4100, 4),
    ("Customer Service Representative", 38500, 4),
    ("Quality Assurance Representative", 39700, 4),
    ("Receptionist", 30000, 5),
    ("Senior Sales Representative", 42000, 6),
    ("Sales Representative", 37000, 6),
    ("Temp", 30000, 6),
    ("Warehouse Foreman", 50000, 7),
    ("Warehouse Associate", 35500, 7),
    ("Office Administrator", 41500, 1);

INSERT INTO
    employees(id, first_name, last_name, role_id, manager_id)
VALUES
    (4, "Michael", "Scott", 1, null),
    (7, "Toby", "Flenderson", 3, null),
    (1, "Creed", "Bratton", 9, 4),
    (2, "Stanley", "Hudson", 11, 14),
    (3, "Phyllis", "Lapin-Vance", 12, 14),
    (5, "Dwight", "Schrute", 11, 14),
    (6, "Meredith", "Palmer", 7, 4),
    (8, "Angela", "Martin", 4, 4),
    (9, "Oscar", "Martinez", 5, 8),
    (10, "Darryl", "Philbin", 14, 4),
    (11, "Andy", "Bernard", 12, 14),
    (12, "Lonnis", "Collins", 15, 10),
    (13, "Kevin", "Malone", 6, 8),
    (14, "Jim", "Halpert", 11, 4),
    (15, "Kelly", "Kapoor", 8, 4),
    (16, "Madge", "Madsen", 15, 10),
    (17, "Pam", "Halpert", 16, 4),
    (18, "Roy", "Anderson", 15, 10),
    (19, "Jerry", "DiCanio", 15, 10),
    (20, "Ryan", "Howard", 13, 14),
    (21, "Kelly Erin", "Hannon", 10, 17);
