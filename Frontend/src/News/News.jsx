import { useState, useEffect } from 'react';
import axios from 'axios';
import './News.scss';
import { useNavigate } from 'react-router-dom';
const News = () => {
  const [news, setNews] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  
  useEffect(() => {
    axios
      .get('http://localhost:5000/news')
      .then((res) => setNews(res.data))
      .catch((err) => {
        console.error('Error fetching news:', err);
        setError('Failed to load news.');
      });

      
  }, []);


  const newsTypes = ['All', 'Transfers', 'Interviews', 'Club News'];

  const filteredNews = news
    .filter((news) => selectedType === 'All' || news.category === selectedType)
    .filter(
      (news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.description.toLowerCase().includes(searchQuery.toLowerCase())
    );


  return (
    <div className="news-container">
      <h1 className="news-title">PSG 2024-25 News</h1>
      <div className="news-filter">
        {newsTypes.map((type) => (
          <button
            key={type}
            className={`filter-button ${selectedType === type ? 'active' : ''}`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="news-search">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      {error && <p className="news-not-found">{error}</p>}
      <div className="news-grid">
        {filteredNews.map((news) => (
          <div onClick={() => navigate(`/psg/news/${news._id}`)}  key={news._id} className="news-card">
            <div  className="news-header">
              <img src={news.image} alt={news.title} className="news-image" />
              <span
                className={`news-category ${news.category
                  .toLowerCase()
                  .replace(' ', '-')}`}
              >
                {news.category}
              </span>
            </div>
            <div>
              <h2 className="news-title-text">{news.title}</h2>
              <p className="news-date">
                {new Date(news.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <p className="news-excerpt">
                {news.description.substring(0, 100)}...
              </p>
              <button  className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
      {filteredNews.length === 0 && !error && (
        <div className="news-not-found">No news found matching your criteria</div>
      )}
    </div>
  );
};

export default News;