---
title: View Transitions for your static site
date: 2024-04-18
---

I use [Eleventy](https://www.11ty.dev/) on my blog, and have done so [since 2021](https://conorhaining.com/posts/new-year-new-blog/). It's a static site generator based on Javascript and I've personally found it incredibly straightforward for my own use case of having the odd blog post on something I've found interesting. I didn't need a major blogging platform like Wordpress, or want to use a framework like NextJS. A few static files and a bit of pretty CSS was sufficient.

Similarly, I don't ship any client side Javascript either - because there's no need - and I believe you can provide a great web experience by being smarter with what you send to the client. This blog is just serving HTML and CSS, just like we're in the 90s.

That being said, sometimes when you forfeit the fancy Javascript stuff, you often forfeit some of the shiny pizzazz that can come with it. However, sometimes you can take advantage of something built into the browser to add that pizzazz. A recent example is the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API), which gives a browser native way to animate a transition between two webpages (or between two DOM states if you're using a SPA). At the time of writing, it's got [pretty wide browser support](https://caniuse.com/?search=view%20transitions), except in Firefox although [it is being worked on](https://caniuse.com/?search=view%20transitions).

## Super Simple View Transitions

This is how I quickly added view transitions to my blog, a multipage application (MPA). There is support for this native view transition when building a SPA but this quick post is not that - I would recommend [Jake Archibald's post on Chrome Developers for that](https://developer.chrome.com/docs/web-platform/view-transitions/same-document).

To get started with a view transition on your static site, just drop this snippet below into your stylesheet.

```css
@view-transition {
    navigation: auto;
}

@media (prefers-reduced-motion) {
    @view-transition {
        navigation: none;
    }
}
```

The important bit of new syntax is the `@view-transition` at-rule, which instructs the browser to use a transition when loading the next document while navigating. That navigation must be same-origin and this at-rule must be in the CSS for both the source and destination document for the transition to happen.

Additionally, I've wrapped an explicit disable of the animation if the user prefers not to have motion on their webpages to keep it accessible.

If you choose to, you can stop here. This rule will provide a simple cross fade from one page to the next.

The way a view transition works is by taking a snapshot of the DOM from the old view, taking a snapshot of the DOM in the new view then applying the animation between those snapshots.

## Adding pizzazz

The view transitions I have added to this blog are: a cross-fade of the header between the homepage and each post, where the homepage has a taller header; and a slide in of the content of each post. The slide might be a bit unnecessary but does demonstrate the capability. 

The `@view-transition` at-rule we added earlier created a new "root" view transition on the entire document using the [`:root` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) (which is like the html selector but more important). You can specify a view transition on specific elements within the document and perform different animations to each view.

```css
.post main {
    view-transition-name: post;
}
```

This snippet says to create a new view transition for that element. A view transition group is created for each transition you declare, using the default cross-fade animation.

There are two new pseudo element selectors `::view-transition-old` and `::view-transition-new` which allow you to target the old and new state of a view. The way I think of this is that when navigating from A to B, when the view is present on A then the old transition is applied, or it is an outgoing view. When the view is on B, the new transition is applied, or it is an incoming view.

```css
::view-transition-old(post) {
    animation: 0.1s ease-in-out both fade-out;
}
::view-transition-new(post) {
    animation: 0.4s ease-in-out both move-in;
}
```

I've omitted the keyframe animations but this tells the browser to slide in the post when it is new to document.

That's all it takes. The view transition API is one of a few new web APIs to hit browsers in the last few years which offer better native experiences. This kind of animation wouldn't be possible cross document previously, and would be a lot of work to implement in a SPA.

### Further Reading
- [Jake Archibald experimented with how to handle aspect ratio changes smoothly on his own blog](https://jakearchibald.com/2024/view-transitions-handling-aspect-ratio-changes/) - Originally I wanted the header to expand and contract between navigations, however the contoured line background image I use was getting squished, and I couldn't quite figure out a good way to get around it.