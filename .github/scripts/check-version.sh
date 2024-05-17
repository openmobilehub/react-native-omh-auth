echo "PACKAGE_VERSION=$(jq -r .version < lerna.json)" >> $GITHUB_ENV
git fetch --tags

if git tag | grep -x "v${{ env.PACKAGE_VERSION }}" > /dev/null; then
  echo "Version ${{ env.PACKAGE_VERSION }} already exists, no new tag created."
  echo "version_changed=false" >> $GITHUB_ENV
else
  echo "New version detected: ${{ env.PACKAGE_VERSION }}"
  echo "version_changed=true" >> $GITHUB_ENV
fi