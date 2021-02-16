---
title: The Bin Button
date: 2021-02-15
headerImage: /images/bins/lorry.jpg
---

!["A full recycling bin near my flat"](../../images/bins/bin.jpg)

Last Friday, my flatmate had asked me if our recycling bin was full because they wanted to get rid of their stack of boxes. I had just been outside with my own stack and had to squeeze them into the near filling bin. We've got communal bins around here, and this particular bin has a wide sphere of influence given its location. There is a form on my city council's website that lets you report if a communal bin is full, and I find myself doing it semi-frequently. My flatmate didn't know about this form, and as I was about to submit it and be done, they said "you could probably automate that". And they were _probably_ correct, you _probably_ could automate it, but why go to the hassle?

The first step to _probably_ automating this is to observe how the website works. Crack open the developer tools, head to the network tab, persist the logs, and report the bin. I then have a trace of every request and response the browser makes while submitting the form. The very last request is conveniently named `/api/save/` and contains a request body that matches information about the bin I'm trying to report as full. Jackpot.

The one hiccup I found here was when attempting to resend the request with cURL: the request would fail, and I could see there was something required for authentication in the request header. It looked a bit like a GUID, but not quite. Here I'm in debt to my flatmate who tracked it down while I was having dinner, they found an earlier discovery service type request which sent the same value for authentication, but in the response headers. We disagreed about this, but I felt like that was a strange place to put an authentication key. Anyhow, we cracked it. Two requests, one for a key, and the other to submit the bin report - but now how to invoke the request easily?

# Amazon Dash Buttons

For those not familiar, the [Amazon Dash button](https://en.wikipedia.org/wiki/Amazon_Dash) was one of Amazon's early steps into the Internet of Things world. Customers could order buttons of a brand name like Gillette or Huggies, then push the button for the product to be added to their shopping cart and then shipped to them. Simple as that. The product was scrapped by Amazon in 2019 and replaced by voice ordering on Alexa.

A lesser known fact at the time was that it was possible to buy developer versions of these things and a companion app which lets you trigger something either on [IFTTT](https://ifttt.com/home) or trigger an [AWS Lambda](https://aws.amazon.com/lambda/). Lambda is Amazon's but they are serverless functions meaning that you don't need to manage the provising of infrastruture around them. They are very scalable and suited for both high traffic and low traffic loads. It was clear all I had to do was put a quick script together making the two requests to report the bin and I would be laughing.

!["My AWS Internet of things 1-click button"](../../images/bins/button.jpg)

# Setting it up again

I have a faint memory of there being a companion app which made the buttons very easy to setup. There are currently companion apps on the Google Play store ( ¯\\_(ツ)_/¯ ) and not one of them worked, and I could not connect this button to my WiFi. Here I need to shoutout [Cristiano Silva, who went through the hassle](https://dev.to/mcloide/setting-up-your-aws-iot-button-5e8n) of documenting how to reconnect the button. From there it was really a hop and a skip connecting AWS IOT to Lamba, and boom: One click reporting of rubbish levels, the future of technology.

I say one click reporting because it really was that straightforward. Lambda has a few sample projects that'll let you quickly connect an IoT trigger to a Lambda, and hacking together a script that sends two requests.

The really rewarding part was on Monday morning when I was walking back to my flat, and I saw a lorry at the end of the street collecting the bins. Maybe it was just a coincidence.

!["A bin lorry collecting the rubbish the next day"](../../images/bins/lorry.jpg)