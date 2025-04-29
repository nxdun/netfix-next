# Netflix Clone - Next.js

This project is a Netflix-inspired web application built using **Next.js** and **TailwindCSS**. It showcases a modern UI with dynamic content rendering.

## Features

- **Hero Section**: Displays a promotional banner with a call-to-action.
- **Movies Section**: Carousel showcasing trending movies.
- **Reasons Section**: Highlights reasons to join the platform.
- **FAQ Section**: Expandable FAQ items for user queries.
- **Reusable Components**: Modular components like `EmailSubscription` and `ChevronRightIcon` for consistent design and functionality.
- **Footer**: Links and branding information.

## How It Works

1. **Dynamic Data**: Content is rendered dynamically using mock JSON data.
2. **Responsive Design**: Fully responsive layout using TailwindCSS.
3. **Interactive Components**: Carousel and FAQ sections are interactive with smooth animations.
4. **Reusable Components**: Components like `EmailSubscription` are used across multiple sections for better maintainability.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Folder Structure

- **`src/components`**: Contains all reusable UI components.
  - **`common/EmailSubscription.tsx`**: A reusable component for email input and "Get Started" button.
  - **`icons/ChevronRightIcon.tsx`**: A reusable icon component used in buttons.
- **`src/app`**: Includes the main layout and page structure.
- **`src/data`**: Mock JSON data for dynamic rendering.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **TypeScript**: For type safety and better development experience.

## Notes

- This is a demo project and does not include backend functionality.

---
🔥 Built for learning and demonstration purposes.
