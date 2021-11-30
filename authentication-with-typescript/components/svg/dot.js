import React from 'react'


export default function Dot() {
    return (
        
            <svg height="100%" width="100%">
  <defs>
    <pattern id="doodad" width="26" height="26" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(67)">
      <rect width="100%" height="100%" fill="rgba(44, 122, 123,1)"/>
      <circle cx="20" cy="20" r="1" fill="rgba(44, 26, 45,1)"/>
      <circle cx="20" cy="20" r="2" fill="rgba(254, 252, 191,1)"/>
      <circle cx="-20" cy="20" r="2" fill="rgba(254, 252, 191,1)"/>
    </pattern>
  </defs>
  <rect fill="url(#doodad)" height="200%" width="200%"/>
  <div className="w-screen h-screen"></div>
</svg>

      
    )
}
