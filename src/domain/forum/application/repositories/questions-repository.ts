import { Question } from "../../enterprise/entities/question";

export interface QuestionsRepository {
<<<<<<< HEAD
  findBySlug(slug: string): Promise<Question | null>
  create(answer: Question): Promise<void>
=======
  findBySlug(slug: string): Promise<Question | null>;
  create(answer: Question): Promise<void>;
>>>>>>> origin/main
}
