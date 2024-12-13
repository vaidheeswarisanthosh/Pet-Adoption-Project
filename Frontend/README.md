



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