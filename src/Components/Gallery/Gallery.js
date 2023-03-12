import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

function Gallery() {


  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'https://drive.google.com/uc?export=view&id=1pnIP_0r2BtdUsSZ-LZdVl0yD-stMz_Va',
    'https://drive.google.com/uc?export=view&id=1YJbD5ROI42cCe-ubkIYiS_bkFXU2hhHo',
    'https://drive.google.com/uc?export=view&id=1Z7PsCrFMEag-DJDvdyn9XInG3ftxmqH3',
    'https://drive.google.com/uc?export=view&id=1bPyKTQ_9M4qa2cnEZOyRhlybwF6aiW8Z',
    'https://drive.google.com/uc?export=view&id=1vi9CPaIwBROHhHCyW7LMwQE3AvK2_9SP',
    'https://drive.google.com/uc?export=view&id=1_NVTsyHuM5IT_hvmcWx_yGZKRMtvhNU8',
    'https://drive.google.com/uc?export=view&id=1YJbD5ROI42cCe-ubkIYiS_bkFXU2hhHo',
    'https://drive.google.com/uc?export=view&id=1_u2T9AEJLo5GeuXmbeHhx1yCdybk1mtJ',
    'https://drive.google.com/uc?export=view&id=1e8dc9iHsstUhNPhbZIIviEhkq6o4Buen',
    'https://drive.google.com/uc?export=view&id=1auRVL-W5gOuCvFicK3JXR8qVs2gEU3Q4',
    'https://drive.google.com/uc?export=view&id=1jqNPOARyDCa8Z2Dr75DlnUtdI30_yCkN',
    'https://drive.google.com/uc?export=view&id=1YR4Gel-sQOiaRgZoFJNb-PCC3z-MFh2O',
    'https://drive.google.com/uc?export=view&id=1adjPemK4zYMUfgfwi6QB-2aKKsHn_P0t',
    'https://drive.google.com/uc?export=view&id=1aC3kHCiKn3R4VPgAx792N06MiyRb6nr7',
    'https://drive.google.com/uc?export=view&id=1ZpTGZuUPU5VTt1iuFZhvdk7X7aFCfA6b',
    'https://drive.google.com/uc?export=view&id=1a3uem0ieK0pGrR9kV5aJVxiioXDWjHyG',
    'https://drive.google.com/uc?export=view&id=1rkBYGkYxcRnzRWaUFY85MZrGgY6iaKC2',
    'https://drive.google.com/uc?export=view&id=1aizJo0Ddte6q8akBgFnko6K5MCRuImYl',
    'https://drive.google.com/uc?export=view&id=1YJbD5ROI42cCe-ubkIYiS_bkFXU2hhHo',
    'https://drive.google.com/uc?export=view&id=1cBU3ew5d5_gtx_eIi2H02Jj8wWHJomDx',
    'https://drive.google.com/uc?export=view&id=1ihqx1eNS4TW47DjDhibrHBJZUTtjhRXM',
    'https://drive.google.com/uc?export=view&id=15OqXOBWmwYeFyPX6vN63o9nWhmic10t9',
    'https://drive.google.com/uc?export=view&id=1KH65G3o8Rtmbzp7tA14YAULYMNXznVaO',
    'https://drive.google.com/uc?export=view&id=1F7svsHN9aGUa5XerHAjdC4jO1u9f7x_C',
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className='container justify-content-center'>

      <h2 className='text-center py-5 text-decoration-underline' style={{ color: "red" }}>Gallery</h2>

      <h3 className='text-center pt-5' style={{ color: "red" }}>IKC </h3>
      <h3 className='text-center text-muted'>Season 5 </h3>

      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="400px"
          height="300px"
          key={index}
          style={{ margin: '10px' }}
          alt="" />

      )) 
      }

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}


export default Gallery