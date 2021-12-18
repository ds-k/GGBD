export type ReplyType = {
  posts_id?: number;
  departments_id?: number;
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
};
