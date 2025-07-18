# 🎬 Movie Search App

A React-based movie listing and search application using Redux Toolkit and the OMDb API. Users can view popular movies, search by title, and navigate between routes.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── MovieList.jsx
│   ├── MovieSearch.jsx
│   ├── Navbar.jsx
│   └── SignIn.jsx
├── features/
│   └── user/
│       ├── thunk.js
│       └── userslice.js
├── axios/
│   └── axiosApi.js
├── app/
│   └── store.js
└── App.jsx
```

---

## ⚙️ Tech Stack

- **Frontend**: React, Bootstrap
- **State Management**: Redux Toolkit
- **Async Actions**: Redux Thunks
- **API**: [OMDb API](https://www.omdbapi.com/)
- **Routing**: React Router

---

## 🔑 Features

- 🔍 Search movies by name
- 🎞 Display popular movies by default
- ⏳ Loading state and error handling
- 🧭 Navigation with React Router
- 🧠 State managed via Redux Toolkit

---

## 🚀 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <your_repo_url>
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

---

## 📄 Component Overview

### `store.js`
Sets up Redux store with user reducer.

### `axiosApi.js`
Creates an Axios instance with OMDb base URL.

### `thunk.js`
Defines an async thunk to fetch movies:
```js
params: {
  apikey: 'e562eb7c',
  s: query || 'Avenger',
  page: 1
}
```

### `userslice.js`
Manages loading, error, and user state from API.

### `MovieList.jsx`
- Fetches and displays default movie list on mount

### `MovieSearch.jsx`
- Input field to search movies by title
- Dynamically updates movie list

### `Navbar.jsx`
- Navigation links to `/list`, `/search`, and logout

### `SignIn.jsx`
- Simple login form
- Navigates to `/list` after login

---

## 🔁 Routing

| Route     | Component      | Purpose                  |
|-----------|----------------|--------------------------|
| `/`       | `SignIn`       | Login screen             |
| `/list`   | `MovieList`    | Show default movies      |
| `/search` | `MovieSearch`  | Search movies by title   |

---

## 🔐 OMDb API

- **Base URL**: `https://www.omdbapi.com/`
- **API Key**: `e562eb7c`
- **Sample Request**:  
  ```
  https://www.omdbapi.com/?apikey=e562eb7c&s=batman&page=1
  ```

---

## 📌 Future Enhancements

- ✅ Add pagination
- ✅ Use `.env` file for API keys
- ✅ Debounce movie search input
- ✅ Add detailed movie view via IMDb ID
- ✅ Integrate Firebase or JWT for real auth

---

## 📃 License

This project is open-source and free to use for learning purposes.

---
