# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 

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

- реляційна схема

