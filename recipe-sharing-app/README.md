# Recipe Sharing App

## Description
The Recipe Sharing App is a React-based web application that allows users to share, manage, and explore a wide variety of recipes. Users can add new recipes, view detailed recipe information, manage their favorite recipes, search by recipe titles, and receive recipe recommendations based on their favorites.

## Key Features
- Add, edit, and delete recipes easily via a user-friendly form.
- Search for recipes by title using the search bar.
- Mark recipes as favorites and manage the favorites list.
- View recommended recipes based on your favorite choices.
- View detailed information about each recipe on separate pages.
- Responsive and modern UI built with React.

## Installation and Setup
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd recipe-sharing-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000` (or the port provided) to use the app.

## Usage
- On the home page, use the search bar to find recipes by title.
- Add new recipes by filling out the form provided.
- Browse the list of all recipes below the form.
- Click on any recipe to view detailed information.
- Use the favorites section to save recipes you like.
- Check out recommended recipes based on your favorites.

## Technology Stack
- React 19
- Vite (Build tool)
- Zustand (State management)
- React Router Dom (Routing)
- JavaScript (ES Modules)

## Project Structure
- `src/App.jsx`: Main app component with routing setup.
- `src/components/`: Contains individual components such as AddRecipeForm, RecipeList, RecipeDetailsWrapper, SearchBar, FavoritesList, RecommendationsList, and more.
- `src/components/recipeStore.js`: Zustand store managing recipes, favorites, recommendations, and search/filter logic.
- `package.json`: Lists dependencies, scripts and project metadata.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes and feature enhancements.

## License
This project is currently private. Please contact the maintainer for more information.
