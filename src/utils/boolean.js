import { IMAGE_COMING_SOON } from "../enums/product";

export function getImageSource(imageSource) {
  return imageSource ? imageSource : IMAGE_COMING_SOON;
}
