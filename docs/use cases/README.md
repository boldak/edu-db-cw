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

</center>