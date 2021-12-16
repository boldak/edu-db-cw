# Проєктування бази даних
- модель бізнес-об'єктів 
@startuml

  object Customer #FFFFFF
  object Project_manager #FFFFFF
  object Teamlead #FFFFFF
  object Developer #FFFFFF
  
  
  entity User
    entity User.username
    entity User.password
    entity User.email
    entity User.activationKey
  
  entity Action
    entity Action.name
    entity Action.description
    entity Action.status
    entity Action.planedAt
    entity Action.actedAt
    entity Action.request
    
  entity Project
    entity Project.name
    entity Project.description
    
  entity Task
    entity Task.name
    entity Task.status
    entity Task.description
    entity Task.deadline
  
  entity Artifact
    entity Artifact.name
    entity Artifact.description
    entity Artifact.link
  
  
  Role --* User
  User "(0,*)"-l-"(1,1)" Project
  Action "(0,*)"-d-"(1,1)" User
  Action "(0,*)"-d-"(1,1)" Task
  Project "(1,1)"-l-"(0,*)" Task
  Task "(1,1)"-d-"(0,*)" Artifact
  
  Customer ..> Role : instanceOf
  Project_manager ..> Role : instanceOf
  Teamlead ..> Role : instanceOf
  Developer ..> Role : instanceOf
  

  User.username --* User
  User.password --* User
  User.email -l-* User
  User.activationKey -u-* User
  
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
  Action.request --* Action
  created .d.> Action.status : instanceOf
  completeds .d.> Action.status : instanceOf
  resolved .d.> Action.status : instanceOf
  closed .d.> Action.status : instanceOf
  reopened .d.> Action.status : instanceOf
  
  
  
 
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
  
  Project.name -d-* Project
  Project.description -d-* Project

  Artifact.name -u-* Artifact
  Artifact.description -u-* Artifact
  Artifact.link -u-* Artifact
  
@enduml





- ER-модель
@startuml
entity User <<ENTITY>> {
    email
    password
    name
    activationKey
    status
    role
  }
  
 
  
  entity Project <<ENTITY>> {
    name
    description
  }
  
  
  entity Task <<ENTITY>> {
    name
    description
    deadline
  }
  
  entity Action <<ENTITY>> {
    name
    description
    planedAt: DATETIME
    actedAt: DATETIME
    status 
    request
  }
  
  entity Artifact <<ENTITY>> {
    name
    description
    link
  }
  

    Task "(0,*)"-u-"(1,1)" Project
    Task "(0,*)"--"(1,1)" Artifact
    Action "(0,*)"--"(1,1)" Task
    Action "(0,*)"-r-"(1,1)" User
    
@enduml

- реляційна схема

![image](https://user-images.githubusercontent.com/72148650/146340101-d1380d70-c598-4d84-aba4-d603034ce2ff.png)
