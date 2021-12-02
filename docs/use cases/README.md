# 1. Вступ
Файл містить модель прецедентів та сценарії роботу в системі

# 2. Модель прецедентів
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Користувач" as User #eeeeaa
    actor "Виконвці" as Workers #eeeeaa
    actor "Замовник" as Сustomer #eeeeaa
    actor "Менеджер проекту" as Manager #eeeeaa
    actor "Тімлід" as Teamlead #eeeeaa
    
    usecase "<b>UC_1.2</b>\nАвторізація" as UC_1.1
    usecase "<b>UC_1.1</b>\nРеестрація" as UC_1.2  

    usecase "<b>UC_2.1</b>\nВиконня завдання" as UC_2.1 #aaeeaa 
    usecase "<b>UC_2.3</b>\nВибір завдання" as UC_2.3 

    usecase "<b>UC_3.1</b>\nПодача умов до проекту" as UC_3.1 #aaeeaa
    usecase "<b>UC_3.2</b>\nПеревірка виконаною\nроботи" as UC_3.2 

    usecase "<b>UC_4.1</b>\nРозподіл завдань\nміж учасниками " as UC_4.1  
    usecase "<b>UC_4.2</b>\nПеревірка виконаної\nроботи" as UC_4.2

    usecase "<b>UC_5.1</b>\nУправління завданнями" as UC_5.1 #aaeeaa
    usecase "<b>UC_5.5</b>\nУправління командою" as UC_5.2 #aaeeaa

    
    User -u-> UC_1.1
    User -u-> UC_1.2
    
    Workers -u-> UC_2.1
    Workers -u-> UC_2.3

    Сustomer -u-> UC_3.1
    Сustomer -u-> UC_3.2

    Manager -d-> UC_4.2
   
    Teamlead -d-> UC_4.1
    Teamlead -d-> UC_5.1
    Teamlead -d-> UC_5.2
    
    Workers -u-|> User
    Сustomer -u-|> User
    Manager -u-|> Сustomer
    Teamlead -u-|> User
    Teamlead -u-|> Workers
    Teamlead -u-|> Manager

@enduml

**Діаграма прецедентів**

</center>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Тімлід" as Timlid #eeeeaa

    usecase "Управління завданнями" as UC_5.1 #aaeeaa
    usecase "Відправити завдання \nрозробникам" as UC_1
    usecase "Повернути завдання \nрозробникам" as UC_2
    usecase "Переглянути список \тзавдань" as UC_3
    usecase "Підтвердити виконання \nзавдання розробником" as UC_4
     usecase "Додавання \nзавдання" as UC_5

    Timlid -d-> UC_5.1
    UC_1 .u.> UC_5.1
    UC_2 .u.> UC_5.1
    UC_3 .u.> UC_5.1
    UC_4 .u.> UC_5.1
    UC_5 .u.> UC_5.1

@enduml

</center>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Тімлід" as Timlid #eeeeaa
    
    usecase "Управління командою" as UC_5.1 #aaeeaa
    usecase "Надати права nрозробнику" as UC_4
    usecase "Змінити права\nрозробникам" as UC_1
    usecase "Додати розробника \nдо проекту" as UC_2
    usecase "Видалити розробника \nз проекту" as UC_3

    Timlid -d-> UC_5.1
    UC_1 .u.> UC_5.1
    UC_2 .u.> UC_5.1
    UC_3 .u.> UC_5.1
    UC_4 .u.> UC_5.1
    UC_1 .> UC_4
@enduml

</center>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

     actor "Виконвці" as Workers #eeeeaa
    
    usecase "Виконання завдання" as UC_2.1 #aaeeaa
    usecase "Відправити на перевірку" as UC_1
    usecase "Прийняти завдання" as UC_2
    usecase "Відмінити завдання" as UC_3

    Workers -d-> UC_2.1
    UC_1 .u.> UC_2.1
    UC_2 .u.> UC_2.1
    UC_3 .u.> UC_2.1

@enduml

</center>



# 3. Сценарії

## UC_1.1 Реестрація користувача
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_1.1
    <font color=000 size=16><b>Назва:</b> Реєструватися у системі
    <font color=000 size=16><b>Учасники:</b> Користувач, Система
    <font color=000 size=16><b>Передумови:</b> Відсутні
    <font color=000 size=16><b>Результат:</b> Доступ до системи
    <font color=000 size=16><b>Виключні ситуації:</b>
    <font color=000 size=16>EX-1: Вже зареєстрований користувач за введеними даними
    
    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Користувач|
        start
        : Натискає на кнопку "Sign up";
    |Система|
        : Пропонує форму "Sign up";
    |Користувач|
        : Заповнює поля:\n"Email", "Username", "Password";
        : Відсилає заповнену форму;
    |Система|
        : Перевіряє введені дані;
        note right #ffaaaa
        <b> Можливо
        <b> EX-1
        end note
        : Реєструє користувача;
        : Здійснює перехід\n на сторінку авторизації ;
    |Користувач|
        stop;
@enduml

</center>

## UC_1.2 Авторизація користувача
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
        <font color=000 size=16><b>ID:</b> UC_1.2
        <font color=000 size=16><b>Назва:</b> Авторизуватися у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Зареєстрований користувач
        <font color=000 size=16><b>Результат:</b> Доступ до системи
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX-2: Не вірний логін/пароль

        <font color=000 size=16><b>Основний сценарій:</b>
    end header

    |Користувач|
        start
        : Натискає на кнопку "Login";
    |Система|
        : Пропонує форму "Login";
    |Користувач|
        : Заповнює поля: "Username", "Password";
        : Відсилає заповнену форму;
    |Система|
        : Перевіряє введені дані;
        note right #ffaaaa
        <b> Можливо
        <b> EX-2
        end note
        : Надає доступ до сайту;
    |Користувач|
        stop;
@enduml

</center>

## UC_2.1.1 Відправити завдання на перевірку
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_2.1.1
    <font color=000 size=16><b>Назва:</b> Відправити завдання тімліду на перевірку
    <font color=000 size=16><b>Учасники:</b> Розробник, Тімлід
    <font color=000 size=16><b>Передумови:</b> Є виконане завдання
    <font color=000 size=16><b>Результат:</b> Розробник відправив завдання на перевірку Тімліду
    <font color=000 size=16><b>Виключні ситуації:</b>

    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Розробник|
        start
        : Натискає кнопку управління завданнями;
    |Система|
        : Відкриває сторінку управління завданнями;
    |Розробник|
        : Обирає завдання;
        : Натискає кнопку "Відправити завдання;
    |Система|   
        : Відправляє завдання Тімліду;
        stop;
@enduml

</center>

## UC_2.1.2 Прийняти завдання
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_2.1.2
    <font color=000 size=16><b>Назва:</b> Прийняти завдання
    <font color=000 size=16><b>Учасники:</b> Розробник, Система
    <font color=000 size=16><b>Передумови:</b> Є заявка на завдання
    <font color=000 size=16><b>Результат:</b> Прийняте завдання
    <font color=000 size=16><b>Виключні ситуації:</b>

    <font color=000 size=16><b>Основний сценарій:</b>
end header
    |Система|
        start
        : Відправляє заявку розробнику;
    |Розробник|
        : Натискає кнопку управління завданнями;
    |Система|
        : Відкриває сторінку управління завданнями;
        : Надсилає повідомлення з заявкою;
    |Розробник|
        : Натискає кнопку "Прийняти завдання;
    |Система|   
        : Підтверджує завдання;
        stop;
@enduml

</center>

## UC_2.1.3 Відмінити завдання
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_2.1.3
    <font color=000 size=16><b>Назва:</b> Відмінити завдання
    <font color=000 size=16><b>Учасники:</b> Розробник, Система
    <font color=000 size=16><b>Передумови:</b> Є заявка на завдання
    <font color=000 size=16><b>Результат:</b> Відмінена заявка завдання
    <font color=000 size=16><b>Виключні ситуації:</b>

    <font color=000 size=16><b>Основний сценарій:</b>
end header
    |Система|
        start
        : Відправляє заявку розробнику;
    |Розробник|
        : Натискає кнопку управління завданнями;
    |Система|
        : Відкриває сторінку управління завданнями;
        : Надсилає повідомлення з заявкою;
    |Розробник|
        : Натискає кнопку "Відмінити завдання;
    |Система|   
        : Відміняє заявку завдання;
        stop;
@enduml

</center>

## UC_2.3 Вибір завдання
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_2.3
    <font color=000 size=16><b>Назва:</b> Вибір завдння
    <font color=000 size=16><b>Учасники:</b> Розробник, Система
    <font color=000 size=16><b>Передумови:</b> Ствоерниий список завдань 
    <font color=000 size=16><b>Результат:</b> Система відправляє заявку тімліду на одобрення
    <font color=000 size=16><b>Виключні ситуації:</b>
    
    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Розробник|
        start
        : Натискає кнопку управління завданнями;
    |Система|
        : Відкриває сторінку управління завданнями;
    |Розробник|
        : Обирає завдання;
        : Натискає кнопку "Відправити заявку на одобрення;
    |Система|   
        : Відправляє заявку Тімліду;
        stop;
@enduml

</center>

## UC_5.1 Додавання завдання
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_5.1
    <font color=000 size=16><b>Назва:</b> Додавання завдання
    <font color=000 size=16><b>Учасники:</b> Тімлід, Система
    <font color=000 size=16><b>Передумови:</b> Немає
    <font color=000 size=16><b>Результат:</b> Создається завдання
    <font color=000 size=16><b>Виключні ситуації:</b>
    
    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Тімлід|
        start
        : Натискає кнопку управління завданнями;
    |Система|
        : Відкриває сторінку управління завданнями;
    |Тімлід|
        : Пише завдання;
        : Натискає кнопку "Додати завдання";
    |Система|   
        : Создає завдання;
        stop;
@enduml

</center>

## UC_5.2 Відправлення завдання розробнику
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_5.2
    <font color=000 size=16><b>Назва:</b> Відправлення завдання розробнику
    <font color=000 size=16><b>Учасники:</b> Тімлід, Система
    <font color=000 size=16><b>Передумови:</b> Немає
    <font color=000 size=16><b>Результат:</b> Відправлення завдання розробнику
    <font color=000 size=16><b>Виключні ситуації:</b>
    
    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Тімлід|
        start
        : Натискає кнопку "Управління завданнями";
    |Система|
        : Відкриває сторінку управління завданнями;
    |Тімлід|
        : Натискає кнопку "Обрати виконаця";
    |Система|   
        : Надсилає список розрбників;
    |Тімлід|
        : Обирає виконавця завдання;
        : Натискає кнопку "Відправити завдання";
    |Система|   
        : Відправляє завдання розробнику;
        stop;
@enduml

</center>

## UC_5.3 Повернути завдання розробникам
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_5.3
    <font color=000 size=16><b>Назва:</b> Повернення завдання розробнику
    <font color=000 size=16><b>Учасники:</b> Тімлід, Система
    <font color=000 size=16><b>Передумови:</b> Невірно виконане завдання
    <font color=000 size=16><b>Результат:</b>Повернення завдання розробнику
    <font color=000 size=16><b>Виключні ситуації:</b>
    EX-6: видалене завдання
    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Тімлід|
        start
        : Натискає кнопку "Управління завданнями";
    |Система|
        : Відкриває сторінку управління завданнями;
    |Тімлід|
        : Натискає кнопку "Список завдань";
    |Система|   
        : Надсилає список завдань;
    |Тімлід|
        : Обирає виконане завдання;
    |Система|   
        : Відкриває зміст завдання;
        note right #ffaaaa
        <b> Можливо
        <b> EX-6
        end note
    |Тімлід|
        : Помічає невірне виконання завдання;
        : Натискає кнопку "Відправити завдання";
    |Система|   
        : Відправляє завдання розробнику;
        stop;
@enduml

</center>

## UC_5.4 Переглянути список завдань
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_5.4
    <font color=000 size=16><b>Назва:</b> Переглянути список завдань 
    <font color=000 size=16><b>Учасники:</b> Тімлід, Система
    <font color=000 size=16><b>Передумови:</b> Додані завдання
    <font color=000 size=16><b>Результат:</b> Перегляд списку завдань та вивід системою завдань на єкран
    <font color=000 size=16><b>Виключні ситуації:</b> EX-3: Ще не додано ні одного завдання
    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Тімлід|
        start
        : Натискає кнопку "Управління завданнями";
    |Система|
        : Відкриває сторінку управління завданнями;
    |Тімлід|
        : Натискає кнопку "Список завдань";
    |Система|   
        : Надсилає список завдань;
        note right #ffaaaa
        <b> Можливо
        <b> EX-3
        end note
        stop;
@enduml

</center>

## UC_5.5 Підтвердити виконання завдання розробником
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_5.5
    <font color=000 size=16><b>Назва:</b> Підтвердити виконання завдання розробником
    <font color=000 size=16><b>Учасники:</b> Тімлід, Система
    <font color=000 size=16><b>Передумови:</b> Розробник взяв собі завдання 
    <font color=000 size=16><b>Результат:</b> Пітвердження завдання
    <font color=000 size=16><b>Виключні ситуації:</b> EX-4: розробник видалився з проекту EX-5: видалене завдання 
    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Тімлід|
        start
        : Натискає кнопку "Управління завданнями";
    |Система|
        : Відкриває сторінку управління завданнями;
    |Тімлід|
        : Натискає кнопку "Список завдань";
    |Система|   
        : Надсилає список завдань;
    |Тімлід|
        : Обирає завдання, яке потребує підтвердження;
    |Система|   
        : Відкриває зміст завдання;
        note right #ffaaaa
        <b> Можливо
        <b> EX-4, EX-5
        end note
        : Відображає заявку розробника на завдання;
    |Тімлід|
        : Підтверджує заявку;
    |Система|   
        : Підтверджує заявку на виконання;
        : Вносить зміни у список завдань;
        stop;
@enduml

</center>

## UC_5.6 Переглянути активні завдання 
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
    <font color=000 size=16><b>ID:</b> UC_5.6
    <font color=000 size=16><b>Назва:</b> Переглянути активні завдання 
    <font color=000 size=16><b>Учасники:</b> Розробник ,Система
    <font color=000 size=16><b>Передумови:</b> Немає
    <font color=000 size=16><b>Результат:</b> Надається спісок активних завдань
    <font color=000 size=16><b>Виключні ситуації:</b> Немає
    <font color=000 size=16><b>Основний сценарій:</b>
end header

    |Розробник|
        start
        : Входить в систему ;
    |Система|
        : Відкриває "управління завданнями" ;
    |Розробник|
        : Натискає кнопку "Переглянути список активних завдань" ;
    |Система|   
        : Надсилає список завдань;
        stop;
@enduml

</center>