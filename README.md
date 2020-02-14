# Sweet Dreams 


<br>


## Description

SWEET DREAMS is an app that is designed for the user who would like to get into a relaxed mood before going to bed. For many people it is difficult to switch off after activities and just go to bed. SWEET DREAMS offers the user an easy way to play some relaxing music or ambient sounds, for a certain amount of time that the user can specify.
There is an option to create up to three playlists for favourites.


<br>

## User Stories

- **error**- As a user I want to see when there is an error, and a clear message of what I have to do next.
- **sign up** - As a user I want to sign up to have access to the app and use it.
- **login** - As a user I want to be able to log in the app so that I can access my account and use the app.
- **logout** - As a user I want to be able to log out from the app so that I can make sure no one will access my account.
- **homepage** - As a user I want to quickly go to the homepage, to select the genre of sound or music that would help me to relax and play the music.
- **functionality** - As a user I want to be able to see the playtime of the music, the song that is playing, and I want the option to set a timer for the length of the playtime.
- **create playlists** - As a user I want to be able to create or delete playlists of my favourite music.
- **see playlist details** - As a user I want to be able to see the details of the playlist that is playing.
- **add music** - As a user I want to be able to add tracks to a playlist.
- **edit user** - As a user I want to be able to edit my profile.
- **delete user** - As a user I want to be able to delete my profile.
- **profile** - As user I want to check my profile page and check my personal information and my playlists.

<br>

## Minimal Viable Product (MVP)
1. Sign-up, log-in, log-out functionality.
2. Profile page with options to add avatar/picture, dropdown menu for editing username, changing password or deleting account
3. Navbar with buttons for homepage, option page, playlist page, profile page, plus logout.
4. Homepage with clickable images that link to music playlist that starts playing immediately.
5. Player page with display of track information, timer, button to add tracks to playlist, timeline of playtime.
6. Playlist page with an overview of user's playlist(s), buttons to edit playlist and button to add new playlist, and explanation of maximum number of playlists.


<br>


## API Routes (Back-end):



| **Method** | **Route**| **Description**|
|---|---|---|                             
| `GET`      | `/login`  | (public) Renders `auth-views/login` form view.              
| `POST`     | `/login`  | Sends Login form data to the server. Redirects to the `index` view (url: `/`).        
| `GET`      | `/signup` | (public) Renders `auth-views/signup` form view.             
| `POST`     | `/signup` | Sends Sign Up info to the server and creates user in the DB. Redirects to the `index` view (url: `/`).
| `GET`   | `\`  | Renders the index view.
| `GET`      | `/signout` | (public) Renders the home `auth-views/login` view.     
| `GET`      | `/profile/:id`| Private route. Renders `user-views/profile` view.
| `GET`      | `/profile/:id/edit`| Private route. Renders `user-views/edit` form view. 
| `POST`      | `/profile/:id/edit`| Private route. Sends edit-profile info to server and updates user in DB. Redirects to the `user-views/profile` view (url: /profile/:id).
| `DELETE`   | `/profile/:id/delete`| Private route. Deletes the profile from the server and updates DB. Redirects to the `auth-views/login`.
| `GET` | `/player/`  | Private route. Renders `user-views/player` view.
| `GET`     | `/my-playlists` | Private route. Renders the `playlist-views/showAll` view all playlists from the current user. 
| `GET`     | `/my-playlists/:playlistId` | Private route. Renders the `playlist-views/show` show a playlist from the current user.
| `POST`     | `/my-playlists/add`  | Private route. Adds a new playlist for the current user. Redirects to the `user-views/player`.  
| `DELETE`   | `/my-playlists/:playlistId/delete` | Private route. Deletes user's playlist.
| `POST`  | `/my-playlists/:playlistId/add/:trackId/`| Adds a track to playlist.
| `POST`   | `/my-playlists/:playlistId` | Private route. Renders the current playlist in the DB.
| `DELETE`   | `/my-playlists/:playlistId/delete/:trackId` | Private route. Deletes track from user's playlist.

<br>

## Models

User model

```javascript
{
  username: {type: String, required: true} ,
  email: {type: String, required: true} ,
  password: {type: String, required: true},
  imageURL: {type: String},
  playlists: {type: Array}
}
```

Playlist model

```javascript
{
  playlistName: {type: String, required: true} ,
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  tracks: {type: Array},
}
```


<br>


## Backlog
- Find lyrics of songs
- Offer music suggestions to user
- Option for user to upload own music
- Option for user to share playlists with friends

<br>



## Links

[See the Trello board.](https://trello.com/b/aj86QQxb/sweet-dreams)

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Jethet/project-sweet-dreams)

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link]()
