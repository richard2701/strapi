module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
/*     upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    }, */
    graphql: {
      enabled: true,
      config: {
        playgroundAlways: false,
        defaultLimit: 10,
        maxLimit: 20,
        apolloServer: {
          tracing: true,
        },
      }
    },
    'contacts': {
      name: "contacts", // the name of your plugin
      description: "A plugin for managing contacts.",
      icon: "📞",
      enabled: true,
      resolve: './src/plugins/contacts', // the path to your plugin
      // any other configuration options you need
    },
  });
