# Topics

## - HTML (HyperText Markup Language) Overview

## - Opening and Closing tags

## - Tags

## - Parent Child Sibling (PCS) Relationships

## - `<head>`

## - `<form>`

## - Semantic Elements

## - `<script>` and `<link>`

## - `<canvas>`

## - Accessibility

## HTML (HyperText Markup Language) Overview

- Originally created to share documents, like scientific papers
- Used to tell the browser what type of content we want to display
- HTML tags describe the content that is placed inside
  - Headings and paragraphs of text
  - Images
  - Links
  - Lists
  - Tables
  - Forms
- The HTML tags themselves are not displayed on the web page, the browser uses the tags to interpret the content

## Opening and Closing tags

- Nesting
  - indenting
- Document Object Model (DOM)
- Commenting

## Tags

- `<!doctype html>` tells the browser to read our document in 'standard mode' (the latest accepted HTML conventions)
- `<html>` everything inside will be 'marked-up' using HTML conventions
- `<head>` contains meta-data about the document. Links to external files, the title of the document
- `<body>` everything inside is what will be displayed to the user (excluding the HTML tag names)
- `<div>` stands for division

## Parent Child Sibling (PCS) Relationships

- review

## `<head>`

- `<meta>`
  - Meta tags make your web page more meaningful for search engines like Google.
  - On the `description` `<meta>` tag the `content` attribute describes the basic purpose of your web page (a summary of what the web page contains). For each web page, you should place a concise and relevant summary in this section.

## `<form>`

- are responsible for all the data exchange between the user (front-end) and the server (back-end)
- `<label>` tags for `<input>` boxes. `for` attr on `<label>` ties to `<input>`'s `id` attr.
  - nest `<input>` inside `<label>` and then `for` attr is no longer needed to make clicking label auto focus the input
- `<select>` dropdown mentions with `<option>` tags
- `<textarea>` for larger text inputs
- `<input type="submit">` triggers the `action` attr on the `<form>`, the `method` attr specifies what type of HTTP request it is

## Semantic Elements

- use semantic whenever appropriate, use `<div>` if you just need a generic division/box that no semantic element would describe accurately
- semantic elements help search engines be more accurate
- `<header>` `<footer>` `<nav>` `<article>` `<section>` `<aside>` `<audio>` `<video>` etc.

- `alt` attr of `<img>` tag is what is displayed if the `<img>` could not be rendered. Make it descriptive.

## `<script>` and `<link>`

- used for attaching external js & css files to the HTML file

## `<canvas>`

- used for dynamic images (think if painting on a canvas)
- js is used to make it dynamic

## Accessibility

- for people with disabilities
- do not remove (ok to re-style) the outline around the currently selected element

## Terminal Intro

- desktop is a GUI (Graphical User Interface)
- get used to the terminal, because some things must be done
  in the terminal and if you aren't used to it, more likely to make mistake

## Windows

- `cd` (change direction)
- `DIR` (list directories)
- `cd ..` (back/up a directory)
- `mkdir` (make directory)
- `type NUL > filename.extension` (empty file)

## Mac

- `cd` (change direction)
- `ls` (list directories)
- `cd ..` (back/up a directory)
- `mkdir` (make directory)
- `touch filename.extension` (empty file)

## vscode

- `code .`
- drag folder to terminal
- windows explorer address bar to open cmd
