import React, { useState } from 'react';
import client from '../../Sanity/Client';

const AdminReviewForm = () => {
  const [formData, setFormData] = useState({ name: '', position: '', company: '' });
  const [link, setLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const doc = {
      _type: 'review',
      name: formData.name,
      position: formData.position,
      company: formData.company,
      comment: '',
    };

    const result = await client.create(doc);
    const generatedLink = `${window.location.origin}/review/${result._id}`;
    setLink(generatedLink);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="font-mooli text-4xl md:text-5xl font-bold text-yellow-400 mb-12">
        What People Say
      </h1>

      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-white">Create Review Entry</h2>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            name="position"
            placeholder="Position"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            name="company"
            placeholder="Company"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-300 transition duration-300"
          >
            Generate Link
          </button>

          {link && (
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <p className="text-green-400 mb-2">Share this link:</p>
              <div className="flex items-center justify-between gap-2">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline break-all">
                  {link}
                </a>
                <button
                  onClick={handleCopy}
                  className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminReviewForm;
