# Error Boundary

An error boundary is a component that tracks JavaScript errors that occur anywhere in the component tree below it and prevents the program from crashing by showing a fallback user interface. It helps programmers to handle failures and stop them from spreading throughout the entire application. The entire tree’s constructors, lifecycle functions and rendering problems are all caught by error boundaries. it helps us in improving UX.

- Error boundary implements either one or both methods below -

  - static getDerivedStateFromError() : Used to render a fallback UI after error has been thrown. It is called during the render phase, so side effects are not permitted

  - componentDidCatch() : used to log error information. which are helpful for debugging & troubleshooting. It is called during the commit phase, so side effects are permitted

# Limitation

- it cant catch event handlers(onClick, onChange so use try catch), asynchronous programming(setTimeout, promise callback) or server side rendering
- The componentDidCatch lifecycle action and class components are used to implement error bounds. They can’t be directly used with functional components. However, we can achieve a similar feature with functional components by using the `react-error-boundary` from third-party libraries.

# What is the difference between error boundary and try…catch?

- Try…catch is a mandatory JavaScript feature used to detect mistakes. You must explicitly enclose the code you want to safeguard in a try…catch block.

- Error boundary is a declarative feature specific to React that allows you to wrap a component tree.

# WHEN SHOULD YOU USE ERROR BOUNDARY?

- To protect critical components from crashing the entire application.
- To log error information to help you identify and fix errors in your code.
- To handle errors in asynchronous operations, such as network requests.

# WHEN SHOULD YOU USE TRY...CATCH?

- To handle errors in specific blocks of code.
- To handle errors in event handlers.
- To handle errors in server-side rendering.
