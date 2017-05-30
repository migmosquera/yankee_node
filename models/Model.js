var Sequelize = require('sequelize'),


  sequelize = new Sequelize('yankee_node', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

var models = [
  'User',
  'TypeUser',
  'Client',
  'Drink',
  'Food',
  'Product',
  'Stock',
  'Billing',
  'TypeClient',
];

models.forEach(function(model){
  module.exports[model] = sequelize.import(__dirname + "/" + model)
});

(function(m){
  m.TypeUser.hasMany(m.User, { as: 'users'});
  m.User.belongsTo(m.TypeUser);
  m.TypeClient.hasMany(m.Client, { as: 'clients'});
  m.Client.belongsTo(m.TypeClient);
  m.Stock.hasMany(m.Food, { as: 'foods'});
  m.Food.belongsTo(m.Stock);
  m.Stock.hasMany(m.Drink, { as: 'drinks'});
  m.Drink.belongsTo(m.Stock);
  m.User.hasMany(m.Billing, { as: 'billings'});
  m.Billing.belongsTo(m.User);
  m.Billing.belongsToMany(m.Food, {through:'billings_foods'});
  m.Food.belongsToMany(m.Billing, {through:'billings_foods'});
  m.Billing.belongsToMany(m.Drink, {through:'billings_drinks'});
  m.Drink.belongsToMany(m.Billing, {through:'billings_drinks'});
})(module.exports);

/*sequelize.sync({ force: true }).then(() => {
});*/

module.exports.sequelize = sequelize; 