import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  // webpackFinal: async (config, { configType }) => {
  //   config?.resolve?.modules?.push(path.resolve(__dirname, '../src'));

  //   return config;
  // },
  webpackFinal: async config => {
    // Add SASS support
    // https://storybook.js.org/docs/configurations/custom-webpack-config/#examples
    config?.resolve?.modules?.push(path.resolve(__dirname, '../src'));
    
    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
         'style-loader',
          {
              loader: 'css-loader',
              options: {
                  modules: {
                      auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                      localIdentName: '[path][name]__[local]',
                  },
              },
          },
          'sass-loader',
      ],
  })
    // config.module?.rules?.push({
    //   test: /\.css$/,
    //   use: ['style-loader', 'css-loader'],
    //   include: path.resolve(__dirname, '../src'),
    // });
    return config;
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  // docs: {
  //   autodocs: 'tag'
  // }
};
export default config;
