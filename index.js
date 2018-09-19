const darkBlack = [32, 33, 36];
const midBlack = [50, 54, 57];
const lightBlack = [60, 64, 67];

const purple = [47, 36, 80];
const red = [255, 25, 41];

module.exports = {
  manifest_version: 3,
  version: '2',
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
      frame_incognito_inactive: red,

      // I think "ntp" stands for no tab present (new tab pane?). This background color is shown
      // for a second when you hit ⌘T
      ntp_background: [50, 54, 57],
      ntp_text: [255, 255, 255],

      // NOTE: This affects all tabs, but only affects the active tab directly.
      // For inactive tabs the tints are used
      tab_background_text: [154, 160, 166],
      tab_text: [241, 243, 244],

      // This is where the seach bar, back buttons and extensions are. Also the
      // background of the bookmarks bar if that is present in the UI.
      toolbar: midBlack,

      // Color of text in the bookmarks bar
      rookmark_text: [241, 243, 244],
    },

    // This image business only seems to work for the buttons in the ⌘F find
    // menu, however it has the pleasant side effect of somehow killing off the
    // gradients on buttons in the download bar, which is what I wanted.
    // images: {
    //   theme_button_background: 'images/button_bg.png',
    // },
    images: {
      theme_ntp_background: 'images/theme_ntp_background.png',
    },

    // Not sure if these are necessary but they are here for now
    properties: {
      ntp_logo_alternate: 1,
      ntp_background_repeat: 'repeat',
    },

    // Tints are a bit odd. They are in the form [h, s, l] where each is between
    // 0 and 1. A -1 means "no change"
    tints: {
      buttons: [-1, -1, 0.96],
    },
  },
};
