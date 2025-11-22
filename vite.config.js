import { defineConfig } from 'vite';

const repoName = process.env.GITHUB_REPOSITORY?.split('/').pop();

export default defineConfig(() => {
  const baseFromGithub =
    process.env.GITHUB_ACTIONS === 'true' && repoName
      ? `/${repoName}/`
      : '/';

  return {
    // Use the repo name when the build runs on GitHub so assets resolve under /<repo>/
    base: process.env.PUBLIC_BASE_PATH || baseFromGithub,
    server: {
      https: true,
      host: true,
      port: Number(process.env.PORT) || 3000
    },
    preview: {
      https: true,
      host: true,
      port: Number(process.env.PREVIEW_PORT) || 4173
    }
  };
});

