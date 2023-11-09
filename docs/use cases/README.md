# Модель прецедентів
## Загальна схема
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
    <font size=18 color=black>Діаграма прецедентів
end title

actor "Адміністратор" as Administrator #aaaaaa
actor "Редактор" as Editor #ddddaa
actor "Користувач" as User #eeeeaa
actor "Гість" as Guest #eeeeee

package UCD_Admin {
    usecase "<b>Data Review</b>\nПеревірка даних, запропонованих\nредактором для публікації" as UC_8 #aaaaaa
    usecase "<b>Block User</b>\nБлокування користувача" as UC_9 #aaaaaa
    usecase "<b>Grant Edit Permission</b>\nНадання прав" as UC_10 #aaaaaa
}

package UCD_Editor {
    usecase  "<b>Update Data</b>\nОновлення існуючих даних на сайті" as UC_3 #ddddaa
    usecase "<b>Delete Data</b>\nВидалення даних з сайту" as UC_4 #ddddaa
    usecase "<b>Upload Data</b>\nЗавантаження даних на сайт" as UC_6 #ddddaa
}

package UCD_User {
    usecase "<b>User Delete</b>\nВидалення облікового запису користувача" as UC_1 #eeeeaa
    usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1.1 #eeeeaa
    usecase "<b>UC_4</b>\nВикликати звіт" as UC_4.0 #aaeeaa
}

usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1.0
usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2 
usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1 

package UCD_Guest {
    usecase "<b>Sigh Up</b>\nзареєстувати обліковий запис" as LOG_IN #eeeeee
    usecase "<b>Log In</b>\nувійти в обліковий запис" as SIGN_IN #eeeeee
}

Administrator -> UC_8
Administrator -> UC_9
Administrator -> UC_10

Administrator -down-> Editor

Editor -> UC_3
Editor -> UC_4
Editor -> UC_6

Editor -down-> User

User -> UC_1
User -> UC_1.1
User -down-> Guest
UC_1.1.0 .u.> UC_1.1 :extends
UC_1.1.1 -u-|> UC_1.1.0
UC_1.1.2 -u-|> UC_1.1.0
UC_1.1.3 -u-|> UC_1.1.0
UC_1.1 ..> UC_1.2.2 :extends
UC_1.2.2 .u.> UC_1.2 :extends
UC_1.2.1 .u.> UC_1.2 :extends
UC_4.0 .d.> UC_1.2 :extends
UC_1.2 .> UC_1.2 :extends
UC_1.2 .u.> UC_1.1 :extends


Guest -> LOG_IN
Guest -> SIGN_IN

right footer
    Аналітичний портал. Модель прецедентів.
    НТУУ КПІ ім.І.Сікорського
    Киів-2020
end footer
@enduml
</center>
<br><br>

## Схема системи для гостя
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    padding: 1em;"
>
@startuml
actor "Гість" as Guest

usecase "<b>LOG_IN</b>\nЗареєстувати обліковий запис" as UC_1
usecase "<b>SIGN_IN</b>\nУвійти в обліковий запис" as UC_2

Guest -d-> UC_1
Guest -d-> UC_2
@enduml
</center>
<br><br>

## Схема системи для користувача
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    padding: 1em;"
>
@startuml

actor "Користувач" as User #eeeeaa

usecase "<b>User Delete</b>\nВидалення облікового запису користувача" as UC_1 #eeeeaa
usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1.1 #eeeeaa
usecase "<b>UC_4</b>\nВикликати звіт" as UC_4.0 #aaeeaa    

User -> UC_1
User -> UC_1.1

@enduml
</center>
<br><br>

**Діаграма прецедентів**

</center>

