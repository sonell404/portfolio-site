import { requireContext } from 'webpack-env';

export function getImageUrls(folderPath: string): string[] {
    const context = requireContext(folderPath, true, /\.(png|jpe?g|gif|svg)$/);
    const imageUrls = context.keys().map((key: unknown) => context(key).default);
    return imageUrls;
  }