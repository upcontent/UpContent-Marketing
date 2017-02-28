+++
Categories = []
Description = "Utilizing new machine learning techniques can help tailor your content curation experience for more personalized and differentiated content."
Tags = []
date = "2016-12-13T13:23:16-04:00"
title = "How Machine Learning Can Help You Curate Content"
Hero_image = ""
author = "Kevin Sapp"
author_image = "/images/sappy.png"
category = "Engineering"
pinterest = "/images/machine-learning-pinterest.png"

+++


The team here at UpContent knows how hard it can be to [find the right content for each situation](https://upcontent.com/post/more-efficient-content-curation/)–what appeals to one group may be off-putting or uninteresting to another. We want to make it easier for you to find content with just the right tone, so we have been training a new tool–nicknamed ArtClass–to help us out. It uses machine learning techniques to classify articles as news or blogs, and to drop less-engaging sites; when you tell us it missed the mark, it will learn how to avoid this mistake in the future. ArtClass will make its debut in your UpContent account in January 2017, giving you the power to filter your results and tailor your topics to your needs.

<p style="text-align: center;"><img src="/images/newsorblog.png" alt="News or Blog" style="margin-top: 50px;"></p>


### So, what IS the difference between news and blogs?

A quick survey of articles describing [the difference between content labeled “news” or “blog”](http://www.writingthoughts.com/articles-vs-blog-posts/) reveals a lot of diversity of opinion. The differences most useful in selecting content to share are in the [article’s tone and intent](http://www.writeraccess.com/blog/blog-posts-vs-news-articles/):
a blog post carries an informal or personal writing style, and conveys a point of view or speaks to a niche audience; while
a news article presents a record of events using a structured formal style.
These descriptions are just general guidelines, and leave out a lot of nuance, but indicate why tone and intent are useful for curating content–depending on the situation, you may want to neutrally convey important information, or invite readers to engage with ideas or people in the industry. The difference in tone is also what gives us a way to tell these two kinds of writing apart, using a machine-learning technique called *sentiment analysis*.

<p style="text-align: center;"><img src="/images/heartalgorithm.png" alt="News or Blog" style="margin-top: 50px;"></p>

### How I learned to stop scrolling and love the algorithm


*Machine learning* is a broad term for a variety of equations and algorithms designed to make predictions based on past experience, like a phone keyboard suggesting the next word it thinks you’ll want to type, or an online shopping site recommending products to you. It is becoming an essential part of the marketer’s toolkit (Unbounce wrote a [great article](http://the-split.unbounce.com/machine-learning-in-marketing/) about it), as it holds the potential to improve many different aspects of how campaigns are designed and targeted, and their results analyzed. It doesn’t just benefit marketers and businesses, though. Imagine never needing to scroll and scroll and scroll until you found the content you actually care about! Machine learning can help personalize user interactions and experiences so that what you’re seeing isn’t just one-size-fits all but totally unique to you. Now that’s a user experience I can get behind.


Introducing this kind of personalization all starts with classifying our content correctly. To help us decide whether an article is more likely news or a blog post, we need our algorithm to look at the text and decide which category is a better match–this type of machine learning is often called *natural language processing*.


The simplest approach to finding meaning in text is to look at the words in a document and decide which are most likely to appear in which category, called a bag-of-words model. A more complex model may look at the word order, or the context of a word in a sentence, to improve the accuracy of its predictions. The algorithm is built on the data collected by analyzing the text of articles which are assigned a category, and its predictions get better as more data like this is given to it. This means that whenever we show the model a new example of a news article or blog post, it gets a little better at guessing articles’ categories in the future. ArtClass was designed, with all of this in mind, to quickly and accurately predict whether an article should be classified as news, blogs, or something else entirely.

<p style="text-align: center;"><img src="/images/strong-upcontent.png" alt="News or Blog" style="margin-top: 50px;"></p>

### Letting the Right Articles In: How Our Users Can Help Build a Stronger UpContent


All of this machinery is being deployed in UpContent to help you refine your search for interesting content to share. When it receives new results for your topic, it sends them to ArtClass, which sends back a prediction. Some results may not be useful, like job listings or forum posts; ArtClass spots those for us, so we can leave them out of your results. When everything else reaches UpContent, it can be found under the News or Blogs filter under Type, as well as in the unfiltered category, All. If you disagree with how ArtClass sees an article, you can change it really easily, too–with the click of a button, you can tell us it isn’t labeled correctly and what the right label should be, and we’ll send it back to ArtClass to update its model. This way, ArtClass gets better at its job, and you get better and better results to help you find just the right content to share!


Soon we’ll be announcing the arrival of ArtClass into the UpContent ecosystem. When he starts helping to sort your results, say hello and let him know how he’s doing, so he can keep helping us bring you a great curating experience possible!
