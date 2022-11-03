# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

## Загальна схема

"Користувач" as User and "Адміністратор" as Admin

@startuml

actor "User" as User 
actor "Admin" as Admin

usecase "USR.REG\nРеєстрація" as USR.REG 
usecase "USR.LOG\nАвторизація" as USR.LOG 
usecase "USR.QRY_CR\nСтворення\n запиту" as USR.QRY_CR 
usecase "USR.QRY_ED\nКерування\n запитом" as USR.QRY_ED 
usecase "USR.QRY_EXP\nЕкспорт\n результатів" as USR.QRY_EXP 
usecase "USR.HELP\nДопомога\n адміністратора" as USR.HELP

User -l-> USR.REG 
User -u-> USR.LOG 
User -u-> USR.QRY_CR 
User -u-> USR.QRY_ED 
User -u-> USR.QRY_EXP 
User -r-> USR.HELP

usecase "ADM.QRY_SRC\nКерування\n джерелами" as ADM.QRY_SRC 
usecase "ADM.USR_RIGHTS\nКерування правами\n користувача" as ADM.USR_RIGHTS 
usecase "ADM.HELP\nДопомога\n адміністратора" as ADM.HELP
usecase "ADM.ANSWER\nВідповіль на запити\nкористувачів" as ADM.ANSWER

Admin -d-> ADM.QRY_SRC 
Admin -d-> ADM.USR_RIGHTS 
Admin -d-> ADM.HELP
Admin -d-> ADM.ANSWER

Admin -u-|> User

@enduml

## Схема для користувача

@startuml

actor "User" as User

usecase "USR.REG\nРеєстрація" as USR.REG
usecase "USR.LOG\nАвторизація" as USR.LOG
usecase "USR.QRY_CR\nСтворення\n запиту" as USR.QRY_CR
usecase "USR.QRY_ED\nКерування\n запитом" as USR.QRY_ED
usecase "USR.QRY_EXP\nЕкспорт\n результатів" as USR.QRY_EXP
usecase "USR.HELP\nДопомога\n адміністратора" as USR.HELP

User -d-> USR.REG
User -d-> USR.LOG
User -u-> USR.QRY_CR
User -u-> USR.QRY_ED
User -d-> USR.QRY_EXP
User -d-> USR.HELP

usecase "USR.QRY_CR1\nКастомізація\n за власними\n параметрами" as USR.QRY_CR1
usecase "USR.QRY_CR2\nЗа сталим\n шаблоном" as USR.QRY_CR2
usecase "USR.QRY_ED1\nРедегування\n параметрів\n запиту" as USR.QRY_ED1
usecase "USR.QRY_ED2\nОновлення\n результатів\n запиту" as USR.QRY_ED2
usecase "USR.QRY_ED3\nВидалення\n запиту" as USR.QRY_ED3

USR.QRY_CR1 ...> USR.QRY_CR :extends
USR.QRY_CR2 ...> USR.QRY_CR :extends
USR.QRY_ED1 ...> USR.QRY_ED :extends
USR.QRY_ED2 ...> USR.QRY_ED :extends
USR.QRY_ED3 ...> USR.QRY_ED :extends
@enduml

## Схема для адміністратора

@startuml

actor "Admin" as Admin

usecase "ADM.QRY_SRC\nКерування\n джерелами" as ADM.QRY_SRC
usecase "ADM.USR_RIGHTS\nКерування правами\n користувача" as ADM.USR_RIGHTS
usecase "ADM.HELP\nДопомога\n адміністратора" as ADM.HELP

Admin -u-> ADM.QRY_SRC
Admin -d-> ADM.USR_RIGHTS
Admin -d-> ADM.HELP

usecase "ADM.QRY_SRC1\nВидалити\n джерела" as ADM.QRY_SRC1
usecase "ADM.QRY_SRC2\nРозширити\n об'єм\n джерел" as ADM.QRY_SRC2
usecase "ADM.USR_RIGHTS1\nСхвалити\n запит по\n допомогу" as ADM.USR_RIGHTS1
usecase "ADM.USR_RIGHTS0\nВідхилити\n запит по\n допомогу" as ADM.USR_RIGHTS0
usecase "ADM.HELP1\nРозширити\n права" as ADM.HELP1
usecase "ADM.HELP0\nОбмежити\n права" as ADM.HELP0

ADM.QRY_SRC1 ...> ADM.QRY_SRC :extends
ADM.QRY_SRC2 ...> ADM.QRY_SRC :extends
ADM.USR_RIGHTS1 ...> ADM.USR_RIGHTS :extends
ADM.USR_RIGHTS0 ...> ADM.USR_RIGHTS :extends
ADM.HELP1 ...> ADM.HELP :extends
ADM.HELP0 ...> ADM.HELP :extends

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

