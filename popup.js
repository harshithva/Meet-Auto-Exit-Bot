
// let count = document.getElementById('count').value;
let t = null;
let startButton = document.getElementById('startButton');


function start() {
    let count = prompt("Enter the exiting count")
    function update(msg) {
        let ele = document.getElementById('meet_bot_message')
        if (ele) {
            ele.remove();
        }

        theParent = document.querySelector('.f0WtFf');
        theKid = document.createElement("div");
        theKid.innerHTML = `<div id="meet_bot_message" jscontroller="U1Cub" jsaction="JIbuQc:QODBq;rcuQ6b:Q313Se" role="switch" class="Q8K3Le" aria-checked="false">
        <div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid SyIese M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef" jsname="r8qRAd" aria-label="Controlled by bot" tabindex="0" data-tooltip="Controlled by bot" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><div class="n8i9t"><div class="XFtqNb"><i class="google-material-icons" aria-hidden="true">smart_toy</i></div><div class="I98jWb">
        ${msg}</div>
        </div>
        </span>
        </span>
        </div>
        </div>`
        theParent.insertBefore(theKid, theParent.firstChild);
    }

    update(`Sit back and relax...Waiting to reach more than ${count}.`)

    function autoLeaveGoogleMeet() {

        //check for active members in meet
        update(`Checking for active members - ${document.querySelector(".gV3Svc>span").nextElementSibling.innerText}`)
        if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText < count) {
            try {
                window.document.querySelector(".FbBiwc").click(); //click the endcall btn on meet
                // update(`You have exited successfully`)
                // setTimeout(() => {
                //     document.querySelector(".CRFCdf").innerHTML = "hello"
                // }, 2000)
            } catch {
                alert("ERROR2");
            }
        }
        else {
            update(`I will end call once active members is less than ${count}`)
            t = setTimeout(autoLeaveGoogleMeet, 5000); //here it ll call itself after 5 seconds
        }
    }


    function checkBeforeStart() {

        if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText > count) {

            try {
                update(`More than ${count} people are here!`)
                autoLeaveGoogleMeet()
            } catch {
                alert("ERROR1");
            }
        } else {
            t = setTimeout(checkBeforeStart, 5000);
        }
    }

    // check before execution
    if (count) {
        checkBeforeStart()
    } else {
        alert("Enter valid number")
    }

}



// When the button is clicked, inject function will execute on current page
startButton.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: start,
    });
});
