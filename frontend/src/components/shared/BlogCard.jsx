import PropTypes from "prop-types";
const BlogCard = ({ title, content, imgUrl }) => {
  return (
    <div className="row featurette my-4">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">{title}</h2>

        <p className="lead">{content}</p>
      </div>
      <div className="col-md-5">
        <img
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          src={imgUrl}
          aria-label="Placeholder: 500x500"
        />
      </div>

      <div className="my-4">
        <button type="button" className="btn btn-outline-primary">
          Read More...
        </button>
      </div>
      <hr className="featurette-divider" />
    </div>
  );
};

BlogCard.propTypes = {
  content: PropTypes.any,
  imgUrl: PropTypes.any,
  likes: PropTypes.any,
  tags: PropTypes.any,
  title: PropTypes.any,
};

export default BlogCard;
