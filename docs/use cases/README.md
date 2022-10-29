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

## DC_1.4

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

    @startuml

    title
        <font size=18 color=black>DC_1.4 Зберегти дані у форматі xls.
        <font size=16 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "Користувач" as User #a2d0eb

    usecase "<b>UC_1.1</b>\nКористувач натискає на іконку завантаження формату xls" as S1 #9be8b0
    usecase "<b>UC_1.2</b>\nСистема отримує id операції" as S2 #f2f2d5
    usecase "<b>UC_1.3</b>\nСистема здійснює обробку даних" as S3 #f2f2d5
    usecase "<b>UC_1.4</b>\nСистема підготовлює дані відповідно формату" as S4 #f2f2d5
    usecase "<b>UC_1.5</b>\nСистема формує завантажуваний файл xls" as S5 #f2f2d5
    usecase "<b>UC_1.6</b>\nСистема завантажує файл формату xls" as S6 #f2f2d5

    User -up-|> S1
    S1 -up-> S2
    S2 -right-> S3
    S3 -right-> S4
    S4 -down-> S5
    S5 -down-> S6
    S6 -left.> User: Користувач завантажує файл формату xls

    @enduml

</center>

## DC_1.5

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

    @startuml

    title
        <font size=18 color=black>DC_1.5 Запропонувати дані для публікації.
        <font size=16 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "Користувач" as User #a2d0eb

    usecase "<b>UC_1.1</b>\nКористувач натискає кнопку "Запропонувати дані для публікації"" as S1 #9be8b0
    usecase "<b>UC_1.2</b>\nСистема відкриває Користувачу форму для відправки файлів даних" as S2 #f2f2d5
    usecase "<b>UC_1.3</b>\nКористувач заповнює форму та завантажує файл(и)" as S3 #f2f2d5
    usecase "<b>UC_1.4</b>\nКористувач натискає кнопку "Відправити форму"" as S4 #f2f2d5
    usecase "<b>UC_1.5</b>\nСистема зберігає форму" as S5 #f2f2d5
    usecase "<b>UC_1.6</b>\nКористувач отримує повідомлення про успішну відправку форми" as S6 #f2f2d5
    usecase "<b>UC_1.7</b>\nСистема повертає Користувача на головну сторінку" as S7 #f2f2d5

    note "Заповнені всі обов'язкові\n поля форми" as EX1 #d9c8e3
    note "Наявні підкріплені файли" as EX2 #d9c8e3
    note "Формат підкріплених файлів\n відповідають вимогам" as EX3 #d9c8e3

    User -up-|> S1
    S1 -right-> S2
    S2 -right-> S3
    S3 -right-> S4
    S4 -right-> S5
    S5 -up-> EX1
    S5 -up-> EX2
    S5 -up-> EX3
    S5 -right-> S6
    S6 -down-> S7
    S7 -left.> User: Користувач відправлена форму з файлам(и) даних

    @enduml

</center>

## DP_2.1

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;">

    @startuml
    
    title
        <font size=18 color=black>DP_2.1 Створити набір даних
        <font size=16 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "Адміністратор" as Admin #a2d0eb

    usecase "<b>UC_1.1</b>\nАдміністратор натискає кнопку "Створити набір даних"" as S1 #9be8b0
    usecase "<b>UC_1.2</b>\nСистема відкриває Адміністратору форму для додавання нового набору даних." as S2 #f2f2d5
    usecase "<b>UC_1.3</b>\nАдміністратор заповнює форму потрібними даними" as S3 #f2f2d5
    usecase "<b>UC_1.4</b>\n Адміністратор завантажує файли з даними" as S4 #f2f2d5
    usecase "<b>UC_1.5</b>\nАдміністратор натискає кнопку "Зберегти набір даних"" as S5 #f2f2d5
    usecase "<b>UC_1.6</b>\nСистема створює новий набір даних" as S6 #f2f2d5
    usecase "<b>UC_1.7</b>\nАдміністратор отримує повідомлення про успішне створення набору даних" as S7 #f2f2d5

    note "Система видає помилку в разі введеня\n некоректної інформації (назва набору даних,\n ім'я, прізвище та контакти (e-mail) автора набору даних,\n короткий опис вмісту набору даних, категорія (тег),\n ключові слова)" as EX1 #d9c8e3

    Admin -up-|> S1
    S1 -up-> S2
    S2 -right-> S3
    S3 -right-> S4
    S4 -right-> S5
    S5 -down-> S6
    S6 -right-> EX1
    S6 -down-> S7
    S7 -left.> Admin: Адміністратор створює набір даних

    @enduml

</center>