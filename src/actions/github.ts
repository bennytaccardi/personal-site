"use server";

import { GitHubRepo } from "@/types/github-repo";

export async function retrieveGHRepos(): Promise<GitHubRepo[]> {
  const response = await fetch("https://api.github.com/user/starred", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  const repos: GitHubRepo[] = await response.json();
  const visibleRepos = await Promise.all(
    repos.map(async (repo: GitHubRepo) => {
      const responseStars = await fetch(repo.stargazers_url, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      });
      const responseLanguages = await fetch(repo.languages_url, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      });
      const languages = await responseLanguages.json();
      const stars = await responseStars.json();
      const shouldBeVisible = stars.some(
        (star: { login: string }) =>
          star.login === "bennytaccardi" && repo.owner.login === "bennytaccardi"
      );
      return {
        ...repo,
        visible: shouldBeVisible,
        languages: Object.keys(languages),
      } as GitHubRepo;
    })
  );
  return visibleRepos.filter((r) => r.visible);
}
