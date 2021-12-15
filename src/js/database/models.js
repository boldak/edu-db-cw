const Sequelize = require('sequelize');
const seq = require('./connection.js');

const Type = seq.define('type', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text: {
        type: Sequelize.STRING(45)
    }
});

const User = seq.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
});

const State = seq.define('state', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(255)
    }
});

const Category = seq.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category: {
        type: Sequelize.INTEGER
    }
});

const MetadataKey = seq.define('metaDataKey', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    key: {
        type: Sequelize.STRING(255)
    },
    description: {
        type: Sequelize.STRING(511)
    },
    metaDataKey: {
        type: Sequelize.INTEGER,
    }
});

const ActionType = seq.define('actionType', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(255)
    },
    description: {
        type: Sequelize.STRING(255)
    }
});

const AvaliableFor = seq.define('avaliableFor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    metaKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

const Role = seq.define('role', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(255)
    }
});

const AvaliableAction = seq.define('avaliableAction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    actionType: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

const DataSet = seq.define('dataSet', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category: {
        type: Sequelize.INTEGER,
    }
});

const Grant = seq.define('grant', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    role: {
        type: Sequelize.INTEGER,
    },
    actionType: {
        type: Sequelize.INTEGER,
    },
    dataSet: {
        type: Sequelize.INTEGER,
    }
});

const Action = seq.define('action', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    at: {
        type: Sequelize.DATE
    },
    state: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    actionType: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    grant: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

const DataFile = seq.define('dataFile', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dataset: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

const MetaDataValue = seq.define('metaDataValue', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: Sequelize.STRING(255)
    },
    metaDataKey: {
        type: Sequelize.INTEGER,
        //allowNull: false,
    },
    dataSet: {
        type: Sequelize.INTEGER,
    },
    category: {
        type: Sequelize.INTEGER,
    },
    dataFile:{
        type: Sequelize.INTEGER,
    }
});


module.exports = {
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
};