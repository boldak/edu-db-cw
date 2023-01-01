# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 

@startuml 

entity User
entity User.id #ffffff 
entity User.username #ffffff
entity User.email #ffffff
entity User.password #ffffff 
entity User.Avatar #ffffff

entity Access

entity DataFile
entity DataFile.id #ffffff 
entity DataFile.name #ffffff 
entity DataFile.description #ffffff 
entity DataFile.file_csv #ffffff 
entity DataFile.uploadDate #ffffff  

entity Edits
entity Edits.id #ffffff
entity Edits.editorUsername #ffffff
entity Edits.oldFile_csv #ffffff
entity Edits.newFile_csv #ffffff
entity Edits.EditDate #ffffff
entity Edits.status #ffffff

entity Category
entity Category.id #ffffff 
entity Category.name #ffffff 
entity Category.hex_code #ffffff

entity Visualisation
entity Visualisation.type #ffffff

entity Role
entity Role.name #ffffff
object RegisteredUser #ffffff
object Editor #ffffff
object Admin #ffffff

entity Grant

entity Permission
entity Permission.name #ffffff
object Read #ffffff
object Edit #ffffff
object Download #ffffff
object Upload #ffffff
object Delete #ffffff
object ManageEditors #ffffff

entity Donate
entity Donate.type #ffffff


Donate "1,1" -u- "0,*" User
Role "1,1" -r- "0,*" User

RegisteredUser ..> Role : instanceOf
Editor ..> Role : instanceOf
Admin ..> Role : instanceOf

Grant "0,*" -u- "0,1"  Role
Permission "0,1" -u- "0,*"  Grant
Permission.name -l-* Permission
Read .u.> Permission : instanceOf
Edit .u.> Permission : instanceOf
Download .u.> Permission : instanceOf
Upload .u.> Permission : instanceOf
Delete .u.> Permission : instanceOf
ManageEditors .u.> Permission : instanceOf

User "1,1" -d- "0,*" Access

Access "0,*" ---d-- "1,1" DataFile

Edits "0,*" -u- "1,1" DataFile
Category "1,1" -u- "0,*" DataFile
Visualisation "1,1" -u- "0,*" DataFile


User.id -d-* User 
User.username -d-* User
User.email -d-* User 
User.password -d-* User 
User.Avatar -d-* User
 
DataFile.id -d-* DataFile
DataFile.name -d-* DataFile
DataFile.description -d-* DataFile
DataFile.file_csv -d-* DataFile
DataFile.uploadDate -d-* DataFile

Category.id -u-* Category
Category.name -u-* Category
Category.hex_code -u-* Category

Visualisation.type -u-* Visualisation

Edits.id -r-* Edits
Edits.editorUsername -d-* Edits
Edits.oldFile_csv -u-* Edits
Edits.newFile_csv -u-* Edits
Edits.EditDate -d-* Edits
Edits.status -u-* Edits

Role.name -u-* Role

Donate.type -l-* Donate
@enduml 


- ER-модель

@startuml 

namespace AccountManagement {

entity User <<ENTITY>> {
    id: INT
    username: TEXT
    email: TEXT
    password: TEXT
    avatar: TEXT
}
}

namespace AccessPolicy {

entity Access

entity Role <<ENTITY>> {
    name: TEXT
}
object RegisteredUser #ffffff
object Editor #ffffff
object Admin #ffffff

entity Grant

entity Permission <<ENTITY>> {
    name: TEXT
}
object Read #ffffff
object Edit #ffffff
object Download #ffffff
object Upload #ffffff
object Delete #ffffff
object ManageEditors #ffffff

entity Donate <<ENTITY>> {
    type: TEXT
}
}


namespace WorkWithData {

entity DataFile <<ENTITY>> {
    id: INT 
    name: TEXT 
    description: TEXT 
    file_csv: TEXT
    uploadDate: DATE  
}

entity Category <<ENTITY>> {
    id: INT
    name: TEXT
    hex_code: TEXT
}

entity Edits <<ENTITY>> {
    id: INT
    editorUsername: TEXT
    oldFile_csv: TEXT
    newFile_csv: TEXT
    EditDate: DATE
    status: INT
}

entity Visualisation <<ENTITY>> {
    type: TEXT
}

}


Donate "1,1" -u- "0,*" User
Role "1,1" -r- "0,*" User

RegisteredUser ..> Role : instanceOf
Editor ..> Role : instanceOf
Admin ..> Role : instanceOf

Grant "0,*" -u- "0,1"  Role
Permission "0,1" -u- "0,*"  Grant
Read .u.> Permission : instanceOf
Edit .u.> Permission : instanceOf
Download .u.> Permission : instanceOf
Upload .u.> Permission : instanceOf
Delete .u.> Permission : instanceOf
ManageEditors .u.> Permission : instanceOf

User "1,1" ---d- "0,*" Access

Access "0,*" -d- "1,1" DataFile

Edits "0,*" -u- "1,1" DataFile
Category "1,1" -u- "0,*" DataFile
Visualisation "1,1" -u- "0,*" DataFile

@enduml 

- реляційна схема

