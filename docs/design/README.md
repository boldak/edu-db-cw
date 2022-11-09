# Проєктування бази даних

## Модель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    entity User
    entity User.login
    entity User.email
    entity User.password

    entity Project
    entity Project.name
    entity Project.description

    User.login --* User
    User.email --* User
    User.password --* User

    object Customer #FFFFFF
    object TeamLead #FFFFFF
    object Developer #FFFFFF

    entity Access

    Customer ..> Access : instanceOf
    TeamLead ..> Access : instanceOf
    Developer ..> Access : instanceOf

    entity Section
    entity Section.name
    Section.name --* Section

    entity Task
    entity Task.name
    entity Task.description
    
    entity Attachment
    entity Attachment.name
    entity Attachment.link
    
    entity Member
    Member "0,*" --> "1,1" Project
    Member "0,*" --> "1,1" User
    Member "0,*" --> "1,1" Access

    Project.name --*  Project
    Project.description --*  Project
    Section "0,*" <-- "1,1" Project

    Task "0,*" <-- "1,1" Section
    Task.name --* Task
    Task.description --* Task
    Task "0,*" --> "0,1" User : executor
    
    Attachment "0,*" <-- "1,1" Task
    Attachment.name --* Attachment
    Attachment.link --* Attachment

@enduml

</center>

## ER-модель
## Реляційна схема
