Packaging and releasing Loki is a simple process, but many of its steps are easy to forget. Following this list will ensure that you remember all of them.

  1. Update the [changelog](Changelog.md) to reflect the new changes that have been made since the last release.
  1. Build the Loki tarballs on the testbed by running `./build 2.0 [version]` in the root `loki2` directory.
  1. In multiple browsers, do one last check to ensure that all changes are still working, and run the [Crucible](http://jscrucible.googlecode.com/) tests.
  1. Tag the release as _release-`version`_ in Git. (`git tag -s release-[version]`)
  1. Upload the general-use and source tarballs to Google Code. Label the new general-use tarball as _Featured_ and, if this release immediately supersedes an earlier one, mark the older tarballs as _Deprecated_.
  1. Post a release announcement to the [Loki installers mailing list](http://groups.google.com/group/loki-installers).
  1. Add a _Fixed-`version`_ label to the issue tracker for the next version after the one you've just released.