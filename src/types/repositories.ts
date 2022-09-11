export type Repository = Partial<{
  id: number;
  name: string;
  url: string;
  stargazers_count: number;
}>;

export type GetRepositoriesResponse = {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
};
