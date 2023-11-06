# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

## Модель бізнес-об'єктів
@startuml
  entity Label
  entity Tag
  entity Task
  entity Attachment
  entity Review
  entity Project
  entity ProjectTemplate
  entity Participiant
  entity Member
  
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
