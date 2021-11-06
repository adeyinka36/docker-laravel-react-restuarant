<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;

class StripController extends Controller
{
    public function index()
    {
        Stripe::setApiKey(env('STRIPE_API_KEY'));
        $checkout_session = \Stripe\Checkout\Session::create([
            'line_items' => [[
                # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                'price' => '{{PRICE_ID}}',
                'quantity' => 1,
            ]],
            'payment_method_types' => [
                'card',
                'bacs_debit',
            ],
            'mode' => 'payment',
            'success_url' => '/success.html',
            'cancel_url' =>  '/cancel.html',
        ]);

    }
}
