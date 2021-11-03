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

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
        <font color=000 size=16><b>ID:</b> UC_4
        <font color=000 size=16><b>Назва:</b> Media-content-analyze-system
        <font color=000 size=16><b>Учасники:</b> Користувач, Система, модератор
        <font color=000 size=16><b>Передумови:</b> Мати мотивацію використовувати сервіс аналізу медіа контенту
        <font color=000 size=16><b>Результат:</b> Отримати потрібну інформацію
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX.1 Клієнт скасовує запит на реєстрацію
        <font color=000 size=16>EX.2 Клієнт скасовує запит на авторизацію
        <font color=000 size=16>EX.3 По запиту клієнта інформацію не знайдено
        
        <font color=000 size=16><b>Реєстрація/авторизація клієнта та пошук інформації:</b>
        
        <font color=000 size=14><b>Основний сценарій:</b>
        
    end header
        
    |Клієнт|
        start
        : Клієнт здійснює запит на реєстрацію;
        note right #ffaaaa
        <b> Можливо
        <b> EX.1
        end note
    |Система|
        : Система реєструє клієнта;
    |Клієнт|
        : Клієнт здійснює запит на авторизіцію;
        note right #ffaaaa
        <b> Можливо
        <b> EX.2
        end note
    |Система|
        : Система авторизує клієнта;
    |Клієнт|
        : Клієнт здійснює запит для пошуку певної інформації;
    |Система|
        : Система шукає необхідну інформацію за запитом;
        note right #ffaaaa
        <b> Можливо
        <b> EX.3
        end note
        : Система обробляє та надає клієнту необхідну інформацію;
    |Клієнт|
        stop;
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml


@startuml

    left header
        <font color=000 size=18><b>Package:</b> AD_1.0
        
        <font color=000 size=16><b>ID:</b> UC_4
        <font color=000 size=16><b>Назва:</b> Media-content-analyze-system
        <font color=000 size=16><b>Учасники:</b> Користувач, Система, модератор
        <font color=000 size=16><b>Передумови:</b> Зареєструватися та авторизуватися, виявити проблеми в ході користування сервісом
        <font color=000 size=16><b>Результат:</b> Отримати потрібну інформацію
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX.1 Клієнт скасовує запит із запитанням
        
        <font color=000 size=16><b>Вирішення проблеми користувача або надання відповіді на його запитання(щодо роботи сайту):</b>
        
        <font color=000 size=14><b>Основний сценарій:</b>
        
    end header
        
    |Клієнт|
        start
        : Клієнт надсилає запит із запитанням до модератора;
        note right #ffaaaa
        <b> Можливо
        <b> EX.1
        end note
    |Система|
        : Система обробляє запит на запитання;
    |Модератор|
        : Модератор обробляє запит та надсилає відповідь клієнту;
    |Система|
        : Система обробляє надану модератором відповідь та надсилає її клієнту;
    |Клієнт|
        stop;
        
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

