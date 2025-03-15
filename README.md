# Delivery Calculator

This project is a Delivery Order Price Calculator UI (DOPC) built with React, TypeScript, and Vite. It allows users to calculate the total price of a delivery order, including cart value, small order surcharge, and delivery fee. The UI ensures validation, accessibility, and user-friendly feedback.

![login page](/public/dc.png)


## Instructions for installing and running the project 

1. Ensure Node.js and npm are installed on your system

2. Navigate to the project directory

3. Install dependencies with command 'npm install'

4. Run the project with command 'npm start'

5. Navigate to http://localhost:5173/


## Testing the project

1. Run all tests with command 'npm test'

2. Run individual tests with command 'npm test -- <testfile>' e.g. npm test -- Input.test.tsx (testers for each individual react component are found from srcs/__tests__)

## How to use

1. Enter the following details:
    Venue Slug: for testing you can use 'home-assignment-venue-helsinki'
    Cart Value: Any amount in EUR (e.g., 10.50)
    User Latitude & Longitude: Input manually or click "Get Location"
    
2. Click "Calculate Delivery Price" to see the total cost breakdown

### Venue Slug

The venue slug home-assignment-venue-helsinki returns specific delivery distance ranges that affect the delivery fee calculation. 

If a user’s location is 600m away from the venue:

Base price from API: 1.99€
Additional charge: 1.00€ + (1 * 600 / 10) = 1.00€ + 0.60€ = 1.60€
Total delivery fee: 1.99€ + 1.60€ = 3.59€

If the user is 1000m or more away, the venue does not deliver to that location.

Let me know if you need more details! 🚀
