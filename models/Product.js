module.exports = function(sequelize, DataTypes){
  return  sequelize.define('product', {
  name: {
    type: DataTypes.STRING
  },  
  price: {
    type: DataTypes.INTEGER
  },
})
}