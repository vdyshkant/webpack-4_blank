import React from 'react'
import PropTypes from 'prop-types'

function SpriteIcon({ iconId, width = 16, height = 16, className = 'icon' }) {
  return (
    <svg className={className} width={width} height={height}>
      <use xlinkHref={`./sprites.svg#${iconId}`} />
    </svg>
  );
}

export default SpriteIcon;

SpriteIcon.propTypes = {
  iconId: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
