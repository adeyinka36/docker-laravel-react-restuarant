<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $foods = [
            [
                'name'=>'Tropical Delight',
                'price' =>19.99,
                'image' => 3,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>12.99,
                'image' => 1,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>12.99,
                'image' => 10,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>14.99,
                'image' => 9,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>15.99,
                'image' => 8,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>10.99,
                'image' => 7,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>11.99,
                'image' => 6,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>15.99,
                'image' => 5,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>12.99,
                'image' => 4,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>11.99,
                'image' => 3,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ],
            [
                'name'=>'Tropical Delight',
                'price' =>10.99,
                'image' => 2,
                'description' => 'Low calorie snack made with cheese, bread and fresh meat'
            ]
        ];
        foreach ($foods as $f){
            DB::table('food')->insert([
                $f
            ]);
        }
    }
}
