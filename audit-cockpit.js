const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const local = process.argv[2];
const remote = process.argv[3];

const modules = [
  "TenderViewer", "BossModule", "ClauseEngine", "RippleLogic", "WorkOrders",
  "SubmissionModule", "DocumentVault", "ReminderSystem", "StatusDashboard",
  "WinLossTracker", "VendorTracker", "AuditLogs", "CVManager", "InvoiceGenerator",
  "ComplianceMatrix", "DeckExporter", "AnnexureBundler", "ExperienceSheet",
  "EthicsScoring", "ClauseParser", "TemplateGenerator", "DSCModule",
  "SubmissionChart", "AnnexureAutoFill"
];

function hashFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(content).digest("hex");
}

function checkModule(name) {
  const localFile = path.join(local, "src/components", name, `${name}.tsx`);
  const remoteFile = path.join(remote, "src/components", name, `${name}.tsx`);

  const localHash = hashFile(localFile);
  const remoteHash = hashFile(remoteFile);

  if (!localHash) return { status: "⏳ Pending", name };
  if (!remoteHash) return { status: "🆕 Upcoming", name };
  if (localHash !== remoteHash) return { status: "❌ Corrupted", name };
  return { status: "✅ Done", name };
}

console.log("\n📊 BidSmartERP Cockpit Audit Report\n");

modules.forEach((mod) => {
  const result = checkModule(mod);
  console.log(`${result.status}  ${result.name}`);
});
