db = db.getSiblingDB('admin');
db.createUser({ user: "adalovelace", pwd: "_ada_rules_allan_to_", roles: [
    { role:"readWrite", db: "todos" }
    , { role: "dbAdmin" , db: "todos" }
    , { role:"readWrite", db: "admin" }
    , { role: "dbAdmin" , db: "admin" }
] });
