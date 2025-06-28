import { useState, useEffect } from "react";
import axios from "axios";
import placeholder from "../../public/images/placeholder.png";
import "./News.scss";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://psg-backend-hvny.onrender.com/news")
      .then((res) => {
        const sortedNews = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNews(sortedNews);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setError("Failed to load news.");
      });
  }, []);

  const newsTypes = ["All", "Transfers", "Interviews", "Club News"];

  const filteredNews = news
    .filter((news) => selectedType === "All" || news.category === selectedType)
    .filter(
      (news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, searchQuery]);

  return (
    <div className="news-container">
      <h1 className="news-title">PSG 2024-25 News</h1>
      <div className="news-filter">
        {newsTypes.map((type) => (
          <button
            key={type}
            className={`filter-button ${selectedType === type ? "active" : ""}`}
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
        {currentNews.map((news) => (
          <div
            onClick={() => navigate(`/psg/news/${news._id}`)}
            key={news._id}
            className="news-card"
          >
            <div className="news-header">
              <img
                src={news.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
                alt={news.title}
                className="news-image"
              />
              <span
                style={{ backgroundColor: "green" }}
                className={`news-category ${news.category
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {news.category}
              </span>
            </div>
            <div>
              <h2 className="news-title-text">{news.title}</h2>
              <p className="news-date">
                {new Date(news.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p className="news-excerpt">
                {news.description.substring(0, 100)}...
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
      {filteredNews.length === 0 && !error && (
        <div className="news-not-found">
          No news found matching your criteria
        </div>
      )}

      {filteredNews.length > newsPerPage && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`pagination-button ${
                currentPage === number ? "active" : ""
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
