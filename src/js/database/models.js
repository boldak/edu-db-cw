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
    MetaDataKey: {
        type: Sequelize.INTEGER
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
        references: {
            model: Type,
            key: 'id'
        }
    },
    metaDataKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: MetadataKey,
            key: 'id'
        }
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
        references: {
            model: Role,
            key: 'id'
        }
    },
    actionType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: ActionType,
            key: 'id'
        }
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
        references: {
            model: Category,
            key: 'category'
        }
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
        references: {
            model: User,
            key: 'id'
        }
    },
    role: {
        type: Sequelize.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    },
    actionType: {
        type: Sequelize.INTEGER,
        references: {
            model: ActionType,
            key: 'id'
        }
    },
    dataSet: {
        type: Sequelize.INTEGER,
        references: {
            model: DataSet,
            key: 'id'
        }
    }
});

const Aciton = seq.define('action', {
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
        references: {
            model: State,
            key: 'id'
        }
    },
    actionType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: ActionType,
            key: 'id'
        }
    },
    grant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Grant,
            key: 'id'
        }
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
        references: {
            model: DataSet,
            key: 'id'
        }
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
        allowNull: false,
        references: {
            model: MetadataKey,
            key: 'id'
        }
    },
    dataSet: {
        type: Sequelize.INTEGER,
        references:{
            model: DataSet,
            key: 'id'
        }
    },
    category: {
        type: Sequelize.INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    },
    dataFile:{
        type: Sequelize.INTEGER,
        references: {
            model: DataFile,
            key: 'id'
        }
    }
});