# Проєктування бази даних

@startuml
  entity Role
  object Customer #FFFFFF
  object Project_manager #FFFFFF
  object Teamlead #FFFFFF
  object Developer #FFFFFF
  
  entity Access
  
  entity User
    entity User.username
    entity User.password
    entity User.email
    entity User.status
    entity User.activationKey
  
  entity Action
    entity Action.name
    entity Action.description
    entity Action.status
    entity Action.planedAt
    entity Action.actedAt
    
  entity Project
    entity Project.name
    entity Project.description

  entity Metadata
    entity Metadata.key
    entity Metadata.value
    
  entity Task
    entity Task.name
    entity Task.status
    entity Task.description
    entity Task.deadline
  
  entity Artifact
    entity Artifact.name
    entity Artifact.description
    entity Artifact.link
  
  
  Role --* Access
  Access "(0,*)"-r-"(1,1)" User
  Access "(0,*)"-l-"(1,1)" Project
  Action "(0,*)"-d-"(1,1)" User
  Action "(0,*)"-d-"(1,1)" Task
  Project "(1,1)"-l-"(0,*)" Task
  Project "(1,1)"-d-"(0,*)" Metadata
  Task "(1,1)"-d-"(0,*)" Artifact
  
  Customer ..> Role : instanceOf
  Project_manager ..> Role : instanceOf
  Teamlead ..> Role : instanceOf
  Developer ..> Role : instanceOf
  
  object active #FFFFFF
  object inactive #FFFFFF
  User.username --* User
  User.password --* User
  User.email -l-* User
  User.status -u-* User
  User.activationKey -u-* User
  active .u.> User.status : instanceOf
  inactive .u.> User.status : instanceOf
  
  object created #FFFFFF
  object completeds #FFFFFF
  object resolved #FFFFFF
  object closed #FFFFFF
  object reopened #FFFFFF
  Action.name --* Action
  Action.description --* Action
  Action.status --* Action
  Action.planedAt --* Action
  Action.actedAt --* Action
  created .d.> Action.status : instanceOf
  completeds .d.> Action.status : instanceOf
  resolved .d.> Action.status : instanceOf
  closed .d.> Action.status : instanceOf
  reopened .d.> Action.status : instanceOf
  
  Project.name -d-* Project
  Project.description -d-* Project
  
  Metadata.key -u-* Metadata
  Metadata.value -u-* Metadata
  
  object free #FFFFFF
  object in_progress #FFFFFF
  object done #FFFFFF
  object completed #FFFFFF
  Task.name -r-* Task
  Task.status --* Task
  Task.description --* Task
  Task.deadline --* Task
  free .d.> Task.status : instanceOf
  in_progress .d.> Task.status : instanceOf
  done .d.> Task.status : instanceOf
  completed .d.> Task.status : instanceOf
  
  Artifact.name -u-* Artifact
  Artifact.description -u-* Artifact
  Artifact.link -u-* Artifact
  
@enduml

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

