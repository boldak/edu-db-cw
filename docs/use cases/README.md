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

**AcceptTask**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
        <font color=000 size=16><b>ID:</b> AcceptTask
        <font color=000 size=16><b>Назва:</b> Прийняти завдання
        <font color=000 size=16><b>Учасники:</b> Розробник, система
        <font color=000 size=16><b>Передумови:</b>

        <font color=000 size=16> 1. Не зайняті завдання існують
        <font color=000 size=16> 2. Користувач авторизований
        <font color=000 size=16>3. Користувач є розробником

        <font color=000 size=16><b>Результат:</b> Завдання закріплено за розробником
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> AcceptTask_EX_NoTask* Інший розробник встиг швидше прийняти завдання

        <font color=000 size=16><b>Основний сценарій:</b>
        
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

**RefuseTask**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
        <font color=000 size=16><b>ID:</b> RefuseTask
        <font color=000 size=16><b>Назва:</b> Відмовитися від завдання
        <font color=000 size=16><b>Учасники:</b> Розробник, система
        <font color=000 size=16><b>Передумови:</b>

        <font color=000 size=16> 1. Є завдання, закріплені за користувачем
        <font color=000 size=16> 2. Користувач авторизований
        <font color=000 size=16>3. Користувач є розробником
        
        <font color=000 size=16><b>Результат:</b> Завдання відкріплено від розробника
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> RefuseTask_EX_DeadConnection* Повідомлення про те, що завдання було успішно відкріплено від розробника, не доходить до розробника

        <font color=000 size=16><b>Основний сценарій:</b>
        
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