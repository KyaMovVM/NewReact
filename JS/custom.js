class AppDrawer extends HTMLElement {
  // Этот метод (lifecycle callback) вызывается, когда элемент
  // добавляется в DOM-дерево документа.
  connectedCallback() {
    // Добавляем простое содержимое "Hello world" внутрь нашего элемента.
    this.innerHTML = `<h1>Hello, world!</h1>`;
  }
}

// Регистрируем наш новый кастомный элемент с именем 'app-drawer'.
// Теперь в HTML можно использовать тег <app-drawer></app-drawer>.
globalThis.customElements.define('app-drawer', AppDrawer);

// Чтобы увидеть результат, создайте HTML-файл и добавьте в него:
// <script src="custom.js"></script>
// <app-drawer></app-drawer>