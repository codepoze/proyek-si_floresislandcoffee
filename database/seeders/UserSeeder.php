<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name'     => 'John Doe',
            'email'    => 'johndoe@me.com',
            'username' => 'admin',
            'password' => Hash::make('admin'),
            'active'   => 'y',
        ]);

        $role = Role::create(['name' => 'admin']);

        $role->givePermissionTo([
            'agama-read',
        ]);

        $user->assignRole('admin');
    }
}
