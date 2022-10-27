# Модель прецедентів

Щоб користуватися системою користувач має пройти автенфікацію.  
У проєкті користувач може мати 3 статуси: Розробник, Тімлід, Замовник.  
На діаграмі нижче (Мал.1) можна побачити основні можливості, які надає система різним категоріям користувачів.

## Діаграма прецедентів

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

Мал.1 Основні можливості, що система надає користувачам

---

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

Мал.2 Основні можливості, що надає система замовникові

---

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

Мал.3.1 Основні можливості, що надає система тімліду. Частина 1

---

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

Мал.3.2 Основні можливості щодо, що надає система тімліду. Частина 2

---

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

Мал.4 Основні можливості, що надає система замовникові

---

## Сценарії використання


@startuml

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
        <font color=000 size=16><b>ID:</b> RegUser
        <font color=000 size=16><b>Назва:</b> Зареєструвати користувача у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Клієнт не є зареєстрованим у системі
        <font color=000 size=16><b>Результат:</b> Клієнт зареєстрований у системі
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> RegUser_EX_AccountExist* Клієнт вже зареєстрований у системі
        <font color=000 size=16> RegUser_EX_CAPTCHA* Клієнт є роботом
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start
        : Натискає на кнопку "Реєстрація";
        
    |Система|
        : Виводить форму для реєстрації;
        
    |Користувач|
        : Вводить адресу електронної пошти;
        
    |Система|
        : Перевіряє користувача на робота;
        
    |Користувач|
        : Проходить тест на робота;
        note right #ffaaaa
        <b> Можливо
        <b> RegUser_EX_CAPTCHA
        end note
        
    |Система|
        : Система створює 
        новий обліковий запис;
        note right #ffaaaa
        <b> Можливо
        <b> RegUser_EX_AccountExist
        end note
        
        : Система надсилає
        користувачу підтвердження 
        успішної реєстрації;
        
    |Користувач|
        : Користувач отримує 
        підтвердження успішної реєстрації;
        stop;

@enduml

@startuml

    left header
        <font color=000 size=18><b>Package:</b> CRPR_1.0
        
        <font color=000 size=16><b>ID:</b> CreateProject
        <font color=000 size=16><b>Назва:</b> Створити проєкт
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16><b> Проєкт не є створений 
        <font color=000 size=16><b> Користувач зареєстрований або авторизований у системі
        <font color=000 size=16><b>Результат:</b> Новий проєкт
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> *CreateProject_EX_WrongInfo* Користувач ввів некоректну інформацію у проєкті
        <font color=000 size=16> *CreateProject_EX_DeadConnection* Повідомлення про успішне створення проєкту не доходить до користувача
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
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
        : Повідомляє користувачу про успішне створення проєкту;

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

@startuml

    left header
        <font color=000 size=18><b>Package:</b> DRPR_1.0
        
        <font color=000 size=16><b>ID:</b> DeleteProject
        <font color=000 size=16><b>Назва:</b> Видалити проєкт
        <font color=000 size=16><b>Учасники:</b> Менеджер/Замовник проєкту, система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16><b> Проєкт існує
        <font color=000 size=16><b>Результат:</b> Видалений проєкт
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> *DeleteProject_EX_WrongDelete* Система видаляє проєкт не повністю
        <font color=000 size=16> *DeleteProject_EX_NotAllowed* Користувач не є менеджером/замовником проєкту
        <font color=000 size=16> *DeleteProject_EX_DeadConnection* Повідомлення про успішне видалення проєкту не доходить до менеджероа/замовника

        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start
        : Настискає кнопку "Delete Project";
        
    |Система|
        : Перевіряє права користувача;
        note right #ffaaaa
        <b> Можливо
        <b> DeleteProject_EX_WrongDelete
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
        
    |Менеджер та замовник|
        : Отримують інформацію про успішне видалення проєкту;
                note right #ffaaaa
        <b> Можливо
        <b> DeleteProject_EX_DeadConnection
        end note

@enduml

@startuml

    left header
        <font color=000 size=18><b>Package:</b> ADSE_1.0
        
        <font color=000 size=16><b>ID:</b> AddSection
        <font color=000 size=16><b>Назва:</b> Додати новий розділ для завдань
        <font color=000 size=16><b>Учасники:</b> Тімлід, система
        <font color=000 size=16><b>Передумови:</b> 
        <font color=000 size=16><b> Користувач увійшов у систему
        <font color=000 size=16><b> Користувачу призначена роль тімліда у обраному проєкті
        <font color=000 size=16><b>Результат:</b> Система додає новий розділ для завдань (як-от "Вхідні завдання", "На перевірці", "У роботі")
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> *AddSection_EX_MaxReached* Користувач намагається додати новий розділ, коли проєкт досяг максимальної кількості розділів (10)
        <font color=000 size=16> *AddSection_EX_WrongName* Користувач задав невалідну назву розділу
        <font color=000 size=16> *AddSection_EX_Canceled* Користувач скасував створення нового розділу

        <font color=000 size=16><b>Основний сценарій:</b>
        
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
        : натискає на кнопку "Підтвердити";
        note right #ffaaaa
        <b> Можливо
        <b> AddSection_EX_WrongName
        end note

    |Система|
        : Сповіщає про успішне створення нового розділу;

    |Користувач|
        : Отримує сповіщення про успішне створення нового розділу;  

    |Система|
        : Відображає новий розділ з введеною користувачем назвою у блоці завдань;  

@enduml

@startuml

    left header
        <font color=000 size=18><b>Package:</b> DESE_1.0
        
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
