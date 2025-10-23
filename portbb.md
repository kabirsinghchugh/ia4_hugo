## Custom styles

Bear's themes can be customised using [pure CSS](https://www.w3schools.com/Css/) in the **Edit theme CSS** field. The structure of the theme CSS is set up to easily modify the basics such as font, colour, scale, etc (both for light mode and dark mode, as specified by the `@media (prefers-color-scheme: dark)` rule).

## Bear classes

Bear has a few classes which can be used as CSS selectors to customise specific pages or elements.

#### Pages

- The root of the **homepage**: `.home {}`
- The root of **any post**: `.post {}`
- The root of **any page**: `.page {}`
  - *If page and post styles are the same, both can be selected using `.page .post {}`*
- The root of the **blog list page**: `.blog {}`
- The root of the **email subscription page**: `.subscribe {}`
- The root of the **404 not found page**: `.not-found {}`

#### Custom class names

Each post has the header option [class\_name](https://docs.bearblog.dev/post#class-name) which adds a class to the root of the post to allow custom styling for that particular page.

Eg:

```
class_name: contact-page
```

#### Elements

- The anchor tag for the **title of the blog**: `.title h1 {}`
- The **ul** of the posts on the blog: `.blog-posts {}`
- The **navigation header**: `nav`
- The **codeblocks/hightlights**: `.highlight, .code {}`

## Notes

All parts of the front-end blog are selectable and style-able using simple CSS selectors.