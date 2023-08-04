# E-Commerce Database

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a database for an e-commerce site using Express and Sequelize. This is used to manage inventory by creating, updating and deleting from the database. It's the back-end way to keep track of items and organizing it by products, tags and categories.

Once I was able to understand to use the Models and importing them to my routes, I applied the concept and worked on the routes. The PUT routes for each were difficult, but I was able to understand how it works and applied it to my code.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To get started, users will have to use a terminal and clone the GitHub repository in their own directory.

	git clone git@github.com:cmdnguyen/ECommerce-Database.git

Once cloned, users will need [VSCode](https://code.visualstudio.com/download) and open up the directory. In the terminal, you can use the following commands:

	cd ECommerce-Database.git
	code .

Users will also need [NodeJS](https://nodejs.org/en), [MySQL](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) & [Insomnia](https://insomnia.rest/download) installed. I used the LTS version for Node.

Users will need to initizalize npm and install the packages needed to run the program. Input the following commands in the terminal:

	npm init -y
	npm install

Before you can access the database through Sequelize, you will need to create `.env` file. Users will have to create a new file called `.env`. 

There's a `.env.EXAMPLE` as a reference when you create your `.env` file. You will have to put their MySQL username and password as a string in the `.env` file.

Once your `.env` file is created, go into the MySQL terminal with this command:

    mysql -u root -p

Once you are in the terminal, put the following in order to source the schema and exit the MySQL terminal:

    source db/schema.sql;
    quit;

Now that you have sourced the schema into the database, you will need to source the seeds. Input this command to insert the seeds into the database:

    npm run seed

## Usage

Once everything is installed, you can start the server. You can use either of these commands to start the `server.js` file.

    npm start
    node server

You should get the following message: `App listening on port 3001!` That means the server is up and running in `localhost:3001`.

Open up Insomnia to access and manipulate the database. 

Use `localhost:3001/api/products`, `localhost:3001/api/tags`, or `localhost:3001/api/categories` in the URL.

Here are the video demostration for the Express call of products, tags and categories (Notice how I created different Express calls for each route in the demostration):

[ECommerce DB Categories.webm](https://github.com/cmdnguyen/ECommerce-Database/assets/131038401/5558461d-1dea-4d24-abc9-9e9d5e3cb99e)

---

[ECommerce DB Tags.webm](https://github.com/cmdnguyen/ECommerce-Database/assets/131038401/752d63c7-5724-4879-9cb5-45a3d79ea04c)

---

[ECommerce DB Products.webm](https://github.com/cmdnguyen/ECommerce-Database/assets/131038401/0acb638b-7f70-4f2d-99ca-d3178ff4d78b)

---

## Credits

Boot Camp Instructor, Eli Montoya

Boot Camp Tutor, Alexis Gonzalez

ChatGPT - I used it to help better understand Express routes

## License

MIT License

Copyright (c) 2023 Catherine Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
