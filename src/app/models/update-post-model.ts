export interface UpdatePostRequest  {
  title: string | undefined;
  content: string | undefined;
  summary: string | undefined;
  urlHandle: string | undefined;
  aothor: string | undefined;
  visible: boolean | undefined;
  publishDate: Date | undefined;
  updatedDate: Date | undefined;
  featuredImageUrl: string | undefined;
}
