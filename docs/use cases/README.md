# Модель прецедентів

Щоб користуватися системою користувач має пройти автентифікацію.  
У проєкті користувач може мати 3 статуси: **Розробник, Тімлід, Замовник**.  
На діаграмі нижче (*мал. 1*) можна побачити основні можливості, які надає система різним категоріям користувачів.

## Діаграма прецедентів

<br />

###  **Загальна схема**

<br />

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

<br />

###  **Замовник**

<br />

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

<br />

### **Тімлід**

<br />

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

<br />

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

<br />

### **Розробник**

<br />

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

<br />

## Сценарії використання

### **RegUser**

<br />

**ID:** RegUser

**Назва:** Зареєструвати користувача у системі

**Учасники:** Користувач, Система

**Передумови:** Клієнт не є зареєстрованим у системі

**Результат:** Клієнт має обліковий запис

**Виключні ситуації:**

*RegUser_EX_AccountExist* - Клієнт вже зареєстрований у системі

*RegUser_EX_CAPTCHA* - Клієнт є роботом

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        :Натискає на кнопку "Реєстрація";
        
    |Система|
        :Відкриває форму для реєстрації;
        
    |Користувач|
        :Вводить адресу електронної пошти, логін і пароль;
        
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

*Мал. 5.* Сценарій використання - реєстрація користувача в системі

---

<br />

### **SignIn**

<br />

**ID:** SignIn

**Назва:** Автентифікувати клієнта у системі

**Учасники:** Користувач, Система

**Передумови:** Користувач зареєстрований у системі

**Результат:** Користувач увійшов до системи

**Виключні ситуації:**

*SignIn_EX_NoAccount* - Клієнт не зареєстрований у системі

*SignIn_EX_WrongPassword* - Клієнт ввів неправильний пароль

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

@startuml
    
    |Користувач|
    start
    : Натискає кнопку "Вхід";
    
    |Система|
    : Відкриває вікно автентифікації;
    
    |Користувач|
    : Вводить адресу електронної пошти або логін;
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

*Мал. 6.* Сценарій використання - авторизація користувача в системі

---

<br />

### **CreateProject**

<br />

**ID:** CreateProject

**Назва:** Створити проєкт

**Учасники:** Користувач, Система

**Передумови:** 
1. Проєкт не є створений 
2. Користувач зареєстрований або авторизований у системі

**Результат:** Новий проєкт

**Виключні ситуації:**

*CreateProject_EX_WrongInfo* - Користувач ввів некоректну інформацію у проєкті

*CreateProject_EX_DeadConnection* - Повідомлення про успішне створення проєкту не доходить до користувача

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Відкриває блок з проєктами;

    |Користувач|
        : Настискає кнопку "Створити новий проєкт";
        
    |Система|
        : Відкриває вікно створення проєкту;
        
    |Користувач|
        : Водить дані - назва, опис проєкту;

    |Користувач|
        : Настискає кнопку "Створити проєкт";
        
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
        stop;

@enduml

</center>

*Мал. 7.* Сценарій використання - створення проєкту

---

<br />

### **DeleteProject**

<br />

**ID:** DeleteProject

**Назва:** Видалити проєкт

**Учасники:** Користувач, Система

**Передумови:** Проєкт існує

**Результат:** Видалений проєкт

**Виключні ситуації:**

*DeleteProject_EX_NotAllowed* - Користувач не є замовником проєкту

*DeleteProject_EX_WrongDelete* - Система видаляє проєкт не повністю

*DeleteProject_EX_DeadConnection* - Повідомлення про успішне видалення проєкту не доходить до користувача

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start
        : Відкриває блок з проєктами;

    |Користувач|
        : Натискає правою кнопкою миші на\n проєкт, що хоче видалити;

    |Користувач|
        : Обирає з випадаючого списку пункт "Видалити проєкт";
        
    |Система|
        : Перевіряє права користувача;
        note right #ffaaaa
        <b> Можливо
        <b> DeleteProject_EX_NotAllowed
        end note

    |Система|
        : Відкриває вікно, для підтвердження рішення;

    |Користувач|
        : Натискає кнопку "Так";
        
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
    |Система|
        : Закриває вікно, для підтвердження рішення;
        stop;

@enduml

</center>

*Мал. 8.* Сценарій використання - видалення проєкту

---

<br />

### **AddSection**

<br />

**ID:** AddSection

**Назва:** Додати новий розділ для завдань

**Учасники:** Тімлід, Система

**Передумови:** 
 1. Користувач увійшов у систему
 2. Користувачу призначена роль тімліда у обраному проєкті

**Результат:** Система додає новий розділ для завдань (як-от "Вхідні завдання", "На перевірці", "У роботі")

**Виключні ситуації:**

*AddSection_EX_MaxReached* - Користувач намагається додати новий розділ, коли проєкт досяг максимальної кількості розділів (10)

*AddSection_EX_WrongName* - Користувач задав невалідну назву розділу

*AddSection_EX_Canceled* - Користувач скасував створення нового розділу

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Тімлід|
        start
        : Відкриває блок завдань;

    |Тімлід|
        : Натискає кнопку "Додати новий розділ";
        note right #ffaaaa
        <b> Можливо
        <b> AddSection_EX_MaxReached
        end note

    |Система|
        : Відкриває вікно створення нового розділу;

    |Тімлід|
        : Вводить назву нового розділу;
        note right #ffaaaa
        <b> Можливо
        <b> AddSection_EX_Canceled
        end note

    |Тімлід|
        : Натискає на кнопку "Підтвердити";
        note right #ffaaaa
        <b> Можливо
        <b> AddSection_EX_WrongName
        end note

    |Система|
        : Сповіщає користувача про успішне створення нового розділу;

    |Тімлід|
        : Отримує сповіщення про успішне створення нового розділу;  

    |Система|
        : Відображає новий розділ з введеною користувачем назвою у блоці завдань; 
        stop; 

@enduml

</center>

*Мал. 9.* Сценарій використання - додання нового розділу до проєкту

---

<br />

### **DeleteSection**

<br />

**ID:** DeleteSection

**Назва:** Видалити обраний розділ для завдань

**Учасники:** Тімлід, Система

**Передумови:** 
1. Користувач увійшов у систему
2. Роль тімліда призначена користувачеві

**Результат:** Система видаляє один з розділів для завдань разом із усіма завданнями у ньому

**Виключні ситуації:**

*DeleteSection_EX_Canceled* - Користувач скасував видалення розділу

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Тімлід|
        start
        : Відкриває блок завдань;

    |Тімлід|
        : Натискає правою кнопкою миші на обраний розділ;

    |Тімлід|
        : Обирає із випадаючого списку пункт "Видалити розділ";

    |Система|
        : Відображає діалогове вікно з попередженням про наслідки дії;

    |Тімлід|
        : Натискає кнопку "Підтвердити";
        note right #ffaaaa
        <b> Можливо
        <b> DeleteSection_EX_Canceled
        end note

    |Система|
        : Сповіщає користувача про успішне видалення обраного розділу разом із усіма завданнями у ньому;

    |Тімлід|
        : Отримує сповіщення про успішне видалення обраного розділу;  

    |Система|
        : Більше не відображає видалений розділ у блоці завдань;
        stop;  

@enduml

</center>

*Мал. 10.* Сценарій використання - видалення розділу з проєкту

---

<br />

### **CreateTask**

<br />

**ID:** CreateTask

**Назва:** Створити завдання

**Учасники:** Тімлід, Система

**Передумови:**
1. Користувач увійшов у систему
2. Роль тімліда призначена користувачеві

**Результат:** Система додає нове завдання у відповідний розділ

**Виключні ситуації:**

*CreateTask_EX_Canceled* - Користувач скасував створення завдання

*CreateTask_EX_WrongName* - Користувач задав невалідну назву для завдання

*CreateTask_EX_MaxReached* - Користувач намагається створити нове завдання, коли розділ завдань досяг максимальної кількості завдань (255)

**Основний сценарій:**

<center style="
border-radius:4px;
border: 1px solid #cfd7e6;
box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
padding: 1em;"
>

@startuml

    |Користувач|
    start
    : Відкриває розділ з завданнями;

    |Користувач|
    : Натискає кнопку "Створити завдання"\n у блоці завдань;
    note right #ffaaaa
    <b> Можливо
    <b> CreateTask_EX_MaxReached
    end note
    
    |Система|
    : Відкриває вікно створення нового завдання;
    
    |Користувач|
    : Вводить назву та опис нового завдання;
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

*Мал. 11.* Сценарій використання - створення завдання

---

<br />

### **EditTask**

<br />

**ID:** EditTask

**Назва:** Редагувати завдання

**Учасники:** Користувач, Система

**Передумови:**
 1. Користувач увійшов у систему
 2. Роль тімліда призначена користувачеві

**Результат:** Система редагує завдання відповідно до правок, які вніс користувач

**Виключні ситуації:**

*EditTask_EX_NoChanges* - Користувач нічого не змінив у даних завдання

*EditTask_EX_Canceled* - Користувач скасував редагування завдання

*EditTask_EX_WrongName* - Користувач задав невалідну назву для завдання

*EditTask_EX_NoPermission* - Користувач не має прав, необхідних для редагування завдання

**Основний сценарій:**

<center style="
border-radius:4px;
border: 1px solid #cfd7e6;
box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
padding: 1em;"
>

@startuml    
    
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
    : Вводить нові дані - назву, опис;
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

*Мал. 12.* Сценарій використання - редагування існуючого завдання

---

<br />

### **RemoveTask**

<br />

**ID:** RemoveTask

**Назва:** Видалити завдання

**Учасники:** Користувач, Система

**Передумови:**
1. Користувач увійшов у систему
2. Роль тімліда призначена користувачеві

**Результат:** Система видаляє завдання

**Виключні ситуації:**

*RemoveTask_EX_Canceled* - Користувач скасував видалення завдання

*RemoveTask_EX_NoRights* - Користувач не має прав тімліда

**Основний сценарій:**

<center style="
border-radius:4px;
border: 1px solid #cfd7e6;
box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
padding: 1em;"
>

@startuml

    |Користувач|
    start
    : Відкриває розділ з завданнями;
    
    |Користувач|
    : Натискає правою клавішею миші на\n завдання, що хоче видалити;
    
    |Користувач|
    : Обирає з випадаючого списку пункт "Видалити завдання";
    
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
    : Перестає відображати завдання,\n яке видалила;
    stop;
    
@enduml

</center>

*Мал. 13.* Сценарій використання - видалення існуючого завдання

---

<br />

### **AcceptTask**

<br />

**ID:** AcceptTask

**Назва:** Прийняти завдання

**Учасники:** Розробник, система

**Передумови:**
1. Не зайняті завдання існують
2. Користувач авторизований
3. Користувач є розробником

**Результат:** Завдання закріплено за розробником

**Виключні ситуації:**

*AcceptTask_EX_NoTask* - Інший розробник встиг швидше прийняти завдання

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Розробник|
        start
        : Відкриває розділ з завданнями;
        
    |Система|
        : Відкриває вікно роботи із завданнями;
        
    |Розробник|
        : Обирає вільне завдання і натискає на кнопку "Прийняти";
        
    |Система|
        : Закріплює завдання за розробником;
        
    |Система|
        : Видаляє потрібне завдання із списку вільних завдань;
        note right #ffaaaa
        <b> Можливо
        <b> AcceptTask_EX_NoTask
        end note
        stop;

@enduml

</center>

*Мал. 14.* Сценарій використання - прийняття розробником завдання

---

<br />

### **RefuseTask**

<br />

**ID:** RefuseTask

**Назва:** Відмовитися від завдання

**Учасники:** Розробник, система

**Передумови:** 
1. Є завдання, закріплені за користувачем
2. Користувач авторизований
3. Користувач є розробником

**Результат:** Завдання відкріплено від розробника

**Виключні ситуації:**

*RefuseTask_EX_DeadConnection* - Повідомлення про те, що завдання було успішно відкріплено від розробника, не доходить до розробника

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Розробник|
        start
        : Відкриває розділ з завданнями;

    |Система|
        : Відкриває вікно роботи із завданнями;

    |Розробник|
        : Обирає закріплене за собою завдання і натискає на кнопку "Відмовитися";

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
        stop;

@enduml

</center>

*Мал. 15.* Сценарій використання - відхилення розробником завдання

---

<br />

### **AddMember**

<br />

**ID:** AddMember

**Назва:** Додати розробника до проєкту

**Учасники:** Користувач, Система

**Передумови:** 
1. Користувач увійшов в систему 
2. Користувач є тімлідом/замовником

**Результат:** Користувач є учасником проєкту

**Виключні ситуації:**

*AddMember_EX_NoRights* - Користувач не має прав тімліда/замовника

*AddMember_EX_InvalidData* - Користувач ввів неправильні дані

*AddMember_EX_DoNotExist* - Користувач не зареєстрований в системі

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start;
        :Відкриває блок проєктів;
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
        :Заповнює вводить логін або електронну адресу учасника;
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

*Мал. 16.* Сценарій використання - додання нового розробника до проєкту

---

<br />

### **ChangeRights**

<br />

**ID:** ChangeRights

**Назва:** Змінити права користувача

**Учасники:** Користувач, Система

**Передумови:** 
1. Користувач увійшов в систему
2. Користувач є замовником
3. Користувач є тімлідом

**Результат:** Користувач отримує статус

**Виключні ситуації:**

*ChangeRights_EX_NoRights* - Користувач не має прав тімліда

*ChangeRights_EX_SameStatus* - Обраний користувач вже має такий статус

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
    
    |Користувач|
        start;
        :Відкриває блок проєктів;
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

*Мал. 17.* Сценарій використання - зміна прав користувача

---

<br />

### **DeleteMember**

<br />

**ID:** DeleteMember

**Назва:** Видалити розробника з проєкту

**Учасники:** Користувач, Система

**Передумови:** 
1. Розробник є учасником проєкту
2. Користувач увійшов в систему 
3. Користувач є тімлідом

**Результат:** Розробник не є учасником проєкту

**Виключні ситуації:**

*DeleteMember_EX_NoRights* - Користувач не має прав тімліда

*DeleteMember_EX_Canceled* - Користувач скасував видалення

**Основний сценарій:**

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    |Користувач|
        start;    
        :Відкриває блок проєктів;
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

*Мал. 18.* Сценарій використання - видалення розробника з проєкту

---

<br />