const scheduleData = [
    {
        day: 'Monday',
        shortDay: 'PON.',
        startTime: '18:00',
        game: 'Euro Truck Simulator 2',
        imageUrl: 'https://i.imgur.com/hgOUJir.jpeg',
        isOffline: false,
        title: 'Euro Truck Simulator 2'
    },
    {
        day: 'Tuesday',
        shortDay: 'WT.',
        startTime: '21:00',
        game: 'Euro Truck Simulator 2',
        imageUrl: 'https://i.imgur.com/hgOUJir.jpeg',
        isOffline: false,
        title: 'Euro Truck Simulator 2'
    },
    {
        day: 'Wednesday',
        shortDay: 'ŚR.',
        startTime: '21:00',
        game: 'Euro Truck Simulator 2',
        imageUrl: 'https://i.imgur.com/hgOUJir.jpeg',
        isOffline: false,
        title: 'Euro Truck Simulator 2'
    },
    {
        day: 'Thursday',
        shortDay: 'CZW.',
        startTime: '18:00',
        game: 'Euro Truck Simulator 2',
        imageUrl: 'https://i.imgur.com/hgOUJir.jpeg',
        isOffline: false,
        title: 'Euro Truck Simulator 2'
    },
    {
        day: 'Friday',
        shortDay: 'PT.',
        startTime: '13:00',
        game: 'Euro Truck Simulator 2',
        imageUrl: 'https://i.imgur.com/hgOUJir.jpeg',
        isOffline: false,
        title: 'Euro Truck Simulator 2'
    },
    {
        day: 'Saturday',
        shortDay: 'SOB.',
        startTime: 'OFFLINE',
        game: 'OFFLINE',
        imageUrl: null,
        isOffline: true,
        title: 'Sobota Offline'
    },
    {
        day: 'Sunday',
        shortDay: 'NIEDZ.',
        startTime: '14:00',
        game: 'Euro Truck Simulator 2',
        imageUrl: 'https://i.imgur.com/hgOUJir.jpeg',
        isOffline: false,
        title: 'Euro Truck Simulator 2'
    }
];

const gamesData = [
    {
        id: 'ets2',
        title: 'Euro Truck Simulator 2',
        description: 'Przemierzaj Europę jako król szos, kierowca ciężarówki, który dostarcza ładunki na imponujące odległości!',
        imageUrl: 'https://i.imgur.com/Nbj6Y85.png'
    },
    {
        id: 'efootball',
        title: 'eFootball',
        description: 'Buduj swój wymarzony skład, rywalizuj z najlepszymi i zostań legendą wirtualnej piłki nożnej razem z naszą społecznością.',
        imageUrl: 'https://i.imgur.com/3wGvuvs.png'
    }
];

const socialLinks = [
    {
        platform: 'Twitch',
        url: 'https://twitch.tv/vigoletto',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>'
    },
    {
        platform: 'TikTok',
        url: 'https://tiktok.com/@vigoletto_tv',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2v8.28a4 4 0 1 1-4-4"></path><path d="M16 8a4 4 0 1 1-4 4"></path></svg>'
    },
    {
        platform: 'Instagram',
        url: 'https://instagram.com/vigoletto',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>'
    },
    {
        platform: 'YouTube',
        url: 'https://youtube.com/@vigolettogames',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>'
    },
    {
        platform: 'Discord',
        url: 'https://discord.gg/sHYStpqyX3',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>'
    },
    {
        platform: 'Kick',
        url: 'https://kick.com/vigoletto',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M6 3v12h4V3H6zm8 0v12h4V3h-4z"></path></svg>'
    }
];