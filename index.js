const darkBlack = [25, 25, 27];
const midBlack = [42, 42, 42]
const lightBlack = [85, 85, 87];

const midWhite = [200, 200, 200];
const darkWhite = [100, 100, 100];

const purple = [47, 36, 80];
const lightPurple = [255, 25, 41];

module.exports = {
  manifest_version: 2,
  version: '1',
  name: 'Darkly Darker',
  description: 'Darkly Darker theme for Chrome/Chromium',
  theme: {
    colors: {
      // The main frame. I.e. behind the tabs
      frame: darkBlack,

      // When the window is not active
      frame_inactive: lightBlack,

      // Ditto above but for incognito windows. Purple was a fairly arbitrary
      // color choice. I just like it.
      frame_incognito: purple,
      frame_incognito_inactive: lightPurple,

      // I think "ntp" stands for no tab present. This background color is shown
      // for a second when you hit ⌘T
      ntp_background: midBlack,
      ntp_text: midWhite,

      // NOTE: This affects all tabs, but only affects the active tab directly.
      // For inactive tabs the tints are used
      tab_background_text: darkWhite,
      tab_text: midWhite,

      // This is where the seach bar, back buttons and extensions are. Also the
      // background of the bookmarks bar if that is present in the UI.
      toolbar: midBlack,

      // Color of text in the bookmarks bar
      bookmark_text: midWhite,

      // Not yet sure what this one does...
      button_background: [255, 255, 255],
    },

    // This image business only seems to work for the buttons in the ⌘F find
    // menu, however it has the pleasant side effect of somehow killing off the
    // gradients on buttons in the download bar, which is what I wanted.
    images: {
      theme_button_background: 'images/button_bg.png',
    },

    // Not sure if these are necessary but they are here for now
    properties: {
      ntp_background_alignment: 'bottom',
      ntp_background_repeat: 'no-repeat'
    },

    // Tints are a bit odd. They are in the form [h, s, l] where each is between
    // 0 and 1. A -1 means "no change"
    tints: {
      background_tab: [-1, 0, 0.10],
      buttons: [-1, 0, 0.3],
    },
  },
};
