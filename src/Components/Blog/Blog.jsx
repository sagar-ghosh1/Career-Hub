import React from 'react';
import './Blog.css';

const Blog = () => {
   return (

      <div className='blog'>
         <div className="containers">

            <div className="head-title">
               <h1>1) When you should use context api ?</h1>
               <p>Any data that may be required by many components, and may need to be updated in realtime, use the context api to use the data, the context api can send the data to any component without any props drilling. It works like a network tower. Dark mode data, user data, useContext api can be used for this type of data, because this data is used in many components. </p>
            </div>

            <div className="head-title">
               <h1>2) What is Custom Hook ? </h1>
               <p>A custom hook in React is a JavaScript reusable stateful function, this function basically contains logic, and is in a separate file. Custom hooks are typically created using the naming convention 'use' to indicate that they are hooks. Using custom hooks increases code reusability and readability.</p>
            </div>

            <div className="head-title">
               <h1>3) What is UseRef and how is it work ? </h1>
               <p> The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. useRef is commonly used for managing DOM references, handling animations, measuring element dimensions, or caching values that need to persist across renders without triggering re-renders. However, it should not be used as a replacement for useState when you need to manage component state that should trigger re-renders.
               </p>
            </div>

            <div className="head-title">
               <h1>4) What is UseMemo and how is it work ? </h1>
               <p>The useMemo hook in React is a built-in hook that allows you to memoize the result of a computation and only update it when its dependencies change. It helps to optimize performance by avoiding unnecessary computations in functional components.useMemo is commonly used for performance optimization in scenarios where a computation is expensive or time-consuming, and the result can be reused as long as the dependencies remain unchanged. It can be used to memoize calculations, data transformations, and other functions that are called within a component.
               </p>
            </div>

         </div>
      </div>
   );
};

export default Blog;