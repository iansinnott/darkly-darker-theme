# Darkly Darker

A dark Chrome theme

![Darkly Darker Chrome Theme](http://dropsinn.s3.amazonaws.com/chrome-chrome-dark.png)

The initial inspiration for this theme was the Arc Theme: https://github.com/horst3180/arc-theme

## Installation

**Step 1:**

### [Download the theme](https://github.com/iansinnott/darkly-darker-theme/raw/master/darkly_darker_chrome_theme.crx)

**Step: 2:**

Open the Chrome Extensions panel by going to `chrome://extensions/`. Paste that into Chrome to get to your extensions.

**Step: 2:**

Drag and drop the `.crx` file you just downloaded here. The theme will now be applied.

## Screenshots

![Darkly Darker Chrome Theme with Google](http://dropsinn.s3.amazonaws.com/chrome-chrome-full.png)

I find this theme especially pleasant when used with the Chrome Devtools dark theme:

![Darkly Darker Chrome Theme with Chrome Devtools](http://dropsinn.s3.amazonaws.com/chrome-chrome-with-devtools.png)

It also works quite nicely when viewing any site that already has a dark theme, like [compass-style.org](http://compass-style.org/):

![Darkly Darker Chrome Theme with Compass Style](http://dropsinn.s3.amazonaws.com/Screen%20Shot%202016-09-08%20at%2012.28.01%20AM.png)

The incognito styling is also purple to differentiate between normal and private browsing:

![Darkly Darker Chrome Incognito Theme](http://dropsinn.s3.amazonaws.com/chrome-chrome-incognito.png)

---

## Theme Docs

**Helpful Articles:**

* https://developer.chrome.com/extensions/themes
* https://www.quora.com/How-can-I-create-my-own-chrome-theme
* https://sites.google.com/site/gsugsa/google-apps/google-chrome/how-to-create-a-theme

The closest thing I could find to docs was the source that seems to control the theme:

**Terminology:**

* **ntp**: I think this stands for something like "no tab present"

**Constants:**

https://src.chromium.org/viewvc/chrome/trunk/src/chrome/browser/themes/theme_properties.h

**Logic:**

https://src.chromium.org/viewvc/chrome/trunk/src/chrome/browser/themes/theme_service.cc

**As JSON:**

```json
{
  "theme": {
    "colors": {
      "frame",
      "frame_inactive",
      "frame_incognito",
      "frame_incognito_inactive",
      "toolbar",
      "tab_text",
      "background_tab_text",
      "bookmark_text",
      "ntp_background",
      "ntp_text",
      "ntp_link",
      "ntp_link_underline",
      "ntp_header",
      "ntp_section",
      "ntp_section_text",
      "ntp_section_link",
      "ntp_section_link_underline",
      "button_background",
    },
    "tints": {
      "buttons",
      "frame",
      "frame_inactive",
      "frame_incognito",
      "frame_incognito_inactive",
      "background_tab",
    },
    "properties": {
      "ntp_background_alignment",
      "ntp_background_tiling",
      "ntp_logo_alternate"
    }
  }
}
```
