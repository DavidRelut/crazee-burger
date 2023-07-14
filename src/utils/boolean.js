import { IMAGE_COMING_SOON } from "../enums/product";

export const getImageSource = (imageSource) => {
  return imageSource ? imageSource : IMAGE_COMING_SOON;
};
