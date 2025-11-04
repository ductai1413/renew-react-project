export interface VideoProps {
  video: {
    url: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    likes: number;
    isLiked: boolean;
  };
}
