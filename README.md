file structure 
perfume/
├─ backend/ # Server and database setup
│ ├─ node_modules/
│ ├─ .env # Environment variables
│ ├─ seed.js # Script to seed MongoDB with products
│ ├─ server.js # Express server and API routes
│ └─ image.png # Sample image (optional)
└─ gucci-perfume/ # Frontend React app
├─ node_modules/
├─ public/
├─ src/
├─ package.json
└─ README.md


here Two folder 
                1: frontend folder (gucci-perfume )
                2: backend folder  (server mock api and mongodb storage)



first start with a backend folder 

## Backend

The backend is built using **Node.js, Express, and MongoDB**.

### Features
- Connects to MongoDB using `mongoose`.
- Provides REST API endpoints to fetch products:
  - `GET /api/products` - Get all products
  - `GET /api/products/:id` - Get a product by ID
- Seed script (`seed.js`) to populate the database with initial products.

### Run Backend
1. Navigate to the backend folder:  
   ```bash
   cd backend
   npm install

MONGO_URI=your_mongodb_connection_string // ## i use MONGO_URI=mongodb://127.0.0.1:27017/perfume_shops 
PORT=5000

node server.js
optional # node seed.js


## Frontend
cd gucci-perfume
npm install
npm run dev
