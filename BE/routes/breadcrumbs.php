<?php

use Diglactic\Breadcrumbs\Breadcrumbs;
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;

Breadcrumbs::for('admin.dashboard.index', function (BreadcrumbTrail $trail) {
    $trail->push('Dashboard', route('admin.dashboard.index'));
});

Breadcrumbs::for('admin.akun.index', function (BreadcrumbTrail $trail) {
    $trail->parent('admin.dashboard.index');

    $trail->push('Akun', route('admin.akun.index'));
});

Breadcrumbs::for('admin.social_media.index', function (BreadcrumbTrail $trail) {
    $trail->parent('admin.dashboard.index');

    $trail->push('Social Media', route('admin.social_media.index'));
});

Breadcrumbs::for('admin.contact.index', function (BreadcrumbTrail $trail) {
    $trail->parent('admin.dashboard.index');

    $trail->push('Contact', route('admin.contact.index'));
});

Breadcrumbs::for('admin.subscriber.index', function (BreadcrumbTrail $trail) {
    $trail->parent('admin.dashboard.index');

    $trail->push('Subscriber', route('admin.subscriber.index'));
});

Breadcrumbs::for('admin.visitor.index', function (BreadcrumbTrail $trail) {
    $trail->parent('admin.dashboard.index');

    $trail->push('Visitor', route('admin.visitor.index'));
});

Breadcrumbs::for('admin.category.index', function (BreadcrumbTrail $trail) {
    $trail->parent('admin.dashboard.index');

    $trail->push('Category', route('admin.category.index'));
});

Breadcrumbs::for('admin.tag.index', function (BreadcrumbTrail $trail) {
    $trail->parent('admin.dashboard.index');

    $trail->push('Tag', route('admin.tag.index'));
});

Breadcrumbs::for('admin.post.index', function (BreadcrumbTrail $trail) {
    $trail->parent('admin.dashboard.index');

    $trail->push('Post', route('admin.post.index'));
});