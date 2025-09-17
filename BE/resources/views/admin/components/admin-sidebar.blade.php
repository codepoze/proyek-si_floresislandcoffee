<div class="main-menu menu-fixed menu-dark menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
            <!-- begin:: brand -->
            <li class="nav-item me-auto">
                <a class="navbar-brand" href="#">
                    <h2 class="brand-text">FIC PANEL</h2>
                </a>
            </li>
            <li class="nav-item nav-toggle" style="color: #000;">
                <a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse">
                    <i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i>
                    <i class="d-none d-xl-block collapse-toggle-icon font-medium-4 text-primary" data-feather="disc" data-ticon="disc"></i>
                </a>
            </li>
            <!-- end:: brand -->
        </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li class="nav-item">
                <a class="d-flex align-items-center" href="#">
                    <i data-feather="home"></i><span class="menu-title text-truncate">Dashboard</span>
                </a>
            </li>

            <li class="navigation-header">
                <span>Master</span><i data-feather="more-horizontal"></i>
            </li>
            <li class="nav-item {{ Route::is('admin.social_media.index') ? 'active' : '' }}">
                <a class="d-flex align-items-center" href="{{ route('admin.social_media.index') }}">
                    <i data-feather="list"></i><span class="menu-title text-truncate">Sosial Media</span>
                </a>
            </li>
            <li class="nav-item {{ Route::is('admin.visitor.index') ? 'active' : '' }}">
                <a class="d-flex align-items-center" href="{{ route('admin.visitor.index') }}">
                    <i data-feather="list"></i><span class="menu-title text-truncate">Pengunjung</span>
                </a>
            </li>
            <li class="nav-item {{ Route::is('admin.subscriber.index') ? 'active' : '' }}">
                <a class="d-flex align-items-center" href="{{ route('admin.subscriber.index') }}">
                    <i data-feather="list"></i><span class="menu-title text-truncate">Pelanggan</span>
                </a>
            </li>
            <li class="nav-item {{ Route::is('admin.contact.index') ? 'active' : '' }}">
                <a class="d-flex align-items-center" href="{{ route('admin.contact.index') }}">
                    <i data-feather="list"></i><span class="menu-title text-truncate">Kontak</span>
                </a>
            </li>

            <li class="navigation-header">
                <span>Blog</span><i data-feather="more-horizontal"></i>
            </li>
            <li class="nav-item {{ Route::is('admin.category.index') ? 'active' : '' }}">
                <a class="d-flex align-items-center" href="{{ route('admin.category.index') }}">
                    <i data-feather="list"></i><span class="menu-title text-truncate">Kategori</span>
                </a>
            </li>
            <li class="nav-item {{ Route::is('admin.tag.index') ? 'active' : '' }}">
                <a class="d-flex align-items-center" href="{{ route('admin.tag.index') }}">
                    <i data-feather="list"></i><span class="menu-title text-truncate">Tag</span>
                </a>
            </li>
            <li class="nav-item {{ Route::is('admin.post.index') ? 'active' : '' }}">
                <a class="d-flex align-items-center" href="{{ route('admin.post.index') }}">
                    <i data-feather="list"></i><span class="menu-title text-truncate">Post</span>
                </a>
            </li>

        </ul>
    </div>
</div>