# Next.js 13 Crash Course Project

This is a project from my [Next.js 13 Crash Course](https://youtu.be/Y6KDk5iyrYE). It uses the newer features such as:

- App directory
- New routing system
- Next Fonts
- React Server Components
- Data Fetching
- Layouts
- Metadata API
- API Route Handlers
- loading.js Page
- and more

<img src="./public/screen.png" width="500">

## Usage

Install dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build the project:

```bash
npm run build
# or
yarn build
```

Run production build:

```bash
npm run start
# or
yarn start
```

## Notes
React server components vs Client Components:

Advantages:
- Load faster - Don't have to wait for the JavaScript to load
- Smaller client bundle size
- SEO friendly
- Access to resources the client can't access
- Hide sensetive data from the client
- More secure against XSS attacks 
- Improved developer experience

Disadvantages:
- Not as interactive
- No component state. We can not use the useState hook
- No component lifecycle methods. We can not use the useEffect hook

Suspense Boundary:
- Instead for displaying the loadinbg page and waiting until everything is loaded, we can display parts (components) that are loaded and create placeholders for the components that are not loaded yet.

Loading Page:
- This feature works only for server components. For client components we bring it manually.