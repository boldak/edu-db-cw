# Діаграми прецедентів

## Загальна схема

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

actor "Користувач" as User
actor "Редактор" as Editor
actor "Адміністратор" as Admin

usecase "Зареєструватись" as UC_1
usecase "Авторизуватись" as UC_2
usecase "Управління файлами\nданих" as UC_3 #2cf25a
usecase "Запит отримати права\nредактора" as UC_4
usecase "Пожертвувати кошти" as UC_5
usecase "Запит відредагувати \nдані" as UC_6
usecase "Управління системними \nданими" as UC_7 #2cf25a
usecase "Управління редакторами \nсистеми" as UC_8 #2cf25a
usecase "Затвердити зміни \nданих" as UC_9

User -l-> UC_1
User -r-> UC_2
User -u-> UC_4
User -u-> UC_3
User -u-> UC_5

note bottom of UC_4 #yellow

        Тільки користувач може 
        здійснити такий запит

    end note

Editor -u-|> User
Editor -l-> UC_6

note right of Editor #yellow
    
        Тільки редактор може 
        здійснити такий запит

    end note

Admin -u-|> Editor
Admin -l-> UC_7
Admin -r-> UC_8
Admin --> UC_9

@enduml

## Сценарії використання

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
    note left #ffaaaa
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

</center>
