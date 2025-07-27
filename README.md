# The Wild Oasis 🏨

A modern hotel management dashboard application built with React and Vite. This comprehensive admin interface allows hotel staff to manage bookings, cabins, guests, and daily operations efficiently.

## Features

- **Dashboard Overview**: Real-time statistics and charts for bookings, sales, and occupancy
- **Booking Management**: View, filter, and manage all hotel bookings
- **Cabin Management**: Add, edit, and delete cabin information with image uploads
- **Guest Check-in/Check-out**: Streamlined process for guest arrival and departure
- **User Authentication**: Secure login system for hotel staff
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop and tablet use

## Technologies Used

### Frontend

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Styled Components** - CSS-in-JS styling solution
- **React Hook Form** - Form handling and validation
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library
- **React Error Boundary** - Error handling

### Backend & Database

- **Supabase** - Backend-as-a-Service providing PostgreSQL database, authentication, and storage

### State Management & Data Fetching

- **TanStack React Query** - Server state management and caching
- **React Query Devtools** - Development tools for debugging queries

### UI & Data Visualization

- **Recharts** - Charts and data visualization
- **Date-fns** - Date manipulation and formatting

### Development Tools

- **ESLint** - Code linting and quality checks
- **Vite Plugin ESLint** - ESLint integration with Vite

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd the-wild-oasis
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

The application follows a feature-based architecture with organized folders for different concerns:

- `/src/features` - Feature-specific components and hooks
- `/src/pages` - Route components
- `/src/ui` - Reusable UI components
- `/src/services` - API integration
- `/src/hooks` - Custom React hooks
- `/src/context` - React context providers
- `/src/utils` - Utility functions


