# Проєктування бази даних

## Модель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    entity Account
    entity Account.login
    entity Account.email
    entity Account.password

    object Customer #FFFFFF
    object TeamLead #FFFFFF
    object Developer #FFFFFF

    Customer ..> Role : instanceOf
    TeamLead ..> Role : instanceOf
    Developer ..> Role : instanceOf
    
    entity Project
    entity Project.name
    entity Project.description

    entity Section
    entity Section.name

    entity Task
    entity Task.name
    entity Task.description
    
    entity Attachment
    entity Attachment.name
    entity Attachment.link

    Account.login --* Account
    Account.email --*  Account
    Account.password --*  Account
    Role  --o  Account

    Role --o  Project.member
    
    Project.name --*  Project
    Project.description --*  Project
    Project.member "1,*" -- "0,*" Project
    Section "0,*" -- "1,1" Project
    
    Section.name --* Section
    Task "0,*"  -- "1,1" Section
    
    Task.name --* Task
    Task.description --* Task
    Task.member "1,*" -- "1,1" Task
    
    Attachment "0,*" -- "1,1" Task
    Attachment.name --* Attachment
    Attachment.link --* Attachment

@enduml

</center>

## ER-модель
## Реляційна схема
