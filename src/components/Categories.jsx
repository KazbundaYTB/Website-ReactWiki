import React, { useState, useEffect } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Categories() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [minecraftPosts, setMinecraftPosts] = useState([]);
  const [webhostPosts, setWebhostPosts] = useState([]);
  const [databasePosts, setDatabasePosts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const unsubscribeMinecraft = loadPosts("MinecraftPosts", setMinecraftPosts);
    return () => unsubscribeMinecraft();
  }, []);

  useEffect(() => {
    const unsubscribeWebhost = loadPosts("WebhostPosts", setWebhostPosts);
    return () => unsubscribeWebhost();
  }, []);

  useEffect(() => {
    const unsubscribeDatabase = loadPosts("DatabasePosts", setDatabasePosts);
    return () => unsubscribeDatabase();
  }, []);

  const loadPosts = (collectionName, setPosts) => {
    const postsCollection = collection(db, collectionName);
    const postsQuery = query(postsCollection, orderBy("timestamp", "desc"), limit(4));

    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const postsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    });

    return unsubscribe;
  };

  return (
    <div
      className={`w-full ${
        windowWidth <= 890 ? "h-[200%]" : windowWidth <= 1680 ? "h-[110%]" : "h-[80%]"
      } bg-neutral-900 flex justify-center items-start overflow-y overflow-x-hidden`}
    >
      <div className="mt-12">
        <div
          className={`grid gap-4 ${
            windowWidth <= 890 ? "grid-cols-1" : windowWidth <= 1680 ? "grid-cols-2" : "grid-cols-4"
          } justify-center items-center`}
        >
          {/* Minecraft Posts */}
          <div className="bg-gray-800 w-[400px] h-[330px] rounded-xl overflow-hidden">
            <div className="bg-gray-700 w-full h-[70px] rounded-t-xl flex justify-center items-center">
              <h1 className="font-bold text-xl text-white">Minecraft</h1>
            </div>
            <div className="bg-gray-700 w-[90%] h-[65%] mt-3 mb-3 flex flex-col justify-center mx-auto rounded-l">
              <div className="w-full h-[320px] gap-0.5 flex flex-col">
                {minecraftPosts.map((post, index) => (
                  <div key={index} className="bg-gray-900 w-full h-[55px] rounded-l flex justify-between items-center px-2">
                    <h1 className="font-bold text-lg text-white">{post.title}</h1>
                    <Link to={`/minecraft/${post.id}`} className="bg-green-700 rounded-full px-2 py-2">
                      <GoArrowRight />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Webhost Posts */}
          <div className="bg-gray-800 w-[400px] h-[330px] rounded-xl overflow-hidden">
            <div className="bg-gray-700 w-full h-[70px] rounded-t-xl flex justify-center items-center">
              <h1 className="font-bold text-xl text-white">Webhost</h1>
            </div>
            <div className="bg-gray-700 w-[90%] h-[65%] mt-3 mb-3 flex flex-col justify-center mx-auto rounded-l">
              <div className="w-full h-[320px] gap-0.5 flex flex-col">
                {webhostPosts.map((post, index) => (
                  <div key={index} className="bg-gray-900 w-full h-[55px] rounded-l flex justify-between items-center px-2">
                    <h1 className="font-bold text-lg text-white">{post.title}</h1>
                    <Link to={`/webhost/${post.id}`} className="bg-green-700 rounded-full px-2 py-2">
                      <GoArrowRight />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Database Posts */}
          <div className="bg-gray-800 w-[400px] h-[330px] rounded-xl overflow-hidden">
            <div className="bg-gray-700 w-full h-[70px] rounded-t-xl flex justify-center items-center">
              <h1 className="font-bold text-xl text-white">Databáze</h1>
            </div>
            <div className="bg-gray-700 w-[90%] h-[65%] mt-3 mb-3 flex flex-col justify-center mx-auto rounded-l">
              <div className="w-full h-[320px] gap-0.5 flex flex-col">
                {databasePosts.map((post, index) => (
                  <div key={index} className="bg-gray-900 w-full h-[55px] rounded-l flex justify-between items-center px-2">
                    <h1 className="font-bold text-lg text-white">{post.title}</h1>
                    <Link to={`/databaze/${post.id}`} className="bg-green-700 rounded-full px-2 py-2">
                      <GoArrowRight />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soon */}
          <div className="bg-gray-800 w-[400px] h-[330px] rounded-xl overflow-hidden">
            <div className="bg-gray-700 w-full h-[70px] rounded-t-xl flex justify-center items-center">
              <h1 className="font-bold text-xl text-white">Již brzy!</h1>
            </div>
            <div className="bg-gray-700 w-[90%] h-[65%] mt-3 mb-3 flex flex-col justify-center mx-auto rounded-l overflow-y-hidden">
              <div className="w-full h-full gap-y-2 flex flex-col justify-center items-center">
                <h1 className="font-bold text-red-600">Tuto kategorii pro Vás ještě připravujeme!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
