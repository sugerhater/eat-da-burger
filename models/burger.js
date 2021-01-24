const orm = require('../config/orm.js');

const burger = {
  selectAll:function ( ){
    orm.selectAll('', function (res){

    })
  },

  insertOne:function(){
    orm.insertOne('', function(){

    })
  },

  updateOne:function(){
    orm.updateOne('',function(){

    })
  }
};

module.exports = burger;