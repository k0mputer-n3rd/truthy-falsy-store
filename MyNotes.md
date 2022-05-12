# truthy-falsy-store

Fake Store homework for React Class

These are my notes on doing this homework. The notes include items not clear in the code itself, including what I have done with GitHub and Terminal, such as cloning and loading npm, react, etc.

## GitHub Setup

I created a new repository on GitHub, with the following specifications:

- No Template
- Name: truthy-falsy-store
- Description: Fake Store homework for React Class
- Public
- Add a README file

The name cannot contain upper case letters, to comply with something I don't remember. It may be a requirement of React.

The README file is added so that the repository is not empty. This is needed so that the clone function will work correctly.

## Cloning the Repo

I used VSCode to clone the repo. I used the HTPPS connection.

After cloning, I renamed README.md as MyNotes.md and used it for these notes. The React installation will create a new README.md file.

## Installing React

At the terminal:
npx create-react-app truthy-falsy-store
npm install react-router-dom


Note: "npm install" will use the package.json file and install all dependencies required. This is useful when cloning someone else's application from GitHub, where the dependencies are not included.

## Fake Store Website
https://fakestoreapi.com

Categories = ["electronics","jewelery","men's clothing","women's clothing"]

## Credits
This video on Context API was very helpful:
https://youtu.be/3yrMcx02jXs

## To Do:
Debug quantity in ProductDetails.
Change addToCart for insertion by product id.
Call cart functions from Product Details.
Select products from cart page.
Learn StyledComponents.
Format Products page.
[ask] Why does Andrew use "let" instead of "const" for navigate and a few other things?
It looks like I have a lot of junk in node_modules. Is housekeeping needed? [ask]
Do I always need to import React? Remove if not needed. [ask]
Check to see where stylesheets are needed, remove unneeded imports.
Remove commented code that is not used.
Add comments where helpful.
Remove console.log() when done.
Layout needs to be adapted for mobile screens.
