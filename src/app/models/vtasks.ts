export interface VTask {
  id?: number;
  date: string;
  category: string;
  title: string;
  description: string;
  period: number;
  isUrgent: boolean;
  class: string
}
