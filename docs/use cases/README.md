
***ID:*** SС.01
    
***НАЗВА:*** Клієнт хоче зареєструватися на сервісі

***УЧАСНИКИ:*** Клієнт, сервіс

***ПЕРЕДУМОВИ***: Користувачу потрібно зареєструватися на сервісі

***РЕЗУЛЬТАТ***: Отримання аккаунта

***ОСНОВНИЙ СЦЕНАРІЙ:***

   1.1 користувач наводить свою електрону адресу, підбирає зручний логін та пароль.  
   1.2 користувач натискає кнопку «зареєструватися»  
   1.3 сервіс обробляє цей запит  
   1.4 сервіс створює аккаунт користувача

![alt text](https://camo.githubusercontent.com/8b5cc5220a55eca03508fb0f5520ea0f677521507569f3ecb77429a37dd5c584/687474703a2f2f7777772e706c616e74756d6c2e636f6d2f706c616e74756d6c2f70726f78793f63616368653d6e6f267372633d68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f6e617a2d6f6c65676f766963682f6d656469615f636f6e74656e745f616e616c797369735f73797374656d2f6d61737465722f7372632f756d6c2f5543303134)

***ID:*** SС.02
    
***НАЗВА:*** Авторизація зареєстрованого користувача

***УЧАСНИКИ:*** Клієнт, сервіс

***ПЕРЕДУМОВИ:*** Користувачу потрібно авторизуватися

***РЕЗУЛЬТАТ:*** Вхід у систему

***ОСНОВНИЙ СЦЕНАРІЙ:***
 
   2.1 користувач вводить у поля свої логін та пароль  
   2.2 сервіс перевіряє наявність такого користувача в системі  
   2.3 користувачу надається доступ до аккаунта та подальших можливостей пошукової системи

![alt text](http://www.plantuml.com/plantuml/pmg/NL6xIiDW5Dx_fpZWxWFOfJw5is30WjPBq-qVSa7iKCWI8hWvkuHeDJPD0ds2Szx8xvoq42L3ScxVBTD5UFaOBczldETNRgIGd5j9lBE-EnitYIiy7NzoBOciILBY7dKZ6Kci8taXnmrQ7r9mIv9mgIkbHBQsfib_n1R317WnR_6L4rujTdlU0dt_pjzsl95SOd16aeBcS27PlfauVt8-3sSFo-3YUXO6dj-m7745XjY3R5Ig4YqsLaQIAPtoPy1iTMDm1T5G0G_SgPmE9xND1kvdzLIfOUi2RYV5gJdxGmPa90LFYgfg2MLt0Egj86DIuwcc0U1ZOXfogOd92ZHFn3kqlX1jRJ4Fl3-sAIjSgzuX_x4khbNN8hoxTzDWVgL_-HS0)

***ID:*** SС.03
    
***НАЗВА:*** Клієнт шукає певну інформацію в перший раз

***УЧАСНИКИ:*** Клієнт, сервіс

***ПЕРЕДУМОВИ:*** Користувачу потрібно знайти певну інформацію

***РЕЗУЛЬТАТ:*** Обробка сервісом запита

***ОСНОВНИЙ СЦЕНАРІЙ:***
 
   3.1 У стрічці пошуку клієнтом вводиться бажаний запит  
   3.2 Натискається кнопка пошуку  
   3.3 сервіс обробляє надісланий запит

![alt text](http://www.plantuml.com/plantuml/pmg/RL0x3e905EmvnIRs7a0RF8MrYIIIAFwWsqAWqCB4XbZOUGCWg0W1hZ3lHWxQ43MRtNqpytPcTysjEzcutc9kQ5nGobaYL19euyqRWowf95JYIo0xCdiKX6XGoq723qWvQcJ8sNDKI13ZpbaXnrFXmR9fjVxmovSTiGIKV1Ii8iMjebFpay6ZkZToN7ljMUEPxLeQLznaXvHclgPl1ofQ90HS6NPgVHc4hDLG_hkO6lBTovLXMiwq_PCN)

***ID:*** SС.04
    
***НАЗВА:*** Клієнт отримує бажаний результат на свій запит

***УЧАСНИКИ:*** Клієнт, сервіс

***ПЕРЕДУМОВИ:*** Користувач шукав певну інформацію

***РЕЗУЛЬТАТ:*** Клієнта задовольняє результат або ні

***ОСНОВНИЙ СЦЕНАРІЙ:***

   4.1 система надсилає шукану інформацію  
   4.2 клієнт перевіряє результат на правильність  
   4.3 у разі незадоволення клієнта результатом, клієнт надсилає негативну реакцію  
   4.4 сервіс оброблює фідбек клієнта після отримання інформації

![alt text](http://www.plantuml.com/plantuml/pmg/PL4xJiD04ErzYfLe4GS8JJW5DHAMY0JXaqstXVCHeh2I9d91XxZ04cB5ycTpXJStuiqMA8aRMpFpPjvdXnDxzsQdJu-9mnSgcSaS9LfubyH9CZXj6tJmsCaC5HfusHZva0LgDZjP62duMo98fc1vbq9ML-OwSHStOpjwdQQt3oEREdoYuMX3yDoHugWqEA3aUeajMvcibKBBFMaQoId4AwfJBGTEFBQgHN9k5ofKScKSuDl4wLuAHVE02aSWF51woLudQqFf_zmysQSYkhqyWVKpYFT_8xhY_PY47lAeZp8u3xWNRS0Fr_WbrqfzBvddZcM9-bmelTCjMxGGQ3eZSwkleAwKRcAVNv9XEhxNn_q3)

***ID:*** SС.05
    
***НАЗВА:*** Адміністратор наводить довідку щодо роботи системи користувачу

***УЧАСНИКИ:*** Клієнт, адміністратор

***ПЕРЕДУМОВИ:*** У користувача виникли питання щодо користування сервісом

***РЕЗУЛЬТАТ:*** Адміністратор надає певні пояснення

***ОСНОВНИЙ СЦЕНАРІЙ:***

   5.1 клієнт надсилає запитання адміністратору  
   5.2 адміністратор отримує запит від користувача щодо роз‘яснення  
   5.3 адміністратор надає пояснення щодо питання, яке виникло в клієнта  
   5.4 клієнт погоджується з доступністю пояснень

![alt text](http://www.plantuml.com/plantuml/pmg/VL4xJiD05Ept54-YHHm0cd0AQYGi4Gd29vjk2ySkKAG8KqGMuXIMIR2LiFOLvbs1ap3he80ZXS9hxRnvE_Fc3SRsyj5ERc-Cmniscki2NXDdEjoS_WK57WMMEaMD3GfT22e2BMfD-FVaP18O-DISbrodccXCPe96OqrFvCoue_EH7JvCeelheOqSNWxH7SKF5eL7kDOifpqZWf8DIy4wy8Y4lXGbEvzGYCxGyD56M6jGVSMlcd4WZzNMVx3uhsuNmNRubaYl-VVrVYZ7eXdzhEYDZZs_DGCagmmsT_cYw0Bgxs5l0zJ4UoVo4GQdjpaTClPAWl3FjEtE-VEUJPq7ZR6zkpU3Q7GL5lyD)
