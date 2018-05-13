db = db.getSiblingDB('admin');
db.createUser({ user: "reactBack", pwd: "senha123", roles: [
    { role:"readWrite", db: "todos" }
    , { role: "dbAdmin" , db: "todos" }
    , { role:"readWrite", db: "admin" }
    , { role: "dbAdmin" , db: "admin" }
] });
