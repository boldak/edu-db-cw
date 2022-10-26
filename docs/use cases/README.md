# Модель прецедентів

## Діаграма прецедентів

@startuml

    title
        <font size=16 color=black>Діаграма прецедентів
    end title

    actor "Користувач" as User
    actor "Розробник" as Developer
    actor "Тімлід" as Teamlead
    actor "Замовник" as Customer
    
    usecase "<b>RegUser</b>\nЗареєструватися" as RegUser
    usecase "<b>SignIn</b>\nУвійти в систему" as SignIn
    usecase "<b>ChangeView</b>\nЗмінити спосіб \nвідображення проєкту \nпорталу" as ChangeView
    usecase "<b>CreateProject</b>\nСтворити проєкт" as CreateProject
    
    usecase "<b>ProjManage</b>\nРедагування проєкту" as ProjManage
    usecase "<b>TaskManage</b>\nРедагування завдань" as TaskManage
    usecase "<b>UserControl</b>\nКерування користувачами" as UserControl
    usecase "<b>TaskStatus</b>\nЗміна статусу завдань" as TaskStatus
    
    
    Developer -u-|> User
    Teamlead -u-|> User
    Customer -u-|> Teamlead
    
    User -u-> RegUser
    User -u-> SignIn
    User -u-> ChangeView
    User -u-> CreateProject
    Teamlead -u-> ProjManage
    Teamlead -u-> TaskManage
    Customer -u-> UserControl
    Developer -u-> TaskStatus
   
@enduml


@startuml

    
    usecase "<b>UserControl</b>\nКерування користувачами" as UserControl #aaeeaa


    actor "Замовник" as Customer #eeee99


    usecase "<b>AddMember</b>\nДодати учасника" as AddMember
    usecase "<b>DeleteMember</b>\nВидалити учасника " as DeleteMember
    usecase "<b>ChangeRights</b>\nРедагувати права \nкористувача" as ChangeRights
    
    usecase "<b>UserList</b>\nПереглянути список \n користувачів" as UserList
    usecase "<b>CheckRights</b>\nПеревірити права \nкористувача" as CheckRights
    Customer -l-> UserControl
    
    
    UserList .u.> UserControl: extends
    AddMember .u.> UserList: extends
    DeleteMember .u.> UserList: extends
    ChangeRights .u.> UserList: extends
    
    AddMember .d.> CheckRights: includes
    DeleteMember .d.> CheckRights: includes
    ChangeRights .d.> CheckRights: includes
    

@enduml


@startuml

    usecase "<b>ProjManage</b>\nРедагування проєкту" as ProjManage #aaeeaa
    usecase "<b>TaskManage</b>\nРедагування завдань" as TaskManage #aaeeaa
    
    actor "Тімлід" as Teamlead #eeee99
    
    Teamlead .l.-> ProjManage
    Teamlead .r.-> TaskManage
    
    usecase "<b>CheckRights</b>\nПеревірити права \nкористувача" as CheckRights
    
    usecase "<b>DeleteProject</b>\nВидалити проєкт" as DeleteProject
    usecase "<b>OpenBoard</b>\nВідкрити дошку \nз розділами \nта завданнями" as OpenBoard
    usecase "<b>EditSection</b>\nРедагувати розділи" as EditSection
    usecase "<b>AddSection</b>\nДодати розділ" as AddSection
    usecase "<b>DeleteSection</b>\nВидалити розділ" as DeleteSection
    
    DeleteProject .u.> ProjManage: extends
    OpenBoard .u.> ProjManage: extends
    EditSection .u.> OpenBoard: extends
    AddSection .u.> EditSection: extends
    DeleteSection .u.> EditSection: extends
    
    
    DeleteProject .d.> CheckRights: includes
    AddSection .d.> CheckRights: includes
    DeleteSection .d.> CheckRights: includes
    
    usecase "<b>TaskList</b>\nПереглянути список \n завдань" as TaskList
    usecase "<b>CreateTask</b>\nСтворити завдання \nпорталу" as CreateTask
    usecase "<b>RemoveTask</b>\nВидалити завдання \nпорталу" as RemoveTask
    usecase "<b>EditTask</b>\nРедагувати завдання \nпорталу" as EditTask
    
    
    TaskList .u.> TaskManage: extends
    CreateTask .u.> TaskList: extends
    RemoveTask .u.> TaskList: extends
    EditTask .u.> TaskList: extends
    
    CreateTask .d.> CheckRights: includes
    RemoveTask .d.> CheckRights: includes
    EditTask .d.> CheckRights: includes
@enduml


@startuml

    usecase "<b>TaskStatus</b>\nЗміна статусу завдань" as TaskStatus #aaeeaa
    
    actor "Розробник" as Developer #eeee99
    
    Developer .l.-> TaskStatus
    
    usecase "<b>CheckRights</b>\nПеревірити права \nкористувача" as CheckRights
    
    usecase "<b>TaskList</b>\nПереглянути список \n завдань" as TaskList
    usecase "<b>AcceptTask</b>\nПрийняти завдання \nпорталу" as AcceptTask
    usecase "<b>RefuseTask</b>\nВідмовитися від завдання" as RefuseTask
    
    
    TaskList .u.> TaskStatus: extends
    AcceptTask .u.> TaskList: extends
    RefuseTask .u.> TaskList: extends
    
    AcceptTask .d.> CheckRights: includes
    RefuseTask .d.> CheckRights: includes
@enduml


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