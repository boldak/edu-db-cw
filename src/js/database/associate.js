const {
    Type,
    User,
    State,
    Category,
    MetadataKey,
    ActionType,
    AvaliableFor,
    Role,
    AvaliableAction,
    DataSet,
    Grant,
    Action,
    DataFile,
    MetaDataValue
} = require('./models.js');

const associate = () => {
    Category.hasMany(Category, {
        foreignKey: 'category',
        sourceKey: 'id'
    });

    Category.belongsTo(Category, {
        foreignKey: 'category',
        as: 'cat',
        targetKey: 'id'
    });
//
    MetadataKey.hasMany(MetadataKey, {
        foreignKey: 'metaDataKey',
        sourceKey: 'id'
    });

    MetadataKey.belongsTo(MetadataKey, {
        foreignKey: 'metaDataKey',
        as: 'met',
        targetKey: 'id'
    });
//
    Type.hasMany(AvaliableFor, {
        foreignKey: 'type',
        sourceKey: 'id'
    });

    AvaliableFor.belongsTo(Type, {
        foreignKey: 'type',
        as: 'Type',
        targetKey: 'id'
    });

    MetadataKey.hasMany(AvaliableFor, {
        foreignKey: 'metaKey',
        sourceKey: 'id'
    });

    AvaliableFor.belongsTo(MetadataKey, {
        foreignKey: 'metaKey',
        as: 'metK',
        targetKey: 'id'
    });
//
    Role.hasMany(AvaliableAction, {
        foreignKey: 'role',
        sourceKey: 'id'
    });

    AvaliableAction.belongsTo(Role, {
        foreignKey: 'role',
        as: 'Role',
        targetKey: 'id'
    });

    ActionType.hasMany(AvaliableAction, {
        foreignKey: 'actionType',
        sourceKey: 'id'
    });

    AvaliableAction.belongsTo(ActionType, {
        foreignKey: 'actionType',
        as: 'AT',
        targetKey: 'id'
    });
//
    Category.hasMany(DataSet, {
        foreignKey: 'category',
        sourceKey: 'id'
    });

    DataSet.belongsTo(Category, {
        foreignKey: 'category',
        as: 'cat',
        targetKey: 'id'
    });
//
    User.hasMany(Grant, {
        foreignKey: 'user',
        sourceKey: 'id'
    });

    Grant.belongsTo(User, {
        foreignKey: 'user',
        as: 'User',
        targetKey: 'id'
    });

    Role.hasMany(Grant, {
        foreignKey: 'role',
        sourceKey: 'id'
    });

    Grant.belongsTo(Role, {
        foreignKey: 'role',
        as: 'Role',
        targetKey: 'id'
    });

    ActionType.hasMany(Grant, {
        foreignKey: 'actionType',
        sourceKey: 'id'
    });

    Grant.belongsTo(ActionType, {
        foreignKey: 'actionType',
        as: 'AT',
        targetKey: 'id'
    });

    DataSet.hasMany(Grant, {
        foreignKey: 'dataSet',
        sourceKey: 'id'
    });

    Grant.belongsTo(DataSet, {
        foreignKey: 'dataSet',
        as: 'ds',
        targetKey: 'id'
    });
//
    State.hasMany(Action, {
        foreignKey: 'state',
        soureKey: 'id'
    });

    Action.belongsTo(State, {
        foreignKey: 'state',
        as: 'State',
        targetKey: 'id'
    });

    ActionType.hasMany(Action, {
        foreignKey: 'actionType',
        sourceKey: 'id'
    });

    Action.belongsTo(ActionType, {
        foreignKey: 'actionType',
        as: 'AT',
        taretKey: 'id'
    });

    Grant.hasMany(Action, {
        foreignKey: 'grant',
        sourceKey: 'id'
    });

    Action.belongsTo(Grant, {
        foreignKey: 'grant',
        as: 'Gr',
        targetKey: 'id'
    });
//
    DataSet.hasOne(DataFile, {
        foreignKey: 'dataset',
        sourceKey: 'id'
    });

    DataFile.belongsTo(DataSet, {
        foreignKey: 'dataset',
        as: 'ds',
        targetKey: 'id'
    });
//
    MetadataKey.hasMany(MetaDataValue, {
        foreignKey: 'metaDataKey',
        sourceKey: 'id'
    });

    MetaDataValue.belongsTo(MetadataKey, {
        foreignKey: 'metaDataKey',
        as: 'mk',
        targetKey: 'id'
    });

    DataSet.hasMany(MetaDataValue, {
        foreignKey: 'dataSet',
        sourceKey: 'id'
    });

    MetaDataValue.belongsTo(DataSet, {
        foreignKey: 'dataSet',
        as: 'dss',
        targetKey: 'id'
    });

    Category.hasMany(MetaDataValue, {
        foreignKey: 'category',
        sourceKey: 'id'
    });

    MetaDataValue.belongsTo(Category, {
        foreignKey: 'category',
        as: 'cat',
        targetKey: 'id'
    });

    DataFile.hasMany(MetaDataValue, {
        foreignKey: 'dataFile',
        sourceKey: 'id'
    });

    MetaDataValue.belongsTo(DataFile, {
        foreignKey: 'dataFile',
        as: 'df',
        targetKey: 'id'
    });
};

module.exports = associate;