let data = {
    flipBoxList: [
        {
            effects: 'flip', //flip, push, slide, fade, zoomIn, zoomOut
            flipDirection: 'flipLeft', //flipLeft, flipRight, flipTop, flipBottom
            pushDirection: 'pushLeft', //pushLeft, pushRight, pushTop, pushBottom
            slideDirection: 'slideLeft', //slideLeft, slideRight, slideTop, slideBottom
            frontBgOverlay: false,
            frontBgImage: "https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            is3D: true,
            showFrontImage: false,
            frontImage: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showFrontIcon: false,
            frontIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" class="bi bi-cloud-lightning-rain-fill"><path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/></svg>',
            showFrontTitle: true,
            frontTitle: "John Doe",
            showFrontDescription: true,
            frontDescription: "Software Engineer",
            showFrontBtn: false,
            frontBtnLink: "/",
            frontBtnText: "Learn More",
            backBgOverlay: true,
            backBgImage: "",
            showBackImage: true,
            backImage: "https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showBackIcon: false,
            backIcon: '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 409.801 409.801" version="1.1" viewBox="0 0 409.8 409.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m280.94 162.8c8.44 26.506 5.64 56.987-10.212 83.444-15.32 25.562-39.688 42.149-65.99 47.81 40.53 15.133 83.655 4.941 102.64-26.743 19.295-32.202 7.249-75.93-26.44-104.51z"/><path d="m137.92 243.27c-14.476-26.047-16.657-55.443-8.407-81.053-33.371 27.53-46.109 69.978-28.162 102.26 18.24 32.812 62.133 44.241 103.73 29.357-27.18-5.942-52.177-23.608-67.164-50.565z"/><path d="m206.9 129.74c29.794 0.483 56.346 13.299 74.396 33.245-7.158-42.667-37.549-74.92-74.482-75.519-37.538-0.61-69.38 31.685-77.288 75.152 18.735-20.562 46.534-33.379 77.374-32.878z"/><path d="m391.89 123.93c-11.666-41.399-54.581-67.218-103.89-66.761-11.443-27.206-32.407-47.749-59.722-54.695-41.688-10.599-85.505 13.659-109.77 56.592-29.281-3.69-57.554 4.188-77.229 24.374-30.021 30.802-30.924 80.879-5.871 123.35-17.838 23.517-25.149 51.938-17.507 79.071 11.666 41.398 54.583 67.22 103.89 66.763 11.444 27.203 32.406 47.746 59.724 54.692 41.688 10.6 85.504-13.658 109.76-56.591 29.281 3.69 57.555-4.19 77.228-24.375 30.021-30.801 30.924-80.879 5.873-123.35 17.836-23.516 25.148-51.937 17.504-79.07zm-62.059 166.07c-26.112 26.791-60.693 40-94.466 39.297 13.822 9.259 28.629 15.668 43.452 19.174-25.486 11.507-55.363 14.748-85.159 7.173-36.258-9.218-64.984-32.563-81.263-62.162-1.105 16.6 0.746 32.628 5.121 47.217-22.707-16.315-40.453-40.571-48.791-70.16-10.145-36.013-4.292-72.563 13.201-101.46-14.927 7.338-27.882 16.959-38.33 28.041 2.777-27.82 14.91-55.316 36.368-77.333 26.113-26.793 60.695-40.001 94.465-39.298-13.82-9.257-28.628-15.667-43.45-19.173 25.486-11.506 55.363-14.747 85.158-7.173 36.259 9.221 64.986 32.564 81.263 62.164 1.106-16.599-0.746-32.629-5.118-47.217 22.705 16.317 40.45 40.572 48.787 70.159 10.146 36.012 4.293 72.563-13.199 101.46 14.928-7.339 27.882-16.959 38.328-28.041-2.777 27.82-14.909 55.315-36.367 77.332z"/><path d="m204.14 163.39c-27.532 4.554-48.257 24.337-48.257 48.049 0 23.332 20.062 42.854 46.929 47.816-12.411-11.608-20.229-28.509-20.229-47.334 0-19.481 8.38-36.901 21.557-48.531z"/><path d="m208.62 246.88c27.534-4.553 48.258-24.336 48.258-48.049 0-23.332-20.059-42.857-46.931-47.817 12.41 11.608 20.229 28.509 20.229 47.334-2e-3 19.479-8.382 36.903-21.556 48.532z"/></svg>',
            showBackTitle: true,
            backTitle: "John Doe",
            showBackDescription: true,
            backDescription: "Experienced software engineer with expertise in web development and a passion for creating scalable and user-friendly applications.",
            showBackBtn: false,
            backBtnLink: "/",
            backBtnText: "Learn More",
        },
        {
            effects: "flip", //flip, push, slide, fade, zoomIn, zoomOut
            flipDirection: "flipLeft", //flipLeft, flipRight, flipTop, flipBottom
            pushDirection: "pushLeft", //pushLeft, pushRight, pushTop, pushBottom
            slideDirection: "slideLeft", //slideLeft, slideRight, slideTop, slideBottom
            frontBgOverlay: false,
            frontBgImage: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            is3D: true,
            showFrontImage: false,
            frontImage: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showFrontIcon: false,
            frontIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" class="bi bi-cloud-lightning-rain-fill"><path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/></svg>',
            showFrontTitle: true,
            frontTitle: "Jane Smith",
            showFrontDescription: true,
            frontDescription: "Marketing Manager",
            showFrontBtn: false,
            frontBtnLink: "/",
            frontBtnText: "Learn More",
            backBgOverlay: true,
            backBgImage: "",
            showBackImage: true,
            backImage: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showBackIcon: false,
            backIcon: '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 409.801 409.801" version="1.1" viewBox="0 0 409.8 409.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m280.94 162.8c8.44 26.506 5.64 56.987-10.212 83.444-15.32 25.562-39.688 42.149-65.99 47.81 40.53 15.133 83.655 4.941 102.64-26.743 19.295-32.202 7.249-75.93-26.44-104.51z"/><path d="m137.92 243.27c-14.476-26.047-16.657-55.443-8.407-81.053-33.371 27.53-46.109 69.978-28.162 102.26 18.24 32.812 62.133 44.241 103.73 29.357-27.18-5.942-52.177-23.608-67.164-50.565z"/><path d="m206.9 129.74c29.794 0.483 56.346 13.299 74.396 33.245-7.158-42.667-37.549-74.92-74.482-75.519-37.538-0.61-69.38 31.685-77.288 75.152 18.735-20.562 46.534-33.379 77.374-32.878z"/><path d="m391.89 123.93c-11.666-41.399-54.581-67.218-103.89-66.761-11.443-27.206-32.407-47.749-59.722-54.695-41.688-10.599-85.505 13.659-109.77 56.592-29.281-3.69-57.554 4.188-77.229 24.374-30.021 30.802-30.924 80.879-5.871 123.35-17.838 23.517-25.149 51.938-17.507 79.071 11.666 41.398 54.583 67.22 103.89 66.763 11.444 27.203 32.406 47.746 59.724 54.692 41.688 10.6 85.504-13.658 109.76-56.591 29.281 3.69 57.555-4.19 77.228-24.375 30.021-30.801 30.924-80.879 5.873-123.35 17.836-23.516 25.148-51.937 17.504-79.07zm-62.059 166.07c-26.112 26.791-60.693 40-94.466 39.297 13.822 9.259 28.629 15.668 43.452 19.174-25.486 11.507-55.363 14.748-85.159 7.173-36.258-9.218-64.984-32.563-81.263-62.162-1.105 16.6 0.746 32.628 5.121 47.217-22.707-16.315-40.453-40.571-48.791-70.16-10.145-36.013-4.292-72.563 13.201-101.46-14.927 7.338-27.882 16.959-38.33 28.041 2.777-27.82 14.91-55.316 36.368-77.333 26.113-26.793 60.695-40.001 94.465-39.298-13.82-9.257-28.628-15.667-43.45-19.173 25.486-11.506 55.363-14.747 85.158-7.173 36.259 9.221 64.986 32.564 81.263 62.164 1.106-16.599-0.746-32.629-5.118-47.217 22.705 16.317 40.45 40.572 48.787 70.159 10.146 36.012 4.293 72.563-13.199 101.46 14.928-7.339 27.882-16.959 38.328-28.041-2.777 27.82-14.909 55.315-36.367 77.332z"/><path d="m204.14 163.39c-27.532 4.554-48.257 24.337-48.257 48.049 0 23.332 20.062 42.854 46.929 47.816-12.411-11.608-20.229-28.509-20.229-47.334 0-19.481 8.38-36.901 21.557-48.531z"/><path d="m208.62 246.88c27.534-4.553 48.258-24.336 48.258-48.049 0-23.332-20.059-42.857-46.931-47.817 12.41 11.608 20.229 28.509 20.229 47.334-2e-3 19.479-8.382 36.903-21.556 48.532z"/></svg>',
            showBackTitle: true,
            backTitle: "Jane Smith",
            showBackDescription: true,
            backDescription: "Creative marketing manager with a proven track record of developing and executing successful marketing campaigns across digital and traditional channels.",
            showBackBtn: false,
            backBtnLink: "/",
            backBtnText: "Learn More",
        },
        {
            effects: "flip", //flip, push, slide, fade, zoomIn, zoomOut
            flipDirection: "flipLeft", //flipLeft, flipRight, flipTop, flipBottom
            pushDirection: "pushRight", //pushLeft, pushRight, pushTop, pushBottom
            slideDirection: "slideLeft", //slideLeft, slideRight, slideTop, slideBottom
            frontBgOverlay: false,
            frontBgImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            is3D: true,
            showFrontImage: false,
            frontImage: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showFrontIcon: false,
            frontIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" class="bi bi-cloud-lightning-rain-fill"><path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/></svg>',
            showFrontTitle: true,
            frontTitle: "Michael Johnson",
            showFrontDescription: true,
            frontDescription: "Financial Analyst",
            showFrontBtn: false,
            frontBtnLink: "/",
            frontBtnText: "Learn More",
            backBgOverlay: true,
            backBgImage: "",
            showBackImage: true,
            backImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showBackIcon: false,
            backIcon: '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 409.801 409.801" version="1.1" viewBox="0 0 409.8 409.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m280.94 162.8c8.44 26.506 5.64 56.987-10.212 83.444-15.32 25.562-39.688 42.149-65.99 47.81 40.53 15.133 83.655 4.941 102.64-26.743 19.295-32.202 7.249-75.93-26.44-104.51z"/><path d="m137.92 243.27c-14.476-26.047-16.657-55.443-8.407-81.053-33.371 27.53-46.109 69.978-28.162 102.26 18.24 32.812 62.133 44.241 103.73 29.357-27.18-5.942-52.177-23.608-67.164-50.565z"/><path d="m206.9 129.74c29.794 0.483 56.346 13.299 74.396 33.245-7.158-42.667-37.549-74.92-74.482-75.519-37.538-0.61-69.38 31.685-77.288 75.152 18.735-20.562 46.534-33.379 77.374-32.878z"/><path d="m391.89 123.93c-11.666-41.399-54.581-67.218-103.89-66.761-11.443-27.206-32.407-47.749-59.722-54.695-41.688-10.599-85.505 13.659-109.77 56.592-29.281-3.69-57.554 4.188-77.229 24.374-30.021 30.802-30.924 80.879-5.871 123.35-17.838 23.517-25.149 51.938-17.507 79.071 11.666 41.398 54.583 67.22 103.89 66.763 11.444 27.203 32.406 47.746 59.724 54.692 41.688 10.6 85.504-13.658 109.76-56.591 29.281 3.69 57.555-4.19 77.228-24.375 30.021-30.801 30.924-80.879 5.873-123.35 17.836-23.516 25.148-51.937 17.504-79.07zm-62.059 166.07c-26.112 26.791-60.693 40-94.466 39.297 13.822 9.259 28.629 15.668 43.452 19.174-25.486 11.507-55.363 14.748-85.159 7.173-36.258-9.218-64.984-32.563-81.263-62.162-1.105 16.6 0.746 32.628 5.121 47.217-22.707-16.315-40.453-40.571-48.791-70.16-10.145-36.013-4.292-72.563 13.201-101.46-14.927 7.338-27.882 16.959-38.33 28.041 2.777-27.82 14.91-55.316 36.368-77.333 26.113-26.793 60.695-40.001 94.465-39.298-13.82-9.257-28.628-15.667-43.45-19.173 25.486-11.506 55.363-14.747 85.158-7.173 36.259 9.221 64.986 32.564 81.263 62.164 1.106-16.599-0.746-32.629-5.118-47.217 22.705 16.317 40.45 40.572 48.787 70.159 10.146 36.012 4.293 72.563-13.199 101.46 14.928-7.339 27.882-16.959 38.328-28.041-2.777 27.82-14.909 55.315-36.367 77.332z"/><path d="m204.14 163.39c-27.532 4.554-48.257 24.337-48.257 48.049 0 23.332 20.062 42.854 46.929 47.816-12.411-11.608-20.229-28.509-20.229-47.334 0-19.481 8.38-36.901 21.557-48.531z"/><path d="m208.62 246.88c27.534-4.553 48.258-24.336 48.258-48.049 0-23.332-20.059-42.857-46.931-47.817 12.41 11.608 20.229 28.509 20.229 47.334-2e-3 19.479-8.382 36.903-21.556 48.532z"/></svg>',
            showBackTitle: true,
            backTitle: "Michael Johnson",
            showBackDescription: true,
            backDescription: "Analytical financial analyst with strong quantitative skills and experience in financial modeling, forecasting, and risk analysis.",
            showBackBtn: false,
            backBtnLink: "/",
            backBtnText: "Learn More",
        },
        {
            effects: "flip", //flip, push, slide, fade, zoomIn, zoomOut
            flipDirection: "flipLeft", //flipLeft, flipRight, flipTop, flipBottom
            pushDirection: "pushRight", //pushLeft, pushRight, pushTop, pushBottom
            slideDirection: "slideLeft", //slideLeft, slideRight, slideTop, slideBottom
            frontBgOverlay: false,
            frontBgImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            is3D: true,
            showFrontImage: false,
            frontImage: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showFrontIcon: false,
            frontIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" class="bi bi-cloud-lightning-rain-fill"><path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/></svg>',
            showFrontTitle: true,
            frontTitle: "Emily Brown",
            showFrontDescription: true,
            frontDescription: "Graphic Designer",
            showFrontBtn: false,
            frontBtnLink: "/",
            frontBtnText: "Learn More",
            backBgOverlay: true,
            backBgImage: "",
            showBackImage: true,
            backImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showBackIcon: false,
            backIcon: '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 409.801 409.801" version="1.1" viewBox="0 0 409.8 409.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m280.94 162.8c8.44 26.506 5.64 56.987-10.212 83.444-15.32 25.562-39.688 42.149-65.99 47.81 40.53 15.133 83.655 4.941 102.64-26.743 19.295-32.202 7.249-75.93-26.44-104.51z"/><path d="m137.92 243.27c-14.476-26.047-16.657-55.443-8.407-81.053-33.371 27.53-46.109 69.978-28.162 102.26 18.24 32.812 62.133 44.241 103.73 29.357-27.18-5.942-52.177-23.608-67.164-50.565z"/><path d="m206.9 129.74c29.794 0.483 56.346 13.299 74.396 33.245-7.158-42.667-37.549-74.92-74.482-75.519-37.538-0.61-69.38 31.685-77.288 75.152 18.735-20.562 46.534-33.379 77.374-32.878z"/><path d="m391.89 123.93c-11.666-41.399-54.581-67.218-103.89-66.761-11.443-27.206-32.407-47.749-59.722-54.695-41.688-10.599-85.505 13.659-109.77 56.592-29.281-3.69-57.554 4.188-77.229 24.374-30.021 30.802-30.924 80.879-5.871 123.35-17.838 23.517-25.149 51.938-17.507 79.071 11.666 41.398 54.583 67.22 103.89 66.763 11.444 27.203 32.406 47.746 59.724 54.692 41.688 10.6 85.504-13.658 109.76-56.591 29.281 3.69 57.555-4.19 77.228-24.375 30.021-30.801 30.924-80.879 5.873-123.35 17.836-23.516 25.148-51.937 17.504-79.07zm-62.059 166.07c-26.112 26.791-60.693 40-94.466 39.297 13.822 9.259 28.629 15.668 43.452 19.174-25.486 11.507-55.363 14.748-85.159 7.173-36.258-9.218-64.984-32.563-81.263-62.162-1.105 16.6 0.746 32.628 5.121 47.217-22.707-16.315-40.453-40.571-48.791-70.16-10.145-36.013-4.292-72.563 13.201-101.46-14.927 7.338-27.882 16.959-38.33 28.041 2.777-27.82 14.91-55.316 36.368-77.333 26.113-26.793 60.695-40.001 94.465-39.298-13.82-9.257-28.628-15.667-43.45-19.173 25.486-11.506 55.363-14.747 85.158-7.173 36.259 9.221 64.986 32.564 81.263 62.164 1.106-16.599-0.746-32.629-5.118-47.217 22.705 16.317 40.45 40.572 48.787 70.159 10.146 36.012 4.293 72.563-13.199 101.46 14.928-7.339 27.882-16.959 38.328-28.041-2.777 27.82-14.909 55.315-36.367 77.332z"/><path d="m204.14 163.39c-27.532 4.554-48.257 24.337-48.257 48.049 0 23.332 20.062 42.854 46.929 47.816-12.411-11.608-20.229-28.509-20.229-47.334 0-19.481 8.38-36.901 21.557-48.531z"/><path d="m208.62 246.88c27.534-4.553 48.258-24.336 48.258-48.049 0-23.332-20.059-42.857-46.931-47.817 12.41 11.608 20.229 28.509 20.229 47.334-2e-3 19.479-8.382 36.903-21.556 48.532z"/></svg>',
            showBackTitle: true,
            backTitle: "Emily Brown",
            showBackDescription: true,
            backDescription: "Talented graphic designer with a keen eye for aesthetics and a passion for creating visually stunning and impactful designs.",
            showBackBtn: false,
            backBtnLink: "/",
            backBtnText: "Learn More",
        },
        {
            effects: "flip", //flip, push, slide, fade, zoomIn, zoomOut
            flipDirection: "flipLeft", //flipLeft, flipRight, flipTop, flipBottom
            pushDirection: "pushRight", //pushLeft, pushRight, pushTop, pushBottom
            slideDirection: "slideLeft", //slideLeft, slideRight, slideTop, slideBottom
            frontBgOverlay: false,
            frontBgImage: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            is3D: true,
            showFrontImage: false,
            frontImage: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showFrontIcon: false,
            frontIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" class="bi bi-cloud-lightning-rain-fill"><path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/></svg>',
            showFrontTitle: true,
            frontTitle: "David Wilson",
            showFrontDescription: true,
            frontDescription: "Project Manager",
            showFrontBtn: false,
            frontBtnLink: "/",
            frontBtnText: "Learn More",
            backBgOverlay: true,
            backBgImage: "",
            showBackImage: true,
            backImage: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showBackIcon: false,
            backIcon: '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 409.801 409.801" version="1.1" viewBox="0 0 409.8 409.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m280.94 162.8c8.44 26.506 5.64 56.987-10.212 83.444-15.32 25.562-39.688 42.149-65.99 47.81 40.53 15.133 83.655 4.941 102.64-26.743 19.295-32.202 7.249-75.93-26.44-104.51z"/><path d="m137.92 243.27c-14.476-26.047-16.657-55.443-8.407-81.053-33.371 27.53-46.109 69.978-28.162 102.26 18.24 32.812 62.133 44.241 103.73 29.357-27.18-5.942-52.177-23.608-67.164-50.565z"/><path d="m206.9 129.74c29.794 0.483 56.346 13.299 74.396 33.245-7.158-42.667-37.549-74.92-74.482-75.519-37.538-0.61-69.38 31.685-77.288 75.152 18.735-20.562 46.534-33.379 77.374-32.878z"/><path d="m391.89 123.93c-11.666-41.399-54.581-67.218-103.89-66.761-11.443-27.206-32.407-47.749-59.722-54.695-41.688-10.599-85.505 13.659-109.77 56.592-29.281-3.69-57.554 4.188-77.229 24.374-30.021 30.802-30.924 80.879-5.871 123.35-17.838 23.517-25.149 51.938-17.507 79.071 11.666 41.398 54.583 67.22 103.89 66.763 11.444 27.203 32.406 47.746 59.724 54.692 41.688 10.6 85.504-13.658 109.76-56.591 29.281 3.69 57.555-4.19 77.228-24.375 30.021-30.801 30.924-80.879 5.873-123.35 17.836-23.516 25.148-51.937 17.504-79.07zm-62.059 166.07c-26.112 26.791-60.693 40-94.466 39.297 13.822 9.259 28.629 15.668 43.452 19.174-25.486 11.507-55.363 14.748-85.159 7.173-36.258-9.218-64.984-32.563-81.263-62.162-1.105 16.6 0.746 32.628 5.121 47.217-22.707-16.315-40.453-40.571-48.791-70.16-10.145-36.013-4.292-72.563 13.201-101.46-14.927 7.338-27.882 16.959-38.33 28.041 2.777-27.82 14.91-55.316 36.368-77.333 26.113-26.793 60.695-40.001 94.465-39.298-13.82-9.257-28.628-15.667-43.45-19.173 25.486-11.506 55.363-14.747 85.158-7.173 36.259 9.221 64.986 32.564 81.263 62.164 1.106-16.599-0.746-32.629-5.118-47.217 22.705 16.317 40.45 40.572 48.787 70.159 10.146 36.012 4.293 72.563-13.199 101.46 14.928-7.339 27.882-16.959 38.328-28.041-2.777 27.82-14.909 55.315-36.367 77.332z"/><path d="m204.14 163.39c-27.532 4.554-48.257 24.337-48.257 48.049 0 23.332 20.062 42.854 46.929 47.816-12.411-11.608-20.229-28.509-20.229-47.334 0-19.481 8.38-36.901 21.557-48.531z"/><path d="m208.62 246.88c27.534-4.553 48.258-24.336 48.258-48.049 0-23.332-20.059-42.857-46.931-47.817 12.41 11.608 20.229 28.509 20.229 47.334-2e-3 19.479-8.382 36.903-21.556 48.532z"/></svg>',
            showBackTitle: true,
            backTitle: "David Wilson",
            showBackDescription: true,
            backDescription: "Dynamic project manager with proven leadership skills and a track record of successfully managing and delivering complex projects on time and within budget.",
            showBackBtn: false,
            backBtnLink: "/",
            backBtnText: "Learn More",
        },
        {
            effects: "flip", //flip, push, slide, fade, zoomIn, zoomOut
            flipDirection: "flipLeft", //flipLeft, flipRight, flipTop, flipBottom
            pushDirection: "pushRight", //pushLeft, pushRight, pushTop, pushBottom
            slideDirection: "slideLeft", //slideLeft, slideRight, slideTop, slideBottom
            frontBgOverlay: false,
            frontBgImage: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            is3D: true,
            showFrontImage: false,
            frontImage: "https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showFrontIcon: false,
            frontIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" class="bi bi-cloud-lightning-rain-fill"><path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/></svg>',
            showFrontTitle: true,
            frontTitle: "Sophia Garcia",
            showFrontDescription: true,
            frontDescription: "Human Resources Specialist",
            showFrontBtn: false,
            frontBtnLink: "/",
            frontBtnText: "Learn More",
            backBgOverlay: true,
            backBgImage: "",
            showBackImage: true,
            backImage: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            showBackIcon: false,
            backIcon: '<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 409.801 409.801" version="1.1" viewBox="0 0 409.8 409.8" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m280.94 162.8c8.44 26.506 5.64 56.987-10.212 83.444-15.32 25.562-39.688 42.149-65.99 47.81 40.53 15.133 83.655 4.941 102.64-26.743 19.295-32.202 7.249-75.93-26.44-104.51z"/><path d="m137.92 243.27c-14.476-26.047-16.657-55.443-8.407-81.053-33.371 27.53-46.109 69.978-28.162 102.26 18.24 32.812 62.133 44.241 103.73 29.357-27.18-5.942-52.177-23.608-67.164-50.565z"/><path d="m206.9 129.74c29.794 0.483 56.346 13.299 74.396 33.245-7.158-42.667-37.549-74.92-74.482-75.519-37.538-0.61-69.38 31.685-77.288 75.152 18.735-20.562 46.534-33.379 77.374-32.878z"/><path d="m391.89 123.93c-11.666-41.399-54.581-67.218-103.89-66.761-11.443-27.206-32.407-47.749-59.722-54.695-41.688-10.599-85.505 13.659-109.77 56.592-29.281-3.69-57.554 4.188-77.229 24.374-30.021 30.802-30.924 80.879-5.871 123.35-17.838 23.517-25.149 51.938-17.507 79.071 11.666 41.398 54.583 67.22 103.89 66.763 11.444 27.203 32.406 47.746 59.724 54.692 41.688 10.6 85.504-13.658 109.76-56.591 29.281 3.69 57.555-4.19 77.228-24.375 30.021-30.801 30.924-80.879 5.873-123.35 17.836-23.516 25.148-51.937 17.504-79.07zm-62.059 166.07c-26.112 26.791-60.693 40-94.466 39.297 13.822 9.259 28.629 15.668 43.452 19.174-25.486 11.507-55.363 14.748-85.159 7.173-36.258-9.218-64.984-32.563-81.263-62.162-1.105 16.6 0.746 32.628 5.121 47.217-22.707-16.315-40.453-40.571-48.791-70.16-10.145-36.013-4.292-72.563 13.201-101.46-14.927 7.338-27.882 16.959-38.33 28.041 2.777-27.82 14.91-55.316 36.368-77.333 26.113-26.793 60.695-40.001 94.465-39.298-13.82-9.257-28.628-15.667-43.45-19.173 25.486-11.506 55.363-14.747 85.158-7.173 36.259 9.221 64.986 32.564 81.263 62.164 1.106-16.599-0.746-32.629-5.118-47.217 22.705 16.317 40.45 40.572 48.787 70.159 10.146 36.012 4.293 72.563-13.199 101.46 14.928-7.339 27.882-16.959 38.328-28.041-2.777 27.82-14.909 55.315-36.367 77.332z"/><path d="m204.14 163.39c-27.532 4.554-48.257 24.337-48.257 48.049 0 23.332 20.062 42.854 46.929 47.816-12.411-11.608-20.229-28.509-20.229-47.334 0-19.481 8.38-36.901 21.557-48.531z"/><path d="m208.62 246.88c27.534-4.553 48.258-24.336 48.258-48.049 0-23.332-20.059-42.857-46.931-47.817 12.41 11.608 20.229 28.509 20.229 47.334-2e-3 19.479-8.382 36.903-21.556 48.532z"/></svg>',
            showBackTitle: true,
            backTitle: "Sophia Garcia",
            showBackDescription: true,
            backDescription: "Dedicated human resources specialist with expertise in recruitment, employee relations, and HR policies, focused on fostering a positive and inclusive workplace culture.",
            showBackBtn: false,
            backBtnLink: "/",
            backBtnText: "Learn More",
        }
    ]
}

const flipbox = Handlebars.compile($("#flipbox-module").html(), {noEscape: true});

Handlebars.registerHelper("equals", function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

init();
function init() {
    $(".flipbox-main-wrapper").html(flipbox(data));
}

$(".selectEffects, .selectDirection").change(function() {
    data.flipBoxList.map(item => {
        item.effects = !!$(".selectEffects").val() ? $(".selectEffects").val() : 'flip';
        item.flipDirection = !!$(".selectDirection").val() ? `flip${$(".selectDirection").val()}` : 'flipLeft';
        item.pushDirection = !!$(".selectDirection").val() ? `push${$(".selectDirection").val()}` : 'pushLeft';
        item.slideDirection = !!$(".selectDirection").val() ? `slide${$(".selectDirection").val()}` : 'slideLeft';
    });

    $(".selectEffects").val() == 'zoomIn' || $(".selectEffects").val() == 'zoomOut' ? $('.selectDirection').parent().fadeOut(200) : $('.selectDirection').parent().fadeIn(200);

    init();
});

addCss('fontAwesomeSource','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'); 
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

//DISABLE RIGHT CLICK
$(document).on("contextmenu", function(e) {
    e.preventDefault();
});

//DISABLE INSPECT ELEMENT
$(document).on("keydown", function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
        e.keyCode === 86 ||
        e.keyCode === 85 ||
        e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
});