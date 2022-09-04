const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tags', {
    idproduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'idproduct'
      }
    },
    idtag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tag',
        key: 'idtag'
      }
    }
  }, {
    sequelize,
    tableName: 'tags',
    timestamps: false,
    indexes: [
      {
        name: "FK_tags_product",
        using: "BTREE",
        fields: [
          { name: "idproduct" },
        ]
      },
      {
        name: "FK_tags_tag",
        using: "BTREE",
        fields: [
          { name: "idtag" },
        ]
      },
    ]
  });
};
