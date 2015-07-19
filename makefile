siteDir = /Users/dsm5/gitRepos/site

jPageDeps    = $(wildcard $(siteDir)/jade/*.jade)
jPostSources = $(wildcard $(siteDir)/jade/posts/*/source.jade)
jPosts       = $(subst /source.jade,/post.jade,$(jPostSources))
posts        = $(subst $(siteDir)/jade/,$(siteDir)/,$(jPosts:.jade=.html))

all: $(siteDir)/index.html $(siteDir)/main.css $(posts)

$(siteDir)/main.css: $(siteDir)/sass/main.sass
	sass --sourcemap=none $(siteDir)/sass/main.sass $(siteDir)/main.css

$(siteDir)/posts/%/post.html: $(siteDir)/jade/posts/%/source.jade $(jPageDeps)
	$(eval postNumber = $*)
	$(eval postDir    = $(siteDir)/posts/$(postNumber))
	$(eval jPostDir   = $(siteDir)/jade/posts/$(postNumber))

	$(shell . ~/gitRepos/site/shellTools.sh; updatePostFiles $(postNumber) $(jPostDir))

	jade $(jPostDir)/post.jade       -o $(postDir)/
	jade $(jPostDir)/saMiniPost.jade -o $(postDir)/

$(siteDir)/index.html: $(siteDir)/jade/index.jade $(jFiles) $(posts)
	jade $< -o $(dir $@)

$(siteDir)/%.html: $(siteDir)/jade/%.jade $(jFiles)
	jade $< -o $(dir $@)