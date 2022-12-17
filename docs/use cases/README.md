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
