# Final Project Planning

## Project Description

- Project title: Goplay
- Project description: this app solves it issue of finding sport centers, pitches, courts and fields for people in an active lifestyle
- Target audience: the target audience is for people who play sports and lead and active lifestyle
- Team members: Solo

## User Stories

- user should be able to login
- user should be able to logout
- user should be able to register
- user should be able to view their profile
- user should be able to update their profile
- user should be able to save a location
- user should be able to be able to view all their saved locations
- user should be able to share location with people (team, etc)
- users should be able to search for any area/city in the world for locations (i.e user should be able to do a map search)
- user should be able to see a list of available locations based on a map search
- user should be able to see pins that correspond to the list of available locations on a map (i.e a map can contain many points)
- user should be able to view the map
- each point/pin should have: a title, description, image, rating
- user should be able to see default location (usually their location) once they visit the homepage
- user should be able to save locations and share only if they are logged in (i.e authenticated users can save, share locations)
- authenticated users can unsave locations

## Tech Choices

- Front End: React
- Back End: Express
- Database: Postgres

## Database Tables

users

- id SERIAL PRIMARY KEY NOT NULL
- first_name VARCHAR(50) NOT NULL
- last_name VARCHAR(50) NOT NULL
- email_address VARCHAR(255) NOT NULL
- password VARCHAR(255) NOT NULL

saved_locations

- id SERIAL PRIMARY KEY NOT NULL
- title VARCHAR(255) NOT NULL
-
