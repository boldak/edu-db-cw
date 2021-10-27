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
  
  usecase Dmanage1 as "<b>DP_1</b>\nкерувати наборами даних "
  usecase Dmanage2 as "<b>DP_2</b>\nКерувати файлами в наборах даних "
  usecase Dmanage3 as "<b>DP_3</b>\nКерувати групуванням даних"


  usecase Duse1 as "<b>DC_1</b>\nпереглядати данi"
  usecase Duse2 as "<b>DC_2</b>\nшукати данi"
  usecase Duse3 as "<b>DC_3</b>\nзавантажувати данi"
  
  DataPublisher -> Dmanage3
  DataPublisher -> Dmanage2
  DataPublisher -> Dmanage1
  DataPublisher .d.> DataConsumer
 
  
  DataConsumer -> Duse3
  DataConsumer -> Duse2
  DataConsumer -> Duse1
  

  
@enduml

$~~~~~~~~~~~~$
___
___
$~~~~~~~~~~~~$

@startuml

  actor DataPublisher
  
  usecase Dmanage1 as "<b>DP_1</b>\nКерувати наборами даних" #32CD32
  usecase Dmanage1_1 as "<b>DP_1.1</b>\nСтворити датасет"
  usecase Dmanage1_2 as "<b>DP_1.2</b>\nРедагувати датасет"
  usecase Dmanage1_3 as "<b>DP_1.3</b>\nВидалити датасет"



  usecase Dmanage2 as "<b>DP_2</b>\nКерувати файлами в наборах даних" #32CD32
  usecase Dmanage2_1 as "<b>DP_2.1</b>\nВидалити файл з набору даних"
  usecase Dmanage2_2 as "<b>DP_2.2</b>\nОновити файл у набірі даних"
  usecase Dmanage2_3 as "<b>DP_2.3</b>\nДодати новий файл у набір даних"


  usecase Dmanage3 as "<b>DP_3</b>\nКерувати групуваням даних" #32CD32
  usecase Dmanage3_1 as "<b>DP_3.1</b>\nДодати тег до датасету"
  usecase Dmanage3_2 as "<b>DP_3.2</b>\nВидалити тег з датасетут"
 
  

  DataPublisher .u.> Dmanage3
  DataPublisher .d.> Dmanage2
  DataPublisher .d.> Dmanage1

  Dmanage2_1 .u.> Dmanage2 <<extends>>
  Dmanage2_2 .u.> Dmanage2 <<extends>>
  Dmanage2_3 .u.> Dmanage2 <<extends>>

  Dmanage3_1 .d.> Dmanage3 <<extends>>
  Dmanage3_2 .d.> Dmanage3 <<extends>>


  Dmanage1_1 .d.> Dmanage1 <<extends>>
  Dmanage1_2 .d.> Dmanage1 <<extends>>
  Dmanage1_3 .d.> Dmanage1 <<extends>>

          

  
@enduml

$~~~~~~~~~~~~$
___
___
$~~~~~~~~~~~~$

@startuml

actor DataConsumer
  
  usecase Duse1 as "<b>DC_1</b>\nпереглядати данi" #FF8C00
  usecase Duse2 as "<b>DC_2</b>\nшукати данi" #FF8C00
  usecase Duse3 as "<b>DC_3</b>\nзавантажувати данi" #FF8C00
  
  usecase Duse1_1 as "<b>DC_1.1</b>\nПереглянути дані\n у вигляді графіку"
  usecase Duse1_2 as "<b>DC_1.2</b>\nПереглянути дані\n у вигляді діаграми"
  usecase Duse1_3 as "<b>DC_1.3</b>\nПереглянути дані\n у вигляді таблиці"
  
  usecase Duse2_1 as "<b>DC_2.1</b>\nЗнайти дані за тегом"
  usecase Duse2_2 as "<b>DC_2.2</b>\nЗнайти дані з використанням фільтру"
  
  usecase Duse3_1 as "<b>DC_3.1</b>\nЗберегти дані у форматі txt"
  usecase Duse3_2 as "<b>DC_3.2</b>\nЗберегти дані у форматі xls"

  
  


 
  

  DataConsumer .u.> Duse1
  DataConsumer .d.> Duse2
  DataConsumer .d.> Duse3
  
  Duse1_1 .d.> Duse1 <<extends>>
  Duse1_2 .u.> Duse1 <<extends>>
  Duse1_3 .l.> Duse1 <<extends>>

  Duse2_1 .u.> Duse2 <<extends>>
  Duse2_2 .u.> Duse2 <<extends>>

  Duse3_1 .d.> Duse3 <<extends>>
  Duse3_2 .d.> Duse3 <<extends>>





  
@enduml

</center>

