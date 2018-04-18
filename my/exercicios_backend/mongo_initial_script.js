db = db.getSiblingDB('admin');
db.createUser({ user: "reactBack", pwd: "senha@123", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] });
