---
title: Being a Hackathon Particpant
headerImage: /images/HackathonParticpant/HackathonPlaybookParticipantTitle.jpg
headerAlt: My Hackathon team at RGUHack in 2018
date: 2020-05-21
---

<div class="hackathon-notice">
    <strong>2020-05-21: </strong> I understand that the way I am discussing hackathons in this series is not a reflection of how these events will be for some time, however this series is the result of 3 years worth of notes, well prior to this.
</div>

I've been very fortunate to be involved in the local hackathon community as a student and well into my full time graduate job. I have been able to act as an organiser, a participant and as a corporate sponsor. In this three part series I'm documenting some of the steps and processes I go through as a member of that community. In part one, I'm discussing how I've been a participant and how I've taken on challenges across Scotland and Europe.

# Finding a hackathon

If you're looking for places to pick up your first hackathon, checkout your local university's tech or compsci societies who are likely to host their own once a year. Even if you're not a university student, many events still welcome recent graduates. It is also worth checking out the societies of neighbouring universities. They usually have Facebook pages and sometimes their own websites. Then there is MLH, Major League Hacking, who are an organisation which support student hackathons across the world by running leagues in North America, Europe, and Asia-Pacific. MLH are a really great organisation but tend to only support larger events, this seems especially true within Europe.

In my experience, hackathons can generally be categorised in to three distinct groups; University based events are typically put together by a computer science or tech society with committee members who are organising it alongside their studies, and it primarily draws students from that university. Then there are "Major Hackathons" which are open to students and those early in their career but may be more polished events that have the backing of dedicated organisers, these hackathons tend to have between 100 and 400 participants, and will attact people from the wider region. Finally, there are corporate organised events where one organisation puts together an event, these are sometimes for their own products or services but are not always limited to such. These include events like [Code for Good by JPMorgan](https://careers.jpmorgan.com/in/en/students/programs/code-for-good) or the [Product Forge Health Hackathon](https://productforge.io/events/digital-health-product-forge-2020). 

Knowing the type of hackathon you are attending sets your own expectations for the types of challenges and people that are going to be present. I don't have any personal experience with corporate sponsored events but I would assume that for the most part, what I'm going to lay out here is applicable to all three types of events.

# What you should be looking for

First and foremost, decide what you want to get out of the event. There is plenty of things to gain from hackathon and here are the two things I often looked to get out of it.

Organisations will typically sponsor events for one of two reason, either it's evangelism for a product that they're trying to sell to developers (think companies like Twilio or Github) but it's more common that a company is looking to hire junior/graduate engineers. This is a great chance to meet enthusiastic engineers who may have only recently entered the field and learn more about what they do, even if you don't want to join the company they're at I've found most people are happy to talk shop. It's worth quickly pointing out that at some hackathons, particularly the larger ones, there are sometimes companies who are looking to acquire intellectual property and create startups or spinouts but I've never had any experience with that.

There are few opportunities for you to dedicate some time to picking up something new and just flying with it. Hackathon projects can be a throwaway adventure and still a great learning experience. I've had a chance to play with Unity and it's VR capabilities when creating a balloon popping game, my first ever project. The first time I used NodeJS was at a hackathon, as well as dipping into machine learning with Jupiter notebooks. These are fantastic and interesting talking points for recruiters and employeers and your hacks may seperate you from the crowd.

# Preparing yourself

Most hackathons are rarely further a bus or train trip, but if you're able to venture further afield then I'd highly encourage you to do so. I've been very lucky to visit Eindhoven and Helsinki for hackathons. Some events offer travel reimbursement which varies by the distance you're travelling. If an event doesn't offer reimbursement and you don't think you could make it otherwise, it's worth contacting them to find out if they can support you in some form.

One thing I can't stress enough, if you've travelled internationally for an event, you cannot get by on just the sleeping arrangements at the event. You will need to get yourself a proper bed to sleep in at some point. Often there is no place to put your luggage, then going straight to the airport is stressful. 0 out of 10, do not recommend.

If you're packing a bag to go, make sure you have a change of clothes and some toiletries to see you through the weekend. You may be fortunate enough to either be close to home where you can head back and shower or you're at a venue with those facilities. Do what you can to stay fresh, it has a surprising effect on your productivty. Make sure you've got all the big bandwidth items downloaded before you leave; such as code editors, SDKs, and other bits of software you might think you'll need to enable your hack. Wifi going down or being deathly slow is a common trend within the first hour. A friend of mine packs an extra power strip so we are able to keep extra things powered, and not specifically for hackathons but I have a pretty decent hotspot allowance for my phone.

# Hacking Begins

I've found venues to come in all shapes and sizes. I've hacked in small breakout areas on uni campuses, [to former factory floors for Phillips](https://conorhaining.com/posts/HEX-2018/). Scoping out the venue on arrival is worthwhile, finding a good spot can be make or break for the weekend. Organisers and sponsors enjoy wandering around to see what hackers are up to so if you're quick enough you can use the opportunity to do some very early project discovery, and use it to clarify you are going in the right direction for the hack.

There will typically be a Slack workspace or a Discord for you to join, it's important to get on this early so you'll see announcements from the organisers for when food arrives and a chance to interact with the sponsors who usually have their own channel. It's a great place to ask questions when you have problems or a place to find other people to form teams.

I've always arrived at an event with friends as a team but if you're not able to gather people beforehand then there are usually opportunities setup for you to find team mates. Hacking will often commence after a meal which gives you time to mingle and try find people or existing teams. Now you've got your team, get a git repo setup, add people as collaborators and setup some scaffolding for what you think you might need.

## Idea Planning

Ensure that you truly understand the challenge you are taking on, some challenges require proper research and reading before you can properly develop a solution. When at [Junction](https://hackjunction.com/) we took on a challenge to detect a [SS7 attack](https://www.theguardian.com/technology/2016/apr/19/ss7-hack-explained-mobile-phone-vulnerability-snooping-texts-calls) in a stream of pcap data, which is the format of SMS traffic over a mobile network. The challenge came with a lengthy document of background research which we skim read and dived into what we thought was the solution. This resulted in a failed hack. We didn't understand what we should be looking for, the AI model we created was incorrect and by the time we realised what was going wrong, it was too late to retrain the model. We declared it a failure and went to explore Helsinki instead.

Your hack should seek to meet the challenge in the smallest and cleverest way possible. For fun hacks that are either purposefully silly or are game based, you're seeking to impress or enthuse the judges of the challenge. I like trying to inject some fun in hacks I'm a part of so while at [RGUHack](https://rguhack.uk/) in 2017, we created a ball pit VR game modelled on the open space theatre that was being used for the venue. This advice can definitely extend to more serious challenges as well, when at [GUTS](https://gutechsoc.com/hackathon) in 2018 we created a call center application for a challenge to perform analysis on some audio stream but we used the [Cantina Band](https://www.youtube.com/watch?v=sHD-knhS6es) as our hold music before you get connected to an agent. Both of these things gave us an edge and I think made us more memorable.

If you're feeling uninspired, checkout these lists of [public apis](https://github.com/public-apis/public-apis) or [public datasets](https://github.com/awesomedata/awesome-public-datasets) that may help you go in some direction. I think having an idea of what you have available is helpful so you can mould that into a hack.

Subtract 8 hours for rest to give you a realistic estimate of how long you have to complete your hack, whether you use it or not is another matter. Once you know how long you have, you can start to think about the scope of your solution. There is no one-size-fits-all approach to hackathon ideas but there are some things I think can give you an edge. Also, don't be afraid to do a crossover of two challenges, if you genuinely think it may work. However, don't waste the time of the judges who already need to rush around a lot of people.

# Hacking

Your communication is vital and since there is no time to set out a comprehensive and detailed system architecture beforehand, you must be crystal clear about what you expect to recieve and return for the functionality you are working on. You'll be constantly communicating about what you're doing, and don't be upset if somebody hasn't registered what you're doing, there is a lot going on and it's easy for things to fall out of a person's mind. Continiously talk to each other and push your code frequently so everyone has access to it. Don't be afraid to get help from your team, mentors, or anybody at the event. Sure, a hackathon is a competition, but the learning experience is the key thing to remember. Most people will be glad to show off some skill or thing they know, as long as people are friendly and grateful then everyone becomes better of.

While hacking it's very easy to start thinking of things that can enhance your project before you've completed what you're already doing, try not get side tracked without finishing what you've already completed. Write these ideas down and come back to them when you're confident with your current work. It's very simple for projects to spiral out of control as people start wanting to show off - which is great - but it's not possible to do this without a solid foundation. Everyone in the team needs to be cautious and concious of this, if you start dismissing other peoples feature ideas it has to be legitimately to stop scope creep.

It is vital to get some rest. It's a common joke and mantra about continuously coding throughout the night like you're some kind of all powerful machine. You are not the [Duracell Bunny](https://www.youtube.com/watch?v=4AZg11VPKow), no matter what you think, you need the time to stop, put your mind elsewhere and recharge. Even if you are capable of staying awake for the duration of the event, the hangover from that lasts for days and days and is hellish. For your own sake don't do this.

# Final Countdown

As you approach the end of the hacking period, there is a couple of administrative items you need to have ready. Many events ask you to publish your hack onto [Devpost](https://devpost.com/) which enables judging and showcasing. If you neglect to do this, you will not qualify for judging and the time you've spent writing code won't receive recognition.

Give some consideration to how you will show off your work. As a general rule of thumb, you shouldn't have any slides unless there's nothing visual to your hack. Show off what you've done, what you'd like it to do with it in the future, and where applicable, give the judges a chance to use it. If you've got something unique about your hack, demo that to the judges first since there is often very little time! In the hack at GUTS mentioned previously, we made our judges call our hack to see it work live in from of them. It was a fun way for them to really see what our project was capable of.

Remove as much risk as you can from your demo, so you may need to fake a couple of items but since you can guide people through the narrative you can often get away with this. Document what you've learned and make sure your judges know this as well. One of the secondary judging criteria is enthusiasm and showing off your willingness to learn is endearing to see as a judge.

Hackathons are a fun learning experience, and it is a sandbox for everybody to try out new tech and to expand your learning. You also meet wonderful like-minded people who you can share this experience with. If you are early in your career, hackathon projects give you an edge against candidates with similar academic background. I interviewed for my current job after winning at a hackathon and was able to show off my experiences and learnings from that.

Next time I'll go through what it takes to plan and organise your own hackathon for your community as well as what I've observed at other events to compare and contrast.
