/**
 *
 * AddButton
 *
 */

import React from "react";
import SVG from "./StyledSvg";

function AddButton({ theme, onClick }) {
  return (
    <SVG
      width="22"
      height="22"
      viewBox="0 0 19.541 19.269"
      fill={theme.color}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.608,14.69h-3.44V11.25a.739.739,0,1,0-1.478,0v3.44H11.25a.708.708,0,0,0-.739.739.715.715,0,0,0,.739.739h3.44v3.44a.716.716,0,0,0,.739.739.735.735,0,0,0,.739-.739v-3.44h3.44a.739.739,0,1,0,0-1.478Z"
        transform="translate(-5.512 -5.512)"
      />
      <path
        d="M13.146,4.672a8.46,8.46,0,0,1,5.98,2.441,8.26,8.26,0,0,1,0,11.793,8.545,8.545,0,0,1-11.96,0,8.26,8.26,0,0,1,0-11.793,8.46,8.46,0,0,1,5.98-2.441m0-1.3a9.7,9.7,0,0,0-9.771,9.634,9.7,9.7,0,0,0,9.771,9.634,9.7,9.7,0,0,0,9.771-9.634,9.7,9.7,0,0,0-9.771-9.634Z"
        transform="translate(-3.375 -3.375)"
      />
    </SVG>
  );
}

AddButton.defaultProps = {
  theme: {
    color: '#0099FF',
    bgColor: 'white'
  }
};

export default AddButton;
