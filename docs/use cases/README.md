# Модель прецедентів

## Загальна схема

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

**Тут може бути ваша діаграма**

</center>

## Звичайний користувач

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
actor "Користувач" as User

usecase "<b>AccountManage</b>\nКерувати обліковим записом" as AccountManage
usecase "<b>TaskManage</b>\nКерувати задачами" as TaskManage
usecase "<b>WriteToSupport</b>\nНаписати в підтримку" as WriteToSupport

User -l-> AccountManage
User -r-> TaskManage
User -d-> WriteToSupport

usecase "<b>SignUpAccount</b>\nСтворити обліковий запис" as SignUpAccount
usecase "<b>LogIntoAccount</b>\nУвійти в обліковий запис" as LogIntoAccount
usecase "<b>EditAccount</b>\nРедагувати обліковий запис" as EditAccount
usecase "<b>DeleteAccount</b>\nВидалити обліковий запис" as DeleteAccount

SignUpAccount ..d.> AccountManage :extends
LogIntoAccount ..r.> AccountManage :extends
EditAccount ..u.> AccountManage :extends
DeleteAccount ..u.> AccountManage :extends

usecase "<b>CreateTask</b>\nСтворити задачу" as CreateTask
usecase "<b>EditTask</b>\nРедагувати задачу" as EditTask
usecase "<b>SetTaskDeadlineNotifications</b>\nВстановити отримку сповіщень" as SetTaskDeadlineNotifications
usecase "<b>DeleteTask</b>\nВидалити задачу" as DeleteTask

CreateTask ..d.> TaskManage :extends
EditTask ..l.> TaskManage :extends
SetTaskDeadlineNotifications ..u.> TaskManage :extends
DeleteTask ..u.> TaskManage :extends

@enduml

</center>

## Менеджер

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
  actor "Менеджер" as Manager

  usecase "<b>ProjectManage</b>\nКерувати проєктом" as ProjectManage
  usecase "<b>CreateProject</b>\nСтворити проєкт" as CreateProject
  usecase "<b>EditPoject</b>\nРедагувати проєкт" as EditPoject
  usecase "<b>DeleteProject</b>\nВидаляти проєкт" as DeleteProject

  usecase "<b>TeamManage</b>\nКерувати командою" as TeamManage
  usecase "<b>AddUserToProject</b>\nДодати користувача\nдо проєкту" as AddUserToProject
  usecase "<b>RemoveUserFromProject</b>\nВидалити користувача\nз проєкту" as RemoveUserFromProject

  usecase "<b>BoardManage</b>\nКерувати дошкою" as BoardManage
  usecase "<b>CreateBoard</b>\nСтворити дошку" as CreateBoard
  usecase "<b>EditBoard</b>\nРедагувати дошку" as EditBoard
  usecase "<b>DeleteBoard</b>\nВидаляти дошку" as DeleteBoard

  usecase "<b>ProjectTemplateManage</b>\nКерувати шаблоном\nпроєкту" as ProjectTemplateManage
  usecase "<b>CreateProjectTemplate</b>\nСтворити шаблон проєкту" as CreateProjectTemplate
  usecase "<b>ApplyTemplateToProject</b>\nЗастосувати шаблон\nдо проєкту" as ApplyTemplateToProject
  usecase "<b>DeleteProjectTemplate</b>\nВидалити шаблон проєкту" as DeleteProjectTemplate

  usecase "<b>ProjectWorkflowMonitor</b>\nВідстежувати робочий\nпроцес проєкту" as ProjectWorkflowMonitor
  usecase "<b>DevToolsManage</b>\nКерувати інструментами\nрозробника" as DevToolsManage

  Manager -l-> ProjectManage
  Manager -d-> TeamManage
  Manager -u-> DevToolsManage
  Manager -u-> ProjectWorkflowMonitor
  Manager -r-> ProjectTemplateManage
  Manager -d-> BoardManage

  CreateProject ..u.> ProjectManage :extends
  EditPoject .r.> ProjectManage :extends
  DeleteProject ..d.> ProjectManage :extends

  AddUserToProject ..u.> TeamManage :extends
  RemoveUserFromProject ..u.> TeamManage :extends

  CreateProjectTemplate ..d.> ProjectTemplateManage :extends
  ApplyTemplateToProject ..u.> ProjectTemplateManage :extends
  DeleteProjectTemplate .l.> ProjectTemplateManage :extends

  CreateBoard ..u.> BoardManage :extends
  EditBoard ..u.> BoardManage :extends
  DeleteBoard ..u.> BoardManage :extends
@enduml

</center>

## Адміністратор

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

**Тут може бути ваша діаграма**

</center>

## Сценарії використання

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>SignUpAccount</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Створити обліковий запис</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
        - Користувач не зареєстрований<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Новий обліковий запис</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - SignUpAccount_InvalidData_EXC - користувач ввів некоректні дані<br/>
        - SignUpAccount_AlreadyExists_EXC - користувач ввів дані про обліковий запис, який вже існує<br/>
        - SignUpAccount_CancelButton_EXC - користувач натиснув кнопку "Відміна"<br/>
        </td>
    </tr>
</table>

@startuml

|Користувач|
start;
:Натискає кнопку\n"Зареєструватися";

|Система|
:Відкриває форму\nдля реєстрації;

|Користувач|
:Заповнює поля для реєстрації:\nвказує логін, телефон, пошту, пароль;
:Натискає кнопку "Створити"
<font color="red"><b>SignUpAccount_CancelButton_EXC;

|Система|
:Перевіряє введені дані на валідність
<font color="red"><b>SignUpAccount_InvalidData_EXC;

:Перевіряє обліковий запис на унікальність
<font color="red"><b>SignUpAccount_AlreadyExists_EXC;

:Cтворює новий обліковий запис;

|Користувач|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>LogIntoAccount</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Увійти в обліковий запис</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
        - Користувач зареєстрований<br/>
        - Користувач не авторизований<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Авторизація у системі</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - LogIntoAccount_UnknownAccount_EXC - користувач ввів дані про неіснуючий обліковий запис<br/>
        - LogIntoAccount_WrongPassword_EXC - користувач ввів неправильний пароль<br/>
        - LogIntoAccount_CancelButton_EXC - користувач натиснув кнопку "Відміна"<br/>
        </td>
    </tr>
</table>

@startuml

|Користувач|
start;
:Натискає кнопку\n"Увійти в обліковий запис";

|Система|
:Відкриває форму\nдля авторизації;

|Користувач|
:Заповнює поля для авторизації:
вводить логін та пароль
<font color="red"><b>LogIntoAccount_CancelButton_EXC;
:Натискає кнопку "Увійти";

|Система|
:Перевіряє існування облікового запису
<font color="red"><b>LogIntoAccount_UnknownAccount_EXC;

:Перевіряє правильність паролю
<font color="red"><b>LogIntoAccount_WrongPassword_EXC;

:Авторизує користувача у сесії;

|Користувач|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>EditAccount</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Редагувати обліковий запис</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
        - Користувач зареєстрований<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Змінені дані в обліковому записі</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - EditAccount_InvalidData_EXC - користувач ввів невалідні дані<br/>
        - EditAccount_CancelButton_EXC - користувач натиснув кнопку "Відміна"<br/>
        </td>
    </tr>
</table>

@startuml

|Користувач|
start;
:Переходить до облікового запису;

:Натискає кнопку "Змінити";

|Система|
:Відкриває форму\nдля зміни даних;

|Користувач|
:Редагує дані облікового запису:
змінює логін, пошту, телефон, пароль
<font color="red"><b>EditAccount_CancelButton_EXC;
:Натискає кнопку "Зберегти";

|Система|
:Перевіряє валідність нових даних:
формати пошти, телефону, паролю
<font color="red"><b>EditAccount_InvalidData_EXC;

:Змінює дані облікового запису;

|Користувач|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>DeleteAccount</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалити обліковий запис</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>CreateTask</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Створити задачу</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
            - Користувач авторизований
            <br>- Користувач є членом проєкту
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Нова задача у проєкті</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
            - CreateTask_NotValid_EXC - користувач вказав не валідну інформацію про задачу
            <br>- CreateTask_CancelButton_EXC - користувач натиснув кнопку "Відміна"
        </td>
    </tr>
</table>

@startuml

|Користувач|
start;
:Обирає проєкт і натискає на кнопку\n"Створити задачу";

|Система|
:Відкриває форму із полями\nінформації про задачу;

|Користувач|
:Заповнює поля інформації про задачу:\nвказує назву, дедлайн, виконавця, статус,\nтеги, додає файли;
:Натискає кнопку "Створити"
<font color="red"><b> CreateTask_CancelButton_EXC;

|Система|
:Перевіряє на валідність інформацію про задачу
<font color="red"><b> CreateTask_NotValid_EXC;

:Cтворює нову задачу у проєкті;

|Користувач|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>EditTask</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Редагувати задачу</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
            - Користувач авторизований
            <br>- Користувач є членом проєкту
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Відредагована задача</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
            - EditTask_NotValid_EXC - користувач вказав не валідну інформацію про задачу
            <br>- EditTask_CancelButton_EXC - користувач натиснув кнопку "Відміна"
        </td>
    </tr>
</table>

@startuml

|Користувач|
start;
:Обирає проєкт і задачу та натискає\nна кнопку "Відредагувати задачу";

|Система|
:Відкриває форму із полями\nінформації про задачу;

|Користувач|
:Редагує поля інформації про задачу:\nзмінює назву, дедлайн, виконавця,\nстатус, теги, додає файли;
:Натискає кнопку "Зберегти зміни"
<font color="red"><b> EditTask_CancelButton_EXC;

|Система|
:Перевіряє на валідність інформацію про задачу
<font color="red"><b> EditTask_NotValid_EXC;

:Зберігає відредаговану задачу;

|Користувач|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>SetTaskDeadlineNotif</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Встановити отримку сповіщень про дедлайн задачі</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Користувач, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
            - Користувач авторизований
            <br>- Користувач є членом проєкту
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Сповіщення про дедлайн задачі</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
            - SetTaskDeadlineNotif_NoEmail_EXC - користувач не вказав email адресу в налаштуваннях облікового запису
            <br>- SetTaskDeadlineNotif_Restricted_EXC - користувач заборонив відправку йому сповіщень
            <br>- SetTaskDeadlineNotif_NoSettings_EXC - користувач не встановив налаштування сповіщення
            <br>- SetTaskDeadlineNotif_CancelButton_EXC - користувач натиснув кнопку "Відміна"
        </td>
    </tr>
</table>

@startuml

|Користувач|
start;
:Обирає проєкт і задачу та натискає\nна кнопку "Встановити сповіщення";

|Система|
:Відкриває форму із\nналаштуваннями сповіщення;

|Користувач|
:Змінює налаштування сповіщення:\nчас та частоту надсилання;
:Натискає на кнопку "Підтвердити"
<font color="red"><b> SetTaskDeadlineNotif_CancelButton_EXC;

|Система|
:Перевіряє наявність налаштувань сповіщення,
email адреси та дозвіл надсилати сповіщення
<font color="red"><b> SetTaskDeadlineNotif_NoSettings_EXC
<font color="red"><b> SetTaskDeadlineNotif_NoEmail_EXC
<font color="red"><b> SetTaskDeadlineNotif_Restricted_EXC;

:Встановлює сповіщення про дедлайн задачі;

|Користувач|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>DeleteTask</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалити задачу</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td> </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>WriteToSupport</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Написати в службу підтримки</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>CreateProject</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Створити проєкт</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
        - Менеджер авторизований<br/>
        - Менеджер має права на створення нового проєкту<br/>
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Новий проєкт</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - CreateProject_NoRights_EXC - менеджер намагається створити проєкт без відповідних прав<br/>
        - CreateProject_InvalidInfo_EXC - менеджер вказав некоректні дані про проєкт<br/>
        - CreateProject_CancelButton_EXC - менеджер натиснув кнопку "Відміна"
        </td>
    </tr>
</table>

@startuml

|Менеджер|
start;
:Переходить у розділ "Проєкти" й натискає
кнопку "Створити новий проєкт";

|Система|
:Перевіряє чи має менеджер права
для створення нового проєкту
<font color="red"><b> CreateProject_NoRights_EXC;
:Відкриває форму із полями інформації про проєкт;

|Менеджер|
:Вводить основні дані про проєкт: назву, дати
початку та очікуваного завершення проєкту,
опис, додає відповідних учасників зі списку
доступних співробітників, вкладені файли;
:Натискає кнопку "Створити"
<font color="red"><b> CreateProject_CancelButton_EXC;

|Система|
:Перевіряє коректність введених данних
<font color="red"><b> CreateProject_InvalidInfo_EXC;

:Зберігає новий проєкт та повідомляє менеджера
про успішне закінчення процесу створення;

|Менеджер|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>EditProject</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Редагувати проєкт</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
        - Менеджер авторизований<br/>
        - Менеджер має права на редагування вибраного проєкту<br/>
        - Система містить інформацію про проєкт для редагування
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Відредагований проєкт</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - EditProject_NoRights_EXC - менеджер не має прав редагувати вибраний проєкт<br/>
        - EditProject_InvalidInfo_EXC - менеджер вказав некоректні дані про проєкт<br/>
        - EditProject_CancelButton_EXC - менеджер натиснув кнопку "Відміна"
        </td>
    </tr>
</table>

@startuml

|Менеджер|
start;
:Переходить у розділ "Проєкти" та вибирає 
потрібний для редагування проєкт;
:Натискає кнопку "Відредагувати проєкт";

|Система|
:Перевіряє права менеджера на редагування 
вибраного проєкту
<font color="red"><b> EditProject_NoRights_EXC;
:Відкриває форму із полями інформації про проєкт;

|Менеджер|
:Редагує поля інформації про проєкт: 
змінює назву, дати початку та очікуваного 
завершення проєкту, опис, вкладені файли;
:Натискає кнопку "Зберегти зміни"
<font color="red"><b> EditProject_CancelButton_EXC;

|Система|
:Перевіряє коректність введених данних
<font color="red"><b> EditProject_InvalidInfo_EXC;

:Зберігає відредагований проєкт та повідомляє менеджера
про успішне закінчення процесу редагування;

|Менеджер|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>DeletePoject</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалити проєкт</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>Менеджер, система</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
        - Менеджер авторизований<br/>
        - Менеджер має права на видалення вибраного проєкту<br/>
        - Система містить інформацію про проєкт для видалення
        </td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>Видалений проєкт</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        - DeleteProject_NoRights_EXC - менеджер не має прав на видалення вибраного проєкту<br/>
        - DeleteProject_InvalidDeleteConfirmation_EXC - менеджер вказав некоректне ім'я проєкту, що не співпадає з реальним<br/>
        - DeleteProject_CancelButton_EXC - менеджер натиснув кнопку "Відміна"
        </td>
    </tr>
</table>

@startuml

|Менеджер|
start;
:Переходить у розділ "Проєкти" та вибирає 
потрібний для видалення проєкт;
:Натискає кнопку "Видалити проєкт";

|Система|
:Перевіряє права менеджера на видалення 
вибраного проєкту
<font color="red"><b> DeleteProject_NoRights_EXC;
:Відкриває форму підтвердження видалення проєкту;

|Менеджер|
:Вводить назву проєкту для підтвердження 
процесу видалення
<font color="red"><b> DeleteProject_InvalidDeleteConfirmation_EXC;
:Натискає кнопку "Видалити проєкт"
<font color="red"><b> DeleteProject_CancelButton_EXC;

|Система|
:Здійснює операцію видалення й повідомляє 
менеджера про успішно видалений проєкт;

|Менеджер|
stop;

@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>AddUserToProject</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Додати користувача до проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>RemoveUserFromProject</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалити користувача з проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>ApplyTemplateToProject</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Застосувати шаблон до проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>
				Менеджер, система
				</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
				- Менеджер авторизований<br>
				- Менеджер має новостворений проєкт
				</td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>
				Проєкт зі структурою згідно з шаблоном
				</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
				- ApplyTemplateToProject_CancelButton_EXC - менеджер натиснув кнопку "Відміна"
				</td>
    </tr>
</table>

@startuml

|Менеджер|
start;
:Відкриває новостворений проєкт;

|Система|
:Пропонує застосувати шаблон до проєкту;

|Менеджер|
:Обирає один із запропонованих шаблонів
<font color="red"><b> ApplyTemplateToProject_CancelButton_EXC;

|Система|
:Застосовує обраний шаблон до проєкту;

|Менеджер|
stop;
@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>CreateProjectTemplate</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Створити шаблон проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>
				Менеджер, система
				</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
				- Менеджер авторизований<br>
				- Менеджер має проєкт
				</td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>
				Шаблон проєкту
				</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
				- CreateProjectTemplate_EmptyProject_EXC - менеджер створює шаблон з пустого проєкту <br>
				- CreateProjectTemplate_CancelButton_EXC - менеджер натиснув кнопку "Відміна"
				</td>
    </tr>
</table>

@startuml

|Менеджер|
start;
:Відкриває проєкт;
:Натискає на кнопку "Створити шаблон"
<font color="red"><b> CreateProjectTemplate_EmptyProject_EXC;

|Система|
:Відкриває форму з параметрами шаблону:\nназва, права доступу до шаблону;

|Менеджер|
:Заповнює форму тa натискає кнопку "Підтвердити"
<font color="red"><b> CreateProjectTemplate_CancelButton_EXC;

|Система|
:Створює шаблон проєкту;

|Менеджер|
stop;
@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>DeleteProjectTemplate</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалити шаблон проєкту</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td>
				Менеджер, система
				</td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td>
				- Менеджер авторизований<br>
				- Менеджер має шаблон проєкту
				</td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td>
				Видалений шаблон
				</td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
				- DeleteProjectTemplate_CancelButton_EXC - менеджер натиснув кнопку "Відміна"
				</td>
    </tr>
</table>

@startuml

|Менеджер|
start;
:Відкриває список шаблонів проєктів;
:Обирає шаблон для видалення;

|Система|
:Відкриває форму з підтвердженням\n видалення шаблону;

|Менеджер|
:Натискає кнопку "Підтвердити"
<font color="red"><b> DeleteProjectTemplate_CancelButton_EXC;

|Система|
:Видаляє шаблон проєкту;

|Менеджер|
stop;
@enduml

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>CreateBoard</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Створити дошку</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        </td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>DeleteBoard</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Видалити дошку</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        </td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>BlockProject</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Заблокувати проєкт</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        </td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>UnblockProject</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Розблокувати проєкт</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td>
        </td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>BanUser</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Заблокувати користувача</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>UnbanUser</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Розблокувати користувача</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ID</b></td>
        <td><code>EditSystemSettings</code></td>
    </tr>
    <tr>
        <td><b>Назва:</b></td>
        <td>Редагувати налаштування системи</td>
    </tr>
     <tr>
        <td><b>Учасники:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Передумови:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Результат:</b></td>
        <td></td>
    </tr>
     <tr>
        <td><b>Виключні ситуації:</b></td>
        <td></td>
    </tr>
</table>
