# Darkly Darker

Chrome theme

The initial inspiration for this theme was the Arc Theme: https://github.com/horst3180/arc-theme

Original `manifest.json` for reference:

```json
{
  "manifest_version": 2,
  "version": "1",
  "name": "Darkly Darker",
  "description": "Darkly Darker theme for Chrome/Chromium",
  "theme": {
    "colors": {
      "bookmark_text": [ 35, 35, 35 ],
      "button_background": [ 0, 0, 0, 0 ],
      "frame": [ 235, 235, 237 ],
      "frame_inactive": [ 235, 235, 237 ],
      "frame_incognito": [ 235, 235, 237 ],
      "frame_incognito_inactive": [ 235, 235, 237 ],
      "ntp_background": [ 255, 255, 255 ],
      "ntp_text": [ 0, 0, 0 ],
      "tab_background_text": [ 100, 100, 100 ],
      "tab_text": [ 20, 20, 20 ],
      "toolbar": [ 223, 223, 223 ]
    },
    "images": {
      "theme_frame": "images/theme_frame.png",
      "theme_frame_inactive": "images/theme_frame.png",
      "theme_toolbar": "images/theme_toolbar.png"
    },
    "properties": {
      "ntp_background_alignment": "bottom",
      "ntp_background_repeat": "no-repeat"
    },
    "tints": {
      "background_tab": [ -1, 0.5, 0.85 ],
      "buttons": [ -1, -1, -1 ],
      "frame": [ -1, -1, -1 ],
      "frame_inactive": [ -1, -1, -1 ],
      "frame_incognito": [ -1, 0.2, 0.35 ],
      "frame_incognito_inactive": [ -1, 0.3, 0.6 ]
    }
  }
}
```

## Theme Docs

The closest thing I could find to docs was the source that seems to control the theme:

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
