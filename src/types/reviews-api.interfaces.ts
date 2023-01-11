export interface Reviewer {
  image: string;
  name: string;
}

export interface Review {
  id: number;
  reviewer: Reviewer;
  date: string;
  comment: string;
}
