const sideNav = document.querySelector('.side-nav');

const secondSideNav = document.querySelector('.second-side-nav');

const menuBtn = document.querySelector('.menuBtn');

const homepageContent = document.querySelector('.homepage-content');



console.log(sideNav);
console.log(secondSideNav);
console.log(menuBtn);



menuBtn.addEventListener('click', function() {
  if (sideNav.style.display === 'flex') {
      // If the main side navigation is visible
      sideNav.style.display = 'none';
      secondSideNav.style.display = 'flex';
      homepageContent.style.width = '94%';

      // Decrease the width of the video cards when the second side nav is displayed
      const videoCard = document.querySelectorAll('.video-card');

      videoCard.forEach((value) => {
        value.style.width = '23.5%';
      });
  } else {
      // If the main side navigation is hidden
      sideNav.style.display = 'flex';
      secondSideNav.style.display = 'none';
      homepageContent.style.width = '82%';

      // Reset the video card width when the main side nav is displayed
      const videoCard = document.querySelectorAll('.video-card');
      videoCard.forEach((value) => {
        value.style.width = '32%';
      });
  }
});









const videoCards = [
    {
      id: 1,
      title: "How to Start a YouTube Channel",
      description: "Learn how to create and grow your own YouTube channel from scratch.",
      thumbnail: "https://images.unsplash.com/photo-1573496267765-9254e55d9384?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "abc.mp4",
      views: '112k',
      profile:"profile.png",
      uploadedAt: "4 days ago",
      duration: "12:35",
      channelName: "Creative Vibes",
      category: "Tutorial",
      tags: ["YouTube", "How to", "Channel Growth", "Tutorial"]
    },
    {
      id: 2,
      title: "Top 5 Editing Software for YouTubers",
      description: "Explore the best video editing tools for YouTube creators in 2024.",
      thumbnail: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
      videoUrl: "xyz.mp4",
      views: '85k',
      profile:"profile.png",
      uploadedAt: "5 days ago",
      duration: "9:45",
      channelName: "Software System",
      category: "Tech Review",
      tags: ["Editing", "Software", "Video Editing", "YouTube Tools"]
    },
    {
      id: 3,
      title: "How to Make Money on YouTube in 2024",
      description: "Discover the top strategies to monetize your YouTube channel in the current year.",
      thumbnail: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "abc.mp4",
      views: '190k',
      profile:"profile.png",
      uploadedAt: "7 weeks ago",
      duration: "15:20",
      channelName: "Finance for Creators",
      category: "Finance",
      tags: ["Monetization", "YouTube", "Money", "Strategy"]
    },
    {
      id: 4,
      title: "Vlog Setup Guide: What You Need to Start",
      description: "A complete guide to setting up the perfect vlog station for YouTube content creation.",
      thumbnail: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
      videoUrl: "xyz.mp4",
      views: '115k',
      profile:"profile.png",
      uploadedAt: "10 days ago",
      duration: "11:30",
      channelName: "Vlogging Essentials",
      category: "Vlog",
      tags: ["Vlogging", "Setup", "Content Creation", "YouTube"]
    },
    {
      id: 5,
      title: "How to Edit Videos Like a Pro",
      description: "Master video editing techniques that will make your YouTube videos stand out.",
      thumbnail: "https://media.istockphoto.com/id/808157682/photo/young-female-government-employee-wearing-glasses-uses-tablet-in-system-control-center-in-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=m15jYXh6sSjB7HbwAnJpVbpTpbQQTjXAoLRyU7GMn-U=",
      videoUrl: "abc.mp4",
      views: '230k',
      profile:"profile.png",
      uploadedAt: "12 days ago",
      duration: "18:00",
      channelName: "8 years ago",
      category: "Tutorial",
      tags: ["Video Editing", "Tutorial", "Pro Editing", "How to"]
    },
    {
      id: 6,
      title: "Behind the Scenes of a YouTube Channel",
      description: "Take a peek into the daily life of a YouTube creator and the process behind the scenes.",
      thumbnail: "https://media.istockphoto.com/id/1473149698/photo/business-finance-data-analytics-graph-advisor-using-kpi-dashboard-on-virtual-screen-financial.webp?a=1&b=1&s=612x612&w=0&k=20&c=AkiRyBQeU1poB8RNtiAvuqv3EN4SjfYYE8UA0GJ4Clk=",
      videoUrl: "xyz.mp4",
      views: '80k',
      profile:"profile.png",
      uploadedAt: "17 days ago",
      duration: "14:10",
      channelName: "Inside Creators",
      category: "Vlog",
      tags: ["Behind the Scenes", "Vlog", "Creator Life"]
    },
    {
      id: 7,
      title: "How to Build a YouTube Studio on a Budget",
      description: "Learn how to set up a professional YouTube studio without breaking the bank.",
      thumbnail: "https://media.istockphoto.com/id/691171106/photo/who-knows-what-a-hacker-can-do-with-your-information.jpg?s=612x612&w=0&k=20&c=Z_NTPwp3jRGpkrKc0dROYOtQgBkzIaRrlBjLSowSEE8=",
      videoUrl: "abc.mp4",
      views: '135k',
      profile:"profile.png",
      uploadedAt: "1 week ago",
      duration: "13:40",
      channelName: "Studio Setup",
      category: "Tutorial",
      tags: ["Studio", "YouTube Setup", "Budget", "Tutorial"]
    },
    {
      id: 8,
      title: "How to Grow Your YouTube Audience",
      description: "Strategies and tips for growing your audience on YouTube effectively.",
      thumbnail: "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=612x612&w=0&k=20&c=vmC-jVG6PNPRQtgtBp2y1caApEGYjt-fDrm0VzRgvK8=",
      videoUrl: "abc.mp4",
      views: '220k',
      profile:"profile.png",
      uploadedAt: "2 days ago",
      duration: "16:20",
      channelName: "Growth Hub",
      category: "Marketing",
      tags: ["Growth", "Audience", "YouTube", "Marketing"]
    },
    {
      id: 9,
      title: "Making Your First YouTube Video",
      description: "Step-by-step guide on creating your very first YouTube video and making it successful.",
      thumbnail: "https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?s=612x612&w=0&k=20&c=oOKLdZJpcsrUbNrnGVf8TwoIdYud4mWoBkx1A3PdXI0=",
      videoUrl: "xyz.mp4",
      views: '160k',
      profile:"profile.png",
      uploadedAt: "3 weeks ago",
      duration: "11:50",
      channelName: "New Creators",
      category: "Tutorial",
      tags: ["First Video", "How to", "YouTube Tips"]
    },
    {
      id: 10,
      title: "Essential Gear for YouTubers in 2024",
      description: "A rundown of the must-have gear for content creators on YouTube this year.",
      thumbnail: "https://media.istockphoto.com/id/1357020474/photo/quality-management-with-qa-qc-and-improvement-standardisation-and-certification-concept.jpg?s=612x612&w=0&k=20&c=TQzsNI-voLUKsgpX9KBsZWvEyQx8R1TlTISMvabKcAI=",
      videoUrl: "abc.mp4",
      views: '20k',
      profile:"profile.png",
      uploadedAt: "11 weeks ago",
      duration: "10:30",
      channelName: "Tech Creators",
      category: "Tech Review",
      tags: ["Gear", "YouTube", "Equipment", "Tech"]
    },
    {
      id: 11,
      title: "How to Write Video Scripts Like a Pro",
      description: "Learn how to write engaging scripts that will keep your YouTube audience hooked.",
      thumbnail: "https://media.istockphoto.com/id/1752905583/photo/abstract-trading-chart-with-big-data-and-infographics-3d-fintech-concept-background-with.jpg?s=612x612&w=0&k=20&c=bjnqkGJOEh3V68z0sOuWySjsncXsrlZ2fgIRx6WNnhU=",
      videoUrl: "xyz.mp4",
      views: '95k',
      profile:"profile.png",
      uploadedAt: "12 hours ago",
      duration: "12:00",
      channelName: "Script Writing Tips",
      category: "Tutorial",
      tags: ["Scripting", "Writing", "YouTube", "Content Creation"]
    },
    {
      id: 12,
      title: "YouTube SEO Tips for 2024",
      description: "Boost your YouTube search rankings with these 2024 SEO strategies.",
      thumbnail: "https://media.istockphoto.com/id/2161803832/photo/dms-document-management-system-businessman-pointing-folder-icon-to-use-technology-software.jpg?s=612x612&w=0&k=20&c=oSGBQLfYM6CJGoO52d2xE4Fm8vHYvLsxLxkvhCIAGys=",
      videoUrl: "abc.mp4",
      views: '195k',
      profile:"profile.png",
      uploadedAt: "2 hours ago",
      duration: "14:30",
      channelName: "SEO Masters",
      category: "Marketing",
      tags: ["SEO", "YouTube", "Optimization", "Marketing"]
    }
  ];

  

  function videoCreate(video) {
    return `<div class="video-card">
                        <div class="video-div">
                         <video src=${video.videoUrl} poster=${video.thumbnail}></video>
                         </div>

                        <div class="info-div">
                        <div class="left-info-div">
                        <img src=${video.profile}>
                        </div>

                          <div class="right-info-div">
                            <p id="title">${video.title}</p>
                            <div class="flex">
                            <p>${video.channelName}.</p>
                            <p>${video.views} . ${video.uploadedAt} </p> </div>
                            </div>
                        </div>
                    </div>`
  }
  

  function renderVideos() {
    let mainPage = document.querySelector('.lower-homepage-content');


    mainPage.innerHTML = videoCards.map((video) =>  videoCreate(video)).join("");
  }

  function hoverOnVideo() {
    let videoCards = document.querySelectorAll('.video-div video');

    videoCards.forEach((video) => {
        video.addEventListener('mouseover', () => {
            video.play();
        });

        video.addEventListener('mouseout', () => {
            video.pause();
            video.load();
        });
    } );
  }
  renderVideos();
  hoverOnVideo();








  //upper-homepage

  let allButtons = ['<i class="ri-dashboard-2-line"></i>','All','Websites','javascript','Music','Podcasts','Graphic Design','Mixes','Video editing software','Mixes','Comedy','Indian pop music','Rapping','Live','Dramedy','Gadgets','Dramedy','Mantras','Recently uploaded','watch','New to you'];

  function createButtons(btn) {
    return ` <button class ="upper-home-btn">${btn}</button>`;
  }


  function renderalButtons() {
    let upperHomepageContent =document.querySelector('.upper-homepage-content');
    upperHomepageContent.innerHTML = allButtons.map((btn) => createButtons(btn)).join("");
  }

  renderalButtons();







  
 



