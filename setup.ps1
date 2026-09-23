Set-Location "c:\Users\r\Desktop\delhuandairy"
$wc = New-Object System.Net.WebClient

Write-Host "[1] Downloading images..."
$wc.DownloadFile("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=75&fm=webp","assets\images\hero-farm.webp")
Write-Host "hero-farm ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=75&fm=webp","assets\images\cows-field.webp")
Write-Host "cows-field ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=75&fm=webp","assets\images\fresh-milk.webp")
Write-Host "fresh-milk ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1631206753348-db44968fd440?w=800&q=75&fm=webp","assets\images\desi-ghee.webp")
Write-Host "desi-ghee ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1631592099956-3fce23e56b4f?w=800&q=75&fm=webp","assets\images\paneer.webp")
Write-Host "paneer ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=75&fm=webp","assets\images\dahi-curd.webp")
Write-Host "dahi ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=75&fm=webp","assets\images\makhan.webp")
Write-Host "makhan ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=75&fm=webp","assets\images\chach.webp")
Write-Host "chach ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=75&fm=webp","assets\images\organic-farm.webp")
Write-Host "organic-farm ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=75&fm=webp","assets\images\cow-gir.webp")
Write-Host "cow-gir ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1572402123736-c79526db405a?w=800&q=75&fm=webp","assets\images\milk-pour.webp")
Write-Host "milk-pour ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=75&fm=webp","assets\images\farm-sky.webp")
Write-Host "farm-sky ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=75&fm=webp","assets\images\cow-maidan.webp")
Write-Host "cow-maidan ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=75&fm=webp","assets\images\team.webp")
Write-Host "team ok"
$wc.DownloadFile("https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=70&fm=webp","assets\images\about-farm.webp")
Write-Host "about-farm ok"

Copy-Item "assets\images\Anillkumarsingh.jpeg" "assets\images\owner.jpg"     -Force
Copy-Item "assets\logo\signature.png"          "assets\images\signature.jpg" -Force
Write-Host "owner photos copied"

Write-Host "[2] Downloading fonts..."
$wc.DownloadFile("https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xRbPQ.woff2","assets\fonts\playfair-700.woff2")
Write-Host "playfair-700 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzSYC9F0qLGzg_Q.woff2","assets\fonts\playfair-400.woff2")
Write-Host "playfair-400 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/playfairdisplay/v30/nuFkD-vYSZviVYUb_rj3ij__anPXBYf9lW4e2inOfg.woff2","assets\fonts\playfair-italic.woff2")
Write-Host "playfair-italic ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2","assets\fonts\inter-400.woff2")
Write-Host "inter-400 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff2","assets\fonts\inter-500.woff2")
Write-Host "inter-500 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2","assets\fonts\inter-600.woff2")
Write-Host "inter-600 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFqYAZ9hiJ-Ek-_EeA.woff2","assets\fonts\inter-700.woff2")
Write-Host "inter-700 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2","assets\fonts\poppins-400.woff2")
Write-Host "poppins-400 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2","assets\fonts\poppins-500.woff2")
Write-Host "poppins-500 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2","assets\fonts\poppins-600.woff2")
Write-Host "poppins-600 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2","assets\fonts\poppins-700.woff2")
Write-Host "poppins-700 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2","assets\fonts\poppins-300.woff2")
Write-Host "poppins-300 ok"
$wc.DownloadFile("https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2","assets\fonts\poppins-800.woff2")
Write-Host "poppins-800 ok"

Write-Host "[3] Downloading Font Awesome..."
$fa = "$env:TEMP\fa6.zip"
$wc.DownloadFile("https://use.fontawesome.com/releases/v6.5.0/fontawesome-free-6.5.0-web.zip",$fa)
Write-Host "FA zip downloaded: $([math]::Round((Get-Item $fa).Length/1MB,1)) MB"
Expand-Archive -Path $fa -DestinationPath "$env:TEMP\fa6" -Force
$faSrc = "$env:TEMP\fa6\fontawesome-free-6.5.0-web"
Copy-Item "$faSrc\css\all.min.css" "assets\icons\fa.min.css" -Force
New-Item -ItemType Directory -Path "assets\icons\webfonts" -Force | Out-Null
Copy-Item "$faSrc\webfonts\*" "assets\icons\webfonts\" -Force
$css = Get-Content "assets\icons\fa.min.css" -Raw
$css = $css -replace '\.\./webfonts/','../icons/webfonts/'
Set-Content "assets\icons\fa.min.css" $css -Encoding UTF8
Write-Host "Font Awesome ready"

Write-Host "[4] Creating favicon SVG..."
$svgContent = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1a5c38"/><text x="32" y="47" font-size="38" text-anchor="middle">🐄</text></svg>'
Set-Content "assets\favicon\favicon.svg" $svgContent -Encoding UTF8
Copy-Item "assets\favicon\favicon.svg" "favicon.svg" -Force
Write-Host "Favicon created"

Write-Host "=== SETUP COMPLETE ==="
Get-ChildItem "assets\images" | Measure-Object | Select-Object Count
Get-ChildItem "assets\fonts"  | Measure-Object | Select-Object Count
Get-ChildItem "assets\icons" -Recurse -File | Measure-Object | Select-Object Count
