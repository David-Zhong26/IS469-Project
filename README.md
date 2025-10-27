# Spotly Platform

A React-based web application for connecting brands with influencers, featuring two main sections:

## Features

### 1. Discovery for Influencers Page
- **Company Search**: Filter and explore companies by industry, region, company size, and budget range
- **Company Cards**: Display company information including logo, name, industry, region, size, budget range, and description
- **Recommended Campaigns**: Show personalized campaign recommendations based on user profile
- **Campaign Cards**: Display campaign details including title, company, budget, deliverables, and description
- **Interactive Actions**: View company details and submit collaboration proposals
- **Success Modal**: Confirmation message when proposals are submitted

### 2. Company Profile Page
- **Company Detail Card**: Manage basic company information (username, name, founded date, region, employees, industry)
- **Brand Guidelines Card**: Upload logo and manage brand description
- **Campaign Budget Ranges Card**: Set typical budget ranges and creator compensation
- **Sub-accounts Management**: Interface for managing multiple brand sub-accounts
- **Edit Functionality**: Inline editing with save/cancel options for all cards
- **Success Modal**: Confirmation message when changes are saved

## Technical Features

- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Modern UI**: Clean cards with subtle shadows, rounded corners, and consistent typography
- **Interactive Modals**: Success confirmation modals for user actions
- **State Management**: React hooks for managing component state and user interactions
- **Form Handling**: Controlled inputs with validation and error handling
- **Accessibility**: Proper labeling, keyboard navigation, and screen reader support

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── DiscoveryPage.js          # Discovery for Influencers page
│   ├── DiscoveryPage.css         # Styles for discovery page
│   ├── CompanyProfilePage.js     # Company Profile page
│   └── CompanyProfilePage.css    # Styles for company profile page
├── App.js                        # Main app component with navigation
├── App.css                       # Global app styles
├── index.js                      # React app entry point
└── index.css                     # Global styles and utilities
```

## Design System

- **Colors**: Blue primary (#3b82f6), neutral grays, clean whites
- **Typography**: System fonts with clear hierarchy (24px titles, 18px headings, 14-16px body)
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable button styles, form elements, and card layouts
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px

## Usage

### Navigation
- Use the top navigation to switch between "Discovery" and "Profile" pages
- "Inbox" and "My Profile" links are present but not implemented in this demo

### Discovery Page
- Use filter controls to search for companies by various criteria
- Click "View Company Details" to see more information (placeholder)
- Click "Submit Proposal" to send collaboration requests
- Browse recommended campaigns based on your profile

### Company Profile Page
- Click "Edit Information" on any card to enter edit mode
- Make changes to the form fields
- Click "Save Changes" to save or "Cancel" to discard changes
- View confirmation modal after saving changes

## Future Enhancements

- Backend integration for data persistence
- User authentication and authorization
- Real-time messaging system
- Advanced search and filtering
- Campaign management tools
- Analytics and reporting dashboard
