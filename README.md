# JADE templates for Meteor 1.3

### Installation

    meteor add pbastowski:jade-templates

### Templates

JADE files with the `.jade` extension will be compiled into HTML by the JADE compiler. You will then be able to `import` the generated HTML directly into your app as required.

So, if you have a JADE file like this:

**/imports/client/app.jade**

```jade
h1 Welcome to Angular2 Meteor!
```

You can then import the HTML text directly into your app and use it like this:

**/imports/client/app.ts**

```javascript
import tplApp from './app.jade';

import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: tplApp
})
export class App {
}
```

## Changelog

### v0.0.2

Changed the output file extension (the one that you import from) from `.html` to `.jade`. This removes the "magic" extension change and allows for having an `.html` file with the same name in the same folder.

### v0.0.1

First release.
