import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-200 flex flex-col justify-between">
      <img src={url} alt={title} />
      <p className="p-2 text-xs italic">{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
