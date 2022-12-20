# Проєктування бази даних

В рамках проекту розробляється: 
## Business Model 

@startuml

entity Query
entity Query.created #ffffff
entity Query.modified #ffffff
entity Query.id #ffffff
entity Query.title #ffffff
entity Query.description #ffffff

entity Source
entity Source.id #ffffff
entity Source.url #ffffff
entity Source.apiKey #ffffff

entity Result
entity Result.id #ffffff
entity Result.name #ffffff
entity Result.description #ffffff

entity User
entity User.id #ffffff
entity User.name #ffffff
entity User.email #ffffff
entity User.login #ffffff
entity User.password #ffffff

entity Access

entity Role
entity Role.name #ffffff
entity Role.description #ffffff

entity ScraperInstance
entity ScraperInstance.id #ffffff
entity ScraperInstance.data #ffffff
entity ScraperInstance.endPoint #ffffff

entity ScraperType
entity ScraperType.id #ffffff
entity ScraperType.type #ffffff
entity ScraperType.repo #ffffff

entity Message
entity Message.id #ffffff
entity Message.data #ffffff

entity Metadata 
entity Metadata.id #ffffff
entity Metadata.key #ffffff
entity Metadata.value #ffffff

Query.created --* Query
Query.modified --* Query
Query.id --* Query
Query.title --* Query
Query.description --* Query

Result.id --* Result
Result.name --* Result
Result.description -l-* Result

Role.name -u-* Role
Role.description -u-* Role

Source *-- Source.id
Source *-- Source.url
Source *-- Source.apiKey

ScraperType *-- ScraperType.id
ScraperType *-- ScraperType.type
ScraperType *-- ScraperType.repo

ScraperInstance *-- ScraperInstance.id
ScraperInstance *-- ScraperInstance.data
ScraperInstance *-- ScraperInstance.endPoint

Message *-- Message.id
Message *-- Message.data

Metadata *-- Metadata.id
Metadata *-- Metadata.key
Metadata *-- Metadata.value

User.email -u-* User
User.name -u-* User
User.login -r-* User
User.password --* User
User.id --* User


Query "0,*" -d- "0,*" Access
Query "0,*" -r- "1,1" Source
Query "0,*" -- "1,1" Result
User "1,1" -u- "0,*" Access
Role "1,1" -l- "0,*" Access
Source "1, 1" -- "0, *" ScraperType
ScraperType "1, 1" -- "0, *" ScraperInstance
ScraperInstance "1, 1" -- "0, *" Message
ScraperInstance "1, 1" - "1, 1" ScraperInstance
Message "1, 1" -- "0, *" Metadata

@enduml

- ER-model

@startuml
  entity User  {
    id: Int
    name: Text
    email: Text
    login: Text
    password: Text
  }
  
  entity Role  {
    name: Text
    description: Text
  }
  
  entity Access  {
  
  }
  
  entity Query  {
    id:Int
    title: Text
    description:Text
    created: Datetime
    modified:Datetime
  }
  
  entity Source  {
    id: Int
    url: Url-reference
    api-key: Int
  }
  
  entity Result  {
    id: Int
    name: Text
    description: Text
  }
  
   entity Message {
    id: int
    data: text
  }
  
  entity Metadata {
    id: int
    key: int
    value: text
  }
  
  entity Source {
    id: int
    url: uri-reference
    api-key: int
  }
  
  entity ScraperType {
    id: int
    type: text
    repo: uri-reference
  }
  
  entity ScraperInstance {
    id: int
    data: text
    endPoint: uri-reference
  }
  
Query "0," -d- "0," Access
Query "0,*" -r- "1,1" Source
Query "0,*" -- "1,1" Result
User "1,1" -u- "0," Access 
Role "1,1" -l- "0," Access
Source "1, 1" -- "0, *" ScraperType
ScraperType "1, 1" -- "0, *" ScraperInstance
ScraperInstance "1, 1" -- "0, *" Message
ScraperInstance "1, 1" - "1, 1" ScraperInstance
Message "1, 1" -- "0, *" Metadata
@enduml

## Relational Schema

<p align="center">
  <img src="./picture/rel model.png" width="600" title="ER-diagram">
</p>