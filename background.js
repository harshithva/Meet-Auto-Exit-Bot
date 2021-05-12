


chrome.runtime.onInstalled.addListener(() => {
    // chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);

});



// chrome.notifications.create(options);

chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
        // data.chrome.notifications.create('', data.options);
        // chrome.alarms.create({ delayInMinutes: 5 })
    }

    console.log(data);
});


// chrome.notifications.create(options);
