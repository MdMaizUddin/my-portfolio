import React from 'react';

const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl w-full mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hello, I'm{' '}
              <span className="text-teal-600">Mohammad Maiz Uddin</span>
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              Front-End Developer & Meta Ads Expert
            </h2>
            <p className="text-lg text-gray-600">
              Passionate about building responsive websites with HTML, Tailwind
              CSS, JavaScript, and React. I’m also skilled in digital marketing
              and leading teams to success.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/your-cv.pdf"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition"
              >
                📄 Download CV
              </a>
              <a
                href="https://github.com/MdMaizUddin"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition"
              >
                💻 Visit GitHub
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="../../../public/image/photo.jpg"
              alt="Mohammad Maiz Uddin"
              className="w-80 h-auto rounded-xl border shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-6 lg:px-24 bg-white" id="about">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-teal-600">👨‍💻 About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I’m Mohammad Maiz Uddin, a dedicated Front-End Developer and Digital
            Marketer. Currently serving as Managing Director at Vector Classes
            and Facebook Ads Expert at Derin Beauty Page.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
            <div>
              <h3 className="font-semibold text-gray-800">📧 Email:</h3>
              <p className="text-gray-600">mduddin1808@gmail.com</p>

              <h3 className="font-semibold text-gray-800 mt-4">📱 Phone:</h3>
              <p className="text-gray-600">+8801793993563</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">🌍 Location:</h3>
              <p className="text-gray-600">Chittagong, Bangladesh</p>

              <h3 className="font-semibold text-gray-800 mt-4">🧰 Skills:</h3>
              <p className="text-gray-600">
                HTML, CSS, Tailwind CSS, JavaScript, React, Meta Ads, GitHub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16 px-6 lg:px-24" id="mission">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-600 mb-6">
            🎯 My Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            My mission is to build clean, responsive, and accessible web
            applications that solve real-world problems and add value to
            businesses. I aim to keep learning and growing while helping others
            do the same.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
