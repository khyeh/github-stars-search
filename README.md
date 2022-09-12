# github-stars-search

Search UI that displays a list of GitHub repositories for a user ranked by stars. Built using React/TypeScript, vite, and TailwindCSS.

This app is responsive and supports both light and dark mode. The appearance of the app is browser dependent. For example, if your current browser is set to dark mode, the app will be set to dark mode.

### Running the Application

First, clone the repository:

```
git clone git@github.com:khyeh/github-stars-search.git
```

Next, enter the newly cloned project and run the following:

```
npm install
```

Once complete, start the app by running

```
npm run dev
```

You should now see something that looks like this:

```
VITE v3.1.0  ready in 411 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Finally, copy/paste the local url onto any browser to view the app.

### Running Tests

To run all tests in the application, run the following command:

```
npm test
```

### Next Feature Iterations

1. Add query params to the url so users can quickly access specific pages of the list with just the url.

For example, if the url were to look like this:
`localhost:3000?q=facebook&page=2`

Users would be directed to the 31-60 git repositories of the GitHub user.

2. Add autocomplete to the search text field, providing users suggestions of valid GitHub users.

### Next Tech-Debt Iterations

1. Add ESLint for code consistency.

2. Prevent merges directly to the `main` branch and create a git actions workflow to enforce that ESLint and unit tests must pass before merging.
3. Add file aliasing to simplify the readability of imports

For example,
`import Something from ../../src/components/Something`

can be rewritten as

`import Something from components/Something`.
