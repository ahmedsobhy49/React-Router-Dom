## **Project Overview**

This project utilizes **React Router DOM** for handling routing in a React web application. Initially, **React Router v6** was used, but the project has since been upgraded to **v7** to leverage the **loaders** feature, improving data fetching before route rendering. The routing setup also includes nested routes, dynamic routing, lazy loading, private routes, and programmatic navigation.

---

## **Key Features & Skills**

### **1. React Router DOM (v6 to v7 Transition)**

- **Version Update:** The project transitioned from **React Router v6** to **v7** to take advantage of **loaders**, which allow for data fetching before the component renders, improving performance and user experience.

- **Routing Setup:** The routing is structured using `createBrowserRouter` for easier handling of navigation and nested routes.

### **2. Dynamic Data Fetching with Loaders (React Router v7)**

- **Loaders for Data Preloading:** With React Router v7, **loaders** are used to fetch data before rendering the component. This ensures that all necessary data is available when the user navigates to a new route, improving load times and reducing delays.

- **Product Data Loader:** A `productsLoader` is used to fetch product-related data asynchronously before rendering product routes, ensuring smooth and fast navigation.

### **3. Lazy Loading with React Suspense**

- **Code Splitting:** Components are lazily loaded using **React Suspense**, reducing the initial load time by loading only the required components for the current route.
- **Suspense Fallbacks:** React's `Suspense` component is used to display a loading indicator while waiting for the components to load, providing a better user experience during navigation.

### **4. Nested Routes & Dynamic Parameters**

- **Index and Nested Routes:** Implemented **index routes** for default routing within a parent route and **nested routes** to allow for more granular control over child components.

- **Dynamic Route Parameters:** Routes include dynamic parameters (e.g., `/products/:category/:productId`), enabling access to detailed product pages based on the URL structure.

### **5. Private Routes & Authentication**

- **Private Route Access:** Created a `PrivateRoute` component to restrict access to authenticated users only. Non-authenticated users are redirected to the login page using programmatic navigation.

- **Authentication Management:** Authentication state is managed using React's `useState` hook, controlling access to private routes and triggering redirects when needed.

### **6. Programmatic Navigation with `useNavigate`**

- **Login Navigation:** Upon successful login, users are programmatically redirected to the profile page using the `navigate()` function from React Router DOM, based on the updated authentication state.

- **Logout Navigation:** Similarly, after logging out, users are redirected to the login page, enhancing the navigation experience without relying on static links.

### **7. Responsive Layout & Mobile-First Design**

- **Consistent Layout:** The application uses a consistent layout where the navigation (`Nav`) component is part of the main structure, ensuring easy access to different pages.

- **Mobile-First Design:** The app is designed to be mobile-responsive, ensuring optimal viewing and interaction on all screen sizes.

### **8. Filtered Product Display with `useLoaderData` and `useSearchParams`**

- **Data Fetching and Filtering:** In the `NewProducts` component, **React Router's `useLoaderData`** hook fetches data before rendering the route. Products are filtered based on the "new" category and by a dynamic `color` query parameter from the URL.

- **Search Parameters:** The `useSearchParams` hook is used to capture URL query parameters like `color`. If a `color` filter is applied (e.g., `?color=red`), the displayed products are filtered accordingly.

- **Dynamic Filtering:** If no products match the selected filter, a message is shown to indicate no products were found.

### **9. Scroll to Top on Route Change**

- **Automatic Scroll Reset:** Using the **`useLocation`** hook from React Router, the app automatically scrolls to the top of the page on every route change. This behavior is triggered within a `useEffect` hook, ensuring the page resets its scroll position each time the user navigates to a new route.

- **Enhanced User Experience:** This feature improves user navigation, ensuring they always start at the top of the new page, a common UX feature in modern web applications.

### **10. Error Handling & Not Found Pages**

- **Custom NotFound Page:** Implemented a custom `NotFound` page to handle undefined routes, redirecting users to a user-friendly error page when they visit non-existent URLs.

- **Wildcard Route:** The wildcard route (`path: "*"`) is used to catch undefined paths and show the `NotFound` page, ensuring the app behaves gracefully in case of an invalid route.

### **11. Performance Optimization**

- **Lazy Loading:** By using lazy loading with **React Suspense**, only the necessary components for each route are loaded, improving initial load performance.

- **Optimized Data Fetching:** Data is fetched only when necessary, using loaders and dynamic data fetching strategies to avoid redundant requests and reduce unnecessary load times.

---

## **Technologies Used**

- **React** (v18.x)
- **React Router DOM** (v6.x initially, upgraded to v7.x)
- **React Suspense** (for lazy loading)
- **Loaders** (for data pre-fetching in React Router v7)
- **JavaScript**

---

## **Summary of Version Change (React Router v6 to v7)**

The project began with **React Router v6**, utilizing nested routes and dynamic parameters. However, to improve data fetching capabilities, it was upgraded to **React Router v7**. This update introduced **loaders**, enabling data to be fetched before rendering the route. This change enhances user experience by ensuring the necessary data is ready when the user navigates to a new route, resulting in a faster and smoother transition between pages.
