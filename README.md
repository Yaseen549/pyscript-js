<p align="center">
  <a href="https://syberstar.netlify.com/">
    <img src="https://github.com/Yaseen549/pyscript-js/blob/main/imgs/logo.png" alt="PyScript.js logo" width="165" height="165">
  </a>
</p>

<h3 align="center">PyScript.js</h3>

<p align="center">
Use Python Functions now in JavaScript
  <br>
  <br>
  <a href="https://github.com/Yaseen549/pyscript-js/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/Yaseen549/PyScript-js/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
</p>

### CDN:
<p>Place it just above the end body tag above all the script tags</p>

```js
<script src="https://cdn.jsdelivr.net/npm/pyscript-js@0.0.10/dist/js/pyscript.min.js" charset="utf-8"></script>
```

### Table of contents
- [Quick start](#quick-start)
- [Python funcitons](#python-functions)
- [Stub code](#stub-code)
- [What's included](#whats-included)
<!-- - [Bugs and feature requests](#bugs-and-feature-requests) -->

### Quick start
Several quick start options are available:

<!-- - [Download the latest release](https://github.com/Syber-Lab/PyScript/archive/refs/tags/v1.1.1.zip) -->
- Clone the repo: `git clone https://github.com/Yaseen549/pyscript-js.git`
- Install with [npm](https://www.npmjs.com/): `npm i pyscript-js`
- Install with [yarn](https://wwwyarnpkg.com) `yarn add pyscript-js`

<!-- Read the [Getting started page](https://PyScript.syberstar.com/) for information on the framework contents, templates, examples, and more. -->

### Python Functions
integrated python functions in JavaScript
```js
input()
print()
number()
int()
float()
str()
len()
round()
max()
sum()
popup() // Alternative to alert
sorted()
type()
pow()
abs()
```

### Stub Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PyScript.js</title>
</head>
<body>

  <!-- Your HTML Code Goes Here -->

  ...

  <!-- End -->

  <!-- Adding Scripts -->
  <!-- Use it above all the Script Files to make use of python functions -->
  <script src="https://cdn.jsdelivr.net/npm/pyscript-js@0.0.10/dist/js/pyscript.min.js" charset="utf-8"></script>
  <!-- User Defined Scripts / Other Scripts below -->
  <script src="ExternalJsFile.js" charset="utf-8"></script>
</body>
</html>

```

### What's included
Within the download you'll find the following directories and files, logically grouping common assets. You'll see something like this:

```tree
PyScript-js/
└── dist/
    └── js/
        ├── pyscript.js
        └── pyscript.min.js
```

<!-- ## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Syber-Lab/PyScript/blob/main/.github/CONTRIBUTING.md) (Yet to Create) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Syber-Lab/PyScript/issues/new). -->
