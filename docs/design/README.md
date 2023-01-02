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
entity DataFile.hasGraph #ffffff

entity EditForm
entity EditForm.id #ffffff
entity EditForm.editorUsername #ffffff
entity EditForm.oldFile_csv #ffffff
entity EditForm.newFile_csv #ffffff
entity EditForm.editDate #ffffff

entity Category
entity Category.id #ffffff 
entity Category.name #ffffff 

entity Role
entity Role.name #ffffff
entity Role.id #ffffff
object RegisteredUser #ffffff
object Editor #ffffff
object Admin #ffffff

entity Grant

entity Permission
entity Permission.id #ffffff
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
Permission.id -r-* Permission
Read .u.> Permission : instanceOf
Edit .u.> Permission : instanceOf
Download .u.> Permission : instanceOf
Upload .u.> Permission : instanceOf
Delete .u.> Permission : instanceOf
ManageEditors .u.> Permission : instanceOf

User "1,1" ---d- "0,*" Access

Access "0,*" -d-- "1,1" DataFile

EditForm "0,*" --u- "1,1" DataFile
Category "1,1" --u- "0,*" DataFile


User.id -d-* User 
User.username -d-* User
User.email -d-* User 
User.password -d-* User 
User.Avatar -d-* User
 
DataFile.id -d-* DataFile
DataFile.name -d-* DataFile
DataFile.description -r-* DataFile
DataFile.file_csv -d-* DataFile
DataFile.uploadDate -d-* DataFile
DataFile.hasGraph -d-* DataFile

Category.id -u-* Category
Category.name -u-* Category

EditForm.id -r-* EditForm
EditForm.editorUsername -l-* EditForm
EditForm.oldFile_csv -u-* EditForm
EditForm.newFile_csv -u-* EditForm
EditForm.editDate -u-* EditForm

Role.name -u-* Role
Role.id -r-* Role

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
    id: INT
    name: TEXT
}
object RegisteredUser #ffffff
object Editor #ffffff
object Admin #ffffff

entity Grant

entity Permission <<ENTITY>> {
    name: TEXT
    id: INT
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
    hasGraph: BOOL  
}

entity Category <<ENTITY>> {
    id: INT
    name: TEXT
}

entity EditForm <<ENTITY>> {
    id: INT
    editorUsername: TEXT
    oldFile_csv: TEXT
    newFile_csv: TEXT
    editDate: DATE
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

EditForm "0,*" -u- "1,1" DataFile
Category "1,1" -u- "0,*" DataFile

@enduml 

- реляційна схема

