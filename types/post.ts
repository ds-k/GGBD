export type PostType = {
  allow_reply: boolean;
  body: string;
  createdAt: string;
  description: string;
  id: number;
  is_blocked: boolean;
  is_reported: number;
  likes: number;
  public: boolean;
  scraps: number;
  slug: string;
  thumbnail: string;
  title: string;
  updatedAt: string;
  users_id: number;
  weather: string;
  user: string;
  department?: { name: string; id: string } | any;
  posts_replies?: [
    {
      posts_id: number;
      id: number;
      users_id: number;
      reply: string;
      is_reported: number;
      is_blocked: boolean;
      createdAt: string;
      updatedAt: string;
      user: {
        id: number;
        nickname: string;
        img: string;
      };
    }
  ];
};
