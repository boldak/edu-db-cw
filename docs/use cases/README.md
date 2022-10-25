# Модель прецедентів
Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.

Вбудовування зображень діаграм здійснюється з використанням сервісу plantuml.com
(opens new window).

## Діаграма прецедентів


@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_1.1
    end header

    title
        <font size=18 color=black>Аналітичний портал
        <font size=16 color=black>Діаграма прецедентів
    end title

    actor "Користувач" as User
    actor "Розробник" as Developer
    actor "Тімлід" as Teamlead
    actor "Замовник" as Customer
    
    usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1
    usecase "<b>UC_2</b>\nЗареєструватися" as UC_2
    usecase "<b>UC_3</b>\nУвійти в систему" as UC_3
    usecase "<b>UC_4</b>\nВикликати звіт" as UC_4
    usecase "<b>UC_5</b>\nСтворити звіт" as UC_5
    usecase "<b>UC_6</b>\nРедагувати звіт" as UC_6
    usecase "<b>UC_7</b>\nВидалити звіт" as UC_7
    usecase "<b>UC_8</b>\nРедагувати конфігурацію \nпорталу" as UC_8


    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

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

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

