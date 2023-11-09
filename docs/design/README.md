# Проєктування бази даних

## Модель бізнес об'єктів

@startuml

entity Message #0096FF
entity User #0096FF
entity Notification #0096FF
entity Role #0096FF
entity Grant #0096FF
entity Permission #0096FF

entity Label #0096FF
entity Tag #0096FF
entity Task #0096FF
entity Attachment #0096FF
entity Review #0096FF
entity Project #0096FF
entity ProjectTemplate #0096FF
entity Participant #0096FF
entity Member #0096FF

entity Role.id
entity Role.name

entity Permission.id
entity Permission.role

entity Message.scheduled_at
entity Message.id
entity Message.content

entity User.id
entity User.login
entity User.email
entity User.system_role
entity User.password

entity Member.id
entity Participant.id

User "1,1"-r-"0,*" Member
Member "0,*    "-d-"1,1" Role
Role "1,1"-d-"     0,*"  Grant
Grant "0,*"-d-"       1,1" Permission

User "1,1"-d-"0,*" Notification
Message "1,1   "-u- "0,*" Notification

Role.id -r-* Role
Role.name -l-* Role

Permission.id -u-* Permission
Permission.role -u-* Permission

Message.scheduled_at -u-* Message
Message.id -u-* Message
Message.content -u-* Message

User.email -d-* User
User.login -d-* User
User.id -d-* User
User.system_role -r-* User
User.password -r-* User

Member.id -d-* Member
Participant.id -u-* Participant


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
Participant "0,*"-u-"1,1" Review
Review "0,*"-"   0,1" Review
Task "0,*    "-l-"1,1" Project
Task "1,1 "-d-"0,*" Participant
ProjectTemplate -u-|> Project
Member "0,*"-r-"1,1" Project
Member "1,1"-r-"0,*" Participant

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
}

entity Member <<ENTITY>> {
    id: int
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
    id: int
    role: enum
    createdAt: timestamp
}

package ProgectManage {
    entity Project <<ENTITY>> { 
              id: int
              title: text
              status: enum
              desctiption: text
              logo: image
              createdAt: timestamp
              updatedAt: timestamp
              startDate: timestamp
              endDate: timestamp
    }
  
    entity ProjectTemplate <<ENTITY>> {
    }

}

package TaskManage {
    entity Task <<ENTITY>> { 
              id: int
              title: text
              status: text
              desctiption: text
              deadline: timestamp
              createdAt: timestamp
              updatedAt: timestamp
    }

    entity Tag <<ENTITY>> {
    }

    entity Label <<ENTITY>> {
               id: int
               content: text
    }
}

entity Attachment <<ENTITY>> {
                id: int
                url: image
                format: enum
                createdAt: timestamp
}

package ReviewManage {
    entity Review <<ENTITY>> { 
              id: int
              content: text
              createdAt: timestamp
              updatedAt: timestamp
    }
}

User "1,1" -l-- "0,*" Notification
User "1,1" -r-- "0,*" Member
Notification "0,*" -d-- "1,1" Message

Member "0,*" -d-- "1,1" Role
Member "1,1\n" -r-- "0,*" Participant
Role "1,1" -d-- "0,*"  Grant
Grant "0,*" -d-- "1,1" Permission

Project "1,1" -d-- "0,*" Member
Project o-l- ProjectTemplate

Task "0,*" -r-- "1,1" Project
Task "1,1" -r-- "0,*" Attachment
Task "1,1" -d-- "0,*" Tag
Tag "0,*" -d-- "1,1" Label

Review "0,*" -r-- "1,1" Task
Review "1,1" -r-- "0,*" Participant

@enduml

## Реляційна схема

