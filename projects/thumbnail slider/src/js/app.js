const sliderList = [
    {
        imageIcon: 'icon', //image
        image: 'https://lirp.cdn-website.com/e70fa563a8d442bc81646ad9d635638a/dms3rep/multi/opt/group-640w.jpg',
        icon: '<svg viewBox="0 0 64 64"><path d="M22 16.125A5.875 5.875 0 1027.875 22 5.882 5.882 0 0022 16.125zM22 26a4 4 0 114-4 4 4 0 01-4 4z"/><circle cx="38" cy="16" r="1"/><path d="M6.223 45.333h51.554A2.211 2.211 0 0060 43.139v-2.71H4v2.71a2.211 2.211 0 002.223 2.194zM30.238 47.333h3.523V55h-3.523z"/><circle cx="22" cy="22" r="2"/><circle cx="40" cy="30" r="2.75"/><path d="M60 11.194A2.211 2.211 0 0057.777 9H6.223A2.211 2.211 0 004 11.194v27.235h56zM34 15h1.184A3 3 0 0137 13.184V12h2v1.184A3 3 0 0140.816 15H42v2h-1.184A3 3 0 0139 18.816V20h-2v-1.184A3 3 0 0135.184 17H34zm-1 8h-3.2a7.828 7.828 0 01-1.581 3.809l2.262 2.262-1.414 1.414-2.262-2.262A7.828 7.828 0 0123 29.8V33h-2v-3.2a7.828 7.828 0 01-3.809-1.581l-2.262 2.262-1.414-1.414 2.262-2.262A7.828 7.828 0 0114.2 23H11v-2h3.2a7.828 7.828 0 011.581-3.809l-2.262-2.262 1.414-1.414 2.262 2.262A7.828 7.828 0 0121 14.2V11h2v3.2a7.828 7.828 0 013.809 1.581l2.262-2.262 1.414 1.414-2.262 2.262A7.828 7.828 0 0129.8 21H33zm13 8h-1.36a4.716 4.716 0 01-.657 1.57l.966.966-1.414 1.414-.966-.966A4.73 4.73 0 0141 34.64V36h-2v-1.36a4.73 4.73 0 01-1.569-.656l-.966.966-1.414-1.414.966-.966A4.716 4.716 0 0135.36 31H34v-2h1.36a4.716 4.716 0 01.657-1.57l-.966-.966 1.414-1.414.966.966A4.73 4.73 0 0139 25.36V24h2v1.36a4.73 4.73 0 011.569.656l.966-.966 1.414 1.414-.966.966A4.716 4.716 0 0144.64 29H46zM48.571 57H15.429a1 1 0 010-2h33.142a1 1 0 010 2z"/></svg>',
        sliderTitle: 'Lorem ipsum',
        heading: 'h3',
        textTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showBtn1: true,
        btn1Text: 'Learn More',
        btn1Link: '/',
        showBtn2: true,
        btn2Text: 'Link to Page 2',
        btn2Link: '/',
        linkTarget: true
    },
    {
        imageIcon: 'icon', //image
        image: 'https://lirp.cdn-website.com/e70fa563a8d442bc81646ad9d635638a/dms3rep/multi/opt/group-640w.jpg',
        icon: '<svg viewBox="0 0 64 64"><path d="M22 16.125A5.875 5.875 0 1027.875 22 5.882 5.882 0 0022 16.125zM22 26a4 4 0 114-4 4 4 0 01-4 4z"/><circle cx="38" cy="16" r="1"/><path d="M6.223 45.333h51.554A2.211 2.211 0 0060 43.139v-2.71H4v2.71a2.211 2.211 0 002.223 2.194zM30.238 47.333h3.523V55h-3.523z"/><circle cx="22" cy="22" r="2"/><circle cx="40" cy="30" r="2.75"/><path d="M60 11.194A2.211 2.211 0 0057.777 9H6.223A2.211 2.211 0 004 11.194v27.235h56zM34 15h1.184A3 3 0 0137 13.184V12h2v1.184A3 3 0 0140.816 15H42v2h-1.184A3 3 0 0139 18.816V20h-2v-1.184A3 3 0 0135.184 17H34zm-1 8h-3.2a7.828 7.828 0 01-1.581 3.809l2.262 2.262-1.414 1.414-2.262-2.262A7.828 7.828 0 0123 29.8V33h-2v-3.2a7.828 7.828 0 01-3.809-1.581l-2.262 2.262-1.414-1.414 2.262-2.262A7.828 7.828 0 0114.2 23H11v-2h3.2a7.828 7.828 0 011.581-3.809l-2.262-2.262 1.414-1.414 2.262 2.262A7.828 7.828 0 0121 14.2V11h2v3.2a7.828 7.828 0 013.809 1.581l2.262-2.262 1.414 1.414-2.262 2.262A7.828 7.828 0 0129.8 21H33zm13 8h-1.36a4.716 4.716 0 01-.657 1.57l.966.966-1.414 1.414-.966-.966A4.73 4.73 0 0141 34.64V36h-2v-1.36a4.73 4.73 0 01-1.569-.656l-.966.966-1.414-1.414.966-.966A4.716 4.716 0 0135.36 31H34v-2h1.36a4.716 4.716 0 01.657-1.57l-.966-.966 1.414-1.414.966.966A4.73 4.73 0 0139 25.36V24h2v1.36a4.73 4.73 0 011.569.656l.966-.966 1.414 1.414-.966.966A4.716 4.716 0 0144.64 29H46zM48.571 57H15.429a1 1 0 010-2h33.142a1 1 0 010 2z"/></svg>',
        sliderTitle: 'Lorem ipsum',
        heading: 'h3',
        textTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showBtn1: true,
        btn1Text: 'Learn More',
        btn1Link: '/',
        showBtn2: true,
        btn2Text: 'Link to Page 2',
        btn2Link: '/',
        linkTarget: true
    },
    {
        imageIcon: 'icon', //image
        image: 'https://lirp.cdn-website.com/e70fa563a8d442bc81646ad9d635638a/dms3rep/multi/opt/group-640w.jpg',
        icon: '<svg viewBox="0 0 64 64"><path d="M22 16.125A5.875 5.875 0 1027.875 22 5.882 5.882 0 0022 16.125zM22 26a4 4 0 114-4 4 4 0 01-4 4z"/><circle cx="38" cy="16" r="1"/><path d="M6.223 45.333h51.554A2.211 2.211 0 0060 43.139v-2.71H4v2.71a2.211 2.211 0 002.223 2.194zM30.238 47.333h3.523V55h-3.523z"/><circle cx="22" cy="22" r="2"/><circle cx="40" cy="30" r="2.75"/><path d="M60 11.194A2.211 2.211 0 0057.777 9H6.223A2.211 2.211 0 004 11.194v27.235h56zM34 15h1.184A3 3 0 0137 13.184V12h2v1.184A3 3 0 0140.816 15H42v2h-1.184A3 3 0 0139 18.816V20h-2v-1.184A3 3 0 0135.184 17H34zm-1 8h-3.2a7.828 7.828 0 01-1.581 3.809l2.262 2.262-1.414 1.414-2.262-2.262A7.828 7.828 0 0123 29.8V33h-2v-3.2a7.828 7.828 0 01-3.809-1.581l-2.262 2.262-1.414-1.414 2.262-2.262A7.828 7.828 0 0114.2 23H11v-2h3.2a7.828 7.828 0 011.581-3.809l-2.262-2.262 1.414-1.414 2.262 2.262A7.828 7.828 0 0121 14.2V11h2v3.2a7.828 7.828 0 013.809 1.581l2.262-2.262 1.414 1.414-2.262 2.262A7.828 7.828 0 0129.8 21H33zm13 8h-1.36a4.716 4.716 0 01-.657 1.57l.966.966-1.414 1.414-.966-.966A4.73 4.73 0 0141 34.64V36h-2v-1.36a4.73 4.73 0 01-1.569-.656l-.966.966-1.414-1.414.966-.966A4.716 4.716 0 0135.36 31H34v-2h1.36a4.716 4.716 0 01.657-1.57l-.966-.966 1.414-1.414.966.966A4.73 4.73 0 0139 25.36V24h2v1.36a4.73 4.73 0 011.569.656l.966-.966 1.414 1.414-.966.966A4.716 4.716 0 0144.64 29H46zM48.571 57H15.429a1 1 0 010-2h33.142a1 1 0 010 2z"/></svg>',
        sliderTitle: 'Lorem ipsum',
        heading: 'h3',
        textTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showBtn1: true,
        btn1Text: 'Learn More',
        btn1Link: '/',
        showBtn2: true,
        btn2Text: 'Link to Page 2',
        btn2Link: '/',
        linkTarget: true
    },
    {
        imageIcon: 'icon', //image
        image: 'https://lirp.cdn-website.com/e70fa563a8d442bc81646ad9d635638a/dms3rep/multi/opt/group-640w.jpg',
        icon: '<svg viewBox="0 0 64 64"><path d="M22 16.125A5.875 5.875 0 1027.875 22 5.882 5.882 0 0022 16.125zM22 26a4 4 0 114-4 4 4 0 01-4 4z"/><circle cx="38" cy="16" r="1"/><path d="M6.223 45.333h51.554A2.211 2.211 0 0060 43.139v-2.71H4v2.71a2.211 2.211 0 002.223 2.194zM30.238 47.333h3.523V55h-3.523z"/><circle cx="22" cy="22" r="2"/><circle cx="40" cy="30" r="2.75"/><path d="M60 11.194A2.211 2.211 0 0057.777 9H6.223A2.211 2.211 0 004 11.194v27.235h56zM34 15h1.184A3 3 0 0137 13.184V12h2v1.184A3 3 0 0140.816 15H42v2h-1.184A3 3 0 0139 18.816V20h-2v-1.184A3 3 0 0135.184 17H34zm-1 8h-3.2a7.828 7.828 0 01-1.581 3.809l2.262 2.262-1.414 1.414-2.262-2.262A7.828 7.828 0 0123 29.8V33h-2v-3.2a7.828 7.828 0 01-3.809-1.581l-2.262 2.262-1.414-1.414 2.262-2.262A7.828 7.828 0 0114.2 23H11v-2h3.2a7.828 7.828 0 011.581-3.809l-2.262-2.262 1.414-1.414 2.262 2.262A7.828 7.828 0 0121 14.2V11h2v3.2a7.828 7.828 0 013.809 1.581l2.262-2.262 1.414 1.414-2.262 2.262A7.828 7.828 0 0129.8 21H33zm13 8h-1.36a4.716 4.716 0 01-.657 1.57l.966.966-1.414 1.414-.966-.966A4.73 4.73 0 0141 34.64V36h-2v-1.36a4.73 4.73 0 01-1.569-.656l-.966.966-1.414-1.414.966-.966A4.716 4.716 0 0135.36 31H34v-2h1.36a4.716 4.716 0 01.657-1.57l-.966-.966 1.414-1.414.966.966A4.73 4.73 0 0139 25.36V24h2v1.36a4.73 4.73 0 011.569.656l.966-.966 1.414 1.414-.966.966A4.716 4.716 0 0144.64 29H46zM48.571 57H15.429a1 1 0 010-2h33.142a1 1 0 010 2z"/></svg>',
        sliderTitle: 'Lorem ipsum',
        heading: 'h3',
        textTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showBtn1: true,
        btn1Text: 'Learn More',
        btn1Link: '/',
        showBtn2: true,
        btn2Text: 'Link to Page 2',
        btn2Link: '/',
        linkTarget: true
    },
    {
        imageIcon: 'icon', //image
        image: 'https://lirp.cdn-website.com/e70fa563a8d442bc81646ad9d635638a/dms3rep/multi/opt/group-640w.jpg',
        icon: '<svg viewBox="0 0 64 64"><path d="M22 16.125A5.875 5.875 0 1027.875 22 5.882 5.882 0 0022 16.125zM22 26a4 4 0 114-4 4 4 0 01-4 4z"/><circle cx="38" cy="16" r="1"/><path d="M6.223 45.333h51.554A2.211 2.211 0 0060 43.139v-2.71H4v2.71a2.211 2.211 0 002.223 2.194zM30.238 47.333h3.523V55h-3.523z"/><circle cx="22" cy="22" r="2"/><circle cx="40" cy="30" r="2.75"/><path d="M60 11.194A2.211 2.211 0 0057.777 9H6.223A2.211 2.211 0 004 11.194v27.235h56zM34 15h1.184A3 3 0 0137 13.184V12h2v1.184A3 3 0 0140.816 15H42v2h-1.184A3 3 0 0139 18.816V20h-2v-1.184A3 3 0 0135.184 17H34zm-1 8h-3.2a7.828 7.828 0 01-1.581 3.809l2.262 2.262-1.414 1.414-2.262-2.262A7.828 7.828 0 0123 29.8V33h-2v-3.2a7.828 7.828 0 01-3.809-1.581l-2.262 2.262-1.414-1.414 2.262-2.262A7.828 7.828 0 0114.2 23H11v-2h3.2a7.828 7.828 0 011.581-3.809l-2.262-2.262 1.414-1.414 2.262 2.262A7.828 7.828 0 0121 14.2V11h2v3.2a7.828 7.828 0 013.809 1.581l2.262-2.262 1.414 1.414-2.262 2.262A7.828 7.828 0 0129.8 21H33zm13 8h-1.36a4.716 4.716 0 01-.657 1.57l.966.966-1.414 1.414-.966-.966A4.73 4.73 0 0141 34.64V36h-2v-1.36a4.73 4.73 0 01-1.569-.656l-.966.966-1.414-1.414.966-.966A4.716 4.716 0 0135.36 31H34v-2h1.36a4.716 4.716 0 01.657-1.57l-.966-.966 1.414-1.414.966.966A4.73 4.73 0 0139 25.36V24h2v1.36a4.73 4.73 0 011.569.656l.966-.966 1.414 1.414-.966.966A4.716 4.716 0 0144.64 29H46zM48.571 57H15.429a1 1 0 010-2h33.142a1 1 0 010 2z"/></svg>',
        sliderTitle: 'Lorem ipsum',
        heading: 'h3',
        textTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showBtn1: true,
        btn1Text: 'Learn More',
        btn1Link: '/',
        showBtn2: true,
        btn2Text: 'Link to Page 2',
        btn2Link: '/',
        linkTarget: true
    },
    {
        imageIcon: 'icon', //image
        image: 'https://lirp.cdn-website.com/e70fa563a8d442bc81646ad9d635638a/dms3rep/multi/opt/group-640w.jpg',
        icon: '<svg viewBox="0 0 64 64"><path d="M22 16.125A5.875 5.875 0 1027.875 22 5.882 5.882 0 0022 16.125zM22 26a4 4 0 114-4 4 4 0 01-4 4z"/><circle cx="38" cy="16" r="1"/><path d="M6.223 45.333h51.554A2.211 2.211 0 0060 43.139v-2.71H4v2.71a2.211 2.211 0 002.223 2.194zM30.238 47.333h3.523V55h-3.523z"/><circle cx="22" cy="22" r="2"/><circle cx="40" cy="30" r="2.75"/><path d="M60 11.194A2.211 2.211 0 0057.777 9H6.223A2.211 2.211 0 004 11.194v27.235h56zM34 15h1.184A3 3 0 0137 13.184V12h2v1.184A3 3 0 0140.816 15H42v2h-1.184A3 3 0 0139 18.816V20h-2v-1.184A3 3 0 0135.184 17H34zm-1 8h-3.2a7.828 7.828 0 01-1.581 3.809l2.262 2.262-1.414 1.414-2.262-2.262A7.828 7.828 0 0123 29.8V33h-2v-3.2a7.828 7.828 0 01-3.809-1.581l-2.262 2.262-1.414-1.414 2.262-2.262A7.828 7.828 0 0114.2 23H11v-2h3.2a7.828 7.828 0 011.581-3.809l-2.262-2.262 1.414-1.414 2.262 2.262A7.828 7.828 0 0121 14.2V11h2v3.2a7.828 7.828 0 013.809 1.581l2.262-2.262 1.414 1.414-2.262 2.262A7.828 7.828 0 0129.8 21H33zm13 8h-1.36a4.716 4.716 0 01-.657 1.57l.966.966-1.414 1.414-.966-.966A4.73 4.73 0 0141 34.64V36h-2v-1.36a4.73 4.73 0 01-1.569-.656l-.966.966-1.414-1.414.966-.966A4.716 4.716 0 0135.36 31H34v-2h1.36a4.716 4.716 0 01.657-1.57l-.966-.966 1.414-1.414.966.966A4.73 4.73 0 0139 25.36V24h2v1.36a4.73 4.73 0 011.569.656l.966-.966 1.414 1.414-.966.966A4.716 4.716 0 0144.64 29H46zM48.571 57H15.429a1 1 0 010-2h33.142a1 1 0 010 2z"/></svg>',
        sliderTitle: 'Lorem ipsum',
        heading: 'h3',
        textTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showBtn1: true,
        btn1Text: 'Learn More',
        btn1Link: '/',
        showBtn2: true,
        btn2Text: 'Link to Page 2',
        btn2Link: '/',
        linkTarget: true
    },
    {
        imageIcon: 'icon', //image
        image: 'https://lirp.cdn-website.com/e70fa563a8d442bc81646ad9d635638a/dms3rep/multi/opt/group-640w.jpg',
        icon: '<svg viewBox="0 0 64 64"><path d="M22 16.125A5.875 5.875 0 1027.875 22 5.882 5.882 0 0022 16.125zM22 26a4 4 0 114-4 4 4 0 01-4 4z"/><circle cx="38" cy="16" r="1"/><path d="M6.223 45.333h51.554A2.211 2.211 0 0060 43.139v-2.71H4v2.71a2.211 2.211 0 002.223 2.194zM30.238 47.333h3.523V55h-3.523z"/><circle cx="22" cy="22" r="2"/><circle cx="40" cy="30" r="2.75"/><path d="M60 11.194A2.211 2.211 0 0057.777 9H6.223A2.211 2.211 0 004 11.194v27.235h56zM34 15h1.184A3 3 0 0137 13.184V12h2v1.184A3 3 0 0140.816 15H42v2h-1.184A3 3 0 0139 18.816V20h-2v-1.184A3 3 0 0135.184 17H34zm-1 8h-3.2a7.828 7.828 0 01-1.581 3.809l2.262 2.262-1.414 1.414-2.262-2.262A7.828 7.828 0 0123 29.8V33h-2v-3.2a7.828 7.828 0 01-3.809-1.581l-2.262 2.262-1.414-1.414 2.262-2.262A7.828 7.828 0 0114.2 23H11v-2h3.2a7.828 7.828 0 011.581-3.809l-2.262-2.262 1.414-1.414 2.262 2.262A7.828 7.828 0 0121 14.2V11h2v3.2a7.828 7.828 0 013.809 1.581l2.262-2.262 1.414 1.414-2.262 2.262A7.828 7.828 0 0129.8 21H33zm13 8h-1.36a4.716 4.716 0 01-.657 1.57l.966.966-1.414 1.414-.966-.966A4.73 4.73 0 0141 34.64V36h-2v-1.36a4.73 4.73 0 01-1.569-.656l-.966.966-1.414-1.414.966-.966A4.716 4.716 0 0135.36 31H34v-2h1.36a4.716 4.716 0 01.657-1.57l-.966-.966 1.414-1.414.966.966A4.73 4.73 0 0139 25.36V24h2v1.36a4.73 4.73 0 011.569.656l.966-.966 1.414 1.414-.966.966A4.716 4.716 0 0144.64 29H46zM48.571 57H15.429a1 1 0 010-2h33.142a1 1 0 010 2z"/></svg>',
        sliderTitle: 'Lorem ipsum',
        heading: 'h3',
        textTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showBtn1: true,
        btn1Text: 'Learn More',
        btn1Link: '/',
        showBtn2: true,
        btn2Text: 'Link to Page 2',
        btn2Link: '/',
        linkTarget: true
    },
    {
        imageIcon: 'icon', //image
        image: 'https://lirp.cdn-website.com/e70fa563a8d442bc81646ad9d635638a/dms3rep/multi/opt/group-640w.jpg',
        icon: '<svg viewBox="0 0 64 64"><path d="M22 16.125A5.875 5.875 0 1027.875 22 5.882 5.882 0 0022 16.125zM22 26a4 4 0 114-4 4 4 0 01-4 4z"/><circle cx="38" cy="16" r="1"/><path d="M6.223 45.333h51.554A2.211 2.211 0 0060 43.139v-2.71H4v2.71a2.211 2.211 0 002.223 2.194zM30.238 47.333h3.523V55h-3.523z"/><circle cx="22" cy="22" r="2"/><circle cx="40" cy="30" r="2.75"/><path d="M60 11.194A2.211 2.211 0 0057.777 9H6.223A2.211 2.211 0 004 11.194v27.235h56zM34 15h1.184A3 3 0 0137 13.184V12h2v1.184A3 3 0 0140.816 15H42v2h-1.184A3 3 0 0139 18.816V20h-2v-1.184A3 3 0 0135.184 17H34zm-1 8h-3.2a7.828 7.828 0 01-1.581 3.809l2.262 2.262-1.414 1.414-2.262-2.262A7.828 7.828 0 0123 29.8V33h-2v-3.2a7.828 7.828 0 01-3.809-1.581l-2.262 2.262-1.414-1.414 2.262-2.262A7.828 7.828 0 0114.2 23H11v-2h3.2a7.828 7.828 0 011.581-3.809l-2.262-2.262 1.414-1.414 2.262 2.262A7.828 7.828 0 0121 14.2V11h2v3.2a7.828 7.828 0 013.809 1.581l2.262-2.262 1.414 1.414-2.262 2.262A7.828 7.828 0 0129.8 21H33zm13 8h-1.36a4.716 4.716 0 01-.657 1.57l.966.966-1.414 1.414-.966-.966A4.73 4.73 0 0141 34.64V36h-2v-1.36a4.73 4.73 0 01-1.569-.656l-.966.966-1.414-1.414.966-.966A4.716 4.716 0 0135.36 31H34v-2h1.36a4.716 4.716 0 01.657-1.57l-.966-.966 1.414-1.414.966.966A4.73 4.73 0 0139 25.36V24h2v1.36a4.73 4.73 0 011.569.656l.966-.966 1.414 1.414-.966.966A4.716 4.716 0 0144.64 29H46zM48.571 57H15.429a1 1 0 010-2h33.142a1 1 0 010 2z"/></svg>',
        sliderTitle: 'Lorem ipsum',
        heading: 'h3',
        textTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showBtn1: true,
        btn1Text: 'Learn More',
        btn1Link: '/',
        showBtn2: true,
        btn2Text: 'Link to Page 2',
        btn2Link: '/',
        linkTarget: true
    }
];

let widget_id = Math.floor(Math.random() * (999999999 - 1000)) + 1000;
$(".mySwiper").addClass("cs-swiper"+widget_id);
$(".mySwiper2").addClass("cs-swiper2"+widget_id);
$(".swiper-pagination").addClass("cs-pagination"+widget_id);
$(".swiper-button-next, .swiper-button-prev").addClass("cs-navigation"+widget_id);

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
console.log(isMobile);

let autoplay = true;
let slideInterval = 3000;
let showArrow = true;
let desktopItems = 6;
let tabletItems = 4;
let mobileItems = 2;
let showPagination = true;
let arrowStyle = 'fa-circle-arrow'; //font-awesome icon
let headerOffset = 0;
let stickyIconDevice = 'both'; //mobile, both
let bulletIcon = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="416.979px" height="416.979px" viewBox="0 0 416.979 416.979" style="enable-background:new 0 0 416.979 416.979;" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
let stickyBackgroundColor = '#fff';

let callbackAPI = {
    runOnReady: (functionName, callback) => {
        if (functionName) {
            callback();
        } else {
            console.error("Please Enter Function Name!");
        }
    },
    loadScript: (url, callback) => {
        var fjs = document.getElementsByTagName("script")[0];
        script = document.createElement("script");
        script.src = url;
        fjs.parentNode.insertBefore(script, fjs);
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        fjs.parentNode.insertBefore(script, fjs);
    }
};

callbackAPI.runOnReady('carouselSync',function(){
    callbackAPI.loadScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.min.js', function(){
        showArrow ? $(".swiper-button-next, swiper-button-prev").show() : $(".swiper-button-next, swiper-button-prev").hide();
        
        if(showArrow) {
            $(".swiper-button-next i").addClass(`${arrowStyle}-right`);
            $(".swiper-button-prev i").addClass(`${arrowStyle}-left`);
        }

        showPagination ? $(".swiper-pagination").show() : $(".swiper-pagination").hide();

        thumbnailStructure(sliderList);
        contentStructure(sliderList);

        let swiper = new Swiper(".cs-swiper"+widget_id, {
            loop: true,
            spaceBetween: 0,
            freeMode: false,
            watchSlidesProgress: true,
            breakpoints: {
                320: {
                    slidesPerView: parseInt(mobileItems)
                },
                481: {
                    slidesPerView: parseInt(tabletItems)
                },
                1025: {
                    slidesPerView: parseInt(desktopItems)
                }
            }
        });
        
        let swiper2 = new Swiper(".cs-swiper2"+widget_id, {
            autoHeight: true,
            loop: true,
            spaceBetween: 0,
            pagination: {
                el: ".cs-pagination"+widget_id,
                clickable: true      
            },
            navigation: {
                nextEl: ".swiper-button-next.cs-navigation"+widget_id,
                prevEl: ".swiper-button-prev.cs-navigation"+widget_id
            },
            thumbs: {
                swiper: swiper
            },
            autoplay: {
                delay: slideInterval
            },
        });
        
        autoplay ? swiper2.autoplay.start() : swiper2.autoplay.stop();
        
        setTimeout(function() { 
            $(".newICS-wrapper").css({
                opacity: '1',
                visibility: 'visible'
            });
            $(".newICS-loader").css({
                opacity: '0',
                visibility: 'hidden'
            });
        
            $(".newICS-contentItem-wrapper li").prepend(bulletIcon);
        }, 500);
        
        if(stickyIconDevice == 'mobile' && isMobile) {
            stickyOnScroll();
        }
        if(stickyIconDevice == 'desktop' && !isMobile) {
            stickyOnScroll();
        }
        if(stickyIconDevice == 'both') {
            stickyOnScroll();
        }
    });
});

function thumbnailStructure(data) {
    let output = '';

    data.map(function(i) {
        output += `<div class="swiper-slide">
            <div class="newICS-item-wrapper shadow">
                <div class="newICS-image-icon">
                    ${i.imageIcon == 'image' ? `<img src="${i.image}" alt="image">` : i.icon}
                    <div class="newICS-slider-title">${i.sliderTitle}</div>
                </div>
            </div>
        </div>`;
    });
    
    $(".newICS-thumbnail-wrapper .swiper-wrapper").html(output);
}

function contentStructure(data) {
    let output = '';

    data.map(function(i) {
        output += `<div class="swiper-slide">
            <div class="newICS-contentItem-wrapper">
                <${i.heading}>${i.textTitle}</${i.heading}>
                <p class="rteBlock">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac semper tellus. In dapibus justo dui, dictum posuere felis imperdiet maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eget egestas mi. Donec non fermentum sapien.</p>
                <br>
                <ul class="rteBlock defaultList">
                    <li><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="416.979px" height="416.979px" viewBox="0 0 416.979 416.979" style="enable-background:new 0 0 416.979 416.979;" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sum dolor sit amet, consectetur adipiscing elit. sum dolor sit amet, consectetur adipiscing elit. sum dolor sit amet, consectetur adipiscing elit.</li>
                    <li><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="416.979px" height="416.979px" viewBox="0 0 416.979 416.979" style="enable-background:new 0 0 416.979 416.979;" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>Vivamus eget elit quis neque porta sollicitudin.</li>
                    <li><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="416.979px" height="416.979px" viewBox="0 0 416.979 416.979" style="enable-background:new 0 0 416.979 416.979;" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>Donec feugiat risus vel urna fringilla, ac aliquam mi fermentum.</li>
                    <li><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="416.979px" height="416.979px" viewBox="0 0 416.979 416.979" style="enable-background:new 0 0 416.979 416.979;" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>Aenean id lectus fermentum, tempus purus eget, pharetra arcu.</li>
                    <li><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="416.979px" height="416.979px" viewBox="0 0 416.979 416.979" style="enable-background:new 0 0 416.979 416.979;" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>Mauris nec ligula et arcu finibus lacinia non eget leo.</li>
                    <li><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="416.979px" height="416.979px" viewBox="0 0 416.979 416.979" style="enable-background:new 0 0 416.979 416.979;" xml:space="preserve"><g><path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>Vestibulum a lorem eu orci lobortis ullamcorper.</li>
                </ul>
                
                <div class="newICS-button-wrapper ${i.btnAlignment}">
                    ${i.showBtn1 && `<a href="${i.btn1Link}" class="newICS-button1"><span class="text">${i.btn1Text}</span></a>`}
                </div>
            </div>
        </div>`;
    });

    $(".newICS-content-wrapper .swiper-wrapper").html(output);
}

function stickyOnScroll() {
    setTimeout(function() { 
        let stickyWidth = $(".newICS-thumbnail").outerWidth();
        let thumbWidth = $(".newICS-thumbnail-wrapper").outerWidth();
        let thumbHeight = $(".newICS-thumbnail-wrapper").outerHeight();
        let contentHeight = $(".newICS-content-wrapper").outerHeight();
        let elementTop = $('.newICS-wrapper').offset().top;
        let elementBottom = parseInt(elementTop) + parseInt(contentHeight);
        
        $(".newICS-thumbnail").css({height: thumbHeight});

        $(`.cs-swiper${widget_id} .swiper-wrapper`).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            window.scrollTo({
                top: parseInt(elementTop) - parseInt(headerOffset),
                behavior: 'smooth'
            });
        });

        $(".newICS-thumbnail-wrapper .newICS-arrow").css({
            'width': '100%',
            'max-width': stickyWidth
        });
        
        $(window).scroll(function() {
            let currentScroll = $(window).scrollTop() + parseInt(headerOffset);
            
            if(currentScroll >= elementTop && currentScroll <= elementBottom) {
                $(".newICS-thumbnail-wrapper").css({
                    'position': 'fixed',
                    'width': '100%',
                    'top': headerOffset,
                    'left': '0',
                    'background-color': stickyBackgroundColor
                });
            } else {
                $(".newICS-thumbnail-wrapper").css({
                    'position': 'relative',
                    'top': '0',
                    'background-color': 'transparent'
                });
            }
        });
    }, 1000);
}

addCss('swiperCss', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.2.0/swiper-bundle.css');
addCss('fontAwesomeSource','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'); 
function addCss(id, url) { 
    if (!document.getElementById(id)) { 
        let head = document.getElementsByTagName('head')[0]; 
        let link = document.createElement('link'); 
        link.id = id; 
        link.rel = 'stylesheet'; 
        link.type = 'text/css'; 
        link.href = url; 
        link.crossOrigin = 'anonymous'; 
        head.appendChild(link); 
    } 
}