const projectData = [
  {
    title:`Quo`,
    desc:`A easy to use prototyping app aimed for building fast prototypes with components. Built using React and Redux with a Firebase database. The project is still ongoing and I am planning to release an alpha by this December.`,
    challenges:`It is a complex application with a Sketch like editor, with functionality to generate live links to preview the prototypes, store & update user content smoothly as the user edits their prototypes. There is also a complicated structure for storing the representation of a prototype, and parsing Sketch File format. This is my first time using Redux in a large scale and I am constantly creating simpler reducers and a more organized & normalized state tree.`,
    code:`https://github.com/denizsokullu/quo-app`,
    link:`http://quo-app-test.herokuapp.com`,
    techUsed:['React', 'React Redux', 'NodeJS', 'Firebase', 'styled-components'],
  },
  {
    title:`Chrome History`,
    desc:`A working prototype for a redesign made by Max Stein, this project was born out of the curiousness of how we could enhance the usage of Google Chrome History from finding links faster to many other new ideas we had for it.`,
    challenges:`Applying the Google Material UI to new interactions and components was the core challenge. I had a lot of fun creating smooth animations for the sidebar but wished if the content was actually connected to the history of the user. The data visualizations were simple to create but unfortunately styling them to our needs was pretty hacky as Google was still providing an archaic API for generating the graphs.`,
    code:`https://github.com/denizsokullu/chrome-history`,
    link:`http://chrome-history.herokuapp.com`,
    techUsed:['React','NodeJS','Material-UI Components'],
  },
  {
    title:`Lunar Gala Projects`,
    desc:`Lunar Gala is CMU's biggest student run event which hosts an annual fashion show. Having worked as the main web developer for Lunar Gala since last summer, I had to create a timeline that would show the event 20+ year long history, and also the theme promo website for Lunar Gala 2018: Ferox.`,
    challenges:`I'd say the hardest part was working with old code base for the timeline as the code lived in a Wordpress project. The framework I created for the grid framework had some problems with certain mobile browsers which took a lot of testing to fix. But the custom framework gave us a lot of freedom and speed later on as we didn't rely on any UI framework that could have caused us compatibility issues.`,
    code:`http://github.com/denizsokullu/lunar-gala`,
    link:{'2018 Theme Site':`http://2018.lunargala.org`,Timeline:`http://lunargala.org/timeline`},
    techUsed:['NodeJS','Custom framework for the UI'],
  },
  {
    title:`ACM@CMU Algorithms with a Purpose 2018`,
    desc:`ACM's CMU branch hosts a series of events throughout the year. As the Creative Director of ACMU@CMU, and the main developer, I created the application to handle the programming day long contest for Algorithms with a Purpose 2018. Mostly based on the rules of the famous board game Risk, the students had to create AIs that would fight each other in a tournament style to conquer the most spots for their fast food chain.`,
    challenges:`I had to create a server that would accept student code, run it safely with the main code to create an output, and display the output as an animation. The challenges were making sure that during the competition the server wouldn't crash and the students wouldn't be disqualified for 'technical reasons'. I also had to create a public pool where submissions would be automatically matched as well as a tournament bracket system for the final submisssions. I also had to tweak the animation library Anime.js to handle large inputs of data for smooth playback.`,
    code:`http://github.com/denizsokullu/awap-2018`,
    link:`http://awap-2018.denizsokullu.com`,
    techUsed:['NodeJS','Pug','Express','Firebase','Anime.js'],
  },
  {
    title:`IBM Internship + Senior Part Time Work`,
    desc:`I worked in IBM Littleton, MA last summer under my manager Ethan Perry for IBM's Collaborative Solutions Design Team. My main task throughout the summer was to research if visual theming for the Connections application was possible and what were the possible options if so. After creating initial demos for the theming, this project was assigned a team and I stayed for the whole Senior year of my college as a part time employee working remotely to help the team to make theming a reality.`,
    challenges:`This was my first exposure to an Agile development environment with scrums almost every morning and a very organized task management. Technically, I had to learn how Connections worked in the back-end and how the current setup could be used to deliver a theme to the user of an organization. In terms of theming we created an organized stylesheet structure with the simplest variables to apply colors to components across Connections and constantly tested across multiple browsers before releasing the updates.`,
    techUsed:['NodeJS','SASS','Jquery']
  },
  {
    title:`Computational Design Projects`,
    desc:`A design class taught by Kyuha Shim, Computational Design let me explore ways to create interesting typography using coding, and also to create a flipbook through coding!`,
    challenges:`Generative Typewriter - initially started as a single animation for text, I turned it into a sandbox for animating text. The project isn't complete as the final goal was to create an exportable version that could be displayed on any website. It was my first time using an online database and learning what 'callback hell' is(Now saved by promises!).
    Flipbook Generator - was my attempt to write a simple AI that placed shapes of an vector art(mainly cute pets) randomly on the canvas and compared it to the final artwork and improved upon itss placing by slowly mutating its trials. The underlying algorithm known as the Genetic Algorithm was inspired by Dan Shiffman from Coding Train on YouTube!`,
    code:`http://github.com/denizsokullu/computational-design`,
    link:`http://computational-design.denizsokullu.com`,
    techUsed:['React','NodeJS','p5.js'],
  },
  {
    title:`CMU School of Design Census`,
    desc:`As a part of our Junior Communication Design Studio, we had a chance to collect information about CMU School of Design graduates that were located in San Francisco. Our data involved their interests and habits as designers which spanned the last few decades of graduates. We took that information and created a pixel-art interactive website to show the differences between the the different eras of CMU designers in San Francisco.`,
    challenges:`Creating the assets actually! Those were all done by my group consisting of Natalie Harmon, Christie Chong, Juliana Nam and me.`,
    code:`http://github.com/denizsokullu/cmu-design-census`,
    link:`cmu-design-census.denizsokullu.com`,
    techUsed:['NodeJS','HTML'],
  },
  {
    title:`The Gap`,
    desc:`The final project of the Advanced Web Design class, Sara Remi Fields, Ruby He and I thought about depicting the gap in education in the US between different economic classes and locations.`,
    challenges:`I think the hardest part about was the time crunch and the fact and using some experimental CSS features such as clipping masks.`,
    code:`http://github.com/denizsokullu/the-gap`,
    link:`the-gap.denizsokullu.com`,
    techUsed:['NodeJS','HTML'],
  },

]

export default projectData;
