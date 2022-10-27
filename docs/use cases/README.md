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

    <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

@startuml

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
        <font color=000 size=16><b>ID:</b> SignIn
        <font color=000 size=16><b>Назва:</b> Авторизувати клієнта у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Користувач зареєстрований у системі
        <font color=000 size=16><b>Результат:</b> Користувач увійшов до системи
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> SignIn_EX_NoAccount Клієнт не зареєстрований у системі
        <font color=000 size=16> SignIn_EX_WrongPassword Клієнт ввів неправильний пароль
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
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

    <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

@startuml

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
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

    <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

@startuml

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
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

    <center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

@startuml

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
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
