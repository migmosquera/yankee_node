module.exports = function(sequelize, DataTypes){
  return  sequelize.define('details', {
  price: {
    type: DataTypes.INTEGER
  },
  cant: {
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.DATE
  },
})
} 