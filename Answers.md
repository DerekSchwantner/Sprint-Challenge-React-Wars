# Answers

1.  What is React JS and what problems does it try and solve?

ANSWER: React JS is a Javascript framework. One of the problems it solves is dealing with complex pages with changing pieces of UI. React makes it so the entire page doesn't have to keep reloading yet the areas that are being updated will do so. This vastly improves the performance.

2.  What does it mean to _think_ in react?

ANSWER: To think in react is to view the app from a perspective that always keeps in mind the modularity of React. This means structuring your thought process to be breaking down pieces of the UI into components and subcomponents that can be swapped out and reused. On top of this modular perspective, always keeping in mind the flow of data throughout the components.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

ANSWER: the main difference between the 2 is that class components usually have state. The default should be trying to use stateless components because they are more efficient. Functional components can only take props and state cannot be added to them. The functional components can be exported and included in the stateful components and this makes the code much more readable.

4.  Describe state.

ANSWER: State is an object that represents the part of the app that change over time. State is initialized and controlled by the components and is private. When the state changes, the component re-renders.

5.  Describe props.

ANSWER: “props” is short for “properties”, and they are something that is passed down into components. They are a way to pass data between components.
