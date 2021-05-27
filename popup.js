
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

        theParent = document.querySelector('.SGP0hd');
        theKid = document.createElement("div");
        theKid.innerHTML = `<div class="r6xAKc" id="meet_bot_message"><span data-is-tooltip-wrapper="true"><button
        class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc" jscontroller="soHxf"
        jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef"
        jsname="A5il2e" aria-label="Meeting details" data-tooltip-enabled="true" data-tooltip-id="tt-c8"
        data-panel-id="5" aria-pressed="false" data-id="o3HEdc">
        <div class="VfPpkd-Bz112c-Jh9lGc"></div><i class="google-material-icons VfPpkd-kBDsod NtU4hc"
            aria-hidden="true">smart_toy</i><i class="google-material-icons VfPpkd-kBDsod Mwv9k"
            aria-hidden="true">smart_toy</i>
    </button>
    <div class="EY8ABd-OWXEXe-TAWMXe" role="tooltip" aria-hidden="true" id="tt-c8">${msg}</div>
</span></div>`
        theParent.insertBefore(theKid, theParent.firstChild);
    }

    update(`Sit back and relax...Waiting to reach more than ${count}`)

    function autoLeaveGoogleMeet() {

        //check for active members in meet
        update(`Checking for active members - ${document.querySelector(".uGOf1d").innerText}`)
        if (document.querySelector(".uGOf1d").innerText < count) {
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

        if (document.querySelector(".uGOf1d").innerText > count) {

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
