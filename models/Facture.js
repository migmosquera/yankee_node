module.exports = function(sequelize, DataTypes){
  return  sequelize.define('facture', {
  date: {
    type: DataTypes.DATE
  },
})
} 