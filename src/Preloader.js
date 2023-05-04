import React, { useState, useEffect } from 'react';

const Preloader = ({ assets, children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(async ()  => {
    const promises = [];
    
    // Load all assets
    assets.forEach((asset) => {
      if (asset.type === 'image') {
        promises.push(
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = asset.url;
            console.log(img);
            img.onload = resolve;
            img.onerror = reject;
            console.log("image is push")
          })
        );
    //   } else if (asset.type === 'audio') {
    //     promises.push(
    //       new Promise((resolve, reject) => {
    //         const audio = new Audio();
    //         audio.src = asset.url;
    //         audio.onloadedmetadata = resolve;
    //         audio.onerror = reject;
    //       })
    //     );
    //   } else if (asset.type === 'video') {
    //     promises.push(
    //       new Promise((resolve, reject) => {
    //         const video = document.createElement('video');
    //         video.src = asset.url;
    //         video.onloadedmetadata = resolve;
    //         video.onerror = reject;
    //       })
    //     );
    //   } 
        }
    //     else if (asset.type === 'js') {
    //     promises.push(
    //       new Promise((resolve, reject) => {
    //         const script = document.createElement('script');
    //         script.src = asset.url;
    //         script.onload = resolve;
    //         script.onerror = reject;
    //         // document.body.appendChild(script);
    //       })
    //     );
    //   } 
    else if (asset.type === 'css') {
        promises.push(
          new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = asset.url;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
          })
        );
      }
    });

    // Wait for all promises to resolve
   return Promise.all(promises)
    .then(() => {
      setLoaded(true);
    })
    .catch((err) => {
      console.log(err);
    });

  }, [assets]);

  return loaded ? children : <div>Loading...</div>;
};

export default Preloader;
