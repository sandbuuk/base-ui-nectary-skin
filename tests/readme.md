# Nectary tests

## Get started

1) Install and start Docker (accessable in Self Service)
2) Make sure to have [git lfs](https://git-lfs.com/) installed and setup, then run `git lfs pull` to get the screenshot images
3) Start the testing environment with `pnpm --dir tests test:dev` (requires docker or colima running)
4) Once the container is launched, use the following commands to test Chrome, Firefox and/or Webkit:

`pnpm playwright test --project chromium-react` \
`pnpm playwright test --project firefox-vue` \
`pnpm playwright test --project webkit-angular` 

More CI commands for running specific app tests like Vue, React and Angular, are noted in `package.json`. Once you've run a command, click the link in the terminal to view the result of the test.

## Update the screenshots

Use the `-u` flag to update the screenshots. Make sure they look correct, and use "`📸 update screenshots`" as a commit message.


