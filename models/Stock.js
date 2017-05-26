module.exports = function(sequelize, DataTypes){
  return  sequelize.define('stock', {
  date_in: {
    type: DataTypes.DATE
  },
  date_out: {
    type: DataTypes.DATE
  },
})
} 