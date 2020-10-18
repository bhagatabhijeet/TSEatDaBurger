import { createConnection, ConnectionConfig, Connection } from "mysql";

const conconfig: ConnectionConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db",
};

let connection:Connection;
if(process.env.JAWSDB_URL){
  connection = createConnection(process.env.JAWSDB_URL);
}else{

  connection = createConnection(conconfig);
}

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

export default connection;
