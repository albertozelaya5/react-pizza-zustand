# 🍕 Fast React Pizza Co.

A modern, fast, and fully-typed web application for ordering pizzas online. This project was originally built with React and JavaScript, and has been successfully migrated to **TypeScript** to ensure type safety, robust state management, and an enhanced developer experience.

## 🚀 Features

- **Dynamic Menu:** Browse available pizzas with real-time stock status ("Sold out" handling).
- **Advanced Cart Management:** Powered by Zustand, allowing users to add, update quantities, and delete items seamlessly.
- **Client-Side Routing & Data Fetching:** Utilizes React Router (v6) with declarative loaders and actions for smooth data transitions and error handling.
- **Geolocation Integration:** Fetch the user's current GPS position to automatically populate the delivery address.
- **Priority Orders:** Option to mark orders as priority, dynamically calculating an extra 20% fee on top of the total price.
- **Fully Responsive UI:** Styled from scratch using Tailwind CSS, featuring a clean layout and custom design tokens (e.g., fluid screen heights with `dvh`).

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** React 18 + TypeScript
- **Build Tool:** Vite (configured with TypeScript and linting checkers)
- **Installation**: with pnpm
- **Routing:** React Router DOM (utilizing `useLoaderData`, `useActionData`, and `useNavigation`)
- **State Management:** Zustand (centralized slices for `cart` and `user` features)
- **Styling:** Tailwind CSS (configured with custom typography and spacing)
- **Code Quality:** ESLint + TypeScript ESLint Parser

## Project requirements

- [x] Very simple application, where users can order **one or more pizzas from a menu**
- [x] Requires **no user accounts** and no login: users just input their names before using the app
- [x] The pizza menu can change, so it should be **loaded from an API**
- [x] Users can add multiple pizzas to a **cart** before ordering
- [x] Ordering requires just the **user's name, phone number**, and **address**
- [x] If possible, **GPS location** should also be provided, to make delivery easier
- [x] User's can **mark their order as "priority"** for an additional 20% of the cart price
- [x] Order are made by **sending a POST request** with the order data (user data + selected pizzas) to the API
- [x] Payments are made on delivery, so **no payment processing** is necessary in the app
- [x] Each order will get a **unique ID** that should be displayed, so the **user can later look up their order** based on the ID
- [x] Users should be able to mark their order as "priority" order **even after it has been placed**

## 📦 Architecture & Directory Layout

The project follows a feature-based structure to ensure scalability:
```text
src/
├── features/
│   ├── cart/         # Cart state (Zustand slice), components (DeleteItem, UpdateItemQuantity)
│   ├── menu/         # Pizza menu components, types/interfaces (menuInt.ts), and data fetching
│   ├── order/        # Order creation form, routing actions/loaders, and order summaries
│   └── user/         # User profile state (Zustand slice) and geolocation logic
├── services/         # API Restaurant client services
├── ui/               # Reusable UI components (Button, LinkButton, Loader)
├── utils/            # Helper utilities (currency formatting)
├── App.tsx           # Application router configuration
├── main.tsx          # Application entry point (Strict Mode & Root mounting)
└── vite-env.d.ts     # Global TypeScript environment types (CSS, images, Vite client)