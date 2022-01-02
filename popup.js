let t = null;
let startButton = document.getElementById('startButton');

function start() {
    if(window.location.hostname == 'meet.google.com') {
        if (document.querySelector(".gV3Svc")) {
            let count;
    
            do {
                count = prompt("Enter the exiting count")
            } while (isNaN(count));
    
            function update(msg) {
                if (document.getElementById('gmazeb')) {
                    document.getElementById('gmazeb').remove();
                }
    
                theParent = document.querySelector('.f0WtFf');
                theKid = document.createElement("div");
                theKid.innerHTML = `
                <div id="gmazeb" jscontroller="U1Cub" jsaction="JIbuQc:QODBq;rcuQ6b:Q313Se" role="switch" class="Q8K3Le" aria-checked="false">
                    <div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid SyIese M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef" jsname="r8qRAd" aria-label="Controlled by bot" tabindex="0" data-tooltip="Controlled by bot" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0">
                    <div class="Fvio9d MbhUzd" jsname="ksKsZd"></div>
                    <div class="e19J0b CeoRYc"></div>
                        <span jsslot="" class="l4V7wb Fxmcue">
                            <span class="NPEfkd RveJvd snByac">
                                <div class="n8i9t">
                                    <div class="XFtqNb">
                                        <i class="google-material-icons" aria-hidden="true">smart_toy</i>
                                    </div>
                                    <div class="I98jWb"> ${msg}</div>
                                </div>
                            </span>
                        </span>
                    </div>
                </div>
                `
                theParent.insertBefore(theKid, theParent.firstChild);
            }
    
            function autoLeaveGoogleMeet() {
                update(`Checking for active members - ${parseInt(document.querySelector(".gV3Svc>span").nextElementSibling.innerText)}`)
                if (parseInt(document.querySelector(".gV3Svc>span").nextElementSibling.innerText) < count) {
                    try {
                        window.document.querySelector(".FbBiwc").click();
                    } catch {
                        alert("ERROR G1-L");
                    }
                } else {
                    update(`I will end call once active members is less than ${count}`)
                    t = setTimeout(autoLeaveGoogleMeet, 1000);
                }
            }
    
            function checkBeforeStart() {
                if (parseInt(document.querySelector(".gV3Svc>span").nextElementSibling.innerText) > count) {
                    try {
                        update(`More than ${count} people are here!`)
                        autoLeaveGoogleMeet()
                    } catch {
                        alert("ERROR G1-B");
                    }
                } else {
                    t = setTimeout(checkBeforeStart, 1000);
                }
            }

            if (count) {
                checkBeforeStart()
                update(`Sit back and relax...Waiting to reach more than ${count}`)
            } else {
                alert("Enter valid number")
            }
    
        } else if (document.querySelector(".uGOf1d")) {
            let count;
    
            do {
                count = prompt("Enter the exiting count")
            } while (isNaN(count));
    
            function update(msg) {
                if (document.getElementById('gmazeb')) {
                    document.getElementById('gmazeb').remove();
                }
    
                theParent = document.querySelector('.SGP0hd');
                theKid = document.createElement("div");
                theKid.innerHTML = `
                <div class="r6xAKc" id="gmazeb">
                    <span data-is-tooltip-wrapper="true">
                        <button class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc" jscontroller="soHxf" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef" jsname="A5il2e" aria-label="Meeting details" data-tooltip-enabled="true" data-tooltip-id="tt-c8" data-panel-id="5" aria-pressed="false" data-id="o3HEdc">
                            <div class="VfPpkd-Bz112c-Jh9lGc"></div>
                            <i class="google-material-icons VfPpkd-kBDsod NtU4hc" aria-hidden="true">smart_toy</i>
                            <i class="google-material-icons VfPpkd-kBDsod Mwv9k" aria-hidden="true">smart_toy</i>
                        </button>
                        <div class="EY8ABd-OWXEXe-TAWMXe" role="tooltip" aria-hidden="true" id="tt-c8">${msg}</div>
                    </span>
                </div>
                `
                theParent.insertBefore(theKid, theParent.firstChild);
            }
    
            update(`Sit back and relax...Waiting to reach more than ${count}`)
    
            function autoLeaveGoogleMeet() {
                update(`Checking for active members - ${parseInt(document.querySelector(".uGOf1d").innerText)}`)
                if (parseInt(document.querySelector(".uGOf1d").innerText) < count) {
                    try {
                        window.document.querySelector(".jh0Tpd").click();
                    } catch {
                        alert("ERROR G2-L");
                    }
                } else {
                    update(`I will end call once active members is less than ${count}`)
                    t = setTimeout(autoLeaveGoogleMeet, 1000);
                }
            }
    
            function checkBeforeStart() {
                if (parseInt(document.querySelector(".uGOf1d").innerText) > count) {
                    try {
                        update(`More than ${count} people are here!`)
                        autoLeaveGoogleMeet()
                    } catch {
                        alert("ERROR G2-B");
                    }
                } else {
                    t = setTimeout(checkBeforeStart, 1000);
                }
            }
                if (count) {
                checkBeforeStart()
                update(`Sit back and relax...Waiting to reach more than ${count}`)
            } else {
                alert("Enter valid number")
            }
        } else {
            alert("Something went wrong!")
        }
    } else if(window.location.hostname.split('.').slice(-2).join('.') == 'zoom.us') {
        if (document.querySelector(".footer-button__number-counter")) {
            let count;
    
            do {
                count = prompt("Enter the exiting count")
            } while (isNaN(count));
    
            function update(msg) {
                if (document.getElementById('gmazeb')) {
                    document.getElementById('gmazeb').remove();
                }
    
                theParent = document.querySelector('.footer__btns-container');
                theKid = document.createElement("div");
                theKid.innerHTML = `
                <div class="footer-button__wrapper" tabindex="-1" id="gmazeb">
                    <button tabindex="0" class="footer-button__button ax-outline" type="button" aria-label="${msg}" title="${msg}">
                        <div class="footer-button__img-layer">
                            <div class="footer-button__chat-icon"></div>
                        </div>
                        <span class="footer-button__button-label">Bot</span>
                    </button>
                </div>
                `
                theParent.insertBefore(theKid, theParent.firstChild);
            }
    
            update(`Sit back and relax...Waiting to reach more than ${count}`)
    
            function autoLeaveZoom() {
                update(`Checking for active members - ${parseInt(document.querySelector(".footer-button__number-counter").innerText)}`)
                if (parseInt(document.querySelector(".footer-button__number-counter").innerText) < count) {
                    if (document.querySelector(".leave-meeting-options")) {
                        try {
                            window.document.querySelector(".leave-meeting-options__btn").click();
                        } catch {
                            alert("ERROR Z-L-1-0");
                        }
                    } else {
                        try {
                            window.document.querySelector(".footer__leave-btn").click();
                            try {
                                window.document.querySelector(".leave-meeting-options__btn").click();
                            } catch {
                                alert("ERROR Z-L-2-2");
                            }
                        } catch {
                            alert("ERROR Z-L-2-1");
                        }
                    }
                } else {
                    update(`I will end call once active members is less than ${count}`)
                    t = setTimeout(autoLeaveZoom, 1000);
                }
            }
    
            function checkBeforeStart() {
                if (parseInt(document.querySelector(".footer-button__number-counter").innerText) > count) {
                    try {
                        update(`More than ${count} people are here!`)
                        autoLeaveZoom()
                    } catch {
                        alert("ERROR Z-B");
                    }
                } else {
                    t = setTimeout(checkBeforeStart, 1000);
                }
            }
                if (count) {
                checkBeforeStart()
                update(`Sit back and relax...Waiting to reach more than ${count}`)
            } else {
                alert("Enter valid number")
            }
        } else {
            alert("Something went wrong!")
        }
    } else {
        alert("Open Google meet or Zoom First !")
    }
}

startButton.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        function: start,
    });
});
