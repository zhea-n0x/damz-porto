'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Img from "../public/img/profile.png";
import Img2 from "../public/img/avatar.png";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const works = [
    {
      "title": "Anugerah Sinergi Teknik",
      "img": "ast.png",
      "desc": "Company profile for Anugerah Sinergi Teknik, a company based in Bandung focused on Electrical Engineering Inspection Services."
    },
    {
      "title": "External Training System",
      "img": "ets.png",
      "desc": "External Training System was created to monitoring, and managing the training process in PT Panasonic Industrial Devices Batam."
    },
    {
      "title": "e-Voting K-PIRA 2023",
      "img": "kpira.png",
      "desc": "An apps to supports electronic based voting used by KPIRA (Komisi Pemilihan Raya) to vote Student Executive in State Polytechnic Batam."
    },
  ];

  const collab = [ 
    {
      "title": "Proo - Find the Best Private Offline Teachers",
      "img": "proo.png",
      "desc": "Proo - an apps to find an offline teacher for your private learning in home."
    },
    {
      "title": "Hidropol - An IoT Integrated Hydroponic System",
      "img": "hidropol.png",
      "desc": "Polibatam Hydroponic Farm with IoT Integrated System"
    },
    {
      "title": "Polibatam Career",
      "img": "polcar.png",
      "desc": "Career Information Center for Polibatam Alumni"
    }
  ]

  useEffect(() => {
    fetch('/api/medium')
      .then(res => res.json())
      .then(data => setPosts(data.posts?.slice(0, 3) || [])); 
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6">
      <section  id="home">
        <div className="flex justify-center">
          <Image  src={Img} className="w-96 h-96 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-indigo-500 dark:border-white content-center" />
        </div>
        <p className='bg-violet-200 py-3 text-center rounded-md my-6'>Hello, I'm Adam. Tech Geek based in Batam!</p>
        <div className="flex items-center gap-4 mb-3 justify-between">
        {/* <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600" /> */}
        <div className='flex flex-col gap-2'>
          <h1 className="text-5xl font-bold">Adam Firdaus</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Digital Artisan (Developer/Designer/Visual)
          </p>
        </div>
        <Image  src={Img2} className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-indigo-500 dark:border-white" />
      </div>

      <div className="w-full">
        <p className="text-gray-600 dark:text-gray-400 text-justify pt-4 leading-loose">
        Currently, I'm working at AIA Singapore as Software Engineer/Analyst. Also, I am multidisciplinary Software Engineer with a strong command of both backend and frontend development. I also have experience in graphic design and UI design, allowing me to bridge the gap between functionality and aesthetics. Outside of tech, I’m passionate about video and photo editing, as well as videography and photography.
        <br/>
        Besides all of that, I'm also writing some articles in Medium,
        </p>
        <section className="my-5">
        <div className="grid md:grid-cols-3 gap-4">
          {posts.length === 0 ? (
            <p className="col-span-full text-gray-500">Loading posts...</p>
          ) : (
            posts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col h-full p-4 border rounded-lg hover:shadow transition ${idx === 0
                    ? 'border-indigo-300 dark:border-indigo-500'
                    : idx === 1
                      ? 'border-green-300 dark:border-green-500'
                      : 'border-yellow-300 dark:border-yellow-500'
                  }`}
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}
                <div className="flex-grow">
                  <h3 className="font-medium mb-2">{post.title}</h3>
                </div>
                <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.pubDate).toLocaleDateString()}
                </div>
              </a>
            ))
          )}
        </div>
      </section>
        <button className='w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700'>👷‍♂️ Portfolio</button>
      </div>
      
      </section>


      <section className="my-10" id="portfolio">
        <div className='flex flex-col pb-5'>
          <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
          <hr className='w-16 border-zinc-700 dark:border-white border-2 -mt-3'/>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {(
            works.map((item) => (
              <a
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col h-full p-4 border rounded-lg hover:shadow transition border-none`}
              >
                {item.img && (
                  <img
                    src={`/assets/${item.img}`}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-md mb-3"
                  />
                )}
                <div className="flex-grow">
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className='text-sm text-justify'>{item.desc}</p>
                </div>
                {/* <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.pubDate).toLocaleDateString()}
                </div> */}
              </a>
            ))
          )}
        </div>
      </section>

      <section className="my-10">
        <div className='flex flex-col pb-5'>
          <h2 className="text-xl font-semibold mb-4">Collaboration</h2>
          <hr className='w-24 border-zinc-700 dark:border-white border-2 -mt-3'/>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {(
            collab.map((item) => (
              <a
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col h-full p-4 border rounded-lg hover:shadow transition border-none`}
              >
                {item.img && (
                  <img
                    src={`/assets/${item.img}`}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-md mb-3"
                  />
                )}
                <div className="flex-grow">
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className='text-sm text-justify'>{item.desc}</p>
                </div>
                {/* <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.pubDate).toLocaleDateString()}
                </div> */}
              </a>
            ))
          )}
        </div>
      </section>


      {/* <section className='yt-section'>
        <h2 className="text-xl font-semibold mb-2">Learn React & Next.js</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Build and deploy a modern SaaS application using the most popular open-source software. This course is 12 hours long and is completely live streamed.
        </p>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>01. Introduction to React 2025</span>
          <span>1:02:45</span>
        </div>
      </section> */}
    </main>
  );
}
