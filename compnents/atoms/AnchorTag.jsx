import PropTypes from 'prop-types';

const AnchorTag = ({ href, children }) => {
  
  const anchorStyle = " hover:text-gray-900 ease-in duration-300  cursor-pointer text-[16px] font-medium text-gray-700 text-opacity-50  "
  
  return (
    <a className={anchorStyle} href={href}>{children}</a>
  )
}

AnchorTag.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default AnchorTag