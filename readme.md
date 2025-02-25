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
