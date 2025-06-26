import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminNews.scss';

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentNewsId, setCurrentNewsId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/news');
      setNews(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching news:', err.response ? err.response.data : err.message);
      setError('Failed to load news. Please try again.');
    }
  };

  const addNews = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to add news.');
      navigate('/psg/admin/login');
      return;
    }

    console.log('Adding news with token:', token); // Debug token

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('category', category);

    try {
      await axios.post('http://localhost:5000/news', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchNews();
      clearForm();
    } catch (err) {
      console.error('Error adding news:', err.response ? err.response.data : err.message);
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('token');
        setError('Session expired. Please log in again.');
        navigate('/psg/admin/login');
      } else {
        setError('Failed to add news. Please try again.');
      }
    }
  };

  const updateNews = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to update news.');
      navigate('/psg/admin/login');
      return;
    }

    console.log('Updating news with token:', token); 

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);
    formData.append('category', category);

    try {
      await axios.put(`http://localhost:5000/news/${currentNewsId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchNews();
      clearForm();
    } catch (err) {
      console.error('Error updating news:', err.response ? err.response.data : err.message);
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('token');
        setError('Session expired. Please log in again.');
        navigate('/psg/admin/login');
      } else {
        setError('Failed to update news. Please try again.');
      }
    }
  };

  const deleteNews = async (id, title) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to delete news.');
      navigate('/psg/admin/login');
      return;
    }

    console.log('Deleting news with token:', token); 

    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchNews();
      setError(null);
    } catch (err) {
      console.error('Error deleting news:', err.response ? err.response.data : err.message);
      if (err.response && err.response.status === 401) {
        localStorage.removeItem('token');
        setError('Session expired. Please log in again.');
        navigate('/psg/admin/login');
      } else {
        setError(`Failed to delete news: ${err.response ? err.response.data.message || err.message : err.message}`);
      }
    }
  };

  const editNews = (n) => {
    setEditing(true);
    setCurrentNewsId(n._id);
    setTitle(n.title);
    setDescription(n.description);
    setCategory(n.category);
    setImage(null);
  };

  const clearForm = () => {
    setEditing(false);
    setCurrentNewsId(null);
    setTitle('');
    setDescription('');
    setImage(null);
    setCategory('');
    setError(null);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/psg/admin/login');
  };

  return (
    <div className="admin-news-container">
      <div className="header">
        <h1 className="title">Admin News Management</h1>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="news-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          rows="4"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="form-file"
        />
        <input
          type="text"
          placeholder="Category (e.g., Transfers, Interviews, Club News)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
        />
        <div className="form-buttons">
          {editing ? (
            <button className="action-button update-button" onClick={updateNews}>
              Update News
            </button>
          ) : (
            <button className="action-button add-button" onClick={addNews}>
              Add News
            </button>
          )}
          <button className="action-button clear-button" onClick={clearForm}>
            Clear
          </button>
        </div>
      </div>
      <div className="news-list">
        {news.map((n) => (
          <div key={n._id} className="news-item">
            <div className="news-details">
              <h2 className="news-title">{n.title}</h2>
              <p className="news-category">{n.category}</p>
            </div>
            <div className="news-actions">
              <button className="edit-button" onClick={() => editNews(n)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => deleteNews(n._id, n.title)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNews;