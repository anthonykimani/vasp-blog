export interface BlogArticle {
    id: number;
    title: string;
    currentSlug: any; // Typically would use a more specific type tailored to what a 'slug' should represent
    imageUrl: any; // Adjust the type according to the image representation you need
    description: string;
    dateTime: string;
    categoryTitle: string;
    headings?: Array<HTMLHeadElement | string>;
    authorName: string;
    authorRole: string;
    authorImageUrl: any;
    content: any; // Specify a more detailed type if you know the structure of items in the array
  }

  export interface EventInterface {
    id: number;
    title: string;
    currentSlug: any; // Typically would use a more specific type tailored to what a 'slug' should represent
    imageUrl: any; // Adjust the type according to the image representation you need
    description: string;
    dateTime: string;
    date: string;
    headings?: Array<HTMLHeadElement | string>;
    categoryTitle: string;
    location: string;
    link:string;
    content: any; // Specify a more detailed type if you know the structure of items in the array
  }

  export interface ResourceInterface {
    id: number;
    title: string;
    currentSlug: any; // Typically would use a more specific type tailored to what a 'slug' should represent
    imageUrl: any; // Adjust the type according to the image representation you need
    description: string;
    link: string;
    dateTime: string;
    headings?: Array<HTMLHeadElement | string>;
    categoryTitle: string;
    location: string;
    researchedEntity: string;
  }