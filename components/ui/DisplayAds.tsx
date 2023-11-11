import React, { useEffect } from 'react'


export default function DisplayAds () {
  useEffect(() => {
    const pushAd = () => {
      try {
        // @ts-ignore
        window.adsbygoogle.push({})
      } catch (e) {
        console.error(e);
      }
    }

    let interval = setInterval(() => {
      // @ts-ignore
      console.log(window.adsbygoogle);
      // @ts-ignore
      if (window.adsbygoogle) {
        // @ts-ignore
        console.log(window.adsbygoogle);
        pushAd();
      }
    }, 300);

    return () => {
      clearInterval(interval);
    }
  }, []);
  return (
    <>
  <ins className="adsbygoogle"
       style={{display:'block'}}
       data-ad-client="ca-pub-5311725069729372"
       data-ad-slot="9709674992"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
    </>

  )
}

