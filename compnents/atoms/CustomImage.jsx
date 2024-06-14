import PropTypes from "prop-types";

function CustomImage({ src, alt, variant }) {
  const imageType = (variant) => {
    let imageStyle;
    switch (variant) {
      case "prime":
        imageStyle = "w-full h-[250px]";
        break;
      case "second":
        imageStyle = "w-[320px] h-[300px]";
        break;
      case "third":
        imageStyle = "w-[225px] h-[146px]";
        break;
      case "four":
        imageStyle = "w-[100%]";
        break;
      case "five":
        imageStyle = "w-[35px] h-[35px]";
        break;
      case "six":
        imageStyle = "w-[76px] h-[40px]";
        break;
      case "seven":
        imageStyle = "w-[50px] h-[50px]";
        break;
      case "logo":
        imageStyle = "w-[228.42px] h-[38px]";
        break;
      case "work":
        imageStyle = "w-[450px] h-[370px]";
        break;
      default:
        // Default style if no variant matches
        imageStyle = ""; // You can set a default style here if needed
        break;
    }
    return imageStyle;
  };

  const getImageStyle = imageType(variant);

  return <img className={getImageStyle} src={src} alt={alt} />;
}

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default CustomImage;