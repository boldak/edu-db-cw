# Проєктування бази даних

## Модель бізнес об'єктів

@startuml

entity Message #0096FF
entity MessageTypes #0096FF
entity User #0096FF
entity Notification #FFC300
entity Role #0096FF
entity Grant #FFC300
entity Permission #0096FF

entity Label #0096FF
entity Tag #FFC300
entity Task #0096FF
entity Attachment #0096FF
entity Review #0096FF
entity Project #0096FF
entity ProjectTemplate #0096FF
entity Participiant #FFC300
entity Member #0096FF

entity Role.id
entity Role.name

entity Permission.id
entity Permission.role

entity Message.scheduled_at
entity Message.id
entity Message.content

entity MessageTypes.id
entity MessageTypes.template

entity User.id
entity User.login
entity User.email
entity User.system_role
entity User.password

User "1,1"-r-"0,*" Member
Member "0,*    "-d-"1,1" Role
Role "1,1"-d-"     0,*"  Grant
Grant "0,*"-d-"       1,1" Permission

User "1,1"-d-"0,*" Notification
Message "1,1   "-u- "0,*" Notification
Message "0,*"-d-"1,1"  MessageTypes

Role.id -r-* Role
Role.name -l-* Role

Permission.id -u-* Permission
Permission.role -u-* Permission

Message.scheduled_at -u-* Message
Message.id -u-* Message
Message.content -u-* Message

MessageTypes.id -u-* MessageTypes
MessageTypes.template -u-* MessageTypes

User.email -d-* User
User.login -d-* User
User.id -d-* User
User.system_role -r-* User
User.password -r-* User


entity Label.id
entity Label.content

entity Task.id
entity Task.deadline
entity Task.title
entity Task.description
entity Task.status

entity Attachment.id
entity Attachment.url
entity Attachment.format

entity Review.id
entity Review.content

entity Project.id
entity Project.title
entity Project.description
entity Project.status

Label "1,1"-d-"0,*" Tag
Tag "0,*"-d-"1,1" Task
Task "       1,1"-d-"0,*" Attachment
Task "1,1"-r-"       0,*" Review
Participiant "0,*"-u-"1,1" Review
Review "0,*"-"   0,1" Review
Task "0,*    "-l-"1,1" Project
Task "1,1 "-d-"0,*" Participiant
ProjectTemplate -u-|> Project
Member "0,*"-r-"1,1" Project
Member "1,1"-r-"0,*" Participiant

Label.id -d-* Label
Label.content -d-* Label

Task.id -d-* Task
Task.deadline -d-* Task
Task.title -d-* Task
Task.description -d-* Task
Task.status -d-* Task

Attachment.id -u-* Attachment
Attachment.url -u-* Attachment
Attachment.format -u-* Attachment

Review.id -u-* Review
Review.content -u-* Review

Project.id -d-* Project
Project.title -d-* Project
Project.description -d-* Project
Project.status -d-* Project

@enduml

## ER-модель

@startuml

package AccountManage {
    entity User <<ENTITY>> { 
              id: int
              login: text
              password: text
              phone: text
              email: text
              avatar: image
              systemRole: enum
              createdAt: timestamp
              updatedAt: timestamp 
    }
}

package NotificationManage {
    entity Notification <<ENTITY>> {
    }

    entity Message <<ENTITY>> {
        id: int
        content: text
        scheduledAt: timestamp
        createdAt: timestamp
    }

    entity Message_types <<ENTITY>> {
        id: int
        template: text
    }
}

entity Member <<ENTITY>> {
    createdAt: timestamp
    updatedAt: timestamp
}

package PermissionManage {
    entity Role <<ENTITY>> {
        id: int
        name: text
    }

administrator .d.> Role: instanceOf
manager .d.> Role: instanceOf
ordinary_user .d.> Role: instanceOf

    entity Grant <<ENTITY>> {
    }

    entity Permission <<ENTITY>> {
        id: int
        createdAt: timestamp
        rule: text
    }
}
entity Participant <<ENTITY>> {
    role: enum
    createdAt: timestamp
}

User "1,1" -l-- "0,*" Notification
User "1,1" -r-- "0,*" Member
Notification "0,*" -d-- "1,1" Message
Message "0,*" -d-- "1,1" Message_types

Member "0,*" -d-- "1,1" Role
Member "1,1" -r-- "0,*" Participant
Role "1,1" -d-- "0,*"  Grant
Grant "0,*" -d-- "1,1" Permission

@enduml

## Реляційна схема

