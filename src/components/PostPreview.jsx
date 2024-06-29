import React from 'react';

export default function PostPreview({ post }) {
  // Kontrola existence a typu post.content
  if (!Array.isArray(post.content)) {
    return (
      <div className='w-screen h-screen flex flex-col justify-start items-center bg-neutral-900'>
        <div className='w-screen mt-24 text-white flex flex-col justify-center items-center text-3xl font-bold'>
          <h1>{post.title}</h1>
          <div className='w-[120px] h-[1px] mt-2 bg-white'></div>
        </div>
        <div className='w-screen mt-24 text-white flex flex-col justify-start items-center text-3xl font-bold'>
          <p>Obsah není k dispozici nebo není ve správném formátu.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center bg-neutral-900'>
      <div className='w-screen mt-24 text-white flex flex-col justify-center items-center text-3xl font-bold'>
        <h1>{post.title}</h1>
        <div className='w-[120px] h-[1px] mt-2 bg-white'></div>
      </div>
      <div className='w-[80%] mt-24 text-white flex flex-col justify-center text-3xl font-bold'>
        {/* Mapování pole post.content */}
        {post.content.map((sentence, index) => (
          <div key={index} className='text-white ml-48'>{sentence}</div>
        ))}
      </div>
    </div>
  );
}
