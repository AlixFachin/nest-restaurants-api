# Project Notes

## Summary

This doc will contain the notes regarding this project.
TBD for the structure

## System Main Functionalities

- List of restaurants of the area
- Can login and register as a user
- If not logged, main functionalities:
  - Queries of looking at restaurants around
    - By cuisine
    - By Price
    - By "what is opened today" (which is the main call)
- If registered, enable to:
  - Like restaurants (or add to "Favourites"?) and apply this to the search query
- Restaurant owners will be able to:
  - Edit the data for the restaurants (day opened, etc)
  - Add some notifications notifications goes to everybody
- Admin user can add restaurants
  - Add restaurants
  - Add and delete users
  - Add and delete

## Entities and Tables

- Users:
  - System User, Admin User
- Restaurant and User connection:
  - One user can manage many restaurants
  - Restaurant has only one User manager (acceptable restriction at this point)
  - Only Admin can add a "management" relation between User and Restaurant
  - Restaurant has coordinates, address, area
- Likes
  - One user can "like" many restaurants
  - Only the user can add relations between themselves and the restaurants

### ENDPOINTS

- Users
  - Create User: Anyone
  - Read User: Admin + User
  - Update User: Admin + User
  - Delete User:
  - Reset Password: Anyone (should we throttle this endpoint to avoid abuse? Maybe add captcha)
- Restaurant
  - Create Restaurant: Admin
  - Read Restaurant: Anyone
  - Like Restaurant: User logged
  - Add a Management Relationship: Admin
  - Remove a Management relationship: Admin
  - Update a Management relationship: Admin
