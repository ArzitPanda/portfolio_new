import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import client from '../Sanity/Client';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const CACHE_KEY = 'cached_reviews_data';
  const CACHE_EXPIRY_KEY = 'cached_reviews_expiry';
  const CACHE_DURATION = 1000 * 60 * 5;
  useEffect(() => {
    const now = Date.now();
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    const cachedExpiry = sessionStorage.getItem(CACHE_EXPIRY_KEY);

    if (cachedData && cachedExpiry && now < parseInt(cachedExpiry)) {
      // ✅ Use cached data
      setReviews(JSON.parse(cachedData));
    } else {
      // 🔄 Fetch from Sanity and filter
      const fetchReviews = async () => {
        const query = `*[_type == "review" && defined(comment)] | order(_updatedAt desc)`;
        try {
          const data = await client.fetch(query);
          const filtered = data.filter(review => review.comment?.length >= 10);
          setReviews(filtered);
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(filtered));
          sessionStorage.setItem(CACHE_EXPIRY_KEY, (now + CACHE_DURATION).toString());
        } catch (err) {
          console.error('Error fetching reviews:', err);
        }
      };

      fetchReviews();
    }
  }, []);
  

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center p-6 bg-black min-h-screen">
      <h1 className="font-mooli text-4xl md:text-5xl font-bold text-yellow-400 mb-12">What People Say</h1>
        {reviews.length===0 &&<div className="text-white"> nothing...😅</div> }
      <div className="flex gap-10 w-full items-center justify-center flex-wrap lg:w-10/12">
        <AnimatePresence mode="wait">
          {currentReviews.map((review) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="w-10/12  lg:max-w-xl bg-gradient-to-br from-[#3b3b3b] to-[#0f0f0f] shadow-xl drop-shadow-lg shadow-yellow-500/10 rounded-xl p-6 flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start md:h-[300px] md:aspect-square aspect-[1/1]"
            >
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.name}`}
                className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400 mb-4 md:mb-0 md:mr-6"
                alt={review.name}
              />
              <div className="text-center md:text-left">
                <p className="text-white text-lg md:text-lg font-medium leading-relaxed mb-4">
                  “{review.comment?.length>100?review.comment.slice(0,96)+"...":review.comment}”
                </p>
                <div className="text-yellow-300 font-semibold text-base">{review.name}</div>
                <div className="text-yellow-100 text-sm italic">{review.position} at {review.company}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-end w-full max-w-5xl mt-10 pr-2">
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 disabled:opacity-50"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 disabled:opacity-50"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
