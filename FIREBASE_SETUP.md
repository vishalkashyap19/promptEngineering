# Firebase Firestore Setup Guide

## Steps to Connect Your Firebase Database

### 1. Get Your Firebase Credentials
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the **Settings icon** (gear) → **Project Settings**
4. Go to the **General** tab
5. Scroll down to "Your apps" section and find your app
6. Copy the configuration credentials

### 2. Create `.env.local` File
Create a new file called `.env.local` in the project root directory (same level as `package.json`) and add your Firebase credentials:

```
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### 3. Firestore Database Structure
The form data will be saved to a collection named **`contact_forms`** with the following structure:

```
{
  name: "User Name",
  email: "user@example.com",
  phone: "+1-234-567-8900",
  message: "User message",
  timestamp: "2024-04-10T10:30:00.000Z",
  status: "new"
}
```

### 4. Test the Integration
1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your Firestore database in Firebase Console
5. You should see a new document in the `contact_forms` collection

### 5. Important Notes
- ⚠️ **Do NOT commit `.env.local` to GitHub** - it's already in `.gitignore`
- The `.env.example` file is for reference only
- Keep your Firebase credentials secret and secure
- The `timestamp` is automatically set by Firebase server
- The `status` field starts as "new" for tracking purposes

### Troubleshooting

**Error: "Firebase credentials not found"**
- Make sure `.env.local` file exists in the root directory
- Verify all environment variables are spelled correctly with `VITE_` prefix

**Error: "Permission denied" when saving**
- Check your Firestore Security Rules in Firebase Console
- You may need to update rules to allow writes (default: restrictive)

**Sample Firestore Security Rule** (for testing only - use proper rules in production):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_forms/{document=**} {
      allow read, write: if true;
    }
  }
}
```
