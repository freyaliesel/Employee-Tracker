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
    employees(first_name, last_name, role_id, manager_id)
VALUES
    ("Michael", "Scott", 1, null),
    ("Toby", "Flenderson", 3, null),
    ("Darryl", "Philbin", 14, null),
    ("Jim", "Halpert", 11, 1),
    ("Angela", "Martin", 4, 1),
    ("Pam", "Halpert", 16, 1),
    ("Creed", "Bratton", 9, 1),
    ("Stanley", "Hudson", 11, 5),
    ("Phyllis", "Lapin-Vance", 12, 5),
    ("Dwight", "Schrute", 11, 5),
    ("Meredith", "Palmer", 7, 1),
    ("Oscar", "Martinez", 5, 4),
    ("Andy", "Bernard", 12, 5),
    ("Lonnis", "Collins", 15, 3),
    ("Kevin", "Malone", 6, 4),
    ("Kelly", "Kapoor", 8, 1),
    ("Madge", "Madsen", 15, 3),
    ("Roy", "Anderson", 15, 4),
    ("Jerry", "DiCanio", 15, 4),
    ("Ryan", "Howard", 13, 5),
    ("Kelly Erin", "Hannon", 10, 6);
