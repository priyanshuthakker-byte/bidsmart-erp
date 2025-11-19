# === CONFIGURATION ===
$localPath = "G:\BidSmartERP\cockpit-clean"
$repoPath = "$env:TEMP\cockpit-github"
$repoURL = "https://github.com/priyanshuthakker-byte/bidsmart-erp.git"

# === STEP 1: Clone or Pull GitHub Repo ===
if (Test-Path $repoPath) {
  Write-Host "🔄 Pulling latest from GitHub repo..."
  git -C $repoPath pull
}
else {
  Write-Host "📥 Cloning GitHub repo..."
  git clone $repoURL $repoPath
}

# === STEP 2: Create audit-cockpit.js if missing ===
$jsPath = Join-Path $localPath "audit-cockpit.js"
if (!(Test-Path $jsPath)) {
  Write-Host "🛠 Creating audit-cockpit.js..."
  @"
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

console.log("\\nBidSmartERP Cockpit Audit Report\\n");

modules.forEach((mod) => {
  const result = checkModule(mod);
  console.log(`${result.status}  ${result.name}`);
});
"@ | Set-Content -Path $jsPath -Encoding UTF8
}

# === STEP 3: Run Node.js Audit ===
Write-Host "🚀 Running cockpit audit..."
node $jsPath $localPath $repoPath