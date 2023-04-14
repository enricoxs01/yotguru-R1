# yotGuru 

yotGuru aims to provide an application to support the need for boat maintenance from the end user to the provider. It provides the possibility to register one or more vessels, maintain records, schedule work orders, ensure an accurate inventory of the systems, and many other capabilities. R1 is the first incarnation of the website.

![yotGuru](./public/images/Welcome%20Screen.png)

Once the login via Google is successful the user is presented with the main landing page at Vessels.

![app](./public/images/App%20Screen.png)


R1 primary goal is to establish the basic framework to create an account, collect information and for a user to add one or more vessels. The application is OAuth enabled via Google API. The vessels can be associated with only one account. There can be only one account per login user. Upon logging in the first time the user is required to fill out the account information before any vessel can be added.

## Installation

There is no installation required for the web application. The application can be reached at https://yotguru-r1.herokuapp.com/


## Usage

**Vessels** provides a list of vessels. The user can add a new one or view the details of each. From the details view the user can edit or delete a vessel.

**Account** via this button the user can fill out or update its account record.

**Logout** this button terminates the session for the user.


## Technologies 

The application is built on Node.js, Express, Mongoose, MongoDB and it is deployed to Heroku.

## License
At this time there is no license for this application.