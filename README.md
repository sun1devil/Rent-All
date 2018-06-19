# Rent-All

Project to all ow users to rent out to, or rent from other users thus,  in this project provider posts items to rent on the Rent-All website. User selects an item user wants to rent and for how long user wants to rent the item. Once an item has been rented, the item will not be available for rent to other users.

This is ideal for people who need items for a short duration but do not want to purchase the items can now rent. 

![demo](/public/assets/Images/Rent-All.gif)

## Using the Project

Open up the [project link](https://enigmatic-shore-55514.herokuapp.com/) and you should be able to try it out!

### Testing the application locally:
1. Please ensure node.js is install, node.js is required to install packages from NPM. You can download the program at:

    https://nodejs.org/en/download/


2. In your terminal navigate to your specified folder, type the following to install all required packages listed in package.json:
    ```
    npm install
    ```

3. Create a SQL database with the name "rent_all_db". For example in MySQL:
    ```
    CREATE DATABASE rent_all_db;
    ```

4. Create a ".env" file with the following information and update the "<>" with your SQL server information.
    ```
    SEQUELIZE_USER=<root>
    SEQUELIZE_PASSWORD=<password>
    SEQUELIZE_HOST=<localhost>
    ```

5. Run the server by entering the following in your terminal.
    ```
    node server.js
    ```

## Built With

* [Google Sheets](https://www.google.com/sheets/about/) - Online spreadsheets used for project management, organization, and scheduling. 
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Mark up language used for structuring pages. 
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Stylesheet language used to describe presentation of pages. 
* [Animate CSS](https://daneden.github.io/animate.css/) - Web library used to add special effects to elements in the DOM. 
* [Heroku](https://www.heroku.com/)- Cloud platform which builds databases and websites deployed online. 
* [Javascript](https://www.javascript.com/) - The scripting language used to manipulate the DOM. 
* [BootstrapCDN](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - The web framework used for styling. 
* [jQuery](http://jquery.com/) - Javascript library for DOM and CSS manipulation.
* [Moment.js](https://momentjs.com/) - Javascipt library for time calculations.
* [Sequelize](http://docs.sequelizejs.com/) - Promise based ORM for Node that supports MySQL interactivity.
* [Node](https://nodejs.org/en) - Javascript run-time environment that exectues server side code.
* [Express](https://www.npmjs.com/package/express) - Node package used as middleware to create routes.
* [Body-Parser](https://www.npmjs.com/package/body-parser) - Node package used as middleware to extract entire body portion of an incoming request.
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - Node package used as middleware to create templates for rendering pages. 
* [Dotenv](https://www.npmjs.com/package/dotenv) - Node package used as middlewares to keep passwords and other sensitive data from being uploaded and shared on the web through github. 
* [Passport](https://www.npmjs.com/package/passport) - Node package used as middleware for user authentication by hashing passwords. 
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Node package used as middleware with Node and passport package for user authentication and password decryption. 
* [MySql](https://www.mysql.com/) - Structured Query Language is a relational database management system used for storing data.
* [Console](https://docs.microsoft.com/en-us/windows/console/console-functions) for Windows or [Terminal](https://support.apple.com/guide/terminal/welcome/mac) for Mac - Command Line Emulator to create directories, documents, edit structure, and run server locally for testing. 



## Stretch Goals

* Usage of Categories and Subcategories
* Incorporate Login Authentication
* Incorporate fully functional map
* Incorporate Location Functionality


## Built and Maintained by:

* **Eric Ng**  - [EricNg314](https://github.com/EricNg314)
* **John McLeod**  - [sun1devil](https://github.com/sun1devil)
* **Linh Tong**  - [linhthitong](https://github.com/linhthitong)
* **Roberto Baldizon**  - [b0bbybaldi](https://github.com/b0bbybaldi)

## Additional Resouces:
Users can get further help in w3shcools or MDN or stockoverflow or nodejs.org.

## Acknowledgments
A huuuuge MEGA bigly thank you to Amber (and Jerome, Sasha and Ricky)!!  :grimacing:

