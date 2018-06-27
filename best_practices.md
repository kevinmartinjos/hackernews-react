### Squad front-end PR checklist

#### Essential reading:

1. The [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) guide.
2. 


#### Styling:

We use the x style guide. The linter has been configured to accordlingly.

We use ES6

#### Static typing:

Typescript/Flow

#### Javascript
1. Use [ES6](https://codeburst.io/javascript-wtf-is-es6-es8-es-2017-ecmascript-dca859e4821c)
2. Use [promises](https://gist.github.com/domenic/3889970) over [callbacks](https://techbrunch.gousto.co.uk/2016/04/22/callback-hell/callbacks.png)
3. Use [functional programming goodies](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d) that come with javascript. Y tho? See [this](https://stackoverflow.com/questions/34385243/why-is-immutability-so-important-or-needed-in-javascript) SO question and if you have a lot of free time, [The Dao of Immutability](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd)
 
#### ReactJS
1. Do not manipulate the DOM directly unless there's no other way. No, you cannot use jQuery. Read about [Refs](https://reactjs.org/docs/refs-and-the-dom.html) and [lifting the state up](https://reactjs.org/docs/lifting-state-up.html)
2. Do not change state inside the `render()` method - see [life cycle methods](https://reactjs.org/docs/state-and-lifecycle.html) and understand [how React decides to re-render a component](http://lucybain.com/blog/2017/react-js-when-to-rerender/)
3. Specify a unique key when rendering a list. However, beware of [this gotcha](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) - do not use array index as key
4. Prefer [error boundaries](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) over `try...catch`

#### State management

We use [Redux](https://redux.js.org/) for state management. This does not mean all state should be managed by Redux.

Use Redux to manage your state variable only when:

1. You find yourself passing down the state as props to more than 3 levels deep
2. A lot of components need access to the variable

Good examples of variables that should be managed by Redux:
1. The user who is currently logged in
2. All items that the user added to his/her shopping cart

Also, setState() [is async](https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3).

[This](https://spin.atomicobject.com/2017/06/07/react-state-vs-redux-state/) is a good guide to follow when you can't decide where to store your state.
Read [You might not need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) by the author of Redux to understand the trade-offs that come with using Redux.

#### CSS
