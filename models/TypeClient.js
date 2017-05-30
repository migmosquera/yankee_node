module.exports = function(sequelize, DataTypes){
  return  sequelize.define('type_client', {
  name: {
    type: DataTypes.STRING
  }
})
} 