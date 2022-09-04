const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    idproduct: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    infouri: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'idcategory'
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idproduct" },
        ]
      },
      {
        name: "FK_product_user",
        using: "BTREE",
        fields: [
          { name: "iduser" },
        ]
      },
      {
        name: "FK_product_category",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
    ]
  });
};
