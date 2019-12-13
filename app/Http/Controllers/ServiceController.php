<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Service;
use App\Helper\Image;

class ServiceController extends Controller
{


    public function index()
    {
        
        return Service::all();
    }

    public function show($id)
    {
        return Service::find($id);
    }

    // public function store(Request $request)
    // {
    //     return Service::create($request->all());
    // }

    // public function save(Request $request)
    // {
    //     $request->image->store('image');
    // }

    public function saveImg(Request $request)
    {

        // dump($request);


        //  dump($cualquier);
            $files = $request->file('image');
            // dump($files);
            $carImage = time().'.'.$files->getClientOriginalExtension(); 
            $request->image->move(public_path('images'), $carImage);
        
            $image = $carImage;
        
            // session()->put('image', $image);
            
            // $info = session()->get('image');

            // dump($info);

            return $image;
        
        
        //  $request->image->store('image');

    }

    public function add(Request $request)
    {

        // $image = image::show_image();

        // dump($image);

        $service = new Service([
            'title' => $request->get('title'),
            'body' => $request->get('body'),
            'image' => $request->get('image')
          ]);
          $service->save();
          return $service;
    }

    

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);
        $service->update($request->all());
        
        return $service;
    }


    public function delete(Request $request, $id)
    {
      $service = Service::findOrFail($id);
      $service->delete();


      return 204;
    }
}
