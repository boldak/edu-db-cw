# Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*



Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

В markdown-файлі використовується опис діаграми
---

## DC_1.1

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

    @startuml

    title
        <font size=18 color=black>DC_1.1 Знайти дані з використанням фільтру.
        <font size=16 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "Користувач" as User #a2d0eb

    usecase "<b>UC_1.1.1</b>\nВвести текст пошуку в текстове поле" as S1 #9be8b0
    usecase "<b>UC_1.1.2</b>\nОбирати додаткові критерії пошуку" as S2 #9be8b0
    usecase "<b>UC_1.3</b>\nСистема отримує введені користувачем дані пошуку" as S3 #f2f2d5
    usecase "<b>UC_1.4</b>\nСистема виконує пошук набору даних за текстом." as S4 #f2f2d5
    usecase "<b>UC_1.4.1</b>\nСистема фільтрує знайдені дані за обраними користувачем критеріями" as S5 #f2f2d5
    usecase "<b>UC_1.4.2</b>\nСистема сортує знайдені набори даних за певним критерієм" as S6 #f2f2d5
    usecase "<b>UC_1.5</b>\nСистема видає сторінку перегляду наборів даних за заданим фільтром" as S7 #f2f2d5

    note "Пошуковий запит задано\nв коректній формі" as EX1 #d9c8e3
    note "Набір даних за даними\nкритеріями пошуку існує" as EX2 #d9c8e3

    User -up-|> S1
    User -up-|> S2
    S1 -up-> S3
    S2 -up-> S3
    S3 -right-> S4
    S3 -left.. EX1
    S4 -right.. EX2
    S4 -down-|> S5
    S4 -down-|> S6
    S5 -down-> S7
    S6 -down-> S7
    S7 -left.> User:Користувач\nпереглядає дані

    @enduml

</center>

## DC_1.2

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

    @startuml

    title
        <font size=18 color=black>DC_1.2 Переглянути дані у вигляді графіку.
        <font size=16 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "Користувач" as User #a2d0eb

    usecase "<b>UC_1.1</b>\nНатискання на іконку графіка у списку" as S1 #9be8b0
    usecase "<b>UC_1.2</b>\nСистема отримує id операції" as S2 #f2f2d5
    usecase "<b>UC_1.3</b>\nСистема здійснює обробку даних" as S3 #f2f2d5
    usecase "<b>UC_1.3.1</b>\nСистема формує осі та основу графіка" as S4 #f2f2d5
    usecase "<b>UC_1.3.2</b>\nСистема наносить точки на площину" as S5 #f2f2d5
    usecase "<b>UC_1.4</b>\nСистема видає сторінку перегляду графіку" as S6 #f2f2d5

    note "Якщо система може створити графік із заданих даних" as EX1 #d9c8e3

    User -down-> S1
    S1 -down-> S2
    S2 -right-> S3
    S3 .right.. EX1
    EX1 .up.. S4
    EX1 .up.. S5
    S4 -up-> S6
    S5 -up-> S6
    S6 -left.> User

    @enduml

</center>

## DC_1.3

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

    @startuml

    title
        <font size=18 color=black>DC_1.3 Переглянути дані у вигляді таблиці.
        <font size=16 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "Користувач" as User #a2d0eb

    usecase "<b>UC_1.1</b>\nНатискання на іконку таблиці у списку" as S1 #9be8b0
    usecase "<b>UC_1.2</b>\nСистема отримує id операції" as S2 #f2f2d5
    usecase "<b>UC_1.3</b>\nСистема здійснює обробку даних" as S3 #f2f2d5
    usecase "<b>UC_1.3.1</b>\nСистема формує осі та основу таблиці" as S4 #f2f2d5
    usecase "<b>UC_1.3.2</b>\nСистема наносить точки на площину" as S5 #f2f2d5
    usecase "<b>UC_1.4</b>\nСистема видає сторінку перегляду таблиці" as S6 #f2f2d5

    note "Якщо система може створити таблицю із заданих даних" as EX1 #d9c8e3

    User -down-> S1
    S1 -down-> S2
    S2 -right-> S3
    S3 .right.. EX1
    EX1 .up.. S4
    EX1 .up.. S5
    S4 -up-> S6
    S5 -up-> S6
    S6 -left.> User

    @enduml

</center>