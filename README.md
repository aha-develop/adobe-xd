# Adobe XD integration
  
This [Aha! Develop](https://www.aha.io/develop/overview) extension allows you to embed your Adobe XD mockups into an Aha! epic, feature, or requirement.

It provides these contributions:

- `Adobe XD attribute` - Link a Adobe XD mockups to a record in Aha! to see a live preview of the design.
- `Adobe XD panel` - Embed a Adobe XD mockups in a note in Aha! to see a live preview of the design.

## Demo

![Screenshot](res/screenshot.png)

## Installing the extension

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**

Install the Adobe XD integration extension by clicking [here](https://secure.aha.io/settings/account/extensions/install?url=https%3A%2F%2Fsecure.aha.io%2Fextensions%2Faha-develop.adobe-xd.gz).

## Working on the extension

Install [`aha-cli`](https://github.com/aha-app/aha-cli):

```sh
npm install -g aha-cli
```

Clone the repo:

```sh
git clone https://github.com/aha-develop/adobe-xd.git
```

**Note: In order to install an extension into your Aha! Develop account, you must be an account administrator.**

Install the extension into Aha! and set up a watcher:

```sh
aha extension:install
aha extension:watch
```

Now, any change you make inside your working copy will automatically take effect in your Aha! account.

## Building

When you have finished working on your extension, package it into a `.gz` file so that others can install it:

```sh
aha extension:build
```

After building, you can upload the `.gz` file to a publicly accessible URL, such as a GitHub release, so that others can install it using that URL.

To learn more about developing Aha! Develop extensions, including the API reference, the full documentation is located here: [Aha! Develop Extension API](https://www.aha.io/support/develop/extensions)
