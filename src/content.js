import React from "react";
import './App.css'; 
import pic1 from './assests/pic1.png'
import pic2 from './assests/pic2.png'
import pic3 from './assests/pic3.png'
import pic4 from './assests/pic4.png'
import pic5 from './assests/pic5.png'
import pic6 from './assests/pic6.png'

function Content() {
  const videos = [
    {
      title: "Tech Breakdown",
      views: "1M views",
      date: "1 day ago",
      thumbnail: pic1 
    },
    {
      title: "Italy Vlog",
      views: "100K views",
      date: "2 month ago",
      thumbnail: pic2
    },
    {
        title: "Travel to India",
        views: "800K views",
        date: "5 month ago",
        thumbnail: pic3 
      },
      {
        title: "DIML Vlog",
        views: "500K views",
        date: "2 days ago",
        thumbnail: pic6 
      }, {
        title: "Diwali Vlog",
        views: "50K views",
        date: "2 days ago",
        thumbnail: pic5
      }, {
        title: "Canada Vlog",
        views: "1M views",
        date: "2 days ago",
        thumbnail: pic4
      }, 
    
  ];

  return (
    <div className="main-content">
      <div className="video-feed">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <div className="video-info">
              <span className="video-title">{video.title}</span><br></br>
              <span className="video-views">{video.views}</span><br></br>
              <span className="video-date">{video.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
