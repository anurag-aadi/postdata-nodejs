var mysql = require("mysql");

function REST_ROUTER(router, connection, md5) {
    var self = this;
    self.handleRoutes(router, connection, md5);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection, md5) {
    var self = this;


    router.get("/", function(req, res) {
        res.json({ "Message": "Hello World !" });
    });

    router.get("/article", function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        var query = "SELECT * FROM ??";
        //var query = "SELECT * FROM user_login";
        var table = ["pages"];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                //res.json({ "Error": false, "Message": "Success", "Users": rows });
                res.json({ "data": rows });
            }
        });
    });


    router.get("/article/:page_id", function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["pages", "page_id", req.params.page_id];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": "Error executing MySQL query" });
                console.log(err);
            } else {
                //res.json({ "Error": false, "Message": "Success", "Users": rows });
                res.json({ "data": rows });
            }
        });
    });


    router.post("/editor", function(req, res) {

        /*res.header("Accept", "application/json, application/xml, text/plain, text/html, *.*");
        res.header("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");*/

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        //res.header("Content-Type", "application/x-www-form-urlencoded; charset=utf-8")

        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["pages", "page_title", "page_detail", req.body.page_title, req.body.page_detail];
        //var table = ["pages", "page_title", "page_detail", "test", "testing"];
        query = mysql.format(query, table);
        console.log(req.body);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": "Error executing MySQL query" + err + " " + rows });
            } else {
                res.json({ "Error": false, "Message": "User Added !" + err + " " + rows });
            }
        });
    });


    /*router.get("/users/:user_id", function(req, res) {
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["user_login", "user_id", req.params.user_id];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                res.json({ "Error": false, "Message": "Success", "Users": rows });
            }
        });
    });

    router.post("/users", function(req, res) {
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["user_login", "user_email", "user_password", req.body.email, md5(req.body.password)];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                res.json({ "Error": false, "Message": "User Added !" });
            }
        });
    });

    router.put("/users", function(req, res) {
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["user_login", "user_password", md5(req.body.password), "user_email", req.body.email];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                res.json({ "Error": false, "Message": "Updated the password for email " + req.body.email });
            }
        });
    });

    router.delete("/users/:email", function(req, res) {
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["user_login", "user_email", req.params.email];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                res.json({ "Error": false, "Message": "Deleted the user with email " + req.params.email });
            }
        });
    });*/
}

module.exports = REST_ROUTER;