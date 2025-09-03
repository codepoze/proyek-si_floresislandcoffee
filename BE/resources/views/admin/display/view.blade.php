<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Nomor Antrian - PT. Maccon Generasi Mandiri</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

    <link rel="apple-touch-icon" href="{{ asset_admin('images/icon/apple-touch-icon.png') }}" sizes="180x180" />
    <link rel="shortcut icon" href="{{ asset_admin('images/icon/favicon.ico') }}" type="image/x-icon" />
    <link rel="icon" href="{{ asset_admin('images/icon/favicon.ico') }}" type="image/x-icon" />
    <link rel="icon" href="{{ asset_admin('images/icon/favicon-32x32.png') }}" type="image/x-icon" sizes="32x32" />
    <link rel="icon" href="{{ asset_admin('images/icon/favicon-16x16.png') }}" type="image/x-icon" sizes="16x16" />
    <link rel="stylesheet" href="{{ asset_pages('css/style.css') }}">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://js.pusher.com/8.0.1/pusher.min.js"></script>
</head>

<body>
    <div class="container">
        <header class="page-header">
            PT. Maccon Generasi Mandiri
        </header>

        <main class="main-content-wrapper">
            <div class="main-content-columns">
                <section class="left-main-column">
                    <div class="slideshow-container">
                        <div class="slideshow-image-wrapper">
                            <img id="sliderImage" src="https://placehold.co/800x450/cccccc/333333?text=Slide+Show" alt="Slide Show" onerror="this.style.display='none'; document.getElementById('sliderFallbackText').style.display='block'; console.error('Error loading image: ' + this.src);">
                            <span id="sliderFallbackText" class="slider-fallback-text">Slide Show</span>
                        </div>
                        <div id="sliderBullets">
                        </div>
                    </div>
                    <section class="time-date-section">
                        <div id="currentTime" class="time-display">16:05</div>
                        <div id="currentDate" class="date-display">Rabu, 21 Mei 2025</div>
                    </section>
                </section>

                <aside class="right-main-column">
                    <div class="current-queue-header">
                        Nomor Antrian Saat Ini
                    </div>
                    <div class="info-boxes-grid" id="queueDisplay">
                        <!-- Antrean akan dimuat dari JS -->
                    </div>
                </aside>
            </div>

            <section class="queue-section-title">
                Loading Dock
            </section>

            <footer class="bottom-boxes-row">
                <div class="info-box">
                    <div class="box-label">Loading Dock</div>
                    <div class="box-code">LD01</div>
                </div>
                <div class="info-box">
                    <div class="box-label">Loading Dock</div>
                    <div class="box-code">LD02</div>
                </div>
                <div class="info-box">
                    <div class="box-label">Loading Dock</div>
                    <div class="box-code">LD03</div>
                </div>
                <div class="info-box">
                    <div class="box-label">Loading Dock</div>
                    <div class="box-code">LD04</div>
                </div>
                <div class="info-box">
                    <div class="box-label">Loading Dock</div>
                    <div class="box-code">LD05</div>
                </div>
                <div class="info-box">
                    <div class="box-label">Loading Dock</div>
                    <div class="box-code">LD06</div>
                </div>
            </footer>
        </main>
    </div>

    <script>
        function updateTimeDateDisplay() {
            const now = new Date();

            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };
            const currentTimeString = now.toLocaleTimeString('en-GB', timeOptions);

            let currentDateString;
            try {
                const dateOptions = {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                };
                currentDateString = now.toLocaleDateString('id-ID', dateOptions);
            } catch (e) {
                console.warn("Indonesian locale ('id-ID') not fully supported for date formatting, using default.");
                const dateOptionsFallback = {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                };
                currentDateString = now.toLocaleDateString(undefined, dateOptionsFallback);
            }

            const currentTimeElem = document.getElementById('currentTime');
            const currentDateElem = document.getElementById('currentDate');

            if (currentTimeElem) currentTimeElem.textContent = currentTimeString;
            if (currentDateElem) currentDateElem.textContent = currentDateString;
        }

        function loadQueue() {
            $.get("{{ route('admin.display.list') }}", function(response) {
                const queueDisplay = document.getElementById("queueDisplay");
                queueDisplay.innerHTML = "";

                response.forEach((item) => {
                    const card = document.createElement("div");
                    card.innerHTML = `<div class="info-box"><div class="box-label">${item.nama}</div><div class="box-code">${item.no_antrean}</div></div>`;
                    queueDisplay.appendChild(card);
                });
            }, "json");
        }

        function initializeSlider(sliderId, imageElementId, fallbackTextId, bulletsContainerId, imagesArray) {
            let currentImageIndex = 0;
            const sliderImageElement = document.getElementById(imageElementId);
            const sliderFallbackTextElement = document.getElementById(fallbackTextId);
            const sliderBulletsContainer = document.getElementById(bulletsContainerId);
            let slideInterval;

            if (!sliderImageElement || !sliderBulletsContainer) {
                console.error("Slider image or bullets container not found for ID:", sliderId);
                if (sliderFallbackTextElement) sliderFallbackTextElement.style.display = 'block';
                if (sliderImageElement) sliderImageElement.style.display = 'none';
                return;
            }
            if (sliderFallbackTextElement && sliderImageElement) {
                sliderFallbackTextElement.style.display = 'none';
            }

            function updateActiveBullet() {
                if (!sliderBulletsContainer) return;
                const bullets = sliderBulletsContainer.children;
                for (let i = 0; i < bullets.length; i++) {
                    bullets[i].classList.remove('active');
                }
                if (bullets[currentImageIndex]) {
                    bullets[currentImageIndex].classList.add('active');
                }
            }

            function goToSlide(index) {
                if (!imagesArray || imagesArray.length === 0) {
                    if (sliderFallbackTextElement) sliderFallbackTextElement.style.display = 'block';
                    if (sliderImageElement) sliderImageElement.style.display = 'none';
                    return;
                }
                if (index < 0 || index >= imagesArray.length) {
                    console.warn("Invalid slide index:", index);
                    return;
                }

                sliderImageElement.style.opacity = 0;
                currentImageIndex = index;

                const tempImage = new Image();
                tempImage.onload = () => {
                    sliderImageElement.src = imagesArray[currentImageIndex];
                };
                tempImage.onerror = () => {
                    console.error(`Error preloading image for ${sliderId}: ${imagesArray[currentImageIndex]}`);
                    sliderImageElement.src = imagesArray[currentImageIndex];
                };
                tempImage.src = imagesArray[currentImageIndex];

                updateActiveBullet();

                clearInterval(slideInterval);
                slideInterval = setInterval(showNextImage, 7000);
            }

            function createBullets() {
                if (!sliderBulletsContainer) return;
                sliderBulletsContainer.innerHTML = '';
                if (!imagesArray || imagesArray.length === 0) return;

                imagesArray.forEach((_, index) => {
                    const bullet = document.createElement('button');
                    bullet.type = 'button';
                    bullet.setAttribute('aria-label', `Go to slide ${index + 1}`);
                    bullet.addEventListener('click', () => goToSlide(index));
                    sliderBulletsContainer.appendChild(bullet);
                });
            }

            function showNextImage() {
                if (!imagesArray || imagesArray.length === 0) return;
                const nextIndex = (currentImageIndex + 1) % imagesArray.length;
                goToSlide(nextIndex);
            }

            sliderImageElement.onload = () => {
                sliderImageElement.style.opacity = 1;
                if (sliderFallbackTextElement) sliderFallbackTextElement.style.display = 'none';
            };

            if (imagesArray && imagesArray.length > 0) {
                createBullets();
                goToSlide(0);
            } else if (sliderFallbackTextElement) {
                sliderFallbackTextElement.style.display = 'block';
                if (sliderImageElement) sliderImageElement.style.display = 'none';
                console.warn("No images provided for slider:", sliderId);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateTimeDateDisplay();
            loadQueue();
            setInterval(updateTimeDateDisplay, 1000);

            $.get("{{ route('admin.display.slider') }}", function(response) {
                const imagesMain = response.map(item => item);
                initializeSlider('mainSlider', 'sliderImage', 'sliderFallbackText', 'sliderBullets', imagesMain);
            });
        });

        const pusher = new Pusher("7a42cd92d61eaa4ee28e", {
            cluster: "ap1",
            forceTLS: false,
        });

        const channel = pusher.subscribe("call-the-queue");
        channel.bind("calling", function() {
            loadQueue();
        });
    </script>
</body>

</html>