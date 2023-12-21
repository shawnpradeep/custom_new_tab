let hours = new Date().getHours();

if (hours > 17 || hours < 7) {
  document.documentElement.style.backgroundColor = "#101011";
} else {
  document.documentElement.style.backgroundColor = "#f8fcf8";
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let customDomain = "https://shawnpradeep.com";
  chrome.tabs.update(tabs[0].id, { url: customDomain });
});
