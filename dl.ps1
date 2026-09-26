$imageDir = Join-Path $PSScriptRoot "assets\images"
$sourceGalleryDir = Join-Path $imageDir "source-gallery"
New-Item -ItemType Directory -Path $sourceGalleryDir -Force | Out-Null
$wc = New-Object System.Net.WebClient
$list = @(
  "paneer.webp|https://images.unsplash.com/photo-1631592099956-3fce23e56b4f?w=800&q=75&fm=webp",
  "gallery1.webp|https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=70&fm=webp",
  "gallery2.webp|https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=70&fm=webp",
  "gallery3.webp|https://images.unsplash.com/photo-1550583724-b2692b85b150?w=900&q=70&fm=webp",
  "gallery4.webp|https://images.unsplash.com/photo-1631206753348-db44968fd440?w=900&q=70&fm=webp",
  "gallery5.webp|https://images.unsplash.com/photo-1560493676-04071c5f467b?w=900&q=70&fm=webp",
  "gallery6.webp|https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=900&q=70&fm=webp",
  "gallery7.webp|https://images.unsplash.com/photo-1572402123736-c79526db405a?w=900&q=70&fm=webp",
  "gallery8.webp|https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=70&fm=webp",
  "gallery9.webp|https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=70&fm=webp",
  "gallery10.webp|https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=70&fm=webp",
  "gallery11.webp|https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&q=70&fm=webp",
  "gallery12.webp|https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=900&q=70&fm=webp"
)
foreach ($row in $list) {
  $parts = $row.Split("|")
  $name = $parts[0]; $url = $parts[1]
  $targetPath = if ($name -eq "paneer.webp") { Join-Path $imageDir $name } else { Join-Path $sourceGalleryDir $name }
  if (-not (Test-Path $targetPath)) {
    try { $wc.DownloadFile($url, $targetPath); Write-Host "OK $name" }
    catch { Write-Host "FAIL $name" }
  } else { Write-Host "SKIP $name (exists)" }
}
Write-Host "Done."
