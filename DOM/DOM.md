library
https://lit.dev/
https://lit.dev/tutorials/intro-to-lit/

dom spec
https://dom.spec.whatwg.org/
https://www.w3.org/TR/selectors-3/

crazy
https://www.w3.org/TR/SVG/conform.html#features

shadow-dom
https://www.youtube.com/watch?v=Is4FZxKGqqk&t=2s
https://www.w3.org/TR/shadow-dom/

CSSOM устарел
https://developer.mozilla.org/ru/docs/Web/API/CSS_Object_Model
https://developer.chrome.com/docs/css-ui/cssom?hl=ru
https://www.w3.org/TR/2021/WD-cssom-1-20210826/

CSS_Typed_OM_API
https://developer.mozilla.org/en-US/docs/Web/API/Element/computedStyleMap
https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API/Guide
https://developer.chrome.com/docs/css-ui/cssom?hl=ru
https://drafts.css-houdini.org/css-typed-om/

Дополнительные ресурсы:

https://www.qed42.com/insights/web-components-introduction-to-the-future-web

Введение в DOM https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
Как просмотреть DOM в Google Chrome https://developer.chrome.com/docs/devtools/dom/

https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

Примечание: Поскольку подавляющее большинство кода, использующего DOM, связано с манипулированием HTML-документами, узлы в DOM принято называть элементами , хотя, строго говоря, не каждый узел является элементом.

В следующей таблице кратко описаны эти типы данных.

Тип данных (Интерфейс)	Описание
Document	Когда элемент возвращает объект типа document(например, ownerDocumentсвойство элемента возвращает тип, documentк которому он принадлежит), этот объект сам является корневым documentобъектом. Этот объект описан в главе «Справочник по DOM»documentdocument .

Node	Каждый объект, находящийся в документе, является узлом того или иного типа. В HTML-документе объект может быть узлом элемента, а также текстовым узлом или узлом атрибута.

Element	Тип elementоснован на node. Он относится к элементу или узлу типа, elementвозвращаемому членом API DOM. Вместо того, чтобы говорить, например, что document.createElement()метод возвращает ссылку на объект node, мы просто говорим, что этот метод возвращает , elementкоторый только что был создан в DOM. elementОбъекты реализуют Elementинтерфейс DOM, а также более базовый Nodeинтерфейс, оба из которых включены вместе в этот справочник. В HTML-документе элементы дополнительно расширяются интерфейсом API HTML DOM, HTMLElementа также другими интерфейсами, описывающими возможности определенных типов элементов (например, HTMLTableElementдля <table>элементов).

NodeList	A nodeList— это массив элементов, аналогичный типу, возвращаемому методом document.querySelectorAll(). Доступ к элементам в a nodeListосуществляется по индексу одним из двух способов:
список.элемент(1)
список[1]
Эти два метода эквивалентны. В первом случае item()это единственный метод для nodeListобъекта. Во втором используется типичный синтаксис массива для извлечения второго элемента списка.


Attr	Когда элемент attribute(например, метод) возвращает объект createAttribute(), это ссылка на объект, предоставляющая специальный (хотя и небольшой) интерфейс для атрибутов. Атрибуты — это узлы в DOM, как и элементы, хотя вы можете редко использовать их в этом качестве.

NamedNodeMap	A namedNodeMapпохож на массив, но доступ к элементам осуществляется по имени или индексу, хотя последний случай служит лишь удобством перечисления, поскольку они не имеют определённого порядка в списке. В A namedNodeMapесть item()метод для этой цели, и вы также можете добавлять и удалять элементы из namedNodeMap.

https://ecma-international.org/publications-and-standards/standards/ecma-262/

https://dom.spec.whatwg.org/#event

