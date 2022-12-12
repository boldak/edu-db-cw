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
    entity Attachment.path #ffffff
    entity Attachment.fileType #ffffff

    entity Executor

    entity Member

    entity User
    entity User.login #ffffff
    entity User.password #ffffff
    entity User.email #ffffff

    entity Role
    entity Role.slug #ffffff

    entity Grant
    entity Grant.slug #ffffff

    Project.name --u-*  Project
    Project.description --u-*  Project
    Section "0,*" <--- "1,1" Project

    Role.slug --* Role

    Grant.slug --* Grant
    Role "0,*" --> "1,*" Grant

    Section.name --l-* Section

    Task "0,*" <--- "1,1" Section
    Task.name --* Task
    Task.description --* Task
    Task.deadline --* Task
    Task "1,1" <-- "0,*" Executor
    Executor "0,*" --> "1,1" Member 
    
    Attachment "0,*" <-- "1,1" Task
    Attachment.name --* Attachment
    Attachment.path --* Attachment
    Attachment.fileType --* Attachment

    Member "0,*" --> "1,1" User
    
    User.login --d-* User
    User.password --d-* User
    User.email --d-* User

    Member "0,*" ----> "1,1" Role
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
        index: NUMBER
    }
    
    entity Task <<ENTITY>> {
        name: TEXT
        description: TEXT
        deadline: DATE
        index: NUMBER
    }
    
    entity Attachment <<ENTITY>> {
        name: TEXT
        path: TEXT
        fileType: TEXT
    }

    entity Executor <<ENTITY>> {

    }
}

namespace AccessPolicy {
    entity Member <<ENTITY>> { 
    }

    entity Role <<ENTITY>> {
        slug: TEXT
    }

    entity Grant <<ENTITY>> {
        slug: TEXT
    }
}

Member "0,*" ---> "1,1" Project
Member "0,*" --u-> "1,1" Role
Member "0,*" ---r-> "1,1" User

Task "1,1" <-u-- "0,*" Executor
Executor "0,*" --> "1,1" Member

Section "0,*" -u-> "1,1" Project
Section "1,1" <-- "0,*" Task
Task "1,1" <-- "0,*" Attachment

Role "0,*" --> "1,*" Grant

@enduml

</center>

## Опис ER-моделі:

<a name="user"></a>

### User

<a name="member"></a> 

### Member (Учасник)

Використовується як посередник; визначає те, які [права](#role) певний [користувач](#user) має у доступі до певного [проєкту](#project).

Немає жодних полів.

Екземпляр учасника відповідає одному [проєкту](#project), одному [користувачу](#user) й одній [ролі](#role).

<a name="role"></a>

### Role

<a name="grant"></a>

### Grant (Право)

Визначає єдине право використання проєкту.  
Має поля:

- slug: TEXT. Містить унікальний рядок ідентифікатор, зрозумілий людині, з описом права у форматі snake_case.

Початково у базу даних будуть занесені такі права:

*тут буде список у форматі "rule_name" - що право дозволяє робити*

<a name="project"></a>

### Project

<a name="section"></a>

### Section (Розділ)

Використовується для зручного сортування завдань.
має поля:
- name: TEXT. Містить текст з назвою розділу.
- index: NUMBER. Містить номер, що показує на якій позиції на сторінці розміщенна секція.  


<a name ="freeTasks"></a>

Розділ може мати від 0 до * [завдань](#task).  
  
Особливим і обов'язковим є розділ **"Вільні завдання"**. У ньому знаходяться [завдання](#task), що не мають виконавців. Завдання видаляються з цього розділу, коли завдання набуває достатню кількість виконавців.  

<a name ="task"></a>

### Task (Завдання)
використовується для роботи з завданнями.  
має поля:
+ name: TEXT. Містить текст з назвою завдання.  
+ description: TEXT. Містить текст з описом завдання.  
+ deadline: DATE. Містить дату, до якої завдання має бути виконано.  
+ index: NUMBER. Містить номер, що показує на якій позиції у Section (Розділі) завдання розміщенно.  

Завдання може мати від 0 до * [вкладень](#attachment).  
Якщо завдання знаходиться у [розділі "Вільні завдання"](#freeTasks), то відповідно не має виконавця (Executor). Щойно у Task з'являється щонайменше 1 виконавець (Executor), завдання видаляється з [розділу](#section) "Вільні завдання".  
Залежно від [ролі](#role) користувача у проєкті, користувач може виконувати різні дії з завданнями.

<a name ="attachment"></a>

### Attachment (Вкладення)
використовується для вкладення до [завдання](#task) додаткових файлів різних типів (txt, png, mp4 і тд).  
має поля:
- name: TEXT. Містить текст з назвою вкладення.  
- path: TEXT. Містить шлях, за яким можна знайти вкладення.  
- fileType: TEXT. Містить розширенння вкладеного файлу.  

Щоб прикріпити вкладення до [завдання](#task), воно має бути завантаженим на сервер.  

## Реляційна схема
