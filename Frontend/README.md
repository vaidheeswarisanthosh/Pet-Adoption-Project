



# Routing Structure
The application utilizes React Router for navigation between various pages. Below is a description of the defined routes and their functionalities:

# Public Routes
#  /

Component: Register

Description: The homepage where users can register for the platform.

--------------

#  /login

Component: Login

Description: Login page for users to access their accounts.

----------------

#  /pets/:petId

Component: PetDetails

Description: Displays detailed information about a specific pet, identified by petId.

------------------

 #  /unauthorized

Component: Unauthorized

Description: A page displayed when a user tries to access a restricted resource without proper authorization.

----------------------

#  Pet Management Routes

 #  /add-pet

Component: PetForm

Description: A form to add a new pet to the system.

---------------------

# /pets/add

Component: PetForm

Description: Another route to add a pet (alternate path).

---------------------

#  /pets/edit/:id     

Component: EditPet

Description: A form to edit the details of an existing pet, identified by id.

-----------------------

#  Adoption Process Routes

#  /adopt/:petId

Component: AdoptionForm

Description: A form to submit an adoption request for a specific pet, identified by petId.

# Dashboard Routes

#  /dashboard/adopter

Component: AdopterDashboard

Description: Dashboard for adopters to view and manage their adoption activity.

#  /dashboard/shelter

Component: ShelterDashboard

Description: Dashboard for shelters to manage their pets and view adoption applications.

#  /dashboard/admin

Component: AdminDashboard

Description: Admin dashboard for managing the platform.



 # Additional Notes

#  Authentication & Authorization:

Routes are wrapped in the AuthProvider component to manage user authentication and protect specific routes.

# Reusable Components:

The NavBar is rendered across all pages to provide easy navigation.

This structure ensures clear navigation and allows users to perform necessary actions based on their roles (e.g., adopter, shelter, or admin).





# Pet Adoption Platform:


# Project Work Flow:

# User Roles and Registration

# User Registration

# Goal: Allow adopters, shelter representatives, and admin users to sign up.

# Flow:

Users fill out a registration form based on their role (adopter or shelter).

Backend validates and stores user data securely.

Redirect to the Login Page upon successful registration.


#  User Login

# Goal: Enable registered users to log in securely.

# Flow:

Users provide their email and password.

# Upon successful authentication, users are redirected to their respective dashboards


# Dashboard

# Adopter Dashboard

Browse and favorite pets for adoption.

# Browse Pets

Goal: Display all available pets with search and filter options.

# Features:

Filters: name, age, size, and location.

Clickable cards redirect to Pet Details.

# Pet Details

Goal: Provide detailed information about a specific pet.

# Features:

Photos, description, age, breed, and shelter contact details.

Call-to-action button: Adopt This Pet.

# Adoption Process

# Submit Adoption Request

# Goal: Allow adopters to apply for a pet.

Flow:

Click Adopt This Pet on the pet details page.

Fill out an adoption form with personal details and reason for adoption.

Request is sent to the respective shelter for review.


# Shelter Dashboard

# Features

Add, update, and delete pet profiles.

# Add/Edit and Delete Pet

# Goal: Allow shelters to manage pet profiles.

Flow:

Fill out a form with pet details (name, type, age, photos, description).

we don't want that pet details means, we have an option to edit and  delete profile.

Save to the database and display on the platform.


# Admin Dashboard

# Features:

Manage all users (adopters, shelters, and admins).

View and moderate all pet profiles .


# Logout Button

The logout button allows users to securely end their session and is an essential feature for any authenticated application.

# Features

Purpose: Ends the user’s session by removing their authentication token.

Effect: Redirects the user to the home or login page.


# Technology Stack

Frontend: React, React Router, TailwindCSS

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT-based secure login




# Detailed documentation for each API endpoint in Postman.

# https://documenter.getpostman.com/view/38636115/2sAYHzHNqH 