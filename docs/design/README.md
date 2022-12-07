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

    entity Task
    entity Task.name #ffffff
    entity Task.description #ffffff
    entity Task.deadline #ffffff

    entity Attachment
    entity Attachment.name #ffffff
    entity Attachment.link #ffffff

    entity Member

    entity User
    entity User.login #ffffff
    entity User.password #ffffff
    entity User.email #ffffff

    entity Role

    object Customer #ffffff
    object TeamLead #ffffff
    object Developer #ffffff

    Customer ..> Role : instanceOf
    TeamLead ..> Role : instanceOf
    Developer ..> Role : instanceOf

    Project.name --u-*  Project
    Project.description --u-*  Project
    Section "0,*" <-- "1,1" Project

    Section.name --l-* Section

    Task "0,*" <--- "1,1" Section
    Task.name --* Task
    Task.description --* Task
    Task.deadline --* Task
    Task "0,*" --> "0,1" Member : executor
    
    Attachment "0,*" <-- "1,1" Task
    Attachment.name --* Attachment
    Attachment.link --* Attachment

    Member "0,*" --> "1,1" User
    
    User.login --u-* User
    User.password --u-* User
    User.email --u-* User

    Member "0,*" --> "1,1" Role
    Member "0,*" --> "1,1" Project

@enduml

</center>

## ER-модель

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

namespace UserProfileManagement {
    entity User <<ENTITY>> {
        login: TEXT
        email: TEXT
        password: TEXT
    }
}

namespace ProjectManagement {
    entity Project <<ENTITY>> {
        name: TEXT
        description: TEXT
    }

    entity Section <<ENTITY>> {
        name: TEXT
    }
    
    entity Task <<ENTITY>> {
        name: TEXT
        description: TEXT
        deadline: DATE
    }
    
    entity Attachment <<ENTITY>> {
        name: TEXT
        link: TEXT
    }
}

namespace AccessPolicy {
    entity Member <<ENTITY>> { 
    }

    entity Role <<ENTITY>> #ffff00 {
    }

    object Customer #ffffff
    object TeamLead #ffffff
    object Developer #ffffff
}

Member "0,*" ---> "1,1" Project
Member "0,*" --u-> "1,1" Role
Member "0,*" ---r-> "1,1" User

Task "0,*" --> "0,1" Member : executor

Project "1,1" <---l- "0,*" Section
Section "1,1" <--- "0,*" Task
Task "1,1" <-- "0,*" Attachment

Customer ..> Role : instanceOf
TeamLead ..> Role : instanceOf
Developer ..> Role : instanceOf
@enduml

</center>

## Реляційна схема
