import React from 'react';
import '../css/Style.css';

const Blog = () => {
  const articles = [
    {
      imgSrc: './assets/images/blog-1.jpg',
      imgAlt: 'How to Become a Successful Entry Level UX Designer',
      date: '2022-06-16',
      title: 'How to Become a Successful Entry Level UX Designer',
    },
    {
      imgSrc: './assets/images/blog-2.jpg',
      imgAlt: '2022 Local SEO Success: The Year of Everywhere',
      date: '2022-06-16',
      title: '2022 Local SEO Success: The Year of Everywhere',
    },
    {
      imgSrc: './assets/images/blog-3.jpg',
      imgAlt: 'The Guide to Running a Client Discovery Process',
      date: '2022-06-16',
      title: 'The Guide to Running a Client Discovery Process',
    },
    {
      imgSrc: './assets/images/blog-4.jpg',
      imgAlt: '3 Ways to Get Client Approval for Scope Changes',
      date: '2022-06-16',
      title: '3 Ways to Get Client Approval for Scope Changes',
    },
    {
      imgSrc: './assets/images/blog-5.jpg',
      imgAlt: 'Top 21 Must-Read Blogs For Creative Agencies',
      date: '2022-06-16',
      title: 'Top 21 Must-Read Blogs For Creative Agencies',
    },
  ];

  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <h2 className="h2 section-title">Latest Articles Updated Weekly</h2>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="grid-list">
          {articles.map((article, index) => (
            <li key={index}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ '--width': 860, '--height': 646 }}>
                  <img
                    src={article.imgSrc}
                    width="860"
                    height="646"
                    loading="lazy"
                    alt={article.imgAlt}
                    className="img-cover"
                  />
                </figure>
                <div className="card-content">
                  <time className="time" dateTime={article.date}>{new Date(article.date).toLocaleDateString()}</time>
                  <h3 className="h3">
                    <a href="#" className="card-title">{article.title}</a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
