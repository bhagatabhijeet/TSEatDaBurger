import connection from './connection'


function printQuestionMarks(num:number) {
  const arr:string[] = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob:{
  [key: string]: string|boolean; 
}):string {
 
  const arr:string[] = [];

  for (const k in ob) {
    arr.push(k + "=" + ob[k]);
  }

  return arr.toString();
}

const orm = {
  all: function(tableInput:string, cb:(a:any)=>void) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  create: function(table:string, cols:string[], vals:(string|boolean)[], cb:(a:any)=>void) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
  update: function(table:string, objColVals:{
    [key: string]: string|boolean; 
  }, condition:string, cb:(a:any)=>void) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

export default  orm;
