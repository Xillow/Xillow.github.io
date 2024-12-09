// export default function (eleventyConfig) {

// 	});
// 	// eleventyConfig.addPlugin(feedPlugin, {
// 	// 	type: "atom", // or "rss", "json"
// 	// 	outputPath: "/feed.rss",
// 	// 	collection: {
// 	// 		name: "posts", // iterate over `collections.posts`
// 	// 		limit: 10,     // 0 means no limit
// 	// 	},
// 	// 	metadata: {
// 	// 		language: "en",
// 	// 		title: "Blog Title",
// 	// 		subtitle: "This is a longer description about your blog.",
// 	// 		base: "xillow.github.io",
// 	// 		author: {
// 	// 			name: "Your Name",
// 	// 			email: "", // Optional
// 	// 		}
// 	// 	}
// 	// });

// };

import { DateTime } from "luxon";

import {feedPlugin} from "@11ty/eleventy-plugin-rss";


export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({"_build/_includes/js": "js"});
	eleventyConfig.addPassthroughCopy({"_build/_includes/assets": "assets"});
	eleventyConfig.addPassthroughCopy({"_build/_includes/css": "css"});
	
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
	});


	
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.atom",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Xillow's Domain",
			subtitle: "Project Museum and Blog",
			base: "https://xillow.github.io/",
			author: {
				name: "Xillow",
				email: "JustXillow@gmail.com", 
			}
		}
	});
	

	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",// "json"
		outputPath: "/feed.rss",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Xillow's Domain",
			subtitle: "Project Museum and Blog",
			base: "https://xillow.github.io/",
			author: {
				name: "Xillow",
				email: "JustXillow@gmail.com",
			}
		}
	});
	
	eleventyConfig.addPlugin(feedPlugin, {
		type:  "json",
		outputPath: "/feed.json",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Xillow's Domain",
			subtitle: "Project Museum and Blog",
			base: "https://xillow.github.io/",
			author: {
				name: "Xillow",
				email: "JustXillow@gmail.com",
			}
		}
	});


};

export const config = {
	dir: {
		input: "_build",
		output: "_site",
		includes: "_includes"
	}

}