This is the site for www.kidscraft.se
=====================================

Run locally with [jekyll](http://jekyllrb.com/docs/usage/):
-----------

    cd kidscraft/
    jekyll serve
    #serving at localhost:4000


Deploy:
-------
    jekyll build
    git commit -am 'checking in next deploy'
    git push origin gh-pages:gh-pages
    #this pushes the site to http://peterneubauer.github.io/kidscraft, which www.kidscraft.se is pointing to

