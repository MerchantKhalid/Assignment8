import React from 'react';

const Theory = () => {
    return (
        <div>
        <div className='theory'>
            <h2>How React js Works</h2>
            <h3>
            React is a JavaScript library for creating interactive and fast user
            interfaces for web and mobile apps. Its component-based open-source front-end library that is solely responsible for the application’s view layer.To render content, React components do not necessarily require the execution of steps. Therefore, React components rely heavily on JSX.When the data changes and we need to render the component, React differs from libraries such as handlebars. Handlebars create the entire HTML string, as was the case with the original rendering.

            on the otherhand,
            Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
            </h3>
        </div>
        <div className='theory'>
        <h2>Props vs state</h2>
        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
        </div>
        <div className='theory'>
<h2>How use effect works</h2>
useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.The useEffect Hook allows you to perform side effects in components.
The React Hook useEffect allows a functional component to perform side effects. It works in a similar fashion to the lifecycle methods componentDidMount, componentWillUpdate, and componentWillUnmount in React class components. Refer to this introduction on React lifecycle methods for more details.
        </div>
            
        </div>
    );
};

export default Theory;