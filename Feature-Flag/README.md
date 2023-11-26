# Feature Flag

## Create a feature flag component in React that consumes a feature's API and conditionally renders UI based on the value of the feature. This question was asked in Atlassian's machine coding interview.

the task is to develop a feature flag component in React. This component will interact with a feature's API and display specific UI elements based on the feature's value. The purpose of this component is to enable or disable various UI features dynamically, depending on the user's chosen service plans in large web applications.

To achieve this, the React feature flag component will consume the feature's API to retrieve a list of available features. These features will be centralized, ensuring that the logic is abstracted into a single location to serve as the definitive source of truth. By utilizing the context API in React, the features will be cached, and the useContext hook will provide access to these features throughout different components in the application codebase.

## Tech

- React
- Css

## Screenshot

![Feature-Flag](https://github.com/anandbaraik/mcr-questions/assets/31516195/7c96ba7a-95cd-4374-8257-97d0b37b3d4e)
