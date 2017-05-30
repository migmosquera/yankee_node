module.exports = function(sequelize, DataTypes){
  return  sequelize.define('product', {
  name: {
    type: DataTypes.STRING
  },  
  cant_product: {
    type: DataTypes.INTEGER
  },
})
}