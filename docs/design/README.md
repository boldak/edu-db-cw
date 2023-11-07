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
  
  entity Member.user_id
  entity Member.role_id
  entity Member.project_id
  
  entity Role.id_serial
  entity Role.name_vc

  entity Grant.role_id
  entity Grant.permission_id

  entity Permission.id_serial
  entity Permission.rule
  
  entity Notification.user_id
  entity Notification.message_id
  
  entity Message.scheduled
  entity Message.id_serial
  entity Message.content_vc

  entity MessageTypes.id_serial
  entity MessageTypes.template_vc
    
  entity User.system_role
  entity User.email_vc
  entity User.login_vc
  entity User.id_serial

  User -r- Member
  Member -d- Role
  Role -d- Grant
  Grant -d- Permission
  
  User -d- Notification
  Message -u-  Notification
  Message -d-  MessageTypes
  
  Member.user_id -d-* Member
  Member.role_id -d-* Member
  Member.project_id -d-* Member
  
  Role.id_serial -l-* Role
  Role.name_vc -l-* Role
  
  Grant.role_id -l-* Grant
  Grant.permission_id -l-* Grant
  
  Permission.id_serial -u-* Permission
  Permission.rule -u-* Permission
  
  Notification.user_id -u-* Notification
  Notification.message_id -u-* Notification
  
  Message.scheduled -u-* Message
  Message.id_serial -u-* Message
  Message.content_vc -u-* Message
  
  MessageTypes.id_serial -u-* MessageTypes
  MessageTypes.template_vc -u-* MessageTypes
  
  User.system_role -d-* User
  User.email_vc -d-* User
  User.login_vc -d-* User
  User.id_serial -d-* User


  entity Label.id
  entity Label.content
  
  entity Tag.label_id
  entity Tag.task_id
  
  entity Task.id
  entity Task.deadline
  entity Task.title
  entity Task.description

  entity Attachment.id
  entity Attachment.format
  
  entity Review.id
  entity Review.task_id
  entity Review.participiant_id
  entity Review.content
  
  entity Project.id
  entity Project.title
  entity Project.description
  
  entity Participiant.member_id
  entity Participiant.task_id
  entity Participiant.role
  
  Label -d- Tag
  Tag -d- Task
  Task -d- Attachment
  Task -r- Review
  Task -l- Project
  Task -d- Participiant
  ProjectTemplate -u- Project
  Member -r- Project
  Member -r- Participiant
  
  Label.id -d-* Label
  Label.content -d-* Label

  Tag.label_id -d-* Tag
  Tag.task_id -d-* Tag
  
  Task.id -u-* Task
  Task.deadline -u-* Task
  Task.title -d-* Task
  Task.description -d-* Task
  
  Attachment.id -u-* Attachment
  Attachment.format -u-* Attachment
  
  Review.id -u-* Review
  Review.task_id -u-* Review
  Review.participiant_id -u-* Review
  Review.content -u-* Review
  
  Project.id -d-* Project
  Project.title -d-* Project
  Project.description -d-* Project
  
  Participiant.member_id -u-* Participiant
  Participiant.task_id -u-* Participiant
  Participiant.role -u-* Participiant
  
@enduml
