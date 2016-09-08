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
      button_background: [0, 0, 0, 0],
    },
    tints: {
      background_tab: [ -1, 0, 0.10 ],
    },
  },
};
