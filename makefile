siteDir = /Users/dsm5/gitRepos/site

jadePageDeps = $(wildcard $(siteDir)/jade/*.jade)
jadePosts    = $(wildcard $(siteDir)/jade/posts/*/post.jade)
jadePostDeps = $(wildcard $(siteDir)/jade/posts/*/*.jade)
jadeFiles    = $(jadePageDeps) $(jadePostDeps)

posts = $(subst $(siteDir)/jade/,$(siteDir)/,$(jadePosts:.jade=.html))

all: $(siteDir)/index.html $(siteDir)/main.css $(posts)
	@echo $(posts) $(jadeFiles)
	@echo $(jadePostDeps)

$(siteDir)/main.css: $(siteDir)/sass/main.sass
	sass --sourcemap=none $(siteDir)/sass/main.sass $(siteDir)/main.css

$(siteDir)/%.html: $(siteDir)/jade/%.jade $(wildcard $(<D)/*.jade) $(jadePageDeps)
	jade $< -o $(dir $@)