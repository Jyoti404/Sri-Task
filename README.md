A complete e-commerce solution for a Fashion company with product management, user authentication, payment processing, and more.

## 🚀 Tech Stack

### Frontend
- React.js with Vite
- React Router for navigation
- React Icons for UI elements
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Razorpay for payment processing
- bcryptjs for password hashing

## 📁 Project Structure

```
Sri-Task/
├── Frontend-master/       # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── ...
└── server/                # Express backend application
    ├── config/            # Database and other configurations
    ├── controllers/       # Request handlers
    ├── models/            # Mongoose models
    ├── routes/            # API routes
    └── ...
```

## ⚙️ Installation

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Setting Up the Backend
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file with the following variables
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# RAZORPAY_KEY_ID=your_razorpay_key
# RAZORPAY_KEY_SECRET=your_razorpay_secret

# Start the server
npm start
```

### Setting Up the Frontend
```bash
# Navigate to frontend directory
cd Frontend-master

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔑 Key Features

- User authentication and authorization
- Product browsing and categorization
- Shopping cart functionality
- Secure payment processing with Razorpay
- Admin dashboard for product and order management
- Responsive design for all devices

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/product` - Get all products
- `GET /api/product/:id` - Get product by ID
- `POST /api/product` - Create new product (admin)

### Categories
- `GET /api/category` - Get all categories
- `POST /api/category` - Create new category (admin)

### Orders
- `POST /api/payment` - Process payment and create order
- `GET /api/payment/:userId` - Get user orders

## 🔒 Environment Variables

Create a `.env` file in the server directory with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.