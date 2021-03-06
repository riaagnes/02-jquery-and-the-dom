'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// PUT YOUR RESPONSE HERE
//This is a constructor function.By the naming convention all the constrctor starts with a capital letter(industry practice).Therefore our Article constructor starts with capital 'A'."this" represents to title, category etc.. of the each instances that we make with the constructor function. At this point rawDataObj represents a variable.But when we create each instances with the for loop rawdataObj will be an object from rawdata array.

function Article (rawDataObj) {
  // DONE: Use the JS object that is passed in to complete this constructor function:
  this.title =rawDataObj.title;
  this.category=rawDataObj.category;
  this.author=rawDataObj.author;
  this.authorUrl=rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;

  // Save ALL the properties of `rawDataObj` into `this`
}
Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // PUT YOUR RESPONSE HERE
  //There are three main benefits
  //a)  Manual entry is not needed, which saves time.
  // b)  Manual entry also has the potential to introduce errors.  Cloning mitigates this risk.
  // c) Using the cloning method eliminates cluttered code.  

  let $newArticle = $('article.template').clone();
  /* DONE: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */
  $newArticle.removeClass('template');
  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);
 
  $newArticle.find('address a').html(this.author);
  $newArticle.find('address a').attr('href', this.authorUrl);
  $newArticle.find('h1:first').html(this.title);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
  /* DONE: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
      1. author name,
      2. author url,
      3. article title,
      4. article body, and
      5. publication date. */

  // REVIEW: Display the date as a relative number of 'days ago'
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// DONE: Refactor these for loops using the .forEach() array method.
rawData.forEach(function(printThis) {
  articles.push(new Article(printThis));
});

articles.forEach(function(printArt) {
  $('#articles').append(printArt.toHtml());
});

