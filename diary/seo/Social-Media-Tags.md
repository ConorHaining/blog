---
title: Social Media Tags
eleventyNavigation:
  key: Social Media Tags
  parent: SEO
---
Social media websites like Twitter, LinkedIn or Facebook all offer a way to expand links into 'cards'. I think this is a good way to take up more space in peoples feeds.
## Twitter
Twitter cards come in four types: summary, summary with large image, app, and player. This blog tends to use Summary or Summary with large image. To setup the cards, you need to include certain meta tags in the head of the HTML.

```html
<meta property="twitter:card" content="summary_large_image" />  
<meta property="twitter:url" content="https://example.io/" />
<meta property="twitter:title" content="Some Title" />
<meta property="twitter:description" content="Longer form description" />
<meta property="twitter:image" content="https://example.io/image.png" />
<meta property="twitter:image:alt" content="Alt text to describe the image" />
```

Images should be a minimum 300x157, a maximum of 4096x4096. JPG, PNG, WEBP and GIF are all supported but SVGs are not.
Optionally, there are Twitter specific tags to indicate that there is a twitter account for a site/creator or both.

```html
<meta name="twitter:site" content="@TheVerge">
<meta name="twitter:creator" content="@ConorHaining">
```

You can check that you've gotten the tags correct by using the [Twitter card validator](https://cards-dev.twitter.com/validator).

## Open Graph (Facebook, LinkedIn, Slack, ect)
The other social networks use OpenGraph to get their metadata to display, below is the bare minimum of what is required.
```html
<meta property="og:title" content="Short title" />
<meta property="og:description" content="Longer form description" />
<meta property="og:image" content="https://example.io/image.png" />
<meta property="og:type" content="article" />
```
More tags and their uses are available at https://ogp.me/

I use [Meta Tags](https://metatags.io/) to automatically generate the tags, and it's got a neat preview window in it. 