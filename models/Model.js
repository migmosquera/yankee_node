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
  'Detail',
  'Stock',
  'Product',
  'Category',
  'Facture',
];

models.forEach(function(model){
  module.exports[model] = sequelize.import(__dirname + "/" + model)
});

(function(m){
  m.TypeUser.hasMany(m.User, { as: 'users'});
  m.User.belongsTo(m.TypeUser);
  m.Client.hasMany(m.Facture, { as: 'factures'});
  m.Facture.belongsTo(m.Client);
  m.Facture.hasMany(m.Detail, { as: 'details'});
  m.Detail.belongsTo(m.Facture);
  m.Product.hasMany(m.Detail, { as: 'details_products'});
  m.Detail.belongsTo(m.Product);
  m.Product.hasMany(m.Category, { as: 'categorys'});
  m.Category.belongsTo(m.Product);
  m.Product.belongsToMany(m.Stock, {through:'stocks_products'});
  m.Stock.belongsToMany(m.Product, {through:'stocks_products'});
 
})(module.exports);

/*sequelize.sync({ force: true }).then(() => {
});*/

module.exports.sequelize = sequelize; 