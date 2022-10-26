# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*



Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

В markdown-файлі використовується опис діаграми

```md

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>
```

яка буде відображена наступним чином

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>




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
