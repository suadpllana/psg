import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './News.scss';

const Item = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get(`https://psg-backend-a8ys.onrender.com/news/${id}`);
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
      <div className="news-item-error-container">
        <div className="news-item-error-content">
          <h2 className="news-item-error-title">Oops!</h2>
          <p className="news-item-error-message">{error}</p>
          <button 
            className="news-item-error-button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="news-item-loading-container">
        <div className="news-item-loading-spinner"></div>
        <p className="news-item-loading-text">Loading Article...</p>
      </div>
    );
  }

  return (
    <div className="news-item-container">
      <div className="news-item-hero">
        <div className="news-item-hero-backdrop">
          <img 
            src={news.image} 
            alt={news.title} 
            className="news-item-hero-image" 
            loading="lazy"
          />
          <div  className="news-item-hero-gradient"></div>
        </div>
        <div className="news-item-hero-content">
          <div className="news-item-meta">
            <span className="news-item-date-badge">
              {new Date(news.createdAt || Date.now()).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          <h1 className="news-item-title">{news.title}</h1>
        
        </div>
      </div>

      <div className="news-item-body">
        <article className="news-item-article">
          <p className="news-item-lead">{news.description}</p>
          
          {news.extendedContent && (
            <>
              <p className="news-item-paragraph">{news.extendedContent}</p>
              
              {news.quotes && (
                <div className="news-item-quote-container">
                  <div className="news-item-quote-mark">"</div>
                  <blockquote className="news-item-quote">{news.quotes}</blockquote>
                </div>
              )}
            </>
          )}

         
        </article>

      
      </div>

      <div className="news-item-footer">
        <button 
          className="news-item-back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to News
        </button>
      </div>
    </div>
  );
};

export default Item;