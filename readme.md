# Nectary

This is the monorepo for Nectary, Sinch’s design system. Our modular approach allows for maximum composability.

Note: This repository uses [git-lfs](https://git-lfs.com/) and before cloning it you need to install git-lfs.

## Packages

| Package                                                                                                             | Description                                                                       |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`/assets`](https://gitlab.com/sinch/sinch-projects/applications/teams/nectary/components/-/tree/main/assets)         | All assets included in the component library. Images, logos, icons and animations |
| [`/components`](https://gitlab.com/sinch/sinch-projects/applications/teams/nectary/components/-/tree/main/components) | Component library based in web components                                         |
| [`/docs`](https://gitlab.com/sinch/sinch-projects/applications/teams/nectary/components/-/tree/main/docs)             | Docs website nectary.sinch.com                                                    |
| [`/libs`](https://gitlab.com/sinch/sinch-projects/applications/teams/nectary/components/-/tree/main/libs)             | Utility libraries to work with Nectary                                             |
| [`/tests`](https://gitlab.com/sinch/sinch-projects/applications/teams/nectary/components/-/tree/main/tests)           |                                                                                   |
| [`/tokens`](https://gitlab.com/sinch/sinch-projects/applications/teams/nectary/components/-/tree/main/tokens)         | Design tokens                                                                     |

### Dependencies

* [Node 20](https://nodejs.org/en)
* [pnpm](https://pnpm.io/es/)

## Getting Started

Nectary uses pnpm to bundle js. Use the following command to install packages from package.json.

### `pnpm install`

When you want to run code from your local machine to preview it in the [Nectary Documentation](https://nectary.sinch.com/), use the following steps:

### `pnpm start`

### Open [`localhost:5000`](http://localhost:5000)

**Note!** If you are using a Mac, make sure to **turn off AirDrop** in System Settings, since AirDrop runs on port 5000 already.

## Run Tests Locally

The tests run in the pipeline on GitLab, but if you need to run them locally, instructions to do so are stated in the [Test Folder Readme](https://gitlab.com/sinch/sinch-projects/applications/teams/nectary/components/-/tree/main/tests?ref_type=heads).

## Generate CSS variables from tokens

`pnpm tokens`
