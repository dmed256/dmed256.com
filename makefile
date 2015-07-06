dir = /Users/dsm5/gitRepos/site/

jadeFiles = $(wildcard $(dir)/jade/*.jade)

all: $(dir)/index.html $(dir)/main.css $(jadeFiles)

$(dir)/main.css: $(dir)/sass/main.sass
	sass --sourcemap=none $(dir)/sass/main.sass $(dir)/main.css

$(dir)/index.html: $(jadeFiles)
	jade $(dir)/jade/index.jade -o $(dir)