# BetEasy_Frontend
BetEasy_Frontend coding challenge

# Application Requirements
1.	Request data from and display the next 5 races from this API -
https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump
2.	Ensure the data displayed is kept up to date as the information may change over time
3.	Add these required fields to your UI view
Event Name, Event Venue, Time the event starts, iconography (see https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/design-sample.png)
4.	Add styling to reflect the BetEasy Brand (www.beteasy.com.au)
5.	Create unit tests as required to verify your application works and explain why you have written tests

# How to Configure, Run and Test
1. Clone the repository
2. Move to /my-app directory
3. Execute "npm install" command
4. To run the application, execute "npm start"
5. To run test cases, execute "npm test -"

# Design
1. create-react-app is used as base
2. Redux is used to store data/properties
3. styled-components and bootstrap is used
4. API is called in every 5 seconds to fetch latest data. Interval is set in componentDidMount() and removed in componentWillUnmount() event
5. If API returns unexpected result or exception, then error message is displayed and race list won't be rendered

# Assumptions & Limitations
1. Design in not complete
2. Not enough test cases due to time constraint. One component and 2 reducer unit test cases
3. Overall design and structure can be improved
4. Not enough time to create CI/CD pipeline. But I know how to create CI/CD Gitlab pipeline
