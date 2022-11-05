# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

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

    entity Customer
    entity Developer
    entity Teamlead

    entity Status

    entity Project
    entity Project.name
    entity Project.description

    entity Section
    entity Section.name

    entity Task
    entity Task.name
    entity Task.description

    Account.login --* Account
    Account.email --* Account
    Account.password --* Account

    Customer --o Status
    Developer --o Status
    Teamlead --o Status

    Status --o Account

    Project.name --* Project
    Project.description --* Project
    Project.member --* Project

    Section.name --* Section

    Task.name --* Task
    Task.description --* Task
    Task.member --* Task

@enduml

</center>
