<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Form;
use App\Helper\Image;

class FormController extends Controller
{


    public function index()
    {
        
        return Form::all();
    }

    public function show($id)
    {
        return Form::find($id);
    }
   

    public function add(Request $request)
    {

          $form = new Form([
            'name' => $request->get('name'),
            'phone' => $request->get('phone'),
            'mail' => $request->get('mail'),
            'comment' => $request->get('comment')
          ]);
          $form->save();
          return $form;
    }

    
}
