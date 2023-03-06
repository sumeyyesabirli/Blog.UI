export interface AddPostRequest  {
  title: string | undefined;
  content: string | undefined;
  summary: string | undefined;
  urlHandle: string | undefined;
  aothor: string | undefined;
  visible: boolean | undefined;
  publishDate: string | undefined;
  updatedDate: string | undefined;
  featuredImageUrl: string | undefined;
}
