# Проєктування бази даних

В рамках проекту розробляється: 

- ER-модель

@startuml

entity DataSet {
    updatedAt: Date
    createdAt: Date
  
  }
  
  entity DataFile {
    updatedAt: Date
    createdAt: Date
  }
  
  entity Type {
    name: TEXT
  }
  
  entity AvailableFor {

  }
  
  entity AvailableAction {

  }
  

  entity MetaDataKey {
    key: TEXT
    description:TEXT
  }

  entity MetaDataValue {
    value: TEXT
  }

  entity Category {
    
  }
  
  
  
  entity User {
    name: TEXT
    password: TEXT
  }
  
  entity Grant {

  }

  entity Role {
    name: TEXT
  }

  entity State {
    name: TEXT
  }
  
  entity Action {
    at: DATE
  }
  
  entity ActionType {
    name: TEXT
    description:TEXT
  }

  DataSet "1,1" <-- "0,*" DataFile
  DataSet "0, 1" <-u- "0, *" MetaDataValue: DataSetRef
  DataFile "0, 1" <-u- "0, *" MetaDataValue: DataFileRef
  Category "0, 1" <-u- "0, *" MetaDataValue: CategoryRef
 
  MetaDataValue "0, *" -u-> "1, 1" MetaDataKey
  
  MetaDataKey "0, *" -u-> "0, 1" MetaDataKey: parentKey
  
  DataSet "0,*" --> "0,1" Category
  Category "1,1" <-- "0,*" Category
  
  DataSet "1,1" <-- "0,*" Grant
  Grant "0,*" --> "1, 1" User 
  Grant "0,*" --> "0, 1" Role
  Grant "0,*" --> "0, 1" ActionType
  
  AvailableFor "0,*"--> "1, 1" Type
  AvailableFor "0,*"--> "1, 1" MetaDataKey
  Role "1, 1" <- "0,*" AvailableAction
  AvailableAction "0,*" --> "1, 1"ActionType
  Action -u-> Grant
  Action -> State
  Action --> ActionType
  
@enduml

- реляційна схема

