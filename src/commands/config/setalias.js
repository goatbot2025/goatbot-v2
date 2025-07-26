module.exports = {
  config: {
    name: "setalias",
    version: "1.0",
    author: "Newton",
    role: 1,
    shortDescription: "✏️ Set alias for a command",
    longDescription: "Sets a custom alias for a specific command",
    category: "config",
    guide: "{pn} [command] [alias]"
  },

  onStart: async function ({ args, api, event }) {
    if (args.length < 2) return api.sendMessage("❌ Usage: setalias [command] [alias]", event.threadID);

    const [command, alias] = args;
    global.commandAliases = global.commandAliases || {};
    global.commandAliases[alias] = command;

    return api.sendMessage(`✅ Alias set: ${alias} ➜ ${command}`, event.threadID);
  }
};
