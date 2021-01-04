---
title: New Year, New Blog
date: 2021-01-04
---

## Summary
I don't have anything new or original for comment on 2020, so I won't. However I'm sharing some of my favourite reads from last year and a few details on my new blog and its design.

## Favourite reads from 2020
I spent much more time in Spring reading because *gestures broadly* I had a lot more free time. For me this tended to be books in Spring but over the rest of the year I found myself reading more technology and software articles with the help of [Pocket](https://getpocket.com/). Here's a quick list of what I've enjoyed:

### [Disrupted](https://www.goodreads.com/book/show/26030703-disrupted) by Dan Lyons

Dan had worked as a writer at Newsweek until he was made redundant. After reporting on tech and startups, he then found work at Hubspot as a marketing fellow and is horrified by the startup's cult-like culture.

I'm not much of an intense reader, and often struggle to find the focus to concentrate on a book, but I finished this one over a weekend. The stories were unbelievable and the inside of a hyper growth startup with the culture described in this book sounds horrendous.

### [How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/)

I found this article is a helpful guide for indication on how to make code reviewing easier for your colleagues. I remember feeling [like an idiot](https://conorhaining.com/posts/feeling-like-an-idiot/) when I first began to write software professionally by the number of problems that'd be highlighted in my pull requests.

### [Deno 1.0](https://deno.land/posts/v1)

I think Deno is a *really* interesting project. It is a new JavaScript & TypeScript runtime from the creator of NodeJS, Ryan Dahl, who first showed off the project in his [JSConf EU talk](https://www.youtube.com/watch?v=M3BM9TB-8yA). There's a lot to find interesting about Deno both under the hood and in developer experience. There's further reading here in a [Deno Handbook](https://flaviocopes.com/deno/).

### [Understanding (all) JavaScript module formats](https://weblogs.asp.net/dixin/understanding-all-javascript-module-formats-and-tools)

I spent a good chunk of 2020 working with JavaScript (Angular, really) but I kept noticing that there was different ways to include files and modules. I had a fuzzy notion of there being different types of JavaScript modules and built systems and such. It wasn't until I got a warning about a CommonJS dependency that I decided to dig into it and landed on this article. 

## A new design! 🥳
I had been wanting to change up my blog a little for some time now, for no other reason than simply wanting to. I was previously running on [Jekyll](https://jekyllrb.com/) to create my blog since it's really easy to setup on GitHub pages, and I just chucked in the [Texture theme](http://jekyllthemes.org/themes/Texture-Theme/) I had found online.

I liked Jekyll because it is a static site generator meaning that it takes my markdown files, marries them to some template files and spits out regular HMTL. The advantage here is that I don't need to run/pay for severs to keep a silly wee blog online and can deploy to services like [Azure Static Web Apps](https://azure.microsoft.com/en-gb/services/app-service/static/) or [Amazon S3](https://aws.amazon.com/s3/), but I personally use [Netlify](https://www.netlify.com/).

This new blog uses [Eleventy](https://www.11ty.dev/), a static site generator built with JavaScript and  the theme was made by me with the help of the [Tailwind CSS](https://tailwindcss.com/) framework. I've used Tailwind on a number of projects recently, including [LitPaths](https://litpaths.app) and I'm a huge fan of the utility-first approach to CSS - but I have yet to see how that scales with multiple people & teams in a larger system.

I've kept the design largely the same with the tall purple header on the homepage but I've changed the background from a texture to map contours. This is done with an SVG background, and will fall back to just purple when [SVG backgrounds are not supported](https://caniuse.com/svg-css). As an aside, I didn't find the CSS generated on the website like the best solution because it really floats the size of the file which is to be download by the browser. I instead downloaded the SVG, cut it in half (since I do not need to cover a large area) and ran it through [SVGOMG](https://jakearchibald.github.io/svgomg/) which reduced its size by half.

I've also removed the summary & header images for each post from the homepage and turned it into a list of headlines & published date. My analytics indicate that most people appear on this blog directly from either my LinkedIn or Twitter, so I don't want to waste unnecessary bytes on something that doesn't add a lot of value.
