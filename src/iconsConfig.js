import React from 'react';

export const iconsConfig = {
  tick: ({ ...props }) => (
  <svg 
    width={28}
    height={28}
    id="Layer_1" 
    style={{ backgroundVisibility: '0'}}
    version="1.1" 
    viewBox="0 0 612 792" 
    xmlSpace="preserve" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
      <g>
        <g>
            <path 
            style={{clipPath: 'url(#SVGID_2_)',
            fill:'none',
            stroke: '#41AD49',
            strokeWidth: '45'}} 
            d="M306,629.5c128.8,0,233.5-104.7,233.5-233.5S434.8,162.5,306,162.5S72.5,267.2,72.5,396    S177.2,629.5,306,629.5L306,629.5z"/>
            </g>
            <polygon 
              style={{fill:'#41AD49'}} 
              points="421.4,271 241.9,450.5 174.9,383.5 122,436.4 241.9,556.2 257.3,540.8 257.4,540.8 474.3,323.9    421.4,271  "/>
          </g>
  </svg>
  ),

  search: ({ ...props }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1111 9.77778H10.4089L10.16 9.53778C11.0311 8.52444 11.5556 7.20889 11.5556 5.77778C11.5556 2.58667 8.96889 0 5.77778 0C2.58667 0 0 2.58667 0 5.77778C0 8.96889 2.58667 11.5556 5.77778 11.5556C7.20889 11.5556 8.52444 11.0311 9.53778 10.16L9.77778 10.4089V11.1111L14.2222 15.5467L15.5467 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.56444 9.77778 1.77778 7.99111 1.77778 5.77778C1.77778 3.56444 3.56444 1.77778 5.77778 1.77778C7.99111 1.77778 9.77778 3.56444 9.77778 5.77778C9.77778 7.99111 7.99111 9.77778 5.77778 9.77778Z"
        fill="#CECECE"
      />
    </svg>

  ),

  send: ({ ...props }) => (
    <svg 
      width="21px" 
      height="18px" 
      viewBox="0 0 21 18" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
      { ...props }>
      <g 
        id="Icons" 
        stroke="none" 
        strokeWidth="1" 
        fill="none" 
        fillRule="evenodd">
          <g 
            id="Two-Tone" 
            transform="translate(-374.000000, -1529.000000)">
              <g 
                id="Content" 
                transform="translate(100.000000, 1428.000000)">
                  <g 
                    id="Two-Tone-/-Content-/-send" 
                    transform="translate(272.000000, 98.000000)">
                      <g>
                        <polygon 
                          id="Path"
                          points="0 0 24 0 24 24 0 24"></polygon>
                        <path 
                          d="M4,8.25 L11.51,9.25 L4.01,6.03 L4,8.25 Z M4.01,17.97 L11.51,14.75 L4,15.75 L4.01,17.97 Z" id="🔹-Secondary-Color" fill="#D0D0D0"></path>
                        <path 
                          d="M2.01,3 L2,10 L17,12 L2,14 L2.01,21 L23,12 L2.01,3 Z M4,8.25 L4,6.03 L11.51,9.25 L4,8.25 Z M4.01,17.97 L4.01,15.75 L11.52,14.75 L4.01,17.97 Z" id="🔹-Primary-Color" fill="#1D1D1D"></path>
                      </g>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  ),

  cross: ({ ...props }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      dataname="Layer 1" 
      viewBox="0 0 64 64"
      { ...props }
      >
        <line  
          x1="9.37" 
          x2="54.63" 
          y1="9.37" 
          y2="54.63" 
          fill="none" 
          stroke="#010101" 
          strokeMiterlimit="20" 
          strokeWidth="14"/>
        <line 
          x1="9.37" 
          x2="54.63" 
          y1="54.63" 
          y2="9.37" 
          fill="none" 
          stroke="#010101" 
          strokeMiterlimit="20" 
          strokeWidth="14"/>
      </svg>

  ),
}

