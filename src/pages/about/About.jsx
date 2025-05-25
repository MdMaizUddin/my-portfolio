import React from 'react';

const About = () => {
  return (
    <section id="about" class="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-teal-500 inline-block">
        About Me
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
       
        <div>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            👋 I'm <span class="font-semibold text-gray-900">Mohammad Maiz Uddin</span>, an aspiring <span class="text-teal-600 font-medium">Front-End Developer</span> based in Bangladesh. I specialize in HTML, CSS, Tailwind CSS, DaisyUI, and JavaScript — currently learning React.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            I’ve also worked as a <span class="font-medium text-teal-600">Facebook Ads Expert</span>, creating high-performing campaigns and crafting visual content that engages. My unique blend of technical and creative skills helps me design smooth and modern UI experiences.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            I love building responsive websites and collaborating with creative teams. I’m excited about opportunities to grow, especially at innovative agencies like <span class="font-semibold text-gray-900">Softvence</span>.
          </p>
        </div>
  
     
        <div class="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h3 class="text-xl font-semibold text-teal-600 mb-4">Quick Facts</h3>
          <ul class="space-y-3 text-gray-700 text-base">
            <li>🎯 <span class="font-medium">Current Role:</span> Managing Director, Vector Classes</li>
            <li>💼 <span class="font-medium">Experience:</span> Facebook Ads, UI Projects</li>
            <li>🛠️ <span class="font-medium">Skills:</span> HTML, CSS, JS, Tailwind, DaisyUI, React (Learning)</li>
            <li>📁 <span class="font-medium">GitHub:</span> <a href="https://github.com/MdMaizUddin" class="text-teal-500 underline">MdMaizUddin</a></li>
            <li>📧 <span class="font-medium">Email:</span> mduddin1808@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default About;