import React from "react";

const NewsItem = props => {
    let { title, description, imgurl, newsurl, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <div className="card-body" style={{height: '500px'}}>
            <img
              src={
                !imgurl
                  ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                  : imgurl
              }
              className="card-img-top"
              alt="..."
              style={{
                height: '250px',
                width: '100%'
              }}
            />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "anonymous"} on {date}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
              style={{marginBottom: 'auto'}}
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
