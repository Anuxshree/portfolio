# Anushree T Portfolio Website

## Overview

This is a personal portfolio website for Anushree T, an aspiring Data Scientist and Machine Learning enthusiast. The application is built using React with TypeScript for the frontend and Express.js for the backend, following a full-stack architecture. The portfolio showcases Anushree's education, skills, projects, internships, certifications, and achievements in the field of data science and machine learning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: Hot reload with tsx for seamless development experience
- **Storage**: In-memory storage implementation with interface-based design for future database integration

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Driver**: Neon Database serverless PostgreSQL connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Zod integration for runtime type validation and schema inference

### Development & Build Tools
- **TypeScript Configuration**: Strict mode enabled with path mapping for clean imports
- **Module Resolution**: ESNext with bundler resolution for modern module handling
- **Asset Management**: Vite handles static assets with proper aliasing
- **Error Handling**: Runtime error overlay for development debugging

### Component Organization
- **UI Components**: Modular component library with consistent styling patterns
- **Layout Components**: Dedicated components for navigation, sections, and responsive layouts
- **Utility Functions**: Centralized utility functions for class name merging and common operations
- **Custom Hooks**: React hooks for mobile detection and toast notifications

### Styling Architecture
- **Design System**: CSS custom properties for consistent theming across light/dark modes
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Typography**: Inter font family for modern, readable text rendering
- **Color Palette**: Semantic color tokens for primary, secondary, accent, and status colors

### Performance Optimizations
- **Code Splitting**: Dynamic imports for route-based code splitting
- **Asset Optimization**: Vite's built-in optimizations for images and static assets
- **Query Caching**: TanStack Query for intelligent data fetching and caching strategies
- **Bundle Analysis**: Development tools for monitoring bundle size and performance

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, and TypeScript for modern frontend development
- **Vite**: Build tool and development server with React plugin integration
- **Express.js**: Backend web framework for API development

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Utility for managing component variants
- **clsx & tailwind-merge**: Class name manipulation utilities

### Database and Data Management
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle Kit**: Database migration and schema management tools
- **Zod**: Runtime type validation and schema inference

### Development Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution environment for development
- **Replit Integration**: Development environment integration with Cartographer plugin

### Additional Libraries
- **TanStack React Query**: Data fetching and caching library
- **React Hook Form**: Form state management with validation
- **Date-fns**: Date manipulation and formatting utilities
- **Wouter**: Lightweight routing library for single-page applications
- **Embla Carousel**: Touch-friendly carousel component for project showcases