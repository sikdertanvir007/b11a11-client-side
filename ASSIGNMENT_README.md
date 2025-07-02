# MegaMerx - Global B2B Wholesale Platform

MegaMerx is a global B2B wholesale marketplace connecting bulk suppliers (manufacturers, distributors) with retailers, resellers, and institutional buyers. The platform supports multi-category product listings, bulk order features, secure transactions, and logistics management — all tailored for wholesale commerce.

---

## 🌟 Live Demo

[🔗 Live Website URL Here](https://your-live-link.com)

---

## 🎯 Purpose

MegaMerx empowers businesses to:
- Connect wholesale suppliers with buyers worldwide
- Simplify bulk order transactions
- Manage product listings and inventory
- Enhance trust and transparency in B2B trade

---

## 🔑 Key Features

✅ **Authentication**
- Email/password registration & login
- Google login integration
- Protected routes using JWT tokens
- Password strength validation
- User profile picture & name in navbar

✅ **Home Page**
- Banner/slider with offers
- Categories section (minimum 5 categories)
- Two extra marketing/feature sections

✅ **Product Browsing**
- View products by category
- Product cards include:
  - Image
  - Product name
  - Brand name
  - Category
  - Minimum order quantity
  - Short description
  - Price
  - Rating stars
  - “Details” button

✅ **Product Details Page**
- Comprehensive product info
- “Buy” modal with:
  - Autofilled user name/email
  - Quantity increment/decrement buttons
  - Validation for minimum selling quantity
- Decrement product stock using MongoDB `$inc`

✅ **All Products Page (Admin)**
- Displays all products
- Filter for products with minimum selling quantity > 100
- Toggle between Card view and Table view
- Update button for editing product details

✅ **Add Product Page**
- Upload product image
- Product details form:
  - Name
  - Main quantity
  - Minimum selling quantity
  - Brand name
  - Category dropdown
  - Short description
  - Price
  - Rating
- Static info about products
- Protected route

✅ **My Products Page**
- User-specific product listings
- Protected route

✅ **Cart Page**
- Displays purchased products by the logged-in user
- Cancel/remove functionality:
  - Deletes from user’s cart
  - Decrements product quantity in the DB via `$inc`

✅ **UX Features**
- Dynamic website titles
- Toasts and alerts for success/errors
- Loading spinners during data fetching
- Animated UI with Framer Motion
- Beautiful, recruiter-friendly, responsive design

✅ **Routing**
- 404 page for unmatched routes
- Navbar and footer on every page (except 404)

---

## 🔒 Security

- Firebase config keys stored in environment variables
- MongoDB credentials secured via env vars
- JWT tokens stored client-side and included with private API calls

---

## 📁 Project Structure

- `/src/components` → UI components (Navbar, Footer, etc.)
- `/src/pages` → Route-specific pages (Home, Login, Register, Details, etc.)
- `/src/provider/AuthProvider.jsx` → Context for authentication
- `/src/routes` → Private routes and app routing
- `/server` → Node.js/Express backend

---

## ⚙️ Tech Stack

- React.js
- React Router
- Firebase Authentication
- MongoDB Atlas
- Express.js
- Framer Motion (animations)
- React Toastify / SweetAlert
- Tailwind CSS / DaisyUI
- JWT tokens for auth
- React Rating Stars Component
- Vite (build tool)

---

## ⚡ Deployment

✅ Ensure:
- Server works in production (no CORS, 404, 504 errors)
- Private routes persist after page refresh
- Firebase domain brandized for production if using Netlify/Surge
- App works flawlessly on reload from any route

---

## ✅ Minimum Commit Requirements

- **Client:** ≥ 15 meaningful commits
- **Server:** ≥ 8 meaningful commits

Example commit messages:
- `feat: implement JWT auth`
- `fix: cart quantity rollback on removal`
- `chore: secure Firebase env vars`
- `feat: add product update form`

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/yourusername/megamerx.git
cd megamerx
npm install
npm run dev
