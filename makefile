siteDir = /Users/dsm5/gitRepos/site

jadeIndex     = $(siteDir)/jade/index.jade
jadeIndexDeps = $(wildcard $(siteDir)/jade/*.jade)
jadePosts     = $(wildcard $(siteDir)/jade/posts/*/*.jade)
jadeFiles     = $(jadeIndexDeps) $(jadePosts)

posts = $(subst $(siteDir)/jade/,$(siteDir)/,$(jadePosts:.jade=.html))

all: $(siteDir)/index.html $(siteDir)/main.css $(posts) $(jadeFiles)
	@echo  $(jadeFiles)

$(siteDir)/main.css: $(siteDir)/sass/main.sass
	sass --sourcemap=none $(siteDir)/sass/main.sass $(siteDir)/main.css

$(siteDir)/%.html: $(siteDir)/jade/%.jade
	jade $< -o $(dir $@)

$(siteDir)/index.html: $(jadeFiles)
	jade $(siteDir)/jade/index.jade -o $(dir $(siteDir))