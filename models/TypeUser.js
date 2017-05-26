module.exports = function(sequelize, DataTypes){
  return  sequelize.define('type_user', {
  name: {
    type: DataTypes.STRING
  }
})
} 