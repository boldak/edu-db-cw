<!-- # Модель прецедентів

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

</center> -->




</center>

 ## Дiаграма прецедентiв


<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>


@startuml
  actor DataPublisher
  actor DataConsumer
  
  
  usecase Dmanage2 as "<b>UC_2</b>\nКерувати файлами в наборах даних "
  usecase Dmanage3 as "<b>UC_1</b>\nКерувати групуванням даних"
  
  
  usecase Duse1 as "<b>UC_6</b>\nшукати данi"
  usecase Duse2 as "<b>UC_5</b>\nпереглядати данi"
  usecase Duse3 as "<b>UC_4</b>\nзавантажувати данi"
  
    
  DataPublisher -> Dmanage2
  DataPublisher -> Dmanage3
  DataPublisher .d.> DataConsumer
  
  DataConsumer -> Duse1
  DataConsumer -> Duse2
  DataConsumer -> Duse3
  

  
@enduml

$~~~~~~~~~~~~$
___
___
$~~~~~~~~~~~~$

@startuml

  actor DataPublisher
  
  usecase Dmanage3 as "<b>UC_1</b>\nКерувати групуванням даних" #32CD32
  usecase Dmanage3_1 as "<b>UC_2_1</b>\nСтворити датасет"
  usecase Dmanage3_2 as "<b>UC_2_2</b>\nРедагувати датасет"
  usecase Dmanage3_3 as "<b>UC_2_3</b>\nВидалити датасет"
  usecase Dmanage3_4 as "<b>UC_2_4</b>\nДодати тег до датасету"
  usecase Dmanage3_5 as "<b>UC_2_5</b>\nВидалити тег з датасетут"

  usecase Dmanage2 as "<b>UC_1</b>\nКерувати групуванням даних" #32CD32
  usecase Dmanage2_1 as "<b>UC_1_1</b>\nВидалити файл з набору даних"
  usecase Dmanage2_2 as "<b>UC_1_2</b>\nОновити файл у набірі даних"
  usecase Dmanage2_3 as "<b>UC_1_3</b>\nДодати новий файл у набір даних"
 
  

  DataPublisher .u.> Dmanage3
  DataPublisher .d.> Dmanage2
  Dmanage2_1 .u.> Dmanage2 <<extends>>
  Dmanage2_2 .u.> Dmanage2 <<extends>>
  Dmanage2_3 .u.> Dmanage2 <<extends>>

 
  

  DataPublisher -> Dmanage3
  Dmanage3_1 .d.> Dmanage3 <<extends>>
  Dmanage3_2 .d.> Dmanage3 <<extends>>
  Dmanage3_3 .l.> Dmanage3 <<extends>>
  Dmanage3_4 .d.> Dmanage3 <<extends>>
  Dmanage3_5 .r.> Dmanage3 <<extends>>
          

  
@enduml

$~~~~~~~~~~~~$
___
___
$~~~~~~~~~~~~$

@startuml

actor DataConsumer
  
    usecase Duse1 as "<b>UC_6</b>\nшукати данi" #FF8C00
    usecase Duse2 as "<b>UC_5</b>\nпереглядати данi" #FF8C00
    usecase Duse3 as "<b>UC_4</b>\nзавантажувати данi" #FF8C00
  
  usecase Duse2_1 as "<b>UC_5_1</b>\nПереглянути дані\n у вигляді графіку"
  usecase Duse2_2 as "<b>UC_5_2</b>\nПереглянути дані\n у вигляді діаграми"
  usecase Duse2_3 as "<b>UC_5_3</b>\nПереглянути дані\n у вигляді таблиці"
  
  usecase Duse1_1 as "<b>UC_6_1</b>\nЗнайти дані за тегом"
  usecase Duse1_2 as "<b>UC_6_2</b>\nЗнайти дані з використанням фільтру"
  
  usecase Duse3_1 as "<b>UC_4_1</b>\nЗберегти дані у форматі txt"
  usecase Duse3_2 as "<b>UC_4_2</b>\nЗберегти дані у форматі xls"
  
  


 
  

  DataConsumer .u.> Duse1
  DataConsumer .d.> Duse2
  DataConsumer .d.> Duse3
  
  Duse1_1 .l.> Duse1 <<extends>>
   Duse1_2 .r.> Duse1 <<extends>>

  Duse2_1 .u.> Duse2 <<extends>>
   Duse2_2 .d.> Duse2 <<extends>>
      Duse2_3 .d.> Duse2 <<extends>>
   
Duse3_1 .u.> Duse3 <<extends>>
   Duse3_2 .d.> Duse3 <<extends>>





  
@enduml

</center>

