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

***Реєстрація користувача***
```
**УЧАСНИКИ**: Користувач, Система
**ПЕРЕДУМОВИ**: Користувач не має облікового запису у системі
**РЕЗУЛЬТАТ**: Створено новий обліковий запис
**ВИКЛЮЧНІ СИТУАЦІЇ**:
EX.1 Введений користувачем логін чи пошта вже використані.
```

![Scen1](http://www.plantuml.com/plantuml/png/jLJ1Ji904Btp5PjuD_4gnd3n7xnY13LHC51lFLWAwe7WfQc9yU8VLD9AHRV-mfi_ykskO4ngnH1xsPcNDs_UpYmq-bwpvrsSdTPytAEGI-GIo412J978jLzJ_2p7HjkgZAKmup52WHGvuR62Hg8aG4RgL689wfNbPCl0W9WpYXGFJRLtp2LKf6SIcG96YLnHxgx-YvjKOhnGJij48ckFOhJcZ37EhEg8jDHXHi5e4T4LRNqykcx8y8R4N_ZuXYuRG9l6ffxMNkLMebB7IFxeeNnJrVkXfuAfcuXDQ4Z9qD1fEYzjjiRQpDwHVjtUJaDNjrn_jIMAarMt9ZTCXnn_w2QKKC9CQVp3qkhbCjQIPa6m-36a1f2O8r5uOZoJy1CaO-HaEbslfNedHyUUscYtc_mil7Emg_106y-SOCxEnHBUsz_SiachSsZB__SjcZe78L_fBVQzxhcxMuCE-HVp0G00)

***Авторизація користувача***
```
**УЧАСНИКИ**: Користувач, Система
**ПЕРЕДУМОВИ**: Користувач зареєстрований у системі
**РЕЗУЛЬТАТ**: Авторизація в системі
**ВИКЛЮЧНІ СИТУАЦІЇ**:
EX.1 Користувач надав некорректні дані
EX.2 Користувач незареєстрований у системі
```

![Scen2](http://www.plantuml.com/plantuml/png/fLEzJW914EvvYaciDT7ICuR6Tx3526gYOF3iA90psa5Co9aO6z_WN47nyEvUuPityijiC4eM6hVQ_UxxcPczhL_5ZMvyVN5Uw-49fVOnqniTQ0A7JEzxDU4oZkrs9SGIV213XPB7GeSw5ZlCTIHwQ_Glp8GKfmEl1WLwfwa-Hcjz2sIK44JE7NrpGYNTSqs4TYacg2YZDUQOycFnxr3I9ZJ-PAXlndT7ri0A2diE8qxmnLjXokoijmZvWmeLZlo-ZcZDyZEcf4GNCqlXLbHj91CGjUR8VC1O8l7B0jkTk2dTivFJM3PQhGQNmNj7-u9d9hnZJhb3-GCV76vj_pxisA7PFZQlS1UsTM25VaIE-EiciH8vjqKKbYrVcOv2uk2zQBBAiyAKPEgGBJc7VAZmj_W6ZXl-dqsi8MidvTUSOUiVHEVILrFdcFXwlW40)

***Запит на пошук та аналіз медіа-контенту***
```
**УЧАСНИКИ**: Користувач, Система
**ПЕРЕДУМОВИ**: Користувач авторизований у системі
**РЕЗУЛЬТАТ**: Вивід результату повного аналізу шуканого медіа-контенту
**ВИКЛЮЧНІ СИТУАЦІЇ**:
EX.1 Інформація за запитом не знайдена
EX.2 Користувач некоректно ввів пошуковий запит
```

![Scen3](http://www.plantuml.com/plantuml/png/fLH1JW914BppYacyc-XHZE7Y7xnY13LHCBZUze1Wr8EHc11CZ1T_GCWY8yZoXUeVMTCPGSAuOdOlz5HtLtKFjLkwZCgDwEhyh13Z1QaqOULQMjB607svYmk6ZzPej6D2LGOZz353okDK7gLhz331K0EvP-5OsaPwJDze_oVxRgKdpyLCtYb_MWx4c15vnuHIp9GkFpSICbjCbDilOQMbkH_qlv37U8DoOkZWsAijerx7JxywXnlTCsj8gOayCD_y5Z9827NMNRTMZogcSNfy4fcDQhNCH-7Tmps3LwHuvxgMskaStZ_OtD93fNQaxHbU-AS3EFPyIXlOBj__Fo1TWfaZOmFjnkGqh-G82Li-ACb5LcsHGtLDluoSWZIbGt5d79BtYFx5pn9V3gj561WyePl35TlBhWYEkp3lqhZUilwkAA0HC-5te1WW3zortWdpNjFHBWGPPF1dVjxg5qKN54hSbT_2Bm00)
