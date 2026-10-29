# Generic setup script
# Available variables: $env:MAIN_CHECKOUT, $env:WORKTREE_PATH, $env:BRANCH_NAME, $env:SOURCE_BRANCH
$ErrorActionPreference = "Stop"

# Copy environment and config files
foreach ($file in @(".env", ".env.local", ".envrc", ".tool-versions")) {
  if (Test-Path "$env:MAIN_CHECKOUT\$file") {
    Copy-Item -Path "$env:MAIN_CHECKOUT\$file" -Destination ".\$file"
    Write-Host "Copied $file"
  }
}

Write-Host "Config files copied"