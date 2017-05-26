module.exports = function(sequelize, DataTypes){
  return  sequelize.define('billing', {
  date: {
    type: DataTypes.DATE
  },
  total: {
    type: DataTypes.INTEGER
  },
})
} 