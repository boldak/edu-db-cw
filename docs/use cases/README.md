# Діаграма прецедентів

@startuml

actor "Administrator" as Administrator
actor "Editor" as Editor
actor "User" as User

usecase "<b>ADM_1</b>\nКерувати текстовими файлами" as ADM_1
usecase "<b>ADM_2</b>\nКерувати редакторами\n та редагуванням" as ADM_2

Administrator -r-> ADM_2
Administrator -r-> ADM_1

usecase "<b>EDITOR_1</b>\nСтворювати та редагувати\n розмітку даних" as EDITOR_1

Editor -r-> EDITOR_1

usecase "<b>USER_1</b>\nРеєструватися та авторизуватися\n в системі" as USER_1
usecase "<b>USER_2</b>\nШукати, переглядати\n та завантажувати файли з сервера" as USER_2
usecase "<b>USER_3</b>\nПодавати запит на\n права редактора" as USER_3

User -r-> USER_3
User -r-> USER_2
User -r-> USER_1


Administrator -d-|> Editor
Editor -d-|> User

@enduml

## Схеми використання для користувача

@startuml

actor "User" as User

usecase "<b>USER_1</b>\nРеєструватися та\n авторизуватися у системі" as USER_1 #91FF5B
usecase "<b>USER_2</b>\nШукати, переглядати\n та завантажувати файли з сервера" as USER_2 #91FF5B
usecase "<b>USER_3</b>\nПодавати запит на\n право редагування" as USER_3 #91FF5B

User -l-> USER_1
User -r-> USER_2
User -d-> USER_3

usecase "<b>USER.REG</b>\nРеєстрація в системі" as USER.REG
usecase "<b>USER.LOG</b>\nАвторизація користувача\n в системі" as USER.LOG

USER.REG ..> USER_1 :extends
USER.LOG ..> USER_1 :extends

usecase "<b>USER.D_SRCH</b>\nЗапит на пошук даних" as USER.D_SRCH

USER.D_SRCH ..> USER_2 :extends

usecase "<b>USER.EDIT_RQST</b>\nЗапит на право\n редагування" as USER.EDIT_RQST

USER.EDIT_RQST ..> USER_3 :extends

@enduml

## Сценарії використання для користувача


- ID: USER.REG

@startuml

left header
  <font color=000 size=18><b>ID:</b> USER.REG
  <font color=000 size=16><b>НАЗВА:</b> Реєстрація в системі
  <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
  <font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Користувач не зареєстрований у системі
  <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Новий обліковий запис
  <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> Відхилення запиту на реєстрацію (USER.REG_DENY)
  <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

|Користувач|
    start
    :Вводить реєстраційні дані;



|Система|
    :Перевіряє передані реєстраційні данія;
note right #ffaaaa
    <b>Можлива</b>
    <b>USER.REG_DENY</b>
    end note



    :Cтворює новий обліковий запис, використовуючи введені дані;

    :Надає користувачу інформацію про створення облікового запису;
|Користувач|           
    :Завершує взаємодію з системою;

    stop;
@enduml
- ID: USER.LOG

@startuml

left header
  <font color=000 size=18><b>ID:</b> USER.LOG
  <font color=000 size=16><b>НАЗВА:</b> Авторизація користувача в системі
  <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
  <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>  1. Користувач не зареєстрований у системі 
  <font color=000 size=16>2. Користувач не зареєстрований у системі
  <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Авторизація в системі
  <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> Такого користуавача не існує (USER.LOG_DENY)
  <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

|Користувач|
    start
    :Вводить авторизаційні дані;



|Система|
    : Ідентифікує користувача;
note right #ffaaaa
    <b>Можлива</b>
    <b>USER.LOG_DENYY</b>
    end note



    :Авторизує користувача;

    :Надає користувачу авторизацію у системі;
|Користувач|           
    :Завершує взаємодію з системою;

    stop;
@enduml

- USER.D_SRCH

@startuml

left header
  <font color=000 size=18><b>ID:</b> USER.D_SRCH
  <font color=000 size=16><b>НАЗВА:</b> Користувач надає запит на знаходження тексту
  <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система
  <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>  Користувач авторизований в системі
  <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Дані знайдено і виведено на екран користувача
  <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> Відхилення запиту користувача на пошук даних (RQS.DENY)
  <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

|Користувач|
    start
    :Відправляє запит на пошук;



|Система|
    : Виводить форму для заповнення користувачем;






    :Надає користувачу авторизацію у системі;
|Користувач|           
    :Користувач заповнює форму;

|Система|
    : Проводить пошук по базам даних заданих ресурсів;
note right #ffaaaa
    <b>Можлива</b>
    <b>RQS.DENY</b>
    end note

|Система|
    : Виводить результат на екран користувача;
    stop;
@enduml

- USER.EDIT_RQST

@startuml

left header
  <font color=000 size=18><b>ID:</b> USER.EDIT_RQST
  <font color=000 size=16><b>НАЗВА:</b> Користувач надає запит на право редагування тексту
  <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Система, Адміністратор
  <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>  Користувач авторизований в системі
  <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Користувач отримав права редактора
  <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> 1. Адміністратор відхилив запит (ADM.RQS.DENY)
<font color=000 size=16>2. Максимальна кількість редакторів досягнута (MAX.EDIT.REACHED)
  <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

|Користувач|
    start
    :Відправляє запит на редагування;



|Система|
    : Передає запит адміністратору;


|Адміністратор|
    : Приймає або відхиляє запит;

    note right #ffaaaa
    <b>Можлива</b>
    <b>ADM.RQS.DENY</b>
    <b>MAX.EDIT.REACHED</b>
    end note



    stop;
@enduml

## Сценарії використання для редактора 


- EDITOR.TXT_ANNOTATION_CHNG

@startuml

left header
  <font color=000 size=18><b>ID:</b> EDITOR.TXT_ANNOTATION_CHNG
  <font color=000 size=16><b>НАЗВА:</b> Редагування розмітки
  <font color=000 size=16><b>УЧАСНИКИ:</b> Користувач, Адміністратор, Система
  <font color=000 size=16><b>ПЕРЕДУМОВИ:</b>  	Користувач отримав право редагуванняі
  <font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Запит на змінення розмітки файлу до адміністратора
  <font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> Відхилення запиту користувача на пошук даних (RQS.DENY)
  <font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

|Користувач + Система|
    start
    :Користувач робить розмітку тексту в редакторі;





|Користувач|
    : Відправляє адміністратору запит на затвердження змін;

    note right #ffaaaa
    <b>Можлива</b>
    <b>ADM.RQS.DENY</b>
    end note



    stop;
@enduml

- ADM.FILE_UPLOAD

@startuml

left header
<font color=000 size=18><b>ID:</b> ADM.FILE_UPLOAD
<font color=000 size=16><b>НАЗВА:</b> Завантажити текстовий файл в систему
<font color=000 size=16><b>УЧАСНИКИ:</b> Адміністратор, Система
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Адміністратор Авторизувався в системі
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Файл завантажено у систему
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> Відхилення запиту адміністратора на завантаження файлу (RQS.FILE_UPLOAD_DENY)
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

<style>
    note {
        BackgroundColor #FF6138
    }
</style>


|#FF4F00|Адміністратор|
start
:Адміністратор обирає файл для завантаження;
|#FFA500|Адміністратор + Система|
:Адміністратор надсилає запит системі на завантаження файлу;
note right #ffaaaa
<b>Можлива</b>
<b>RQS.FILE_UPLOAD_DENY</b>
end note
|Адміністратор|
:Отримує доступ на завантаження файлу;
stop
@enduml

- ADM.ADD_EDITOR

@startuml

left header
<font color=000 size=18><b>ID:</b> ADM.ADD_EDITOR
<font color=000 size=16><b>НАЗВА:</b> Додати редактора файлу
<font color=000 size=16><b>УЧАСНИКИ:</b> Адміністратор, Система, Користувач
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b>  Адміністратор отримав запит на редагування
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Нового редактора додано
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> Максимальна кількість редакторів досягнута (MAX.EDIT.REACHED)
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

<style>
    note {
        BackgroundColor #FF6138
    }
</style>


|#FF4F00|Користувач|
start
:Надсилає запит на право редагування;
|#FFA500|Система|
:Передає запит адміністратору;
|#FF7518|Адміністратор|
:Переглядає запит на редагування;
:Приймає або відхиляє запит;
|Система|
:Отримує результат;
note right #ffaaaa
<b>Можлива</b>
<b>MAX.EDIT.REACHED</b>
end note
:Надає право на редагування;
|Користувач|
:Отримує доступ на редагування;
stop
@enduml

- ADM.DELETE_EDITOR

@startuml

left header
<font color=000 size=18><b>ID:</b> ADM.DELETE_EDITOR
<font color=000 size=16><b>НАЗВА:</b> Прибрати редактора файлу
<font color=000 size=16><b>УЧАСНИКИ:</b> ААдміністратор, Система, Редактор
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b> У файла є редактор
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Редактор вилучено
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> -
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

|#FF4F00|Адміністратор|
start
:Адміністратор обирає редактора;
|#FFA500|Адміністратор|
:Адміністратор надсилає запит на видалення редактора;
|#FF7518|Система|
:Система видаляє редактора;
|Система|
:Система надсилає редактору повідомлення про його видалення;
|#FFA500|Редактор|
:Отримує повідомлення про видалення;
stop
@enduml

- ADM.DELETE_EDITOR

@startuml

left header
<font color=000 size=18><b>ID:</b> ADM.DELETE_EDITOR
<font color=000 size=16><b>НАЗВА:</b> Прибрати редактора файлу
<font color=000 size=16><b>УЧАСНИКИ:</b> ААдміністратор, Система, Редактор
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b> У файла є редактор
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Редактор вилучено
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> -
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

<style>
    note {
        BackgroundColor #FF6138
    }
</style>

|#FF4F00|Адміністратор|
start
:Адміністратор обирає редактора;
|#FFA500|Адміністратор|
:Адміністратор надсилає запит на видалення редактора;
|#FF7518|Система|
:Система видаляє редактора;
|Система|
:Система надсилає редактору повідомлення про його видалення;
|#FFA500|Редактор|
:Отримує повідомлення про видалення;
stop
@enduml

- ADM.FILE_DELETE

@startuml

left header
<font color=000 size=18><b>ID:</b> ADM.FILE_DELETE
<font color=000 size=16><b>НАЗВА:</b> Видалити текстовий файл з системи
<font color=000 size=16><b>УЧАСНИКИ:</b> Адміністратор, Система
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Адміністратор Авторизувався в системі
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Файл видалено
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> Файл не існує (RQS.FILE_NOT_EXIST)
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header

<style>
    note {
        BackgroundColor #FF6138
    }
</style>


|#FF4F00|Адміністратор|
start
:Адміністратор обирає файл для видалення;
|#FFA500|Адміністратор + Система|
:Адміністратор надсилає запит системі на видалення файлу;
note right #ffaaaa
<b>Можлива</b>
<b>RQS.FILE_NOT_EXIST</b>
end note
|Адміністратор|
:Отримує доступ на видалення файлу;
stop
@enduml

<style>
    note {
        BackgroundColor #FF6138
    }
</style>

left header
<font color=000 size=18><b>ID:</b> ADM.ADMT_TXT_ANNOTATION_CHNG
<font color=000 size=16><b>НАЗВА:</b> Змінити розмітку даних
<font color=000 size=16><b>УЧАСНИКИ:</b> Адміністратор, Редактор, Система
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Редактор відправляє адміністратору запит на затвердження змін розмітки даних
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Приймаються зміни до розмітки даних
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> -
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header


|#FF4F00|Редактор|
start
:Надсилає запит на зміну розмітки даних;
|#FFA500|Система|
:Передає запит адміністратору;
|#FF7518|Адміністратор|
:Переглядає запит;
:Приймає або відхиляє зміни розмітки даних;
|Система|
:Отримує результат;
:Змінює розмітку даних;
|Редактор|
:Отримує результат;
stop

<style>
    note {
        BackgroundColor #FF6138
    }
</style>

left header
<font color=000 size=18><b>ID:</b> ADM.VIEW_HISTORY
<font color=000 size=16><b>НАЗВА:</b> Переглянути історію змін файлу
<font color=000 size=16><b>УЧАСНИКИ:</b> Адміністратор, Система
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Адміністратор Авторизувався в системі
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Система надала адміністратору доступ до історії змін
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> -
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header


|#FFA500|Адміністратор|
start
:Надсилає запит на перегляд історії змін;
|#FF4F00|Система|
:Виводить історію змін файлу;
|Адміністратор|
:Отримує доступ до історії змін;
stop

<style>
    note {
        BackgroundColor #FF6138
    }
</style>

left header
<font color=000 size=18><b>ID:</b> ADM.VIEW_BRANCH
<font color=000 size=16><b>НАЗВА:</b> Переглянути гілку змін файлу
<font color=000 size=16><b>УЧАСНИКИ:</b> Адміністратор, Система
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Адміністратор Авторизувався в системі
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Система надала адміністратору доступ до історії змін певного редактора
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> -
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header


|#FFA500|Адміністратор|
start
:Обирає редактора;
:Надсилає запит на перегляд гілки змін обраного редактора;
|#FF4F00|Система|
:Виводить гілку змін файлу;
|Адміністратор|
:Переглядає гілку змін файлу;
stop

@startuml
<style>
    note {
        BackgroundColor #FF6138
    }
</style>

left header
<font color=000 size=18><b>ID:</b> ADM.ADMT_TXT_ANNOTATION_FINAL
<font color=000 size=16><b>НАЗВА:</b> Завершити розмітку даних
<font color=000 size=16><b>УЧАСНИКИ:</b> Адміністратор, Система
<font color=000 size=16><b>ПЕРЕДУМОВИ:</b> Файл повністю анотовано
<font color=000 size=16><b>РЕЗУЛЬТАТ:</b> Анотований файл готовий до завантаження
<font color=000 size=16><b>ВИКЛЮЧНІ СИТУАЦІЇ:</b> -
<font color=000 size=16><b>ОСНОВНИЙ СЦЕНАРІЙ:</b>

end header


|#FFA500|Адміністратор|
start
:Відправляє запит на завершення редагування;
|#FF4F00|Система|
:Формує вихідний файл;
|Адміністратор|
:Завершує редагування;
stop
@enduml
