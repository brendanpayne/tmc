import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-white w-full mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-primary">Welcome to Our Discord Community!</h2>
      <p className="text-secondary mb-4">
        Join our vibrant community of developers, designers, and tech enthusiasts. Whether you're here to learn, share, or just hang out, you'll find a place among us.
      </p>
      <p className="text-secondary mb-4">
        We host regular events, coding challenges, and discussions on the latest in tech. Don't hesitate to ask questions, share your projects, or just say hi!
      </p>
      <p className="text-secondary">
        Click the link below to join our Discord server and start connecting with like-minded individuals.
      </p>
      <div className="mt-6">
        <a
          href="https://discord.com/invite/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
        >
          Join Our Discord
        </a>
      </div>
    </div>
  );
};

export default About;