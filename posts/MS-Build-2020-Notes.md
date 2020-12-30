---
title: Microsoft Build 2020 Notes
headerImage: /images/MSBuild2020/Microsoft-Build-2020-Microsoft.jpg
headerAlt: The MS Build 2020 remote event pass
date: 2020-05-27
---

Build is the annual developer conference held each year by Microsoft in downtown Seattle with tickets being usually highly sought for and run into a few thousand dollars for the privilege of attending. The 2020 event was forced to go online and was to be broadcast across 3 days free of charge. Following Satya Nadella's opening address, the keynote was led by Scott Handselman and friends and was titled "Every developer is welcome". Microsoft have made many moves in the past few years to become more integral to the working lives of developers; their acquisition of Github, the increasingly closer relationship with Linux, and their presence in the development lifecycle for many developers. If developer tooling and productivity are to be one of the main strategies of Microsoft and if every developer truly is welcome, Build needs to be accessible to all in the same manner it was this year.

Many sessions were being broadcast three or four times across the event allowing for flexibility in personal scheduling. I started off Tuesday afternoon with the "Every developer is welcome" keynote, attended the Q&A for the Visual Studio .NET team, followed by the journey to combine .NET into a single SDK, and then finished the day off with seeing some of the brand new features coming in C# 9. On Wednesday I learned about writing a WebAssembly app with Blazor while having lunch at home, and then about how Microsoft are planning to run environmentally sustainable data centres. Thursday morning started with coffee and what's new in application insights and I closed the conference that afternoon with some of Microsoft's internal engineering practises.

# Every developer is welcome

Scott Hanselman lead the keynote to showcase the big-ticket items being shown off this year from Microsoft. He was first joined by Kayla Cinnamon to debut [Windows Terminal 1.0](https://devblogs.microsoft.com/commandline/windows-terminal-1-0/), a wonderful application for those who find themselves using multiple shells. In my day-to-day I'll find myself using PowerShell, CMD, and Bash for various tasks so I've actually been running the preview of Terminal for a couple of months and am very excited about it's 1.0 release. This lead into the new version of Windows subsystem for Linux (WSL2) which offers near native Linux performance on Windows devices, and a preview for the ability to run Linux GUI applications in Windows, not in this talk but elsewhere I saw it'll be possible to use Docker with WSL2 so looking forward to trying that. Followed by the announcement of the Windows Package Manager, imaginatively called winget, but has since received [some criticism for not being a true package manager](https://www.theregister.co.uk/2020/05/20/microsoft_announces_official_windows_package/) but whatever, either way it does simplify the install experience of many Windows applications.

Allison Buchholtz-Au took Scott through a whistle stop tour of [Visual Studio Codespaces](https://aka.ms/codespaces). This included a very interesting feature which will allow for syncing settings & extensions between where you are using VS Code with your Github account, which addresses a personal gripe of mine when developing across more than one device. Hanselman also touched on some new features inside Visual Studio for better git integration, which gets two big thumbs up from me. Finally, Maddy Leger joined to show off new features with Xamarin but since I've never used it, I wasn't following along 100%.

# Ask the Visual Studio .NET team

Some of the team who work on Visual Studio, the editor I find myself in for large sections of my day, demoed some of the upcoming improvements to the IDE. My favourite of which are the Git features, which are no longer buried inside the team explorer and look less cumbersome than they currently are. A more subtle feature is the ability to drag straight from the file explorer into the solution explorer, and the ability to find references for code across repos on your file system. The latest update also brings a few new code fixes for readability.

The team addressed a good question about the differences between Visual Studio and VS Code and will anything be ported to VS Code since it's been getting a lot of love recently from Microsoft. In their view, VS Code is a lightweight editor for lightweight work. This kind of rings true for my development, I'd never think about starting up Visual Studio to work on a TypeScript project, nor use really use VS Code for C# work. The team confirmed that the features we find in Visual Studio aren't planned to be ported to VS Code but that may change in the future.

# The Journey to one .NET

This talk was a personal highlight of mine. I'm really looking forward to the release of .NET 5 this November, and (touch wood) equally excited to do some migrations to it as well. .NET 5 will introduce a single base class library and SDK for the full framework and is set for release in November 2020, and .NET 6 (in November 2021) will be the first LTS release.

Coming soon will be the ability to debug .NET from Visual Studio within the Windows subsystem for Linux, and even using that to run Docker which is excited to hear. There is also the .NET Multi-platform App UI (MAUI) entering preview, an evolution of Xamarin Forms as a way to have cross platform & native interfaces within the .NET ecosystem.

The .NET ML model builder is moving inside Visual Studio, and has templates for a number of common ML tasks. Models can be trained either on device or can run on Azure instance to train and destroyed once complete all from within the editor. It takes away a lot of complexity and does its best to deliver the best performing model to use in your application. There is also the preview of Blazor WebAssembly to explore, which allows for C# code to be run natively in the browser, useful for very rich applications.

# C#: Today & Tomorrow

Mads Torgersen & Dustin Campbell walked through a couple of things from the upcoming release of C# 9.0. This is also due to drop in November 2020 alongside the .NET 5 release. It's going to introduce support for top level programs, so no need for `class Program` and `public static void Main()`, just straight into the action if you like. A neat feature since I frequently want to check how some API works without setting up the context of the larger application I'm working on.

There will be a new `init` property accessor so something can be set during object initialisation but cannot be changed thereafter making that property immutable. Similarly, the `data` keyword on a class will make an entire object immutable. I can already think of a few good uses for this new data immutability. Additionally, the new `with` expression will clone the values of an object with specified changes into a new variable for later consumption.

It'll soon be possible to use covariant returns, in which a derived class can have a more specific return type than in its base class. Some syntactic sugar as well where a type doesn't need to be specified after the `new` expression if the type has been specified in the variable such as `Point p = new (3, 5);`.

There are a handful more things coming to C# 9.0 which you can see on the [Microsoft Dev Blog](https://devblogs.microsoft.com/dotnet/welcome-to-c-9-0/).

# Wrap Up

Many of the session that were broadcast for Build are [available now](https://mybuild.microsoft.com/sessions) for on demand viewing, so if you have the time, I'd encourage you to check out some out. I didn't touch on them here, but I'd recommend taking a look at What's new with Application Insights & Azure Monitor, Build a WebAssembly app with Blazor, and Environmentally Sustainable Data Centers.

Microsoft have been making increasingly interesting moves as far as developer tooling and productivity are concerned, and as a developer who spends many hours inside their tools, I am heavily invested in the direction they are heading.
