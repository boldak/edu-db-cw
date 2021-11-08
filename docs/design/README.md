# Проєктування бази даних

В рамках проекту розробляється: 

- ER-модель

@startuml
note "Attached metadata can be title, \ndescription, links, etc." as N1

entity DataSet {
    uuid: UUID
    updatedAt: Date
    createdAt: Date
  
  }
  
  entity DataFile {
    name: TEXT
    mimeType: TEXT
    updatedAt: Date
    createdAt: Date
  }

  entity MetaData {
    key: TEXT
    value: TEXT
  }

  entity Category {
    title: TEXT
    desciption: TEXT
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

  MetaData .l. N1
  DataSet "1,1" <-- "0,*" DataFile
  DataSet "1, 1" <-u- "0, *" MetaData
  DataSet "0,*" --> "1,1" Category
  Category "1,1" <-- "0,*" Category
  
  DataSet "1,1" <-- "0,*" Grant
  Grant "0,*" --> "1,1" User 
  Grant "0,*" --> "1,1" Role
@enduml

- реляційна схема

