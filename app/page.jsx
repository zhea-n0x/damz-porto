'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Img from "../public/img/profile.png";
import Img2 from "../public/img/avatar.png";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const iconUrls = {
    'tailwind': 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000',
    'nextjs': 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000',
    'codeigniter': 'https://img.icons8.com/?size=100&id=r4UrHt1gLC2t&format=png&color=000000',
    'sql': 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000',
    'bootstrap': 'https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000',
    'laravel': 'https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000',
    'expressjs': 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000',
    'reactjs': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    "sequelize": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkkHz2uHbHhWYJ6MKPaQFVKOw_tItDJLMrg&s",
    "arduino": "https://img.icons8.com/?size=100&id=13444&format=png&color=000000",
    "mongodb": "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000"
  }

  const works = [
    {
      "title": "Anugerah Sinergi Teknik",
      "img": "ast.png",
      "desc": "Company profile for Anugerah Sinergi Teknik, a company based in Bandung focused on Electrical Engineering Inspection Services.",
      "techStack": [
        iconUrls.nextjs,
        iconUrls.tailwind
      ],
      'workedYear': "2024"
    },
    {
      "title": "External Training System",
      "img": "ets.png",
      "desc": "External Training System was created to monitoring, and managing the training process in PT Panasonic Industrial Devices Batam.",
      "techStack": [
        iconUrls.codeigniter,
        iconUrls.sql,
        iconUrls.bootstrap,
      ],
      "workedYear": "2022-2023"
    },
    {
      "title": "LearningSpace",
      "img": "learningspace.png",
      "desc": "LearningSpace was created to supporting employee training process using e-Learning system in PT Panasonic Industrial Devices Batam.",
      "techStack": [
        iconUrls.codeigniter,
        iconUrls.sql,
        iconUrls.nextjs,
        iconUrls.tailwind
      ],
      "workedYear": "2023"
    },
    {
      "title": "e-Voting K-PIRA 2023",
      "img": "kpira.png",
      "desc": "An apps to supports electronic based voting used by KPIRA (Komisi Pemilihan Raya) to vote Student Executive in State Polytechnic Batam.",
      "techStack": [
        iconUrls.laravel,
        iconUrls.sql,
        iconUrls.tailwind
      ],
      "workedYear": "2023"
    },
    {
      "title": "Proo - Find the Best Private Offline Teachers",
      "img": "proo.png",
      "desc": "Proo - an apps to find an offline teacher for your private learning in home.",
      "techStack": [
        iconUrls.sequelize,
        iconUrls.expressjs,
        iconUrls.reactjs,
        iconUrls.tailwind
      ],
      "workedYear": "2022"
    },
    {
      "title": "Polibatam Career",
      "img": "polcar.png",
      "desc": "Career Information Center for Polibatam Alumni",
      "techStack": [
        iconUrls.codeigniter,
        iconUrls.bootstrap
      ],
      "workedYear": "2022"
    }
  ];

  const collab = [
    {
      "title": "Hidropol - An IoT Integrated Hydroponic System",
      "img": "hidropol.png",
      "desc": "Polibatam Hydroponic Farm with IoT Integrated System",
      "techStack": [
        iconUrls.expressjs,
        iconUrls.mongodb,
        iconUrls.sequelize,
        iconUrls.nextjs,
        iconUrls.tailwind,
        iconUrls.arduino,
      ],
      "workedYear": "2023-2024"
    },
  ]

  useEffect(() => {
    fetch('/api/medium')
      .then(res => res.json())
      .then(data => setPosts(data.posts?.slice(0, 3) || []));
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6">
      <section id="home">
        <div className="flex justify-center">
          <Image src={Img} className="h-96 rounded-full bg-gray-300 dark:bg-gray-600 border-4 border-pink-500 dark:border-white content-center" />
        </div>
        <p className='bg-pink-500 text-white py-3 text-center rounded-md my-6'>Hello, I'm Adam. Tech Geek based in Batam!</p>
        <div className="flex items-center gap-4 mb-3 justify-between">
          {/* <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600" /> */}
          <div className='flex flex-col gap-2'>
            <h1 className="text-5xl font-bold">Adam Firdaus</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Digital Artisan (Developer/Designer/Visual)
            </p>
          </div>
          <Image src={Img2} className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-pink-500 dark:border-white" />
        </div>

        <div className="w-full">
          <p className="text-gray-600 dark:text-gray-400 text-justify pt-4 leading-loose">
            Currently, I'm working at AIA Singapore as Software Engineer/Analyst. Also, I am multidisciplinary Software Engineer with a strong command of both backend and frontend development. I also have experience in graphic design and UI design, allowing me to bridge the gap between functionality and aesthetics. Outside of tech, I’m passionate about video and photo editing, as well as videography and photography.
            <br />
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
          <button className='w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700'>👷‍♂️ Portfolio</button>
        </div>

      </section>


      <section className="my-10" id="works">
        <div className='flex flex-col pb-5'>
          <h2 className="text-xl font-semibold mb-4">Works</h2>
          <hr className='w-16 border-zinc-700 dark:border-white border-2 -mt-3' />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {(
            works.map((item) => (
              <a
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full p-4 border rounded-lg overflow-hidden hover:shadow-lg transition border-none hover:cursor-pointer"
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
                  <p className="text-sm text-justify">{item.desc}</p>
                </div>

                <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-gray-800 dark:text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-10">
                  <div>
                    <h4 className="text-lg font-bold">Project Details</h4>
                    <p className="text-sm text-justify mt-1">{item.desc}</p>

                    <div className="tech-task my-3">
                      <h2 className='font-bold'>Tech Stack</h2>
                      <div className='flex flex-row gap-3 mt-1 bg-white w-fit py-3 px-3 rounded-md shadow-md'>
                        {item.techStack.map((icon, index) => (
                          <img key={index} src={icon} alt="tech stack icon" className="h-6 mx-1" />
                        ))}
                      </div>
                    </div>

                    <div className="work-year">
                      <h2 className="font-bold">Year</h2>
                      <p className="text-xl font-extrabold text-justify mt-1">{item.workedYear}</p>
                    </div>
                  </div>
                </div>
              </a>

            ))
          )}
        </div>
      </section>

      <section className="my-10">
        <div className='flex flex-col pb-5'>
          <h2 className="text-xl font-semibold mb-4">Collaboration</h2>
          <hr className='w-24 border-zinc-700 dark:border-white border-2 -mt-3' />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {(
            collab.map((item) => (
              <a
                key={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col h-full p-4 border rounded-lg overflow-hidden hover:shadow-lg transition border-none hover:cursor-pointer"
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
                  <p className="text-sm text-justify">{item.desc}</p>
                </div>

                <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-gray-800 dark:text-white flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-10">
                  <div>
                    <h4 className="text-lg font-bold">Project Details</h4>
                    <p className="text-sm text-justify mt-1">{item.desc}</p>

                    <div className="tech-task my-3">
                      <h2 className='font-bold'>Tech Stack</h2>
                      <div className='flex flex-row gap-3 mt-1 bg-white w-fit py-3 px-3 rounded-md shadow-md'>
                        {item.techStack.map((icon, index) => (
                          <img key={index} src={icon} alt="tech stack icon" className="h-6 mx-1" />
                        ))}
                      </div>
                    </div>

                    <div className="work-year">
                      <h2 className="font-bold">Year</h2>
                      <p className="text-xl font-extrabold text-justify mt-1">{item.workedYear}</p>
                    </div>
                  </div>
                </div>
              </a>

            ))
          )}
        </div>
      </section>


      <section className='yt-section my-10' id="otw">
        <div className='flex flex-col pb-5'>
          <h2 className="text-xl font-semibold mb-2">🎬 Me on YouTube</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Automatically fetched from <a href="https://www.youtube.com/@adam_firdaus" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">Adam Firdaus's</a> RSS feed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { videoId: "Ly4HBRLqQvo", title: "Demo Fitur Aplikasi LaporPak" },
            { videoId: "anZaBlhm5SY", title: "TechTips #2 : Screen Mirroring, Screen Recording HP Murah Cuma Butuh Kabel USB !" },
            { videoId: "vTDpQP0AyIs", title: "TechTips #1 : Cara Bongkar Laptop - 8 Menit Aja !" },
            { videoId: "Ly4HBRLqQvo", title: "Demo Fitur Aplikasi LaporPak" },
            { videoId: "anZaBlhm5SY", title: "TechTips #2 : Screen Mirroring, Screen Recording HP Murah Cuma Butuh Kabel USB !" },
            { videoId: "vTDpQP0AyIs", title: "TechTips #1 : Cara Bongkar Laptop - 8 Menit Aja !" }
          ].map((video, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <iframe
                className="rounded-md shadow-md"
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="text-sm text-gray-700 dark:text-gray-300">{video.title}</p>
            </div>
          ))}
        </div>
      </section>
      

    </main>
  );
}
