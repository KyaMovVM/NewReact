// Приложения React состоят из компонентов . Компонент — это элемент пользовательского интерфейса (UI) со своей логикой и внешним видом. Компонент может быть как небольшим, например, кнопка, так и большим, занимающим целую страницу.

// Компоненты React — это функции JavaScript, которые возвращают разметку:

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

function MySuperButton() {
    return (
        <button>I'm a SUPER button</button>
    );
}

// Теперь, когда вы объявили MyButton, вы можете вложить его в другой компонент:
// Ключевые export default слова указывают на основной компонент файла
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// https://javascript.info/import-export

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
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

<img className="avatar" />