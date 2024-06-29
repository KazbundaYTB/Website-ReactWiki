import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
export default function PostPreview({ post }) {
  // Ensure post and post.content exist and are of the correct type
  const contentArray = Array.isArray(post.content) ? post.content : [post.content];

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center bg-neutral-900 '>
      <Navbar />
      <div className='w-screen mt-24 text-white flex flex-col justify-center items-center text-3xl font-bold'>
        <h1>{post.title}</h1>
        <div className='w-[120px] h-[1px] mt-2 bg-white'></div>
      </div>
      <div className='w-[80%] mt-24 text-white flex flex-col justify-center text-xl font-bold'>
        {/* Mapování pole post.content */}
        {contentArray.map((sentence, index) => (
          <h1 key={index} dangerouslySetInnerHTML={{ __html: sentence }}></h1>
        ))}
      </div>
    </div>
  );
}
