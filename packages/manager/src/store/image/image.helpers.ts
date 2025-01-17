import { Image } from '@linode/api-v4/lib/images';

export const filterImagesByType = (
  images: Record<string, Image>,
  type: 'public' | 'private'
): Record<string, Image> => {
  return Object.keys(images).reduce((acc, eachKey) => {
    /** keep the public images if we're filtering by public images */
    if (type === 'public' && !!images[eachKey].is_public) {
      acc[eachKey] = images[eachKey];
    }

    /** keep the private images if we're filtering by private images */
    if (type === 'private' && !images[eachKey].is_public) {
      acc[eachKey] = images[eachKey];
    }

    return acc;
  }, {});
};

export const filterOutKubeImages = (
  images: Record<string, Image>
): Record<string, Image> => {
  return Object.keys(images).reduce((acc, eachKey) => {
    if (
      !(
        images[eachKey].label.match(/kube/i) &&
        images[eachKey].created_by === 'linode'
      )
    ) {
      acc[eachKey] = images[eachKey];
    }

    return acc;
  }, {});
};
