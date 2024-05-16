# Stock Monitoring Application

This is a simple stock monitoring application that allows users to create watchlists of stock symbols and view the latest stock prices using real-time data from the Alpha Vantage API. The application consists of a frontend built with React and a backend built with Django, providing a full-stack solution for stock monitoring.

## Features

- **User Authentication**:
  - Users can log in securely to access their personalized dashboard.
  - Simple authentication mechanism implemented using Django sessions.

- **Dashboard**:
  - Displays the latest stock prices of symbols on the user's watchlist.
  - Provides a visually intuitive interface with stock cards showing symbol, price, and stock graph (placeholder).

- **Watchlist Management**:
  - Users can add or remove stock symbols from their watchlist.

- **Integration with Alpha Vantage API**:
  - Fetches real-time stock data using the Alpha Vantage API (TIME_SERIES_INTRADAY endpoint).

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Material-UI

- **Backend**:
  - Django
  - Django REST Framework
  - PostgreSQL (or your preferred database)

## Installation and Setup

### Prerequisites

- Node.js (v14 or later)
- Python (v3.8 or later)
- PostgreSQL (or MySQL/MongoDB as preferred database)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/stock-monitoring.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd stock-monitoring/backend
   ```

3. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up the database (assuming PostgreSQL):

   - Create a new database in PostgreSQL.
   - Update the database settings in `backend/settings.py`.

5. Apply migrations to create database tables:

   ```bash
   python manage.py migrate
   ```

6. Start the Django development server:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

   ```bash
   cd stock-monitoring/frontend
   ```

2. Install Node.js dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

4. Access the application in your web browser at `http://localhost:3000`.

## Usage

- Open the application in your web browser.
- Log in with your username/email and password.
- View and manage your watchlist on the dashboard.
- Logout when done using the application.

## Deployment

This application can be deployed to platforms like Heroku (for backend) and Netlify (for frontend) for production use. Ensure to set appropriate environment variables and update configuration settings for deployment.

## Contributors

- John Doe
- Jane Smith

## License

This project is licensed under the [MIT License](LICENSE).

