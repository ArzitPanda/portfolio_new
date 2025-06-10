import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import client from '../Sanity/Client';

const UserReviewForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    comment: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchOrCreateReview = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const data = await client.getDocument(id);
        if (data && !data.comment) {
          setReview(data);
          setFormData({
            name: data.name || '',
            position: data.position || '',
            company: data.company || '',
            comment: '',
          });
        } else if (!data) {
          setReview(null);
          setFormData({
            name: '',
            position: '',
            company: '',
            comment: '',
          });
        } else {
          setSubmitted(true);
        }
      } catch (error) {
        console.error('Error fetching review:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrCreateReview();
  }, [id]);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (review) {
        await client.patch(review._id).set({ comment: formData.comment }).commit();
        setStatus('Review submitted!');
      } else {
        await client.create({
          _type: 'review',
          _id: id,
          ...formData,
        });
        setStatus('Review created and submitted!');
      }
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting review:', error);
      setStatus('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400"></div>
      </div>
    );
  }

  if (submitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.h2 className="text-3xl font-bold mb-4 text-green-400">
          Thank You!
        </motion.h2>
        <p className="text-lg">Your review has been submitted successfully.</p>
      </motion.div>
    );
  }

  return (
   <div className='w-full h-screen bg-black'>
    <h1 className="font-mooli text-5xl md:text-6xl font-bold text-white text-center my-12">arzit.tech</h1>
     <motion.div
      className="p-6 bg-black text-white rounded-lg max-w-xl mx-auto mt-10 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Leave Your Review</h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          name="position"
          placeholder="Your Position"
          value={formData.position}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="comment"
          placeholder="Write your review..."
          value={formData.comment}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows={6}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-300 transition duration-300"
        >
          Submit
        </button>
        {status && <p className="text-green-400 mt-2">{status}</p>}
      </div>
    </motion.div>
   </div>
  );
};

export default UserReviewForm;
