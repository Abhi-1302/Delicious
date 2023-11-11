#Delicious

## Description

Delicious.my is a React application that leverages the Spoonacular API to enable users to search for recipes. It displays search results in interactive boxes that can be clicked to access the full recipe and additional details.

## Getting Started

### Prerequisites

- Node.js installed
- Spoonacular API key

### Installation

1. Clone the repository.
2. Install dependencies using `npm install`.

### Configuration

To configure the Spoonacular API key:

1. Create a `.env` file in the root directory of the project.
2. Add the following line to the `.env` file:
   REACT_APP_API_KEY=YOUR_API_KEY
   (Replace `YOUR_API_KEY` with your actual Spoonacular API key.)

**Note:** Ensure that the `.env` file is included in the `.gitignore` to avoid exposing your API key.

## Usage

1. Run the app locally using `npm start`.
2. Access the application at `http://localhost:3000`.
3. Use the search bar to find recipes.
4. Click on the displayed recipe boxes to view the full recipe and additional details.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.
