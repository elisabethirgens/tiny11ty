const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("d LLL yyyy");
  });
  eleventyConfig.addPassthroughCopy("css");
  return {
    pathPrefix: "/tiny11ty/",
  };
};
