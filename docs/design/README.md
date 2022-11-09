# Проєктування бази даних

## Модель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    entity Project
    entity Project.name #ffffff
    entity Project.description #ffffff

    entity Section
    entity Section.name #ffffff
    Section.name --* Section

    entity Task
    entity Task.name #ffffff
    entity Task.description #ffffff
    entity Task.deadline #ffffff

    entity Attachment
    entity Attachment.name #ffffff
    entity Attachment.link #ffffff

    entity Member

    entity User
    
    entity Access

    entity User.login #ffffff
    entity User.password #ffffff

    Member "0,*" --> "1,1" User
    
    User.login --* User
    User.password --* User

    object Customer #FFFFFF
    object TeamLead #FFFFFF
    object Developer #FFFFFF

    Customer ..> Access : instanceOf
    TeamLead ..> Access : instanceOf
    Developer ..> Access : instanceOf

    Project.name --*  Project
    Project.description --*  Project
    Section "0,*" <-- "1,1" Project

    Task "0,*" <-- "1,1" Section
    Task.name --* Task
    Task.description --* Task
    Task.deadline --* Task
    Task "0,*" --> "0,1" Member : executor
    
    Attachment "0,*" <-- "1,1" Task
    Attachment.name --* Attachment
    Attachment.link --* Attachment

    Member "0,*" --> "1,1" Access
    Member "0,*" --> "1,1" Project

@enduml

</center>

## ER-модель
## Реляційна схема
