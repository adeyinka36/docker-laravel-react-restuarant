<?php

namespace Database\Factories;

use App\Models\Food;
use Illuminate\Database\Eloquent\Factories\Factory;

class FoodFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Food::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name" => $this->faker->name,
            "description" => "This will be the description of the food",
            "cost" => $this->faker->numberBetween(20,99),
            "image" => $this->faker->imageUrl(100,100, 'foods')
        ];
    }
}
