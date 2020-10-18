import orm from '../config/orm'


var burger = {
  all: function(cb:(a:any)=>void) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name:string, cb:(a:any)=>void) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id:number, cb:(a:any)=>void) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

export default burger;
