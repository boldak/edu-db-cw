# Діаграма прецедентів

@startuml

actor "Administrator" as Administrator
actor "Editor" as Editor
actor "User" as User

usecase "<b>ADM_1</b>\nКерувати текстовими файлами" as ADM_1
usecase "<b>ADM_2</b>\nКерувати редакторами\n та редагуванням" as ADM_2

Administrator -r-> ADM_2
Administrator -r-> ADM_1

usecase "<b>EDITOR_1</b>\nСтворювати та редагувати\n розмітку даних" as EDITOR_1

Editor -r-> EDITOR_1

usecase "<b>USER_1</b>\nРеєструватися та авторизуватися\n в системі" as USER_1
usecase "<b>USER_2</b>\nШукати, переглядати\n та завантажувати файли з сервера" as USER_2
usecase "<b>USER_3</b>\nПодавати запит на\n права редактора" as USER_3

User -r-> USER_3
User -r-> USER_2
User -r-> USER_1


Administrator -d-|> Editor
Editor -d-|> User

@endum

## Сценарії використання для користувача

@startuml

actor "User" as User

usecase "<b>USER_1</b>\nРеєструватися та\n авторизуватися у системі" as USER_1 #91FF5B
usecase "<b>USER_2</b>\nШукати, переглядати\n та завантажувати файли з сервера" as USER_2 #91FF5B
usecase "<b>USER_3</b>\nПодавати запит на\n право редагування" as USER_3 #91FF5B

User -l-> USER_1
User -r-> USER_2
User -d-> USER_3

usecase "<b>USER.REG</b>\nРеєстрація в системі" as USER.REG
usecase "<b>USER.LOG</b>\nАвторизація користувача\n в системі" as USER.LOG

USER.REG ..> USER_1 :extends
USER.LOG ..> USER_1 :extends

usecase "<b>USER.D_SRCH</b>\nЗапит на пошук даних" as USER.D_SRCH

USER.D_SRCH ..> USER_2 :extends

usecase "<b>USER.EDIT_RQST</b>\nЗапит на право\n редагування" as USER.EDIT_RQST

USER.EDIT_RQST ..> USER_3 :extends

@enduml
