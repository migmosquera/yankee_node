module.exports = function(sequelize, DataTypes){
  return  sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
})
} 