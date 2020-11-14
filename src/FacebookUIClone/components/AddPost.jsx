import React from "react";

export const AddPost = () => {
  return (
    <div className="add-post-container">
      <div className="add-post-wrapper">
        <div className="add-post-wrapper__top-section">
          <div className="avatar-wrapper">
            <img
              src="https://scontent.fkul16-1.fna.fbcdn.net/v/t1.0-1/p320x320/124354962_10218720359021816_6353348838620994993_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=6e6B7tHtFzoAX84aCz2&_nc_ht=scontent.fkul16-1.fna&tp=6&oh=6f4cbcbc701fb6a741aa08e7b5dc35fe&oe=5FD45B4F"
              className="avatar-wrapper__avatar"
              alt="avatar"
            />
          </div>
          <div className="search-wrapper">
            <form className="search-form">
              <input
                className="search-input"
                type="text"
                placeholder="Whats on your mind, Rong ?"
              />
              <input className="search__submit--hidden" type="submit" />
            </form>
          </div>
        </div>

        <div className="add-post-wrapper__btm-section">
          <div className="icon-wrapper">
            <div className="live-video"></div>
            <p>Live Video</p>
          </div>
          <div className="icon-wrapper">
            <div className="photo-video"> </div>
            <p>Photo/ Video</p>
          </div>
          <div className="icon-wrapper">
            <div className="feel-activity"> </div>
            <p>Feeling/ Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
};
