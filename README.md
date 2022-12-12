# Сборка проекта на Gulp 4

## Функционал сборки
- компиляция препроцессора SASS
- минификация CSS
- автоматическое добавление префиксов CSS
- преобразования кода ECMAScript 2015 + в обратно совместимую версию JavaScript с помощью Babel
- объединение нескольких файлов JavaScript в один
- сжатие изображений
- отслеживание изменений в файлах и автоматический запуск повторной обработки
- генерация sourcemaps
- локальный сервер с автоматическим обновлением страницы при изменении файлов

## Input
|| HTML | Styles | Scripts | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Каталог** | src/ | src/scss/ | src/scripts/ | src/img/ |
| **Расширение** | .html | .css, .scss | .js | .jpg, .png|

## Output
|| HTML | CSS | JavaScript | Images |
|:---|:------:|:-----:|:----:|:-----:|
| **Путь** | dist/ | dist/css/style.css | dist/js/main.js | dist/img/ |

## Запуск:  
1. Скачать все файлы проекта  
2. В терминале перейти в каталог проекта  
3. Выполнить команду: npm i (должен быть установлен node.js)  
4. Создать каталоги и файлы
5. Выполнить команду: gulp (запуск таска default)

## Используемые NPM пакеты
[gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp   
[sass](https://www.npmjs.com/package/sass) Компилятор Sass  
[gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция Sass и Scss файлов   
[gulp-babel](https://www.npmjs.com/package/gulp-babel) Преобразует Java Script в старый стандарт  
[@babel/core](https://www.npmjs.com/package/@babel/core) Ядро Babel  
[@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) Пресет для компиляции Babel  
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минификация и оптимизация CSS файлов   
[del](https://www.npmjs.com/package/del) Удаление каталогов и файлов  
[gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Карта строк кода для инструментов  разработчика   
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматическое добавление префиксов в CSS   
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображений    
[browser-sync](https://browsersync.io/docs/gulp) Автоматическое обновление сайта при изменении файлов  