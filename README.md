# REST-Rant-Project

this is the frst step in creating our fully featured rest rant app

| Method | Path              | Purpose                                 |
| ------ | ----------------- | --------------------------------------- |
| GET    | /                 | Homepage                                |
| GET    | /places/          | List all places                         |
| POST   | /places           | Create New Place                        |
| GET    | /places/new       | Form page for creating a new place      |
| GET    | /places/:id       | details about a partiular place         |
| PUT    | /places/:id       | Update a particular place               |
| GET    | /places/:id /edit | form page for editing an existing place |
| DELETE | /places/:id       | delete a particular place               |
| POST   | /places/:id/rant  | create a rant about a particular place  |
| DELETE | /places/:id       | delete a rant about a particular place  |
| GET    | \*                | 404 Page (match any route not defined)  |

---

1. As A Dev, i need to request data from the server from a specific place, so i can populate the places detail page.
2. As a user, i need a place to view specific details of one of my pages on a new JSX page, so i can use the app
3. As a user, I need to edit a place using a new place editing form page, so i can change the data for one of my existing places. 
