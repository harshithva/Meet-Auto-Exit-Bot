

let t = null;
let startButton = document.getElementById('startButton');
let countValue = document.getElementById('countValue').value;

function autoLeaveGoogleMeet() {
    alert("checking members.....");
    //check for active members in meet
    if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText < countValue) {
        try {
            window.document.querySelector(".FbBiwc").click(); //click the endcall btn on meet
            alert('Ooo...Meet has been ended');
        } catch {
            alert("ERROR");
        }
    }
    else {
        t = setTimeout(autoLeaveGoogleMeet, 5000); //here it ll call itself after 5 seconds
    }
}

function checkBeforeStart() {
    countValue = document.getElementById('countValue').value;
    alert(`${countValue}`)
    if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText > countValue) {

        try {
            alert(`more than ${x} are here!`);
            autoLeaveGoogleMeet()
        } catch {
            alert("ERROR");
        }
    } else {
        alert(`Check not yet started`);
        t = setTimeout(checkBeforeStart, 5000);
    }
}





// When the button is clicked, inject setPageBackgroundColor into current page
startButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: checkBeforeStart,
    });
});

