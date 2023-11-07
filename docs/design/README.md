# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

## Модель бізнес-об'єктів
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
  
  entity Member.user
  entity Member.role
  entity Member.projects
  
  entity Role.id
  entity Role.name

  entity Grant.role
  entity Grant.permission

  entity Permission.id
  entity Permission.rule
  
  entity Notification.user
  entity Notification.message
  
  entity Message.scheduled
  entity Message.id
  entity Message.content

  entity MessageTypes.id
  entity MessageTypes.template
    
  entity User.system
  entity User.email
  entity User.login
  entity User.id

  User -r- Member
  Member -d- Role
  Role -d- Grant
  Grant -d- Permission
  
  User -d- Notification
  Message -u-  Notification
  Message -d-  MessageTypes
  
  Member.user -d-* Member
  Member.role -d-* Member
  Member.projects -d-* Member
  
  Role.id -l-* Role
  Role.name -l-* Role
  
  Grant.role -l-* Grant
  Grant.permission -l-* Grant
  
  Permission.id -u-* Permission
  Permission.rule -u-* Permission
  
  Notification.user -u-* Notification
  Notification.message -u-* Notification
  
  Message.scheduled -u-* Message
  Message.id -u-* Message
  Message.content -u-* Message
  
  MessageTypes.id -u-* MessageTypes
  MessageTypes.template -u-* MessageTypes
  
  User.system -d-* User
  User.email -d-* User
  User.login -d-* User
  User.id -d-* User


  entity Label.id
  entity Label.content
  
  entity Tag.label
  entity Tag.task
  
  entity Task.id
  entity Task.deadline
  entity Task.title
  entity Task.description

  entity Attachment.id
  entity Attachment.format
  
  entity Review.id
  entity Review.task
  entity Review.participiant
  entity Review.content
  
  entity Project.id
  entity Project.title
  entity Project.description
  
  entity Participiant.member
  entity Participiant.task
  entity Participiant.role
  
  Label -d- Tag
  Tag -d- Task
  Task -d- Attachment
  Task -r- Review
  Task -l- Project
  Task -d- Participiant
  ProjectTemplate -u-|> Project
  Member -r- Project
  Member -r- Participiant
  
  Label.id -d-* Label
  Label.content -d-* Label

  Tag.label -d-* Tag
  Tag.task -d-* Tag
  
  Task.id -u-* Task
  Task.deadline -u-* Task
  Task.title -d-* Task
  Task.description -d-* Task
  
  Attachment.id -u-* Attachment
  Attachment.format -u-* Attachment
  
  Review.id -u-* Review
  Review.task -u-* Review
  Review.participiant -u-* Review
  Review.content -u-* Review
  
  Project.id -d-* Project
  Project.title -d-* Project
  Project.description -d-* Project
  
  Participiant.member -u-* Participiant
  Participiant.task -u-* Participiant
  Participiant.role -u-* Participiant
  
@enduml
