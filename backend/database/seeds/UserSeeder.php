<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'role_id'       =>  1,
            'first_name'    =>  'morley',
            'middle_name'   =>  'morlex',
            'last_name'     =>  'abuyabor',
            'email'         =>  'mail@yahoo.com',
            'username'      =>  'admin123',
            'password'      =>  '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password

        ]);
    }
}
