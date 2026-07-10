export const getMobileImagePath = (imageUrl: string): string | undefined => {
  if (!imageUrl.startsWith('/images/cuadros/')) return undefined;

  const pathWithoutExtension = imageUrl.replace(/\.[^/.]+$/, '');
  const mobilePath = pathWithoutExtension.replace('/images/cuadros/', '/images/mobile/cuadros/') + '.webp';
  return encodeURI(mobilePath);
};
