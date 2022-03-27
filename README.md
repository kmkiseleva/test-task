# Тестовое задание на должность Frontend разработчика

- при загрузке страницы получаем список из 25 пользователей, используя RandomUser API;
- информация о пользователях выводится в виде карточек;
- реализована фильтрацию по полу (все - по умолчанию, мужчины, женщины);
- адаптивная верстка

#### Поиск пользователей по имени реализован следующим образом:

- НЕ live поиск: работает при введении полного имени, например, "Tom" и нажатии клавиши Enter либо при клике на иконку поиска;
- очистка поля поиска по имени работает таким же образом - затирание имени + клавиша Enter (либо иконка поиска);
- поиск НЕ чувствителен к регистру;

#### Фильтрация по возрасту реализована только для варианта "Все":

Не получилось продумать более лаконичную логику для создания множественных фильтров и всех возможных комбинаций, поэтому

- фильтр по возрасту работает только при выборе Всех пользователей;
- фильтр по полу работает как отдельно, так и в комбинации с фильтром по имени в строке поиска

#### Буду благодарна за ревью и советы, как оптимизировать код.

# Описание задания

RandomUser API: https://randomuser.me/ \
Макет: [ссылка на Figma](https://www.figma.com/file/0QWqvAXuM9e10l7cdCYx4k/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8?node-id=0%3A1)

## Условия

Приложение должно представлять собой SPA на React версии не ниже 16.8.\
В качестве стейт менеджера использовать Redux.

Верстка должна быть резиновой (тянущейся) и адаптивной. \
На трех основных форм-факторах следует отрисовывать разное количество карточек на одной строке: \
десктоп от 1200 пикс - 4 карточки \
планшет от 768 пикс до 1199 пикс - 2 карточки \
телефон до 767 пикс - 1 карточка.

Верстка должна быть кроссбраузерной и соответствовать макету в следующих браузерах: \
Internet Explorer 11, Google Chrome, Mozilla Firefox, Safari, MS Edge последних версий

Поиск и фильтрация пользователей должны быть выполнены только на клиентской стороне, без дополнительных запросов к API.
Реализовать тестовое задание необходимо в открытом репозитории на GitHub.
Желательно задеплоить свое решение где-то, к примеру на GitHub Pages.

## Задание

- при загрузке страницы получать список из 20-30 пользователей, используя RandomUser API
- выводить информацию о пользователях в виде карточек
- реализовать фильтрацию по полу (показывать только мужчин или только женщин)

* (необязательное) Реализовать поиск пользователей по имени, фамилии и адресу.
* (необязательное) Реализовать фильтрацию по возрастным группам
* (необязательное) Реализовать сохранение списка пользователей на стороне клиента, чтобы при загрузке страницы не нужно было делать запрос к API