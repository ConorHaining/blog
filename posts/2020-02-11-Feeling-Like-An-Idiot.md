---

category: Personal
title: Feeling Like An Idiot
headerImage: /images/Feeling-Like-An-Idiot/nick-fewings-1iesvNXsuZs-unsplash.jpg
headerAlt: A neon sign which reads "No stupid people beyond this point" - Photo by Nick Fewings on Unsplash
summary: Christmas Eve marked the six month anniversary of my first real-world job since I graduated from the University of Dundee last May. That time has been more information dense than the four year course that lead me to the job. I was under no disillusions that a degree was going teach me everything I had to know about entering the industry but I never expected to spend many days feeling like an idiot.
---

Christmas Eve marked the six month anniversary of my first "real-world" job since I graduated from the University of Dundee last May. That time has been more information dense than the four year course that lead me to the job. I was under no disillusions that a degree was going teach me everything I had to know about entering the industry but I never expected to spend many days feeling like an idiot.

# Feeling like an idiot

## The process

The first thing I struggled with was understanding the process around software development. I had a course on agile methodology, and felt like I understood the parts of that which related to a developer but now there were many more people doing different and specific functions. I've worked in plenty of teams while I was a student but usually everybody gets involved in everything like testing, design, or product management. I was now interacting with talented people who specialised in one activity.

Absolutely every project I'd undertaken at this point has been a greenfield project. I've never had to dive deeply into an existing codebase and understand what or why a previous engineer has chosen to do what they have done. All university assignments are short lived, so those responsible were always within distance and reachable for questions but the scope of these were very small and even the architecture of the largest assignments could be retained in my memory. This problem was only compounded by working with a language I was mostly unfamiliar with. 

We use C# for the vast majority of our backend systems, a language I had only briefly used in a university assignment a long time ago. Additionally, we have an unorthodox frontend setup as we are still migrating to a new version of Angular, but some AngularJS codebases still lurk around making development more complex and challenging.

I found the process of code reviewing terrifying for the first few times when silly obvious mistakes would surface. Things like that I haven't covered some things with unit tests, leaving in temporary variable names, or my all time favourite - committing `_logger.Information('blah blah');`. These were just careless mistakes but they had a notable impact on my self-esteem and motivation because I knew I was better than that. 

## The bigger mistakes

I had picked up a boomerang bug in that had been occurring in our user permissions service. The bug in question wasn't all that thrilling, roughly it was that some things weren't being populated as expected under a set of particular conditions.

I was also up against a rather large 150 line function with a high cyclomatic complexity due to the nature the possible permissions. Code can be hard to read at the best of times but I found this case extremely challenging. A piece of advice our lead dev gave me was to just set a couple of breakpoints and trace it locally. This was actually working pretty well, and I was learning how things work quite happily. This was until something came in on Slack.

![An anonymous slack message which reads "at channel, did someone change the super admin? Because it's totally broken now."](/images/Feeling-Like-An-Idiot/ohno.png)

Yup, it was me.

This felt especially bad because I had now impacted other people trying to do their job while I was tip toeing around something I didn't fully understand. I had authenticated using the incorrect account and accidentally changed some permissions. Fortunately I was now familiar with our possible permissions that I was able to quickly revert the changes and created my own test account for this bug without causing a lot of fuss. However I still felt pretty deflated because I wasn't thinking how this may impact others as I should have been doing.

## Talking myself down

It was starting to feel rough at times.

I had always enjoyed programming and I was mostly getting the grades I wanted while studying so I never felt incompetent. That isn't without feeling blind to the depth of knowledge available to new engineers.

I don't believe that grades are a good reflection of ability but I had other ways to make me feel like I was competent at what I was saying and doing. I went across the country and Europe to hackathons, competing five times and [organising one at Dundee University](https://conorhaining.com/posts/Dundees-Hackathon/), a legacy that's went into my career as a corporate sponsor for student hackathons across Scotland. In my final year of study, I was a lab tutor for seven different modules and would have supported well over two hundred students at various levels and backgrounds. I also ran a [Codeclub](https://codeclub.org/en/) at a local primary school for around 2 and half years, which I felt did wonders for my communication skills and required a lot of patience but was a very rewarding experience.

# Tackling the imposter syndrome

## Being DRY

Don't Repeat Yourself (DRY) is a software principle meaning that if you keeping writing the same bit of code over and over, then you should abstract it away somehow. I also try to apply it outside of the software I write. When I have a code review comment about missing tests, I'll check my coverage before pushing. If some work has a bug in it, I will be more careful about test cases I go over. Over time I noticed the improvement and that helped my confidence.

This reduced the silly mistakes that I would see in my code reviews and reduce the back and forth between me and the reviewer. This was also pretty good for my productivity and left me feeling more satisfied instead of being bogged down with one particular thing. Being more careful about test cases meant I found work returning from QA less often and this was a big win against feeling like an imposter because nothing scream imposter more than buggy code.

## Supporting myself

I have access to [Pluralsight](https://www.pluralsight.com/) through my work account, this allows me to study larger and broader topics which are relevant to the day job but can't be as easily understood as part of normal development. The most successful way I use Pluralsight is to take what I am learning and try to map it to technologies or libraries I am already confident and familiar with. For me these were questions like what is Entity Framework? and how does it differ from what I'd used in the part; or what's the difference between .NET Core and .NET Standard? How does C# do package management differently than other languages and a whole other bunch of questions. By making comparisons to what I already knew, I already understood the concepts and could work on building the specifics in my head.

From time to time we also host [Test Driven Development Katas](http://www.peterprovost.org/blog/2012/05/02/kata-the-only-way-to-learn-tdd/) - an intense session where a group work on their unit testing skills. These are particularly nerve wracking the first few times, because it involves writing code infront of other (more experienced) engineers so it is easy to feel like a fool. However what I noticed once I overcome those nerves was that this was a safe place to be a fool and that having a safe space to learn like this was vital, despite the very high barrier to feeling comfortable. Focusing on my unit testing skills in this way was also helpful in thinking about the test cases for the work I'm doing as previously mentioned.

## Parting Wisdom

I think it's also helpful to pass on my knowledge from the mistakes I've made to others. Two graduates joined my team a few months after I did, so I felt like I could heavily relate to their experiences starting out. Part of what helped me overcome the imposter syndrome was to explain the processes and systems I had struggled with when I first joined. This really helped cement my own knowledge but also helped these people grow within the team in a different way than I had done.

Pairing with them and going through our architecture was also a valuable experience for me because I could reassess what I had been taught about our setup and their questions would further test my understanding. When I couldn't answer a question, I now knew who was the most appropriate person to ask rather than flood my buddy with questions. The bonus being that there is a learning experience for more than one person in this situation.

## Getting ahead on the features

When I first joined, I had an idea of the work that was going on and why we had to do it but more recently I've found that taking some time to understand the bigger picture of the work has huge benefits. I think that having an outlook of what is coming up ahead allows me to mentally prepare for what I need to understand before we get there - this might just be my brain but I like to leave things on the back boiler sometimes. This includes learning how our current systems work by reading code, documentation, or asking those around me; or by looking at the libraries, frameworks, or techniques to do it properly. Leaving things to back boil lets me ponder on how I'd take and complete that work which is helpful for when the mind wanders.

# Wrap it up

It is understood and accepted that imposter syndrome can strike any person in any way. I was even hesitating to write and publish this at times because I wasn't sure I properly understood imposter syndrome which says it all. The first thing I find helpful is to remind yourself that there is a perfectly valid reason you are here and secondly to work out the systems you need to manage the imposter feeling.

I hope that going over my experience and feelings, that I may help others realise that this is a very common feeling and that the vast majority of engineers go through it, particularly at the beginnings of their career. Some of the strategies I outlined may work for you but I know that isn't true of everybody so if you do find yourself struggling with imposter syndrome I would love to know how you dealt with it, so feel free to reach out.


<small>
_Header Photo by Nick Fewings on Unsplash_ <br>
_Disgruntled Slack message by disgruntled colleague_ 
</small>