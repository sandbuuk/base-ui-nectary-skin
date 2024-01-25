# Release a new version of the package

1. Add all changes to `changelog.md` (manually for now)
   - Use ➕ for new features
   - Use 🐞 for bug fixing
   - Use 💥 for new breaking change (only on major versions)
2. Update the `version` in package.json
3. commit and merge the change
4. tag the commit with `components@<version>` for example `components@2.8.0` & push
