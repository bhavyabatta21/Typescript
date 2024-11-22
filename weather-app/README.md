# WeatherWhiz

A full-stack weather application built with **TypeScript**, **Fastify**, **Tailwind CSS**, and **Open Meteo API**.

---

## **Features**
- Fetches current weather conditions using the Open Meteo API.
- Displays temperature, weather condition, and an appropriate weather icon.
- Implements a responsive frontend styled with Tailwind CSS.
- Utilizes Fastify for the backend server.
- Fully type-checked with TypeScript for reliability.
- Dynamic user input for updating location.

---

## **Technologies Used**
- **Frontend**: Tailwind CSS
- **Backend**: Fastify, TypeScript
- **API**: Open Meteo API
- **Utility Libraries**: Zod for validation, Nunjucks for templates, Axios for HTTP requests
- **CSS Preprocessor**: Tailwind CSS with PostCSS

---

## **Project Structure**
weather-app/
├── dist/                   # Compiled static assets
│   ├── static/
│   │   ├── img/            # Weather icons
│   │   └── styles.css      # Compiled CSS
├── node_modules/           # Project dependencies
├── src/                    # Source files
│   ├── assets/             # Static assets
│   ├── backend/            # Backend API and server logic
│   │   ├── api/            # API interaction (e.g., weatherapi.ts)
│   │   ├── template/       # Nunjucks templates
│   │   └── server.ts       # Fastify server setup
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # NPM dependencies and scripts
├── README.md               # Project documentation

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/bhavyabatta21/Typescript.git
   ```
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Compile Tailwind CSS:
    ```bash
    Compile Tailwind CSS:
    ```
4. 	Start the server
    ```
    pnpm ts-node src/backend/server.ts
    ```
    The server will be available at http://127.0.0.1:8089.

   ## Usage
    1. Open your browser and navigate to [http://127.0.0.1:8089](http://127.0.0.1:8089).
    2. Enter a location in the input box and click **Update Location**.
    3. The app will fetch and display the current weather for the specified location.

## API Endpoints
### `GET /`
Renders the homepage with the weather data for a default or specified location.

**Query Parameters**:
- `location`: The name of the location (e.g., Chicago).