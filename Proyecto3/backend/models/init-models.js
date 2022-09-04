var DataTypes = require("sequelize").DataTypes;
var _authtoken = require("./authtoken");
var _category = require("./category");
var _product = require("./product");
var _tag = require("./tag");
var _tags = require("./tags");
var _user = require("./user");

function initModels(sequelize) {
  var authtoken = _authtoken(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  product.belongsTo(category, { as: "category_category", foreignKey: "category"});
  category.hasMany(product, { as: "products", foreignKey: "category"});
  tags.belongsTo(product, { as: "idproduct_product", foreignKey: "idproduct"});
  product.hasMany(tags, { as: "tags", foreignKey: "idproduct"});
  tags.belongsTo(tag, { as: "idtag_tag", foreignKey: "idtag"});
  tag.hasMany(tags, { as: "tags", foreignKey: "idtag"});
  authtoken.belongsTo(user, { as: "iduser_user", foreignKey: "iduser"});
  user.hasMany(authtoken, { as: "authtokens", foreignKey: "iduser"});
  product.belongsTo(user, { as: "iduser_user", foreignKey: "iduser"});
  user.hasMany(product, { as: "products", foreignKey: "iduser"});

  return {
    authtoken,
    category,
    product,
    tag,
    tags,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
