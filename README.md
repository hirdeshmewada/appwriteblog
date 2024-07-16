

# Blog Post App

This project is a blog post application built using Appwrite as the backend and React for the frontend. Users can sign up, log in, create blog posts using the TinyMCE rich text editor, upload images, and view previews of their posts on the home page.

## Features

- **User Authentication:** Sign up and log in functionality using Appwrite's authentication services.
- **Rich Text Editing:** Create and edit blog posts using the TinyMCE rich text editor.
- **Image Upload:** Upload images to include in blog posts.
- **Slug Generation:** Automatically generate unique slugs for blog posts.
- **Post Preview:** View previews of blog posts on the home page.

## Technologies Used

- **Appwrite:** Backend services for authentication, storage, and database management.
- **React:** Frontend framework for building the user interface.
- **TinyMCE:** Rich text editor for creating and editing blog posts.
- **Netlify:** Hosting for the frontend application.

## Setup Instructions

### Prerequisites

- Node.js
- Appwrite server
- Netlify account (for hosting)

### Backend Setup (Appwrite)

1. **Install Appwrite:** Follow the [Appwrite installation guide](https://appwrite.io/docs/installation) to set up the Appwrite server.

2. **Create a Project:** In the Appwrite console, create a new project.

3. **Set Up Database:** Create a database and collection for storing blog posts.

4. **Create a Bucket:** Create a storage bucket for uploading images.

5. **Configure CORS:** Ensure that CORS is configured to allow requests from your frontend URL (e.g., `https://yourapp.netlify.app`).

### Frontend Setup (React)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/hirdeshmewada/appwriteblog.git
   cd blog-post-app


2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root of the project and add the following environment variables:
   ```env
   REACT_APP_APPWRITE_ENDPOINT=<Your Appwrite Endpoint>
   REACT_APP_APPWRITE_PROJECT=<Your Appwrite Project ID>
   REACT_APP_APPWRITE_DATABASE=<Your Appwrite Database ID>
   REACT_APP_APPWRITE_COLLECTION=<Your Appwrite Collection ID>
   REACT_APP_APPWRITE_BUCKET=<Your Appwrite Bucket ID>
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```

### Deployment (Netlify)

1. **Build the Project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:** Follow the [Netlify deployment guide](https://docs.netlify.com/site-deploys/create-deploys/) to deploy your application.

## Usage

1. **Sign Up or Log In:** Access the application and sign up for a new account or log in with existing credentials.

2. **Create a Blog Post:** Use the TinyMCE editor to create a new blog post and upload images as needed.

3. **View Post Previews:** Navigate to the home page to see previews of all blog posts.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to customize the `README.md` file as per your specific project details and preferences.
