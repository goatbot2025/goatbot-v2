const fs = require('fs');
const path = require('path');

// 🔧 File path for VIP JSON
const vipFile = path.join(__dirname, '../../../storage/vip.json');

function isVipUser(uid) {
  try {
    if (!fs.existsSync(vipFile)) return false;

    const vipData = JSON.parse(fs.readFileSync(vipFile, 'utf-8'));

    // If VIP list is an array of UIDs
    if (Array.isArray(vipData)) {
      return vipData.includes(uid.toString());
    }

    // If VIP list is object with extra info
    if (vipData[uid]) {
      const { expiry } = vipData[uid];
      if (expiry && Date.now() > expiry) return false; // expired
      return true;
    }

    return false;
  } catch (e) {
    console.error("Error checking VIP user:", e);
    return false;
  }
}

module.exports = isVipUser;
