import React from 'react';

const Project = () => {
  return (
    <section id="projects" class="bg-gray-100 py-12 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
  
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h3 class="text-xl font-semibold text-indigo-600 mb-2">Grocery Shop Landing Page</h3>
          <p class="text-gray-600 text-sm mb-4">A responsive landing page for a grocery shop using HTML and Tailwind CSS.</p>
          <a href="https://mdmaizuddin.github.io/Grocery-shop-website-landing-page/" target="_blank" class="text-blue-500 hover:underline">View Project →</a>
        </div>
  
    
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h3 class="text-xl font-semibold text-indigo-600 mb-2">Architect Portfolio Website</h3>
          <p class="text-gray-600 text-sm mb-4">A modern architect website built with HTML and responsive layout practices.</p>
          <a href="https://mdmaizuddin.github.io/g3-architects-website/" target="_blank" class="text-blue-500 hover:underline">View Project →</a>
        </div>
  
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h3 class="text-xl font-semibold text-indigo-600 mb-2">Kids School Website</h3>
          <p class="text-gray-600 text-sm mb-4">An educational kids website featuring fun, friendly design and responsiveness.</p>
          <a href="https://mdmaizuddin.github.io/B11-A2-Kids-School/" target="_blank" class="text-blue-500 hover:underline">View Project →</a>
        </div>
  
    
        <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h3 class="text-xl font-semibold text-indigo-600 mb-2">Other Projects on GitHub</h3>
          <p class="text-gray-600 text-sm mb-4">Explore my other front-end and JavaScript projects hosted on GitHub.</p>
          <a href="https://github.com/MdMaizUddin" target="_blank" class="text-blue-500 hover:underline">Visit GitHub →</a>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Project;