+++
Description = "Sottopop is UpContent's page requester and web crawler technology. Its purpose is to download web pages to be added to our search index."
date = "2016-04-27T13:00:00-05:00"
title = "Sottopop: The UpContent Web Crawler and Page Requester"
draft = false

+++

# Sottopop

Sottopop is UpContent's page requester and web crawler technology. Its purpose is to download web pages to be added to our search index.

## Webmaster Information

### Sottopop Access Rates

Sottopop will generally make only a few sporadic requests to your site. If you feel that we are acessing your site too frequently, please submit the form below to let us know. We will make an effort to respond to all requests within two business days.

Sottopop will attempt to limit page requests to two requests per five seconds per host name to control our burden on your servers. Network conditions and other factors may cause Sottopop to occasionally exceed this rate, but this should not last very long. If Sottopop continues to request pages at a faster rate for more than two minutes, you should submit the form below and we will address it as soon as possible.

Sottopop will also limit the number of redirects we follow to three redirects per initial URL. Following redirects will increase our request rate temporarily.

### Identifying Sottopop

Generally, you can identify Sottopop traffic by the `User-Agent` header in the HTTP requests that we send. This value is often logged in your server's access logs. Our User-Agent string will take the following form, where `1.0` can be any version number: `Sottopop/1.0(+https://upcontent.com/sottopop)`.

You can also verify the identity of a particular server that claims to be Sottopop by doing a reverse DNS lookup on the IP address of that server.

### Blocking Sottopop

Sottopop does not currently respect `robots.txt` files. This is a deficiency that we are aware of and which will be remedied in the next version of Sottopop. For future compatibility you may use the line `User-agent: Sottopop` in your `robots.txt` file now and it will take effect when we launch `robots.txt` support.

If you want to prevent Sottopop from accessing content on your site immediately, please configure your server to respond to requests with our user agent with an HTTP 404 or 410 response. If you choose to do so, we would appreciate you contacting us using the form below to let us know why you do not wish for your site to be accessed by Sottopop.
