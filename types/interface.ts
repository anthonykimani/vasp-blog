export interface BlogArticle {
    id: number;
    title: string;
    slug: any; // Typically would use a more specific type tailored to what a 'slug' should represent
    imageUrl: any; // Adjust the type according to the image representation you need
    description: string;
    date: string;
    categoryTitle: string;
    authorName: string;
    authorRole: string;
    authorImageUrl: any;
    content: any[]; // Specify a more detailed type if you know the structure of items in the array
  }