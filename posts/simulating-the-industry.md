---
title: Attempting to simulate the software industry for students
headerImage: /images/video-calls.jpg
headerAlt: An irrelevant stock image showing a load of video calls
date: 2020-10-26
---

I was recently acting as the client to around 100 University of Dundee students, who work intensely for three weeks at the beginning of their final year of undergraduate study in order to refine and extend their knowledge on the software development process. Having previously taken this class as a student, I was very keen to pass on the knowledge and skills I have acquired since I graduated onto the students I would be working with.
---

This was not without its challenges and my own concerns. I believe it’s hard to offer a truly authentic simulation of the industry: it's hard to simulate a company's culture, mission, or bureaucracy without inserting bias into peoples perceptions of the industry and it also varies widely between organizations. My mental approach here is to pretend they are working at Conor Inc, where I get to decide these things. I had a personal goal to inject some of the knowledge I wish I had when I started working full-time.

To keep marking for the lecturers manageable, students were placed in ten teams of ten, but I was worried that [ten people is far too many to have working together](https://en.wikipedia.org/wiki/Brooks's_law) on the same project and the same codebase. I had suggested at the start of the project that the teams should divide themselves into smaller teams to allow them to work more effectively. This was also a nice transition into my second suggestion; software products are bigger than the software itself. Software grows legs and arms into various specialisations like infrastructure, quality assurance, user experience, data, and others. 

As a fresh graduate, I struggled with the loss of absolute creative freedom since I was now working with many more people who were skilled in their disciplines. As part of their sub-teams, many students took up these specialisations, from devops to product management, documentation to user experience. This was particularly encouraging to see, as for as much as I like writing software, plenty of my friends did not and it was not until they did internships that they learned about the other possibilities. The feedback and final presentations I received at the end of the project indicated that for some students, this was their first time getting to dive deeply into a specialised area.

# Refining the software skills

I have vivid trauma while in my second year of uni, where a project had totally fallen to pieces just before the deadline. We had been using source control and branching the code, but nobody reviewed the code when it was merged back into the master branch. I didn't make it mandatory for students in this project but heavily encouraged them to do this. Additionally, reading software that you're not familiar with is just as valuable as writing it. This hit me like a brick wall as a graduate.

I had also hoped to see some teams take up some forms of automated testing, something I had never given much thought to as a student but is a whole fractal of opportunities in software development. I also believe that software engineers should have the knowledge to deploy their applications to the world, and was glad to see many teams deploy their applications into some type of cloud service.

Having also been the client for the same module last year, I also wanted to reduce some of the friction I had previously seen. Last year, a majority of teams had spent the first week "getting the basic functionality" together in one form or another. I discovered this meant that the team was often writing an application from scratch, their own routing, database queries, user interface styles and so on. These are interesting exercises to do of course, but for the scope of a prototyping project I felt that utilising frameworks would have allowed them to make more progress much faster. I was very pleased to see that this year students took that advice on, and interested to see the range of frameworks chosen. [React](https://reactjs.org/) & [Node](https://nodejs.org/en/) being the most popular choices, but some [Flask](https://flask.palletsprojects.com/en/1.1.x/), [.NET](https://dotnet.microsoft.com/), [Angular](https://angular.io/), and a little [Vue](https://vuejs.org/).

# The project brief

Last year's students were given a project to create a price comparison website based on average charges for certain procedures in US hospitals, based on Medicare payments - a dataset we created from open data from the [CMS](https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/). We noticed that this brief generated a lot of confusion and misunderstanding, particularly around the data we supplied to the students and in turn this generated a lot of questions which we had to clarify. It's also no surprise that medical billing is not exactly a thrilling subject, and difficult to wrap your head around in three weeks.

Firstly, the project had to be interesting, but simultaneously not too out there so it's attainable by all teams. Secondly, I had to reduce the friction for the teams to allow them to spend more time on their projects and less time clarifying questions and requirements with me. Not providing any data to the teams also means less responsibility on my side should there be problems with that. I also wanted to leave the brief open ended in some way to allow some creative freedom that may disappear from them in the industry. I also had to add a couple of stretch features in case they were able to rattle through the work very quickly.

I was inspired by the rise of the [online pub quiz](https://www.theguardian.com/culture/2020/may/09/phones-away-please-the-rise-and-rise-of-the-online-pub-quiz) in April and May, as well as the sudden growth of many online communities as more people found themselves with a lot more time to spend on the internet, so I asked the teams to create a virtual quizzing application that could be played with friends without the need of sourcing questions for yourself or managing scores. You can see the full brief below.

<details>
    <summary>Press for the full project brief</summary>
    <ul>
        <li>Create a quizzing application</li>
        <ul>
            <li>For myself</li>
            <li>For others in person</li>
            <li>For friends virtually</li>
            <li>For strangers?</li>
        </ul>
        <li>No accounts/logins</li>
        <li>Need a large and diverse set of questions so it’s not boring</li>
        <li>Powerups, hints, or lifelines when users are stuck</li>
        <li>Scoring, leaderboards, trophies, achievements</li>
        <li>Available on Web, Android, iOS and Windows</li>
        <li>You may want to theme it on a franchise like The Chase, Jeopardy, Pointless or keep it plain</li>
    </ul>
</details>

# Making progress

I really enjoying seeing how each group interprets the same brief, it speaks to the way that software development is more of a creative process than the logical nature of computers would have you believe. Teams generally went in one of two directions: The first half were focused more on project planning before committing to any specific features or design. These teams typically had spend time carefully creating a high fidelity mock-up of their application. I think that served as a good base for the whole team to understand what is to be achieved but simultaneously having a "thing" to show and discuss with their client. Other teams had dived straight into development and had working applications to show, and in many cases it had just to be connected to the backend, but they had an interactable prototype to show. I did fear that the teams taking this approach would slow themselves down during that front to backend connection work.

By the second week of the project, all teams had made significant progress to the achieving the minimal viability of the initial brief. It was very endearing to see that - as far as I could tell - the teams had no major or inhibiting hiccups while they were developing the project. Several teams were able to insert their own innovations into the project, one of which was asynchronous play which was inspired by the fact the team were working across multiple time zones so realtime play wasn't always available. Another team had an original mechanism for selecting the answers to questions which blended quiz & game. While many teams were mindful of having a strong visual design, which was accessible to a wide variety of users.

# The final presentations

I absolutely love this part of this module. Getting to see all the final products and successful teams really does make me happy. Each team, and every student, had blown me away with what they were able to do in such a short space of time, and given the circumstances. The entire class was run remotely this year, and students were working across multiple time zones. Some students became unavailable as they contracted coronavirus and their teams re-adjusted. It was pretty admirable having to deal with all that plus attempt to contend in the upcoming job market as many [companies cut intern and entry level positions](https://www.theguardian.com/money/2020/aug/30/no-internships-no-entry-level-work-under-25s-fear-a-jobs-squeeze) and I do hope that the work they've done in this module, and the acquired skills will give them the edge.
