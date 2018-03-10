# "Facebook Limiter" Extension
By: Sean Campbell

### Purpose
This chrome extension is aimed at limiting Facebook usage and was inspired by this [extension](https://chrome.google.com/webstore/detail/news-feed-eradicator-for/fjcldmjmjhkklehbacihaiopjklihlgg?hl=en). It does this by **eliminating** the newsfeed and displaying the amount of **time** you have been on Facebook for the day. I personally find Facebook to be a distraction in my life, but I find that I need it for the groups I am apart of. This extension may help a user realize their Facebook habits.

### Instructions
1. Start by downloading the zip file or cloning this repo
2. `npm insall`
3. `npm run build`
4. Go to *chrome://extensions*
5. Make sure that developer mode checkbox is checked
6. Load unpacked extension and navigate to the directory and select it
7. Enjoy!

Notice: 
- time only goes up when you are on the Facebook tab.
- time resets automatically each day.

### References
Bootstrapped from [this repo](https://github.com/chibat/chrome-extension-typescript-starter)

FormatDuration [from this repo](https://github.com/google/page-timer)

New day timing [stackoverflow](https://stackoverflow.com/questions/35908846/how-to-detect-app-launched-first-time-in-a-day)