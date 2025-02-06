import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID; // Remplacez par votre ID de pixel Facebook
    ReactPixel.init(pixelId);
    ReactPixel.pageView();
  }, []);

  return null;
};

export default PixelTracker;
