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
    actor "Менеджер проекту" as Teamlead #eeeeaa
    
    
    usecase "<b>UC_1.2</b>\nАвторізація" as UC_1.1
    usecase "<b>UC_1.1</b>\nРеестрація" as UC_1.2  

    usecase "<b>UC_2.1</b>\nВиконня завдання" as UC_2.1  
    usecase "<b>UC_2.2</b>\nНадсилання менеджеру \nна перевірку" as UC_2.2 

    usecase "<b>UC_3.1</b>\nПодача умов до проекту" as UC_3.1  
    usecase "<b>UC_3.2</b>\nПеревірка виконаною\nроботи" as UC_3.2 

    usecase "<b>UC_4.1</b>\nРозподіл завдань\nміж учасниками " as UC_4.1  
    usecase "<b>UC_4.2</b>\nПеревірка виконаної\nроботи" as UC_4.2 
    
    User -u-> UC_1.1
    User -u-> UC_1.2
    
    Workers -u-> UC_2.1
    Workers -u-> UC_2.2

    Сustomer -u-> UC_3.1
    Сustomer -u-> UC_3.2

    Teamlead -d-> UC_4.1
    Teamlead -d-> UC_4.2
    
    Workers -u-|> User
    Сustomer -u-|> User
    
    Teamlead -u-|> User
    Teamlead -u-|> Сustomer
    Teamlead -u-|> Workers
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

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
    <font color=000 size=16><b>ID:</b> UC-2
    <font color=000 size=16><b>Назва:</b> Реєструватися у системі
    <font color=000 size=16><b>Учасники:</b> Користувач, Система
    <font color=000 size=16><b>Передумови:</b> Відсутні
    <font color=000 size=16><b>Результат:</b> Доступ до системи
    <font color=000 size=16><b>Виключні ситуації:</b>
    <font color=000 size=16>EX-2: Вже зареєстрований користувач за введеними даними
    
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
    <b> EX-2
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
        <font color=000 size=16><b>ID:</b> UC_1.1
        <font color=000 size=16><b>Назва:</b> Авторизуватися у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Зареєстрований користувач
        <font color=000 size=16><b>Результат:</b> Доступ до системи
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX-01: Не вірний логін/пароль

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
        <b> EX-01
        end note
        : Надає доступ до сайту;
    |Користувач|
        stop;
@enduml

</center>