module.exports = function(sequelize, DataTypes){
  return  sequelize.define('stock', {
  date_in: {
    type: DataTypes.DATE
  },
  cant_product: {
    type: DataTypes.DATE
  },
})
} 