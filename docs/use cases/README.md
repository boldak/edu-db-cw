# Модель прецедентів

Щоб користуватися системою користувач має пройти автенфікацію.  
У проєкті користувач може мати 3 статуси: **Розробник, Тімлід, Замовник**.  
На діаграмі нижче (*мал. 1*) можна побачити основні можливості, які надає система різним категоріям користувачів.

## Діаграма прецедентів

<br>

###  **Загальна схема**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Користувач" as User
    actor "Розробник" as Developer
    actor "Тімлід" as Teamlead
    actor "Замовник" as Customer
    
    usecase "<b>RegUser</b>\nЗареєструватися" as RegUser
    usecase "<b>SignIn</b>\nАвтенфікація" as SignIn
    usecase "<b>ChangeView</b>\nЗмінити спосіб \nвідображення проєкту \nпорталу" as ChangeView
    usecase "<b>CreateProject</b>\nСтворити проєкт" as CreateProject
    
    usecase "<b>ProjManage</b>\nРедагування проєкту" as ProjManage
    usecase "<b>TaskManage</b>\nРедагування завдань" as TaskManage
    usecase "<b>UserControl</b>\nКерування користувачами" as UserControl
    usecase "<b>TaskStatus</b>\nЗміна статусу завдань" as TaskStatus
    
    
    Developer -u-|> User
    Customer -u-|> User
    Teamlead -u-|> Customer
    Teamlead -u-|> Developer
    
    User -u-> RegUser
    User -u-> SignIn
    User -u-> ChangeView
    User -u-> CreateProject
    Teamlead -l-> ProjManage
    Teamlead -r-> TaskManage
    Customer -u-> UserControl
    Developer -u-> TaskStatus

@enduml

</center>

*Мал. 1.* Основні можливості, що система надає користувачам

---

<br>

###  **Замовник**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    usecase "<b>UserControl</b>\nКерування користувачами" as UserControl #aaeeaa


    actor "Замовник" as Customer #eeee99


    usecase "<b>AddMember</b>\nДодати учасника" as AddMember
    usecase "<b>DeleteMember</b>\nВидалити учасника " as DeleteMember
    usecase "<b>ChangeRights</b>\nРедагувати права \nкористувача" as ChangeRights
    usecase "<b>UserProf</b>\nПереглянути профіль \nкористувача" as UserProf
    
    usecase "<b>UserList</b>\nПереглянути список \n користувачів" as UserList
    usecase "<b>CheckRights</b>\nПеревірити права \nкористувача" as CheckRights
    Customer -l-> UserControl
    
    
    UserControl .u.> UserList: extends
    AddMember .u.> UserControl: extends
    DeleteMember .u.> UserControl: extends
    ChangeRights .u.> UserControl: extends
    UserProf .l.> UserList: extends
    
    UserControl .l.> CheckRights: includes

@enduml

</center>

*Мал. 2.* Основні можливості, що надає система замовникові

---

<br>

### **Тімлід**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    usecase "<b>ProjManage</b>\nРедагування проєкту" as ProjManage #aaeeaa
    
    actor "Тімлід" as Teamlead #eeee99
    
    Teamlead .l.-> ProjManage
    
    usecase "<b>CheckRights</b>\nПеревірити права \nкористувача" as CheckRights
    
    usecase "<b>DeleteProject</b>\nВидалити проєкт" as DeleteProject
    usecase "<b>OpenBoard</b>\nВідкрити дошку \nз розділами \nта завданнями" as OpenBoard
    usecase "<b>EditSection</b>\nРедагувати розділи" as EditSection
    usecase "<b>AddSection</b>\nДодати розділ" as AddSection
    usecase "<b>DeleteSection</b>\nВидалити розділ" as DeleteSection
    usecase "<b>RenameSection</b>\nПерейменувати розділ" as RenameSection
    
    ProjManage .u.> OpenBoard: extends
    DeleteProject .u.> ProjManage: extends
    EditSection .u.> ProjManage: extends
    AddSection .u.> EditSection: extends
    DeleteSection .u.> EditSection: extends
    RenameSection .u.> EditSection: extends

    EditSection .d.> CheckRights: includes
    DeleteProject .d.> CheckRights: includes
    
@enduml

</center>

*Мал. 3.1.* Основні можливості, що надає система тімліду. Частина 1

---

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml


    usecase "<b>ProjManage</b>\nРедагування проєкту" as ProjManage #aaeeaa
    usecase "<b>TaskManage</b>\nРедагування завдань" as TaskManage 
    
    actor "Тімлід" as Teamlead #eeee99

    Teamlead .r.-> ProjManage
    
    usecase "<b>CheckRights</b>\nПеревірити права \nкористувача" as CheckRights

    usecase "<b>TaskList</b>\nПереглянути список \n завдань" as TaskList
    usecase "<b>CreateTask</b>\nСтворити завдання" as CreateTask
    usecase "<b>RemoveTask</b>\nВидалити завдання" as RemoveTask
    usecase "<b>EditTask</b>\nРедагувати завдання" as EditTask
    usecase "<b>CloneTask</b>\nКопіювати завдання" as CloneTask
    
    TaskManage .u.> ProjManage: extends
    TaskManage .u.> TaskList: extends
    CreateTask .u.> TaskManage: extends
    EditTask .u.> TaskManage: extends
    RemoveTask .u.> TaskManage: extends
    CloneTask .l.> TaskManage: extends
    
    TaskManage .l.> CheckRights: includes

    usecase "<b>EditName</b>\nЗмінити назву завдання" as EditName
    usecase "<b>EditDescr</b>\nЗмінити опис до завдання" as EditDescr
    usecase "<b>EditDev</b>\nЗмінити розробника завдання" as EditDev

    usecase "<b>CheckStatus</b>\nПеревірити статус користувача" as CheckStatus

    EditName .u.> EditTask: extends
    EditDescr .u.> EditTask: extends
    EditDev .u.> EditTask: extends

    CheckStatus .u.> EditDev: includes

@enduml

</center>

*Мал. 3.2.* Основні можливості щодо, що надає система тімліду. Частина 2

---

<br>

### **Розробник**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    usecase "<b>TaskStatus</b>\nЗміна статусу завдання" as TaskStatus #aaeeaa
    
    actor "Розробник" as Developer #eeee99
    
    Developer .l.-> TaskStatus
    
    usecase "<b>CheckRights</b>\nПеревірити права \nкористувача" as CheckRights
    
    usecase "<b>TaskList</b>\nПереглянути список \n завдань" as TaskList
    usecase "<b>OpenTask</b>\nПереглянути завдання" as OpenTask
    usecase "<b>AcceptTask</b>\nПрийняти завдання" as AcceptTask
    usecase "<b>RefuseTask</b>\nВідмовитися від завдання" as RefuseTask
    usecase "<b>SendTask</b>\nВідправити завдання \nна перевірку" as SendTask

    OpenTask .u.> TaskList: extends
    TaskStatus .u.> OpenTask: extends
    AcceptTask .u.> TaskStatus: extends
    RefuseTask .u.> TaskStatus: extends
    SendTask .u.> TaskStatus: extends
    
    TaskStatus .l.> CheckRights: includes
@enduml

</center>

*Мал. 4.* Основні можливості, що надає система розробникові

---

<br>

## Сценарії використання

### **RegUser**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header        
        <font color=000 size=18><b>ID:</b> RegUser

        <font color=000 size=16><b>Назва:</b> Зареєструвати користувача у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Клієнт не є зареєстрованим у системі
        <font color=000 size=16><b>Результат:</b> Клієнт зареєстрований у системі
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16><i>RegUser_EX_AccountExist</i> - Клієнт вже зареєстрований у системі
        <font color=000 size=16><i>RegUser_EX_CAPTCHA</i> - Клієнт є роботом
        
        <font color=000 size=18><b>Основний сценарій:</b>
    end header

    |Користувач|
        start
        :Натискає на кнопку "Реєстрація";
        
    |Система|
        :Виводить форму для реєстрації;
        
    |Користувач|
        :Вводить адресу електронної пошти;
        
    |Система|
        :Перевіряє користувача на робота;
        
    |Користувач|
        :Проходить тест на робота;
        note right #ffaaaa
        <b> Можливо
        <b> RegUser_EX_CAPTCHA
        end note
        
    |Система|
        :Створює 
        новий обліковий запис;
        note right #ffaaaa
        <b> Можливо
        <b> RegUser_EX_AccountExist
        end note
        
        :Надсилає
        користувачу підтвердження 
        успішної реєстрації;
        
    |Користувач|
        :Користувач отримує 
        підтвердження успішної реєстрації;
        stop;

@enduml

</center>

### **SignIn**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

@startuml

    right header        
        <font color=000 size=18><b>ID:</b> SignIn

        <font color=000 size=16><b>Назва:</b> Авторизувати клієнта у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Користувач зареєстрований у системі
        <font color=000 size=16><b>Результат:</b> Користувач увійшов до системи
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> <i>SignIn_EX_NoAccount</i> - Клієнт не зареєстрований у системі
        <font color=000 size=16> <i>SignIn_EX_WrongPassword</i> - Клієнт ввів неправильний пароль
        
        <font color=000 size=18><b>Основний сценарій:</b>
    end header
    
    |Користувач|
    start
    : Натискає кнопку "Вхід";
    
    |Система|
    : Відкриває вікно авторизації;
    
    |Користувач|
    : Вводить адресу електронної пошти;
    note right #ffaaaa
    <b> Можливо
    <b> SignIn_EX_NoAccount
    end note
        
    |Користувач|
    : Вводить пароль;
    note right #ffaaaa
    <b> Можливо
    <b> SignIn_EX_WrongPassword
    end note
    
    |Користувач|
    : Натискає кнопку "Увійти";
    
    |Система|
    : Надає доступ користувачеві\n до облікового запису;
    
    |Користувач|
    : Отримує доступ до облікового запису;
    stop;
    
@enduml

</center>

### **CreateProject**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header        
        <font color=000 size=18><b>ID:</b> CreateProject

        <font color=000 size=16><b>Назва:</b> Створити проєкт
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16>1. Проєкт не є створений 
        <font color=000 size=16>2. Користувач зареєстрований або авторизований у системі
        <font color=000 size=16><b>Результат:</b> Новий проєкт
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> <i>CreateProject_EX_WrongInfo</i> - Користувач ввів некоректну інформацію у проєкті
        <font color=000 size=16> <i>CreateProject_EX_DeadConnection</i> - Повідомлення про успішне створення проєкту не доходить до користувача
        
        <font color=000 size=18><b>Основний сценарій:</b>
    end header

    |Користувач|
        start
        : Настискає кнопку "Create New Project";
        
    |Система|
        : Відкриває вікно створення проєкту;
        
    |Користувач|
        : Заповнює інформацію проекту;

    |Користувач|
        : Настискає кнопку "Finish the project description and create it";
        
    |Система|
        : Перевіряє коректність введених данних;
        note right #ffaaaa
        <b> Можливо
        <b> CreateProject_EX_WrongInfo
        end note

    |Система|
        : Створює проєкт;
        
    |Система|
        : Присуджує користувачеві статус замовник;

    |Система|
        : Повідомляє користувача про успішне створення проєкту;

    |Користувач|
        : Отримує інформацію про успішне створення проєкту;
        note right #ffaaaa
        <b> Можливо
        <b> CreateProject_EX_DeadConnection
        end note

    |Система|
        : Закриває вікно створення проєкту;

    |Система|
        : Відкриває новостворений проєкт;

@enduml

</center>

### **DeleteProject**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header        
        <font color=000 size=18><b>ID:</b> DeleteProject

        <font color=000 size=16><b>Назва:</b> Видалити проєкт
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Проєкт існує
        <font color=000 size=16><b>Результат:</b> Видалений проєкт
        <font color=000 size=16><b>Виключні ситуації:</b>
         <font color=000 size=16> <i>DeleteProject_EX_NotAllowed</i> - Користувач не є замовником проєкту
        <font color=000 size=16><i>DeleteProject_EX_WrongDelete</i> - Система видаляє проєкт не повністю
        <font color=000 size=16><i>DeleteProject_EX_DeadConnection</i> - Повідомлення про успішне видалення проєкту не доходить до користувача

        <font color=000 size=18><b>Основний сценарій:</b>
    end header

    |Користувач|
        start
        : Настискає кнопку "Delete Project";
        
    |Система|
        : Перевіряє права користувача;
        note right #ffaaaa
        <b> Можливо
        <b> DeleteProject_EX_NotAllowed
        end note

    |Система|
        : Відкриває вікно, для підтвердження рішення;

    |Користувач|
        : Натискає кнопку "Yes";
        
    |Система|
        : Видаляє проєкт;
        note right #ffaaaa
        <b> Можливо
        <b> DeleteProject_EX_WrongDelete
        end note

    |Система|
        : Повідомляє користувача про успішне видалення проєкту;
        
    |Користувач|
        : Отримує інформацію про успішне видалення проєкту;
                note right #ffaaaa
                <b> Можливо
                <b> DeleteProject_EX_DeadConnection
                end note

@enduml

</center>

### **AddSection**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header        
        <font color=000 size=18><b>ID:</b> AddSection

        <font color=000 size=16><b>Назва:</b> Додати новий розділ для завдань
        <font color=000 size=16><b>Учасники:</b> Тімлід, система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16> 1. Користувач увійшов у систему
        <font color=000 size=16> 2. Користувачу призначена роль тімліда у обраному проєкті
        <font color=000 size=16><b>Результат:</b> Система додає новий розділ для завдань (як-от "Вхідні завдання", "На перевірці", "У роботі")
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16><i>AddSection_EX_MaxReached</i> - Користувач намагається додати новий розділ, коли проєкт досяг максимальної кількості розділів (10)
        <font color=000 size=16><i>AddSection_EX_WrongName</i> - Користувач задав невалідну назву розділу
        <font color=000 size=16><i>AddSection_EX_Canceled</i> - Користувач скасував створення нового розділу

        <font color=000 size=18><b>Основний сценарій:</b>
    end header

    |Користувач|
        start
        : Натискає кнопку "Додати новий розділ" у блоці завдань;
        note right #ffaaaa
        <b> Можливо
        <b> AddSection_EX_MaxReached
        end note

    |Система|
        : Просить користувача ввести назву нового розділу у полі вводу;

    |Користувач|
        : Вводить назву нового розділу;
        note right #ffaaaa
        <b> Можливо
        <b> AddSection_EX_Canceled
        end note

    |Користувач|
        : Натискає на кнопку "Підтвердити";
        note right #ffaaaa
        <b> Можливо
        <b> AddSection_EX_WrongName
        end note

    |Система|
        : Сповіщає користувача про успішне створення нового розділу;

    |Користувач|
        : Отримує сповіщення про успішне створення нового розділу;  

    |Система|
        : Відображає новий розділ з введеною користувачем назвою у блоці завдань;  

@enduml

</center>

### **DeleteSection**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header        
        <font color=000 size=16><b>ID:</b> DeleteSection
        <font color=000 size=16><b>Назва:</b> Видалити обраний розділ для завдань
        <font color=000 size=16><b>Учасники:</b> Тімлід, система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16><b> Користувач увійшов у систему
        <font color=000 size=16><b> Роль тімліда призначена користувачеві
        <font color=000 size=16><b>Результат:</b> Система видаляє один з розділів для завдань разом із усіма завданнями у ньому
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> *DeleteSection_EX_OnlySection* Користувач намагається видалити єдиний існуючий розділ
        <font color=000 size=16> *DeleteSection_EX_Canceled* Користувач скасував видалення розділу

        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start
        : Натискає кнопку "Видалити" біля назви обраного розділу;
        note right #ffaaaa
        <b> Можливо
        <b> DeleteSection_EX_OnlySection
        end note

    |Система|
        : Відображає діалогове вікно з попередженням про наслідки дії;

    |Користувач|
        : Підтверджує видалення;
        note right #ffaaaa
        <b> Можливо
        <b> DeleteSection_EX_Canceled
        end note

    |Система|
        : Сповіщає про успішне видалення обраного розділу разом із усіма завданнями у ньому;

    |Користувач|
        : Отримує сповіщення про успішне видалення обраного розділу;  

    |Система|
        : Більше не відображає видалений розділ у блоці завдань;  

@enduml

</center>

### **CreateTask**

<br>

<center style="
border-radius:4px;
border: 1px solid #cfd7e6;
box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
padding: 1em;"
>

@startuml

    left header        
        <font color=000 size=16><b>ID:</b> CreateTask
        <font color=000 size=16><b>Назва:</b> Створити завдання
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b>
        <font color=000 size=16> Користувач увійшов у систему
        <font color=000 size=16> Роль тімліда призначена користувачеві
        <font color=000 size=16><b>Результат:</b> Система додає нове завдання у відповідний розділ
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> CreateTask_EX_Canceled Користувач скасував створення завдання
        <font color=000 size=16> CreateTask_EX_WrongName Користувач задав невалідну назву для завдання
        <font color=000 size=16> CreateTask_EX_MaxReached Користувач намагається створити нове завдання, коли розділ завдань досяг максимальної кількості завдань (255)
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
    start
    : Натискає кнопку "Створити завдання"\n у розділі завдань;
    note right #ffaaaa
    <b> Можливо
    <b> CreateTask_EX_MaxReached
    end note
    
    |Система|
    : Просить користувача ввести назву\n нового завдання у полі вводу;
    
    |Користувач|
    : Вводить назву нового завдання;
    note right #ffaaaa
    <b> Можливо
    <b> CreateTask_EX_Canceled
    end note
    
    |Система|
    : Просить користувача ввести опис\n нового завдання у полі вводу;
        
    |Користувач|
    : Вводить опис нового завдання;
    note right #ffaaaa
    <b> Можливо
    <b> CreateTask_EX_Canceled
    end note    
        
    |Користувач|
    : Натискає кнопку "Підтвердити"\n у розділі завдань;
    note right #ffaaaa
    <b> Можливо
    <b> CreateTask_EX_WrongName
    end note
    
    |Система|
    : Створює завдання з назвою, що ввів\n користувач, у розділі завдань;
    
    |Система|
    : Сповіщає про успішне створення\n нового завдання;
    
    |Користувач|
    : Отримує сповіщення про успішне\n створення нового завдання;
    
    |Система|
    : Відображає нове завдання з назвою, що\n ввів користувач, у блоці розділу завдань;
    stop;

@enduml

</center>

### **EditTask**

<br>

<center style="
border-radius:4px;
border: 1px solid #cfd7e6;
box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
padding: 1em;"
>

@startuml

    left header        
        <font color=000 size=16><b>ID:</b> EditTask
        <font color=000 size=16><b>Назва:</b> Редагувати завдання
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b>

        <font color=000 size=16> Користувач увійшов у систему
        <font color=000 size=16> Роль тімліда призначена користувачеві
        
        <font color=000 size=16><b>Результат:</b> Система редагує завдання відповідно до правок, які вніс користувач
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> EditTask_EX_NoChanges Користувач нічого не змінив у даних завдання
        <font color=000 size=16> EditTask_EX_Canceled Користувач скасував редагування завдання
        <font color=000 size=16> EditTask_EX_WrongName Користувач задав невалідну назву для завдання
        <font color=000 size=16> EditTask_EX_NoPermission Користувач не має прав, необхідних для редагування завдання
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header
    
    |Користувач|
    start
    : Відкриває розділ з завданнями;
    
    |Користувач|
    : Натискає правою клавішею миші на\n завдання, що хоче відредагувати;
    
    |Користувач|
    : Обирає з випадаючого списку пункт "Редагувати";
    
    |Система|
    : Перевіряє права користувача;
    note right #ffaaaa
    <b> Можливо
    <b> EditTask_EX_NoPermission
    end note
        
    |Система|
    : Відкриває форму для редагування завдання;
        
    |Користувач|
    : Вводить нові дані;
    note right #ffaaaa
    <b> Можливо
    <b> EditTask_EX_Canceled
    end note
    
    |Користувач|
    : Натискає кнопку "Підтвердити";
    note right #ffaaaa
    <b> Можливо
    <b> EditTask_EX_WrongName
    <b> EditTask_EX_NoChanges
    end note
    
    |Система|
    : Редагує завдання відповідно до нових\n даних, які ввів користувач;
    
    |Система|
    : Сповіщає про успішне редагування завдання;
    
    |Користувач|
    : Отримує сповіщення про успішне редагування завдання;
    
    |Система|
    : Відображає завдання з новими даними, які ввів\n користувач, у блоці розділу завдань;
    stop;
    
@enduml

</center>

### **RemoveTask**

<br>

<center style="
border-radius:4px;
border: 1px solid #cfd7e6;
box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
padding: 1em;"
>

@startuml

    left header        
        <font color=000 size=16><b>ID:</b> RemoveTask
        <font color=000 size=16><b>Назва:</b> Видалити завдання
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b>

        <font color=000 size=16> Користувач увійшов у систему
        <font color=000 size=16> Роль тімліда призначена користувачеві
        
        <font color=000 size=16><b>Результат:</b> Система видаляє завдання
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> RemoveTask_EX_Canceled Користувач скасував видалення завдання
        <font color=000 size=16> RemoveTask_EX_NoRights Користувач не має прав тімліда

        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header
    
    |Користувач|
    start
    : Натискає кнопку "Видалити завдання";
    
    |Система|
    : Перевіряє права користувача;
    note right #ffaaaa
    <b> Можливо
    <b> RemoveTask_EX_NoRights
    end note
    
    |Система|
    : Просить користувача підтвердити\n видалення завдання;
    note right #ffaaaa
    <b> Можливо
    <b> RemoveTask_EX_Canceled
    end note
    
    |Користувач|
    : Натискає кнопку "Підтвердити";
    
    |Система|
    : Видаляє завдання;
    
    |Система|
    : Сповіщає про успішне видалення\n завдання;
    
    |Користувач|
    : Отримує сповіщення про успішне\n видалення завдання;
    
    |Система|
    : Перестає зображати завдання,\n яке вже видалила;
    stop;
    
@enduml

</center>

### **AcceptTask**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header        
        <font color=000 size=18><b>ID:</b> AcceptTask

        <font color=000 size=16><b>Назва:</b> Прийняти завдання
        <font color=000 size=16><b>Учасники:</b> Розробник, система
        <font color=000 size=16><b>Передумови:</b>
        <font color=000 size=16> 1. Не зайняті завдання існують
        <font color=000 size=16> 2. Користувач авторизований
        <font color=000 size=16>3. Користувач є розробником
        <font color=000 size=16><b>Результат:</b> Завдання закріплено за розробником
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> <i>AcceptTask_EX_NoTask</i> - Інший розробник встиг швидше прийняти завдання

        <font color=000 size=18><b>Основний сценарій:</b>
        
    end header
    |Розробник|
        start
        : Натискає кнопку "Tasks";
        
    |Система|
        : Відкриває вікно роботи із завданнями;
        
    |Розробник|
        : Обирає вільне завдання і натискає на кнопку "Accept";
        
    |Система|
        : Закріплює завдання за розробником;
        
    |Система|
        : Видаляє потрібне завдання із списку вільних завдань;
        note right #ffaaaa
        <b> Можливо
        <b> AcceptTask_EX_NoTask
        end note

@enduml

</center>

### **RefuseTask**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font color=000 size=18><b>ID:</b> RefuseTask

        <font color=000 size=16><b>Назва:</b> Відмовитися від завдання
        <font color=000 size=16><b>Учасники:</b> Розробник, система
        <font color=000 size=16><b>Передумови:</b>
        <font color=000 size=16> 1. Є завдання, закріплені за користувачем
        <font color=000 size=16> 2. Користувач авторизований
        <font color=000 size=16>3. Користувач є розробником
        <font color=000 size=16><b>Результат:</b> Завдання відкріплено від розробника
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> <i>RefuseTask_EX_DeadConnection</i> - Повідомлення про те, що завдання було успішно відкріплено від розробника, не доходить до розробника

        <font color=000 size=18><b>Основний сценарій:</b>

    end header

    |Розробник|
        start
        : Натискає кнопку "Tasks";

    |Система|
        : Відкриває вікно роботи із завданнями;

    |Розробник|
        : Обирає закріплене за собою завдання і натискає на кнопку "Refuse";

    |Система|
        : Відкріпляє завдання від розробника;

    |Система|
        : Переносить завдання до списку вільних завдань;

    |Система|
        : Повідомляє розробника про те, що завдання було успішно відкріплено від розробника;

    |Розробник|
        : Отримує інформацію про те, що завдання було успішно відкріплено від розробника;
        note right #ffaaaa
        <b> Можливо
        <b> RefuseTask_EX_DeadConnection
        end note

@enduml

</center>

### **AddMember**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header        
        <font color=000 size=16><b>ID:</b> AddMember
        <font color=000 size=16><b>Назва:</b> Додати розробника до проєкту
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Користувач увійшов в систему 
        <font color=000 size=16> Користувач є тімлідом/замовником
        <font color=000 size=16><b>Результат:</b> Користувач є учасником проєкту
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> AddMember_EX_NoRights Користувач не має прав тімліда/замовника
        <font color=000 size=16> AddMember_EX_InvalidData Користувач ввів неправильні дані
        <font color=000 size=16> AddMember_EX_DoNotExist Користувач не зареєстрований в системі
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start;
        :Натискає на обраний проєкт;

    |Система|
        :Відкриває вікно проєкту;

    |Користувач|
        :Натискає на кнопку "Додати учасника";
        
    |Система|
        :Перевіряє права користувача;
        note right #ffaaaa
        <b> Можливо
        <b> AddMember_EX_NoRights
        end note

        :Відкриває користувачеві вікно для додання учасника;

    |Користувач|
        :Заповнює інформацію;
        note right #ffaaaa
        <b> Можливо
        <b> AddMember_EX_InvalidData
        end note

    |Система|
        :Перевіряє наявність розробника в системі;
        note right #ffaaaa
        <b> Можливо
        <b> AddMember_EX_DoNotExist
        end note

    |Користувач|
        :Натискає кнопку "Підтвердити";

    |Система|
        :Надсилає сповіщення користувачу про призначення до проєкту;

    |Користувач|
        :Отримує сповіщення про призначення до проєкту;

    |Система|
        :Надсилає сповіщення про успішне призначення розробника;

    |Користувач|
        :Отримує сповіщення про успішне призначення розробника;

    |Система|
        :Закриває вікно додання учасника;
        :Відображає розробника у списку учасників проєкту;
        stop;

@enduml

</center>

### **ChangeRights**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header        
        <font color=000 size=16><b>ID:</b> ChangeRights
        <font color=000 size=16><b>Назва:</b> Змінити права користувача
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Користувач увійшов в систему
        <font color=000 size=16> Користувач є замовником
        <font color=000 size=16> Користувач є тімлідом
        <font color=000 size=16><b>Результат:</b> Користувач отримує статус
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> ChangeRights_EX_NoRights Користувач не має прав тімліда
        <font color=000 size=16> ChangeRights_EX_SameStatus* Обраний користувач вже має такий статус
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header
    
    |Користувач|
        start;
        :Натискає на обраний проєкт;

    |Система|
        :Відкриває вікно проєкту;

    |Користувач|
        :Натискає на список учасників проєкту;

    |Система|
        :Відкриває список учасників проєкту;

    |Користувач|
        :Натискає на обраного користувача правою клавішою миші
        і з випадаючого списка обирає пункт "Змінити права учасника";

    |Система|
        :Перевіряє права користувача;
        note right #ffaaaa
        <b> Можливо
        <b> ChangeRights_EX_NoRights
        end note

        :Надсилає діалогове вікно з варіантами нового статусу для 
        обраного користувача: замовник, тімлід, розробник;

    |Користувач|
        :Обирає новий статус для обраного користувача;
        note right #ffaaaa
        <b> Можливо
        <b> ChangeRights_EX_SameStatus
        end note
    
    |Система|
        :Надсилає сповіщення про успішну зміну статусу 
        обраного користувача;

    |Користувач|
        :Отримує сповіщення про успішну зміну статусу 
        обраного користувача;

    |Система|    
        :Надсилає обраному користувачеві повідомлення
        про його новий статус;

    |Система|
        :Відображає користувача з новим статусом 
        у списку учасників проєкту;
        stop;
@enduml

</center>

### **DeleteMember**

<br>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header        
        <font color=000 size=16><b>ID:</b> DeleteMember
        <font color=000 size=16><b>Назва:</b> Видалити розробника з проєкту
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Розробник є учасником проєкту
        <font color=000 size=16> Користувач увійшов в систему 
        <font color=000 size=16> Користувач є тімлідом
        <font color=000 size=16><b>Результат:</b> Розробник не є учасником проєкту
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> DeleteMember_EX_NoRights Користувач не має прав тімліда
        <font color=000 size=16> DeleteMember_EX_Canceled Користувач скасував видалення
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start;    
        :Натискає на обраний проєкт;

    |Система|
        :Відкриває вікно проєкту;

    |Користувач|
        :Натискає на список учасників проєкту;

    |Система|
        :Відкриває список учасників проєкту;

    |Користувач|
        :Натискає на розробника правою клавішою миші і 
        з випадаючого списка обирає пункт "Видалити учасника";

    |Система|
        :Перевіряє права користувача;
        note right #ffaaaa
        <b> Можливо
        <b> DeleteMember_EX_NoRights
        end note

        :Надсилає діалогове вікно з метою підтвердити рішення;

    |Користувач|
        :натискає на кнопку "Підтвердити";
        note right #ffaaaa
        <b> Можливо
        <b> DeleteMember_EX_Canceled
        end note

    |Система|
        :Надсилає сповіщення про успішне видалення учасника проєкту;

    |Користувач|
        :Отримує сповіщення про успішне видалення учасника проєкту;

    |Система|
        :Не відображає користувача у списку учасників проєкту;

    |Користувач|
        :Не має доступу до проєкту;
        stop;

@enduml

</center>