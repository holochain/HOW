import { defineConfig } from '@theweave/cli';

export default defineConfig({
  toolCurations: [
    {
      url: 'https://raw.githubusercontent.com/lightningrodlabs/weave-tool-curation/refs/heads/test-0.14/0.14/lists/curations-0.14.json',
      useLists: ['default'],
    },
  ],
  groups: [
    {
      name: 'Lightning Rod Labs',
      networkSeed: '098rc1m-09384u-crm-29384u-cmkj',
      icon: {
        type: 'filesystem',
        path: './we_dev/lrl-icon.png',
      },
      creatingAgent: {
        agentIdx: 1,
        agentProfile: {
          nickname: 'Zippy',
          avatar: {
            type: 'filesystem',
            path: './we_dev/zippy.jpg',
          },
        },
      },
      joiningAgents: [
        {
          agentIdx: 2,
          agentProfile: {
            nickname: 'Zerbina',
            avatar: {
              type: 'filesystem',
              path: './we_dev/zerbina.jpg',
            },
          },
        },
      ],
      applets: [
        {
          name: 'how Hot Reload',
          instanceName: 'how Hot Reload',
          registeringAgent: 1,
          joiningAgents: [2],
        },
        {
          name: 'notebooks',
          instanceName: 'notebooks',
          registeringAgent: 1,
          joiningAgents: [2],
        },
      ],
    },
  ],
  applets: [
    {
      name: 'how Hot Reload',
      subtitle: 'how!',
      description: 'how indeed!',
      icon: {
        type: 'filesystem',
        path: './we_dev/how_icon.png',
      },
      source: {
        type: 'localhost',
        happPath: './workdir/how.happ',
        uiPort: 8888,
      },
    },
    {
      name: 'notebooks',
      subtitle: 'Collaborative note taking',
      description: 'Real-time note-taking based on syn',
      icon: {
        type: 'https',
        url: 'https://raw.githubusercontent.com/lightningrodlabs/notebooks/main/we_dev/notebooks_logo.svg',
      },
      source: {
        type: 'https',
        url: 'https://github.com/lightningrodlabs/notebooks/releases/download/v0.6.12/notebooks.webhapp',
      },
    },
  ],
});