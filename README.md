# elementish

Stub library representing Element.
Simply exports a welcome message to be displayed on the main page.

# Testing Github Actions

## Creating a PR

1. Clone this repo.
1. Create a feature branch, e.g. `git checkout -b feature/my-code-change`.
1. Open `index.js` in a text editor. Make an arbitrary change to the welcome message. Save and commit the change.
1. Push the feature branch to Github, i.e. `git push -u origin feature/my-code-change`.
1. Navigate to this repo in Github and open a pull request for the feature branch. Before clicking the button to create the PR, be sure to add labels for be-fe repos (i.e. `be-fe-ish`) and for the semantic-version type, e.g. `major`, `minor`, or `patch`.
1. Verify that Github Actions opens a corresponding pull request in the be-fe repos specified in the PR labels.
    1. Go to the Github Actions tab in `elementish` and confirm the workflow is running.
    1. When the `elementish` workflow is complete, go to the `be-fe-ish` repo in Github, navigate to "Actions," and confirm the workflow to create the corresponding PR there is running.
    1. When the `be-fe-ish` workflow is complete, verify that a feature branch and PR have been created, and that they reflect a change to `package-lock.json` that points to the `elementish` feature branch.

## Updating a PR

1. Make a second arbitrary change to `index.js`. Save, commit and push the change to the `elementish` feature branch.
1. Verify the update is reflected on corresponding be-fe repos.
    1. Go to the Github Actions tab in `elementish` and confirm the workflow is running.
    1. When the `elementish` workflow is complete, go to the `be-fe-is` repo in Github, navigate to "Actions," and confirm the workflow to update the corresponding PR there is running.
    1. When the `be-fe-ish` workflow is complete, verify that the feature branch there has a new commit that changes `package-lock.json` to point to the new head commit SHA on the `elementish` feature branch.

## Closing a PR

1. Close and merge the `elementish` pull request.
1. Verify that Github Actions closes the corresponding be-fe pull request.
    1. Go to the Github Actions tab in `elementish` and confirm the workflow is running.
    1. When the `elementish` workflow is complete:
        1. Verify that a new semantic version number was correctly derived based on the PR's semver label, and that the new version is reflected in `package.json` and in a new git tag.
        1. Go to the `be-fe-ish` repo in Github, navigate to "Actions," and confirm the workflow to merge and close the corresponding PR there is running.
    1. When the `be-fe-ish` workflow is complete, verify that the feature branch and PR there have been merged and closed, and that, on the `main` branch, `package.json` and `package-lock.json` point to the new `elementish` semantic version number.

## Adding labels to a PR

1. Create a new PR as described in the "Creating a PR" section above, but deliberately omit the `be-fe-ish` label before clicking the "Create" button.
1. Verify on the "Actions" tab that any workflows initiated are skipped and do not complete.
1. Go back to the PR and add the `be-fe-ish` label.
1. Verify that the Github workflow runs and that a corresponding PR is opened in the `be-fe-ish` repo, as described in the "Creating a PR" section above.
