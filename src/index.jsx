import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import App from "./App";
import PostPreview from "./components/PostPreview"; // Import PostPreview component
import "./App.css";

function Posts({ collectionName }) {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const matchedPost = posts.find((post) => post.id === id);
        setPost(matchedPost);
      } catch (err) {
        setError("Failed to fetch posts");
      }
    }

    fetchPosts();
  }, [collectionName, id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return <PostPreview post={post} />; // Render PostPreview component with fetched post
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/minecraft/:id",
    element: <Posts collectionName="MinecraftPosts" />,
  },
  {
    path: "/webhost/:id",
    element: <Posts collectionName="WebhostPosts" />,
  },
  {
    path: "/databaze/:id",
    element: <Posts collectionName="DatabasePosts" />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default Posts; // Export Posts component
