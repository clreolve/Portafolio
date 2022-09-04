const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authtoken', {
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'iduser'
      }
    },
    token: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'authtoken',
    timestamps: false,
    indexes: [
      {
        name: "FK_authtoken_user",
        using: "BTREE",
        fields: [
          { name: "iduser" },
        ]
      },
    ]
  });
};
