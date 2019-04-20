---
# Page title!
title: "{{ replace .Name "-" " " | title }}"
# Page Date!
date: {{ .Date }}
# Should it go into final build? Also affects index increments!
draft: true
# img for Thumbnail in card view!
img:
# Hidden from listing (For example the about page)
hidden: false
# Post title for the card view
postHeading:
# Post summary for the card view
postSummary:
# JavaScript file names for use in sketches. Files must be in /assets/js/filename folder!
scriptFiles: 
# Should load p5.js library?
loadP5js: false
# index for displaying numbers in card view!
index: {{ add (index .Site.Pages.ByPublishDate.Reverse 0).Params.index 1 }}
---
