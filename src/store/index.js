import { createStore } from 'vuex';

const store = createStore({
  state: {
    isAppLoading: true,
    activeTab: 'Home',
    playContainerHeight: 300,
    isLaunching: false,
    launchingState: {
      title: 'LAUNCH',
      message: 'READY TO LAUNCH',
      icon: 'fa-solid fa-gamepad',
    },
    isCreatingShortcut: false,
    isDiscordLogged: false
  },

  getters: {
    isAppLoading: (state) => state.isAppLoading,
    getActiveTab: (state) => state.activeTab,
    getPlayContainerHeight: (state) => state.playContainerHeight,
    isLaunching: (state) => state.isLaunching,
    getLaunchingState: (state) => state.launchingState,
    isDiscordLogged: (state) => state.isDiscordLogged
  },

  mutations: {
    setAppLoading(state, isAppLoading) {
      state.isAppLoading = isAppLoading;
    },
    setActiveTab(state, tab) {
      state.activeTab = tab;
    },
    setPlayContainerHeight(state, height) {
      state.playContainerHeight = height;
    },
    setLaunching(state, isLaunching) {
      state.isLaunching = isLaunching;
    },
    setLaunchingState(state, launchingState) {
      state.launchingState = launchingState;
    },
    setCreatingShortcut(state, isCreatingShortcut) {
      state.isCreatingShortcut = isCreatingShortcut;
    },
  },
});

export default store;
