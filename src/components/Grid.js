import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const Grid = ({ searchQuery }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  }, [inView, loading]);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
      setItems(prevItems => [...prevItems, ...response.data.page['content-items'].content]);
    } catch (error) {
      console.error('Error fetching data', error);
    }
    setLoading(false);
  };

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="grid">
      {filteredItems.map((item, index) => (
        <div className="thumbnail" key={index}>
          <img src={`https://test.create.diagnal.com/images/${item['poster-image'] || 'default.jpg' }`} alt={item.name || 'No title'} />
          <p>{item.name || 'No title'}</p>
        </div>
      ))}
      <div ref={ref} className="loading"></div>
    </div>
  );
};

export default Grid;