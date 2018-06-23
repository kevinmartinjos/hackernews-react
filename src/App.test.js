import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from "./App";
import Search from "./Components/Search/Search";
import Button from "./Components/Buttons/Button";
import Articles from "./Components/Articles/Articles";


describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
       const component = renderer.create(<App />);
       let tree = component.toJSON();
       expect(tree).toMatchSnapshot();
    });
});


describe('Search', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
       const component = renderer.create(<Search/>);
       let tree = component.toJSON();
       expect(tree).toMatchSnapshot();
    });
});


describe('Button', () => {
   it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Button> Hello world </Button>, div);
       ReactDOM.unmountComponentAtNode(div);
   }) ;

   test('has a valid snapshot', () => {
       const component = renderer.create(<Button> Hello world </Button>);
       let tree = component.toJSON();
       expect(tree).toMatchSnapshot();
   });
});

describe('Articles', () => {
    const props = {
        articles: [
            {title: 'Hello', author: 'World', num_comments: 2, points: 20, objectID: 1},
            {title: 'Foo', author: 'Bar', num_comments: 6, points: 10, objectID: 2}
        ]
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Articles {...props}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
       const component = renderer.create(<Articles {...props}/>);
       let tree = component.toJSON();
       expect(tree).toMatchSnapshot();
    });

});