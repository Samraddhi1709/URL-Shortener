# URL Shortener & Search Optimisation

The URL Shortener and Search Optimization project is designed to simplify long URLs into shorter, more manageable links. Additionally, it incorporates a basic search functionality to efficiently locate specific URLs.

  ## Installation
   To run this project, follow these steps:
    
    Run "npm install" to install the dependencies.
    Run "npm start" to start the application.

  This project will run at "http://localhost:8080";

  ## Technologies Used

  ### Frontend 

    EJS (Embedded JavaScript) for the client-side interface
    Bootstrap

  ### Backend
    Node.js
    Express.js
    mongoose
    MongoDB



## How It Works

  ### 1 For generate short url

    For every original URL you provide, a random string is generated and appended to the project's hosting domain to create a short URL. The short URL is then mapped to the original URL. So, when you access the short URL, it automatically redirects you to the original URL.

  ### 2 For search url

 You can search for URLs by one the following

  - full url (original url)

  - short url (generate url)

  - short url but not include domain name (on which project run) like if your generated short url is "http://localhost:8080/dsffhfpj" then you are able to search with "dsffhfpj" , you don't need to search by whole shprt url


  The search result will provide you full url , short url that are generated and number of clicks that short url get


  ### 3 Authentication


  - During the signup process, your email ID is used, and your password is securely hashed and saved in the MongoDB database.

  - When you log in with the correct email and password, a JSON token is generated by the server and stored in browser cookies.

  - This token has an expiration time of 1 hour.

  The next time you visit (before token exprire) the website where the project is running, the server verifies your token. You won't need to log in again, and you can access the resources of the website.



## References
Here are some helpful wesites

[Express-APT Documentation](https://expressjs.com/en/4x/api.html)

[Mongoose Documentation](https://mongoosejs.com/)

[EJS Documentation](https://ejs.co/)

[ json token npm package](https://www.npmjs.com/package/jsonwebtoken)
[Bootstrap Documentation](https://getbootstrap.com/)
