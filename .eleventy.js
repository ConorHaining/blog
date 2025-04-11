import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { execSync } from "child_process";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  
  eleventyConfig.addPassthroughCopy({ "./styles/**.svg": "./" });
  eleventyConfig.addPassthroughCopy({ "./favicon.ico": "./favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "./images": "./images" });

  eleventyConfig.addFilter('displayDate', (date) => {
    return date.toDateString();
  });

  const now = new Date();
  const livePosts = post => post.date <= now && !post.data.draft;
  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./posts/*.md').filter(livePosts)
    ].reverse();
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  eleventyConfig.addPlugin((eleventyConfig, pluginOptions) => {
      
    eleventyConfig.addShortcode("footnoteref", function(name) { return `<a href="#">x</a>` });
  
    }); 

  // Add Tailwind CSS build on start and after changes
  eleventyConfig.on('eleventy.before', async () => {
    console.log('Building Tailwind CSS...');
    execSync('npx @tailwindcss/cli -i ./styles/main.css -o ./_tmp/style.css');
  });

  // Watch the input stylesheet for changes
  eleventyConfig.addWatchTarget('./styles/main.css');
}