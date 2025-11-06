// Приложения React состоят из компонентов . Компонент — это элемент пользовательского интерфейса (UI) со своей логикой и внешним видом. Компонент может быть как небольшим, например, кнопка, так и большим, занимающим целую страницу.

// Компоненты React — это функции JavaScript, которые возвращают разметку:

import React from 'react';
import './App.css';

function MyButton() {
    return (
        <button className="primary-button">I&#39;m a button</button>
    );
}

// Теперь, когда вы объявили MyButton, вы можете вложить его в другой компонент:
// Ключевые export default слова указывают на основной компонент файла
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// https://javascript.info/import-export

export default function MyApp() {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Welcome to my updated app</h1>
            </header>
            <main className="app-main">
                <MyButton />
            </main>
            <footer className="app-footer">
                <p>© 2025 My React App</p>
            </footer>
        </div>
    );
}

// JSX строже HTML.
// Необходимо закрывать теги, например <br />.
// Ваш компонент также не может возвращать несколько тегов JSX.
// Их необходимо обернуть в общий родительский элемент,
// например <div>...</div>или пустую <>...</>обёртку:

// Конвертер html-to-jsx https://transform.tools/html-to-jsx

// Добавление стилей
// В React CSS-класс указывается с помощью className.
// Он работает так же, как и HTML- class атрибут:
