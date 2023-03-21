import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <img src={image.url} alt={image.title} />
            </li>
          );
        })}
      </ol>
    </>
  );
};
