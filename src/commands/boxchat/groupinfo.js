module.exports = {
  config: {
    name: "groupinfo",
    aliases: ["ginfo"],
    version: "1.0",
    author: "Newton",
    countDown: 5,
    role: 0,
    shortDescription: "Show current group information",
    longDescription: "Displays various info about the current group chat",
    category: "boxchat",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ api, event }) {
    const threadInfo = await api.getThreadInfo(event.threadID);
    const {
      threadName,
      threadID,
      participantIDs,
      adminIDs,
      approvalMode,
      messageCount,
      imageSrc
    } = threadInfo;

    const name = threadName || "Unnamed Group";
    const memberCount = participantIDs.length;
    const adminCount = adminIDs.length;
    const approval = approvalMode ? "Enabled" : "Disabled";

    const msg = `📘 𝗚𝗿𝗼𝘂𝗽 𝗜𝗻𝗳𝗼:
🔹 Name: ${name}
🔹 ID: ${threadID}
👥 Members: ${memberCount}
🛡️ Admins: ${adminCount}
✅ Approval Mode: ${approval}
💬 Total Messages: ${messageCount}`;

    return api.sendMessage({
      body: msg,
      attachment: imageSrc ? await global.utils.getStreamFromURL(imageSrc) : null
    }, event.threadID, event.messageID);
  }
};
