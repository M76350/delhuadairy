# Fix-images.ps1 — Replace all Unsplash URLs with local asset paths
# Also creates missing image copies from existing ones

$base = "c:\Users\r\Desktop\Delhuadairy"
$imgDir = "$base\assets\images"

# ── Copy existing images to fill gaps ─────────────────────
# paneer → use dahi-curd as substitute
if (-not (Test-Path "$imgDir\paneer.webp")) {
    Copy-Item "$imgDir\dahi-curd.webp" "$imgDir\paneer.webp" -Force
    Write-Host "Created paneer.webp from dahi-curd.webp"
}
# gallery images → reuse existing
$galleryMap = @{
    "gallery1.webp"  = "hero-farm.webp"
    "gallery2.webp"  = "cows-field.webp"
    "gallery3.webp"  = "fresh-milk.webp"
    "gallery4.webp"  = "desi-ghee.webp"
    "gallery5.webp"  = "organic-farm.webp"
    "gallery6.webp"  = "cow-maidan.webp"
    "gallery7.webp"  = "milk-pour.webp"
    "gallery8.webp"  = "dahi-curd.webp"
    "gallery9.webp"  = "farm-sky.webp"
    "gallery10.webp" = "cow-gir.webp"
    "gallery11.webp" = "team.webp"
    "gallery12.webp" = "makhan.webp"
}
foreach ($k in $galleryMap.Keys) {
    if (-not (Test-Path "$imgDir\$k")) {
        Copy-Item "$imgDir\$($galleryMap[$k])" "$imgDir\$k" -Force
        Write-Host "Created $k from $($galleryMap[$k])"
    }
}

# ── URL → Local path mapping ──────────────────────────────
$urlMap = @(
    # Full-size data-src (lightbox) → same local image
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1400&q=90", "assets/images/gallery1.webp"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&q=90", "assets/images/gallery2.webp"),
    @("https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1400&q=90",    "assets/images/gallery3.webp"),
    @("https://images.unsplash.com/photo-1631206753348-db44968fd440?w=1400&q=90", "assets/images/gallery4.webp"),
    @("https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1400&q=90",    "assets/images/gallery5.webp"),
    @("https://images.unsplash.com/photo-1645696301019-35adcc18fc9e?w=1400&q=90", "assets/images/paneer.webp"),
    @("https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1400&q=90", "assets/images/gallery6.webp"),
    @("https://images.unsplash.com/photo-1572402123736-c79526db405a?w=1400&q=90", "assets/images/gallery7.webp"),
    @("https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1400&q=90", "assets/images/gallery8.webp"),
    @("https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=90", "assets/images/gallery9.webp"),
    @("https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1400&q=90", "assets/images/gallery10.webp"),
    @("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1400&q=90", "assets/images/gallery11.webp"),
    # Thumbnail src
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80", "assets/images/hero-farm.webp"),
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=75", "assets/images/hero-farm.webp"),
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",  "assets/images/hero-farm.webp"),
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=700&q=80",  "assets/images/gallery1.webp"),
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=75",  "assets/images/gallery1.webp"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80", "assets/images/cows-field.webp"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",  "assets/images/cows-field.webp"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80",  "assets/images/gallery2.webp"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=75",  "assets/images/gallery2.webp"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&q=80",  "assets/images/cows-field.webp"),
    @("https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",     "assets/images/fresh-milk.webp"),
    @("https://images.unsplash.com/photo-1550583724-b2692b85b150?w=700&q=80",     "assets/images/gallery3.webp"),
    @("https://images.unsplash.com/photo-1550583724-b2692b85b150?w=640&q=80",     "assets/images/fresh-milk.webp"),
    @("https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=75",     "assets/images/gallery3.webp"),
    @("https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80",     "assets/images/fresh-milk.webp"),
    @("https://images.unsplash.com/photo-1631206753348-db44968fd440?w=800&q=80",  "assets/images/desi-ghee.webp"),
    @("https://images.unsplash.com/photo-1631206753348-db44968fd440?w=700&q=80",  "assets/images/gallery4.webp"),
    @("https://images.unsplash.com/photo-1631206753348-db44968fd440?w=640&q=80",  "assets/images/desi-ghee.webp"),
    @("https://images.unsplash.com/photo-1631206753348-db44968fd440?w=600&q=75",  "assets/images/gallery4.webp"),
    @("https://images.unsplash.com/photo-1645696301019-35adcc18fc9e?w=800&q=80",  "assets/images/paneer.webp"),
    @("https://images.unsplash.com/photo-1645696301019-35adcc18fc9e?w=700&q=80",  "assets/images/paneer.webp"),
    @("https://images.unsplash.com/photo-1645696301019-35adcc18fc9e?w=640&q=80",  "assets/images/paneer.webp"),
    @("https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",  "assets/images/dahi-curd.webp"),
    @("https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80",  "assets/images/gallery8.webp"),
    @("https://images.unsplash.com/photo-1488477181946-6428a0291777?w=640&q=80",  "assets/images/dahi-curd.webp"),
    @("https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=75",  "assets/images/gallery8.webp"),
    @("https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=80",  "assets/images/makhan.webp"),
    @("https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=700&q=80",  "assets/images/makhan.webp"),
    @("https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=640&q=80",  "assets/images/makhan.webp"),
    @("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",  "assets/images/chach.webp"),
    @("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",  "assets/images/chach.webp"),
    @("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&q=80",  "assets/images/chach.webp"),
    @("https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=80",    "assets/images/organic-farm.webp"),
    @("https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",     "assets/images/organic-farm.webp"),
    @("https://images.unsplash.com/photo-1560493676-04071c5f467b?w=700&q=80",     "assets/images/gallery5.webp"),
    @("https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&q=80",     "assets/images/organic-farm.webp"),
    @("https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",  "assets/images/cow-gir.webp"),
    @("https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=700&q=80",  "assets/images/gallery10.webp"),
    @("https://images.unsplash.com/photo-1572402123736-c79526db405a?w=800&q=80",  "assets/images/milk-pour.webp"),
    @("https://images.unsplash.com/photo-1572402123736-c79526db405a?w=700&q=80",  "assets/images/gallery7.webp"),
    @("https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80", "assets/images/farm-sky.webp"),
    @("https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",  "assets/images/farm-sky.webp"),
    @("https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80",  "assets/images/gallery9.webp"),
    @("https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",  "assets/images/cow-maidan.webp"),
    @("https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=700&q=80",  "assets/images/gallery6.webp"),
    @("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",  "assets/images/team.webp"),
    @("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=700&q=80",  "assets/images/gallery11.webp"),
    @("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=75",  "assets/images/gallery11.webp"),
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=70",  "assets/images/gallery1.webp"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=70",  "assets/images/gallery2.webp"),
    @("https://images.unsplash.com/photo-1631206753348-db44968fd440?w=900&q=70",  "assets/images/gallery4.webp"),
    # fm=webp variants
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=75&fm=webp", "assets/images/hero-farm.webp"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=75&fm=webp", "assets/images/cows-field.webp"),
    @("https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=75&fm=webp",     "assets/images/fresh-milk.webp"),
    @("https://images.unsplash.com/photo-1631206753348-db44968fd440?w=800&q=75&fm=webp",  "assets/images/desi-ghee.webp"),
    @("https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=75&fm=webp",  "assets/images/dahi-curd.webp"),
    @("https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=75&fm=webp",  "assets/images/makhan.webp"),
    @("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=75&fm=webp",  "assets/images/chach.webp"),
    @("https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=75&fm=webp",    "assets/images/organic-farm.webp"),
    @("https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=75&fm=webp",  "assets/images/cow-gir.webp"),
    @("https://images.unsplash.com/photo-1572402123736-c79526db405a?w=800&q=75&fm=webp",  "assets/images/milk-pour.webp"),
    @("https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=75&fm=webp", "assets/images/farm-sky.webp"),
    @("https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=75&fm=webp",  "assets/images/cow-maidan.webp"),
    @("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=75&fm=webp",  "assets/images/team.webp"),
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=70&fm=webp", "assets/images/about-farm.webp"),
    # Background/hero image variant
    @("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80')", "assets/images/hero-farm.webp')"),
    @("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80",   "assets/images/gallery2.webp"),
    @("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&q=70",   "assets/images/gallery11.webp")
)

# ── Apply replacements to all HTML files ─────────────────
$htmlFiles = @(
    "$base\index.html",
    "$base\about.html",
    "$base\products.html",
    "$base\gallery.html",
    "$base\contact.html"
)

foreach ($file in $htmlFiles) {
    if (-not (Test-Path $file)) { continue }
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    $original = $content
    foreach ($pair in $urlMap) {
        $content = $content.Replace($pair[0], $pair[1])
    }
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
        Write-Host "UPDATED: $(Split-Path $file -Leaf)"
    } else {
        Write-Host "NO CHANGE: $(Split-Path $file -Leaf)"
    }
}

# Count remaining Unsplash URLs
Write-Host "`nChecking remaining Unsplash URLs..."
foreach ($file in $htmlFiles) {
    $c = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    $count = ([regex]::Matches($c, "unsplash")).Count
    Write-Host "  $(Split-Path $file -Leaf): $count remaining"
}

Write-Host "`nDone! Images mapped to local files."
