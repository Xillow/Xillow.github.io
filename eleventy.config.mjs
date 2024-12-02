export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({"_build/_includes/js": "js"});
	eleventyConfig.addPassthroughCopy({"_build/_includes/assets": "assets"});
	eleventyConfig.addPassthroughCopy({"_build/_includes/css": "css"});
	
	

};

export const config = {
	dir: {
		input: "_build",
		output: "_site",
		includes: "_includes"
	}

}