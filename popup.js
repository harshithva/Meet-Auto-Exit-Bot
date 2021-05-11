

let t = null;
let startButton = document.getElementById('startButton');
let count = 40;

function start() {

    count = prompt("Enter exiting count")

    function autoLeaveGoogleMeet() {

        // alert("checking members.....");
        //check for active members in meet
        if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText < count) {
            try {
                window.document.querySelector(".FbBiwc").click(); //click the endcall btn on meet
                // alert('Ooo...Meet has been ended');
            } catch {
                alert("ERROR2");
            }
        }
        else {
            t = setTimeout(autoLeaveGoogleMeet, 5000); //here it ll call itself after 5 seconds
        }
    }


    function checkBeforeStart() {
        if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText > count) {

            try {
                // alert(`more than ${count} people are here!`);
                autoLeaveGoogleMeet()
            } catch {
                alert("ERROR1");
            }
        } else {
            // alert(`Check not yet started`);
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

