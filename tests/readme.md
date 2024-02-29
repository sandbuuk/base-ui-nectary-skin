# Nectary tests

## Get started

1) Make sure to have [git lfs](https://git-lfs.com/) installed and setup, then run `git lfs pull` to get the screenshot images
2) Start the testing environment with `pnpm --dir tests test:dev` (requires docker or colima running)
3) Once the container is launched use `pnpm playwright test --project <PROJECT>` inside it to run the test for the specified project (`chromium-react`, `firefox-vue` and `webkit-angular` are used for screenshots)

## Update the screenshot

Use the `-u` flag to update the screenshots, makes sure they look correct and use "`📸 update screenshots`" as a commit message
