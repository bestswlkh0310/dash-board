import React, { useEffect } from 'react'

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default function DisplayAds() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, []);

  return (
    <>
      <ins className="adsbygoogle"
           style={{display: 'block'}}
           data-ad-client="ca-pub-5311725069729372"
           data-ad-slot="9709674992"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </>

  )
};


