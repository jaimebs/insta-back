# Insta-Back :bulb:

Study project in node.

## Getting Started

First clone project.

### Frameworks used

> cors

Allow requests outside the same domain.

> express

Easily create a api rest.

> mongoose

ODM for comuniction with mondodb.

> multer

Middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

> sharp

The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG and WebP images of varying dimensions.

Resizing an image is typically 4x-5x faster than using the quickest ImageMagick and GraphicsMagick settings.

Colour spaces, embedded ICC profiles and alpha transparency channels are all handled correctly. Lanczos resampling ensures quality is not sacrificed for speed.

As well as image resizing, operations such as rotation, extraction, compositing and gamma correction are available.

> socket.io

Enables real-time bidirectional event-based communication.

> nodemon

Tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Usability

**app.use('/files', express.static(path.resolve(dirname, '..', 'uploads', 'resized')))**, allow create a route to access files in the project folder. Ex: _localhost:3333/files/filename.jpg_

## Good habits

> Semantic Commit Messages

- feat: (new feature for the user, not a new feature for build script) :sparkles:

- fix: (bug fix for the user, not a fix to a build script) :bug:

- docs: (changes to the documentation) :pencil:

- style: (formatting, missing semi colons, etc; no production code change) :lipstick:

- refactor: (refactoring production code, eg. renaming a variable) :recycle:

- test: (adding missing tests, refactoring tests; no production code change) :white_check_mark:

- chore: (updating grunt tasks etc; no production code change) :wrench:
