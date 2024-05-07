import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='p-5 p'>1.When should we wee context API?</h1>
            <p className='p-5'>Ans:The Context API allows we to create a "global" state that can be accessed and modified by any component in the component tree without needing to pass the data through intermediate components that don't need it. This can make wer code more efficient and easier to maintain, especially for larger applications where data sharing is a common requirement. <br />
Here are some specific scenarios where using the Context API might be appropriate: Theming: If we want to apply a consistent visual theme across wer entire application, we can store the theme data in a context object and access it from any component that needs to style its content accordingly. Authentication: If we need to authenticate users and track their login status, we can store the user's login credentials and authorization status in a context object, and any component that needs to display or interact with user-specific data can access this context. Language localization: If we want to display wer application's content in multiple languages, we can store the currently selected language in a context object, and any component that needs to display text can access this context and display the appropriate translation.
</p>

    <h1 className='p-5'>2.What is a custom hook?</h1>
    <p className='p-5'>Ans:A custom hook in React is a reusable function that encapsulates a specific behavior or logic that can be shared across multiple components. It allows you to extract and reuse stateful logic from a component, without the need for higher-order components or render props. Custom hooks are created by prefixing the function name with the word "use", which is a convention to signal that the function should be used as a hook.
Custom hooks typically use one or more of the built-in React hooks such as useState, useEffect, useContext, and useReducer to manage state and side-effects, but they can also use other hooks or external libraries.</p>
        </div>
    );
};

export default Blog;