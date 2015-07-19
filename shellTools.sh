function updatePostFiles {
    postNumber=$1
    jPostDir=$2

    postContent=\
"block postGlobal
  - var title = 'Post $postNumber'

include source
extends ../page"

    miniPostContent=\
"include source
+miniTabBody()"

    saMiniPostContent=\
"extends ../../tools
include source
+miniTabBody()"

    echo "$postContent"       > $jPostDir/post.jade
    echo "$miniPostContent"   > $jPostDir/miniPost.jade
    echo "$saMiniPostContent" > $jPostDir/saMiniPost.jade
}