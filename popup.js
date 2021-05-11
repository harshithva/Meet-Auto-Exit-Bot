

let t = null;
let startButton = document.getElementById('startButton');
let count = document.getElementById('count').value;



function checkBeforeStart() {

    function autoLeaveGoogleMeet() {

        alert("checking members.....");
        //check for active members in meet
        if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText < count) {
            try {
                window.document.querySelector(".FbBiwc").click(); //click the endcall btn on meet
                alert('Ooo...Meet has been ended');
            } catch {
                alert("ERROR2");
            }
        }
        else {
            t = setTimeout(autoLeaveGoogleMeet, 5000); //here it ll call itself after 5 seconds
        }
    }

    count = prompt("Enter count");
    alert(`${count}`)
    if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText > count) {

        try {
            alert(`more than ${count} people are here!`);
            autoLeaveGoogleMeet()
        } catch {
            alert("ERROR1");
        }
    } else {
        alert(`Check not yet started`);
        t = setTimeout(checkBeforeStart, 5000);
    }
}





// When the button is clicked, inject function will execute on current page
startButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: checkBeforeStart,
    });
});

