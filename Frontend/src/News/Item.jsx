import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './News.scss';

const Item = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/news/${id}`);
        setNews(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching news item:', err.response ? err.response.data : err.message);
        setError('Failed to load news item. Please try again.');
      }
    };

    fetchNewsItem();
  }, [id]);

  if (error) {
    return (
      <div className="news-container">
        <div className="news-not-found">{error}</div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="news-container">
        <div className="news-not-found">Loading...</div>
      </div>
    );
  }

  return (
    <div className="news-container">
      <h2 onClick={() => navigate(-1)} className="go-back">Go back</h2>
      <div className="news-hero">
        <img src={news.image} alt={news.title} className="news-hero-image" />
        <div className="news-hero-overlay">
          <span className="news-category">{news.category || 'Other'}</span>
          <h1 className="news-title">{news.title}</h1>
          <p className="news-date">{new Date(news.createdAt || Date.now()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</p>
        </div>
      </div>
      <div className="news-content">
        <div className="news-card">
          <div className="news-details">
            <p>{news.description}</p>
            {news.extendedContent && (
              <>
                <p>{news.extendedContent}</p>
                {news.quotes && (
                  <div className="news-quote">
                    <blockquote>"{news.quotes}"</blockquote>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;