# Діаграми прецедентів

### Загальна схема

<div style="
    text-align: center;    
    border-radius: 10px;
    border: 2px solid #ced3dd;
    padding: 1.2em;"
>

@startuml

actor "Загальний користувач" as GeneralUser
actor "Зареєстрований користувач" as AuthUser
actor "Редактор" as Editor
actor "Адміністратор" as Admin

usecase "Зареєструватись" as UserReg
usecase "Авторизуватись" as UserAuth
usecase "Взаємодія з даними \nсистеми" as DataInteract #2cf25a
usecase "Запит отримати права\nредактора" as ReqEditRights
usecase "Пожертвувати кошти" as Donate
usecase "Запит на редагування \nданих" as ReqEditData
usecase "Управління даними \nсистеми" as MngData #2cf25a
usecase "Управління редакторами \nсистеми" as MngEditors #2cf25a
usecase "Затвердити зміни \nданих редактора" as ApproveChanges

GeneralUser -u-> UserReg
GeneralUser -u-> UserAuth
GeneralUser -u-> Donate

AuthUser -u-|> GeneralUser

AuthUser -l-> ReqEditRights
AuthUser -r-> DataInteract

note top of ReqEditRights #yellow

        Тільки користувач може 
        здійснити такий запит

    end note

Editor -u-|> AuthUser
Editor -l-> ReqEditData

note right of Editor #yellow
    
        Тільки редактор може 
        здійснити такий запит

    end note

Admin -u-|> Editor
Admin -l-> MngData
Admin -r-> MngEditors
Admin --> ApproveChanges

@enduml

</div>

### Схема загального користувача

<div style="
    text-align: center;    
    border-radius: 10px;
    border: 2px solid #ced3dd;
    padding: 1.2em;"
>

@startuml

"Загальний користувач" as actor
usecase "Зареєструватись" as UserAuth
usecase "Авторизуватись" as UserReg
usecase "Пожертвувати кошти" as Donate

actor -d-> UserAuth
actor -d-> UserReg
actor -d-> Donate

@enduml

</div>

### Схема зареєстрованого користувача

<div style="
    text-align: center;    
    border-radius: 10px;
    border: 2px solid #ced3dd;
    padding: 1.2em;"
>

@startuml

"Зареєстрований користувач" as actor

usecase "Взаємодія з даними \nсистеми" as DataInteract #palegreen
usecase "Запит отримати права\nредактора" as ReqEditRights

usecase "Знайти набір даних" as SearchData
usecase "Візуалізувати дані(таблиця, тощо)" as VisualData
usecase "Завантажити файл даних" as DownloadData

actor -u-> DataInteract
actor -d-> ReqEditRights

SearchData .d.> DataInteract :extends
VisualData .d.> DataInteract :extends
DownloadData .d.> DataInteract :extends


@enduml

</div>

### Схема редактора

<div style="
    text-align: center;    
    border-radius: 10px;
    border: 2px solid #ced3dd;
    padding: 1.2em;"
>

@startuml

"Редактор" as actor

usecase "Запит на редагування \nданих" as ReqEditData

actor -d-> ReqEditData

@enduml

</div>

### Схема адміністратора

<div style="
    text-align: center;    
    border-radius: 10px;
    border: 2px solid #ced3dd;
    padding: 1.2em;"
>

@startuml

"Адміністратор" as actor

usecase "Управління даними\nсистеми" as MngData #2cf25a
usecase "Управління редакторами\nсистеми" as MngEditors #2cf25a
usecase "Затвердити зміни\nданих редактора" as ApproveChanges

usecase "Завантажити дані" as UploadData
usecase "Видалити дані" as RemoveData

usecase "Затвердити кандидатуру\nредактора" as GrantEdPermit
usecase "Зняти права\nредактора з користувача" as RemoveEdPermit


actor -u-> MngData
actor -l-> ApproveChanges
actor -d-> MngEditors

UploadData .d.> MngData :extends
RemoveData .d.> MngData :extends

GrantEdPermit .u.> MngEditors :extends
RemoveEdPermit .u.> MngEditors :extends

@enduml

</div>

## Сценарії використання

### Сценарій створення облікового запису
<table>
 <tr>
   <th>ID:</th>
   <td>CreateAccount</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Створити обліковий запис</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Користувач, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Користувач не зареєстрований в системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Новий обліковий запис</td>
 </tr>
 
 <tr>
  <th rowspan="2">ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td> CreateAccount_EX_AccountExists  Існує обліковий запис</td>
 </tr>

 <tr>
   <td> CreateAccount_EX_EmptyInputFields  Пусті поля вводу</td>
 </tr>
 </table>

@startuml

|Користувач|

    start
    
    :починає взаємодію;

    :натискає на кнопку 
    "Зареєструватися";

    :вводить реєстраційні дані;

    :натискає на кнопку 
    "Зареєструватися";
    note #ffaaaa
    <b> Можлива
    <b> CreateAccount_EX_EmptyInputFields
    end note
    
|Система|

    :перевіряє наявність 
    облікового запису користувача;
    note right #ffaaaa
    <b> Можлива
    <b> CreateAccount_EX_AccountExists
    end note

    :створює новий обліковий запис;
    
|Користувач|

    :закінчує взаємодію;

    stop;
    
@enduml

### Сценарій авторизування користувача

 <table>
 <tr>
   <th>ID:</th>
   <td>UserAuthorization</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Авторизувати користувача</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Користувач, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Користувач зареєстрований в системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Вхід у систему</td>
 </tr>

 <tr>
  <th rowspan="3">ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td> UserAuthorization_EX_IncorrectData  Невірно введені дані</td>
 </tr>
 
 <tr>
   <td> UserAuthorization_EX_NotRegistered  Не зареєстрований</td>
 </tr>

 <tr>
   <td> UserAuthorization_EX_EmptyInputFields  Пусті поля вводу</td>
 </tr>
</table>

@startuml

|Користувач|

    start
    
    :починає взаємодію;

    :натискає на кнопку "Увійти";

    :вводить авторизаційні дані;

    :натискає на кнопку "Увійти";
    note left #ffaaaa
    <b> Можлива
    <b> UserAuthorization_EX_EmptyInputFields
    end note
    
|Система|

    :перевіряє наявність 
    облікового запису користувача;
    note right #ffaaaa
    <b> Можлива
    <b> UserAuthorization_EX_NotRegistered
    end note

    :перевіряє авторизаційні дані;
    note right #ffaaaa
    <b> Можлива
    <b> UserAuthorization_EX_IncorrectData
    end note

    :надає доступ користувачу 
    до облікового запису;
    
|Користувач|

    :закінчує взаємодію;

    stop;
    
@enduml
        
### Сценарій пошуку наборів даних

<table>
 <tr>
   <th>ID:</th>
   <td>SearchDataset</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Знайти набір даних</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Користувач, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Користувач авторизований в системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Шуканий набір даних</td>
 </tr>

 <tr>
  <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td> SearchDataset_EX_DatasetDoesntExist  Шуканого набору даних не існує</td>
 </tr>
</table>

@startuml

|Користувач|

    start
    
    :починає взаємодію;

    :вводить в пошукове поле запит;

    :обирає потрібні фільтри;

    :натискає на кнопку "Пошук";
    
|Система|

    :відображає список 
    шуканих даних;
    note right #ffaaaa
    <b> Можлива
    <b> SearchDataset_EX_DatasetDoesntExist
    end note

|Користувач|

    :натискає на потрібний 
    набір даних;

|Система|

    :відкриває шукані дані;

|Користувач|

    :закінчує взаємодію;

    stop;
    
@enduml
        
### Сценарій віртуалізації наборів даних

<table>
 <tr>
   <th>ID:</th>
   <td>VisualizationDataset</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Візуалізувати набір даних таблицею, графіком</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Користувач, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Користувач авторизований в системі, набір даних є в системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Графік чи таблиця даних</td>
 </tr>

 <tr>
  <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td> VisualizationDataset_EX_VisualizationImpossible  Візуалізація неможлива</td>
 </tr>
</table>

@startuml

|Користувач|

    start
    
    :починає взаємодію;

    :натискає на кнопку 
    "Візуалізація даних";

|Система|

    :відображає список можливих 
    форматів даних (таблиця, графік);

|Користувач|

    :обирає потрібний формат;

|Система|

    :надає потрібний графік
    чи таблицю даних;
    note right #ffaaaa
    <b> Можлива
    <b> VisualizationDataset_EX_VisualizationImpossible
    end note

|Користувач|

    :закінчує взаємодію;

    stop;
    
@enduml
        
### Сценарій завантаження файлів

<table>
 <tr>
   <th>ID:</th>
   <td>DownloadFile</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Завантажити файл набору даних</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Користувач, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Користувач авторизований в системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Завантажений файл набору даних</td>
 </tr>

 <tr>
  <th rowspan="2">ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td> DownloadFIle_EX_CancelSaveFile  Користувач відмінив збереження файлу</td>
 </tr>

 <tr>
   <td> DownloadFIle_EX_NotEnoughMemory  Недостатньо вільної пам'яті</td>
 </tr>
 </table>
 
 @startuml
 
|Користувач|

    start
    
    :починає взаємодію;

    :натискає на кнопку 
    "Зберегти файл";

|Система|

    :запитує підтвердження 
    на збереження файлу;

|Користувач|

    :підтверджує збереження;
    note left #ffaaaa
    <b> Можлива
    <b> DownloadFIle_EX_CancelSaveFile
    end note


|Система|

    :завантажує файл;
    note right #ffaaaa
    <b> Можлива
    <b> DownloadFIle_EX_NotEnoughMemory
    end note

|Користувач|

    :закінчує взаємодію;

    stop;
    
@enduml

### Сценарій створення запиту на отримання прав редактора
<table>
<tr>
   <th>ID:</th>
   <td>RequestEditorsRights</td>
 </tr>
<tr>
  <th>НАЗВА:</th>
  <td>Створити запит на отримання прав редактора</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Користувач, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Користувач авторизований в системі, користувач не має прав редактора</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Запит на отримання прав редактора</td>
 </tr>

 <tr>
  <th rowspan="2">ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td> RequestEditorsRights_EX_CancelRequest  Користувач відмінив запит</td>
 </tr>

 <tr>
   <td> RequestEditorsRights_EX_HAsAlreadyBeenSent  Запит вже був відправлений</td>
 </tr>
</table>

@startuml

|Користувач|

    start
    
    :починає взаємодію;

    :натискає на кнопку 
    "Стати редактором";

|Система|

    :відкриває форму 
    для заповнення запиту;

|Користувач|

    :заповнює анкету;
    :натискає на кнопку 
    "Відправити запит";


|Система|

    :запитує підтвердження
    на відправку анкети;
|Користувач|

    :підтверджує відправку;
    note left #ffaaaa
    <b> Можлива
    <b> RequestEditorsRights_EX_CancelRequest
    end note

|Система|

    :відправляє запит;
    note right #ffaaaa
    <b> Можлива
    <b> RequestEditorsRights_EX_HAsAlreadyBeenSent
    end note
    :завантажує файл;

|Користувач|

    :закінчує взаємодію;

    stop;

@enduml

### Сценарій пожертвування коштів на покращення роботи застосунку


<table>
 <tr>
   <th>ID:</th>
   <td>DonateSystem</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Пожертвувати кошти на покращення роботи застосунку</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Користувач, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>-</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Переведені кошти на рахунок розробників</td>
 </tr>

 <tr>
  <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td>DonateSystem_EX_DonateSystemError Помилка транзакції</td>
 </tr>
</table>

@startuml

|Користувач|

    start
    
    :починає взаємодію;

    :натискає на кнопку
    "Donate system"";

|Система|

    :відкриває форму;

|Користувач|

    :заповнює інформаційні
    дані;
    :Користувач натискає
    на кнопку "Donate";


|Система|

    :Система переводить кошти
    на рахунок розробників;
    note right #ffaaaa
    <b> Можлива
    <b> DonateSystem_EX_DonateSystemError
    end note

|Користувач|

    :закінчує взаємодію;
    stop;

@enduml


### Сценарій завантаження набору данних


<table>
 <tr>
   <th>ID:</th>
   <td>UploadDataset</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Завантажити набір даних</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Адміністратор, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Адміністратор авторизований у системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Завантажений набір даних на сервер</td>
 </tr>

 <tr>
  <th rowspan="2">ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td> UploadDataset_EX_DatasetExists  Набір даних вже існує </td>
 </tr>

 <tr>
   <td> UploadDataset_EX_DatasetCancelled  Адміністратор скасував завантаження</td>
 </tr>
</table>

@startuml

|Адміністратор|

    start
    
    :починає взаємодію;

    :натискає на кнопку 
    "Завантажити дані";
    :вибирає потрібні дані;

|Система|

    :запитує підтвердження
    на завантаження даних;

|Адміністратор|

    :підтверджує завантаження;
    note left #ffaaaa
    <b> Можлива
    <b> UploadDataset_EX_DatasetCancelled
    end note


|Система|

    :створює набір даних;
    note right #ffaaaa
    <b> Можлива
    <b> UploadDataset_EX_DatasetExists
    end note

|Адміністратор|

    :закінчує взаємодію;

@enduml

### Сценарій видалення набору данних


<table>
 <tr>
   <th>ID:</th>
   <td>RemoveDataset</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Видалити набір даних</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Адміністратор, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Адміністратор авторизований у системі, набір даних існує</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Видалений набір даних</td>
 </tr>

 <tr>
  <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td>RemoveDataset_EX_DatasetCancelled  Адміністратор скасував видалення</td>
 </tr>
</table>

@startuml

|Адміністратор|

    start
    
    :починає взаємодію;

    :виконує пошук 
    набору даних;

|Система|

    :відображає список даних;

|Адміністратор|

    :вибирає потрібні 
    дані;
    :натискає на кнопку
    "Видалити дані";

|Система|

    :запитує підтвердження
    на видалення даних;

|Адміністратор|

    :Адміністратор підтверджує
    видалення;
    note left #ffaaaa
    <b> Можлива
    <b> RemoveDataset_EX_DatasetCancelled
    end note


|Система|

    :видаляє дані;

|Адміністратор|

    :закінчує взаємодію;

@enduml

### Сценарій затвердження змін в наборі даних

<table>
 <tr>
   <th>ID:</th>
   <td>ApprovalDatasetChanges</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Затвердити зміни в наборі даних</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Адміністратор, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Адміністратор авторизований у системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Затверджені зміни в наборі даних</td>
 </tr>

 <tr>
  <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td>ApprovalDatasetChanges_EX_DatasetCancelled  Адміністратор відхилив зміни в наборі даних</td>
 </tr>
</table>

@startuml

|Адміністратор|

    start
    
    :починає взаємодію;

    :натискає на кнопку "Список редакторів";

|Система|

    :відображує список редакторів;

|Адміністратор|

    :натискає на потрібного редактора;

|Система|

    :відображує історію змін редактора;

|Адміністратор|

    :натискає на кнопку "Запит на зміни";

|Система|

    :відображує внесені зміни редактором;


|Адміністратор|

    :переглядає зміни;
    :натискає на кнопку "Затвердити";

|Система|

    :запитує підтвердження 
         на зміну даних;

|Адміністратор|

    :підтверджує зміни;

    note left #ffaaaa
    <b> Можлива
    <b> ApprovalDatasetChanges_EX_DatasetCancelled
    end note


|Система|

    :змінює дані;

|Адміністратор|

    :закінчує взаємодію;

@enduml

### Сценарій затвердження кандидатури редактора

<table>
 <tr>
   <th>ID:</th>
   <td>GrantEditorPermission</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Затвердити кандидатуру редактора</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Адміністратор, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Адміністратор авторизований у системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Видано або відхилено право редактора</td>
 </tr>

 <tr>
  <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td>GrantEditorPermission_EX_PermissionRejected Відхилений запит на права редактора</td>
 </tr>
</table>

@startuml

|Адміністратор|

    start
    
    :починає взаємодію;

    :натискає на кнопку 
    "Запит на редагування";

|Система|

    :відображує інформаційний лист відправника;

|Адміністратор|

    :читає зміст;
    :затверджує отримання прав редактора;

    note left #ffaaaa
    <b> Можлива
    <b> GrantEditorPermission_EX_PermissionRejected
    end note


|Система|

    :видає права редактора користувачеві;

|Адміністратор|

    :закінчує взаємодію;

@enduml

### Сценарій зняття прав редактора

<table>
 <tr>
   <th>ID:</th>
   <td>RemoveEditorPermission</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Зняти права редактора з користувача</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Адміністратор, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Адміністратор авторизований у системі</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Видалено право редактора</td>
 </tr>

 <tr>
  <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td>RemoveEditorPermission_EX_RemoveCancelled  Адміністратор відхилив видалення прав</td>
 </tr>
</table>

@startuml

|Адміністратор|

    start
    
    :починає взаємодію;

    :натискає на кнопку "Список редакторів";

|Система|

    :відображує список редакторів;

|Адміністратор|

    :натискає на потрібного редактора;

|Система|

    :відображує внесені зміни редактором;

|Адміністратор|

    :натискає на кнопку "Видалити редактора";

|Система|

    :запитує підтвердження на видалення прав редактора;

|Адміністратор|

    :підтверджує видалення прав;

    note left #ffaaaa
    <b> Можлива
    <b> RemoveEditorPermission_EX_RemoveCancelled
    end note


|Система|

    :видаляє права редактора;

|Адміністратор|

    :закінчує взаємодію;

@enduml

### Сценарій створення запиту на редагування даних

<table>
 <tr>
   <th>ID:</th>
   <td>RequestEditDataset</td>
 </tr>

 <tr>
  <th>НАЗВА:</th>
  <td>Створити запит на редагування набору даних</td>
 </tr>

 <tr>
  <th>УЧАСНИКИ:</th>
  <td>Редактор, Система</td>
 </tr>

 <tr>
  <th>ПЕРЕДУМОВИ:</th>
  <td>Редактор авторизований у системі, набір даних існує</td>
 </tr>

 <tr>
  <th>РЕЗУЛЬТАТ:</th>
  <td>Запит на редагування набору даних</td>
 </tr>

 <tr>
  <th>ВИКЛЮЧНІ СИТУАЦІЇ:</th>
  <td>RequestEditDataset_EX_DatasetCancelled  Редактор скасував зміни</td>
 </tr>
</table>

@startuml

|Редактор|

    start
    
    :починає взаємодію;

    :виконує пошук набору даних;

|Система|

    :відображує список даних;

|Редактор|

    :натискає на потрібний набір даних;

    :натискає на кнопку "Редагувати дані";

|Система|

    :відкриває форму редагування;

|Редактор|

    :вносить зміни;

    :підтверджує зміни;

    note left #ffaaaa
    <b> Можлива
    <b> EditDataSet_EX_DataSetCancelled
    end note


|Система|

    :відправляє запит на перевірку;

|Редактор|

    :закінчує взаємодію;

@enduml
