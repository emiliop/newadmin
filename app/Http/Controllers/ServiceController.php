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

      
            $files = $request->file('image');
            
            $bannerImage = time().$files->getClientOriginalName(); 

            $request->image->move(public_path('images'), $bannerImage);
                    
            $image = $bannerImage;

            dump($image);

            return $image;

    }

    public function saveMidImg(Request $request)
    {

            $filesmid = $request->file('midimage');
            
            $midImage = time().$filesmid->getClientOriginalName(); 
           
            $request->midimage->move(public_path('images'), $midImage);
        
            $mid = $midImage;  

            dump($mid);

            return $mid;
        

    }


    public function saveGalleryImg1(Request $request)
    {

            $files1 = $request->file('gallery1');
            
            $gallery1 = time().$files1->getClientOriginalName(); 
           
            $request->gallery1->move(public_path('images'), $gallery1);
        
            $galleryImage1 = $gallery1;  
            
            dump($galleryImage1);

            return $galleryImage1;
        

    }

    public function saveGalleryImg2(Request $request)
    {

            $files2 = $request->file('gallery2');
            
            $gallery2 = time().$files2->getClientOriginalName(); 
           
            $request->gallery2->move(public_path('images'), $gallery2);
        
            $galleryImage2 = $gallery2;  
            
            dump($galleryImage2);

            return $galleryImage2;
        

    }

    public function saveGalleryImg3(Request $request)
    {

            $files3 = $request->file('gallery3');
            
            $gallery3 = time().$files3->getClientOriginalName(); 
           
            $request->gallery3->move(public_path('images'), $gallery3);
        
            $galleryImage3 = $gallery3;  
            
            dump($galleryImage3);

            return $galleryImage3;
        

    }

    public function saveGalleryImg4(Request $request)
    {

            $files4 = $request->file('gallery4');
            
            $gallery4 = time().$files4->getClientOriginalName(); 
           
            $request->gallery4->move(public_path('images'), $gallery4);
        
            $galleryImage4 = $gallery4;  
            
            dump($galleryImage4);

            return $galleryImage4;
        

    }

    public function saveGalleryImg5(Request $request)
    {

            $files5 = $request->file('gallery5');
            
            $gallery5 = time().$files5->getClientOriginalName(); 
           
            $request->gallery5->move(public_path('images'), $gallery5);
        
            $galleryImage5 = $gallery5;  
            
            dump($galleryImage5);

            return $galleryImage5;
        

    }

    public function add(Request $request)
    {

        // $image = image::show_image();

         dump($request);

        $service = new Service([
            'title' => $request->get('title'),
            'body' => $request->get('body'),
            'body2' => $request->get('body2'),
            'highlighted' => $request->get('highlighted'),
            'midimage' => $request->get('midimage'),
            'image' => $request->get('image'),
            'background' => $request->get('background'),
            'product' => $request->get('product'),
            'client' => $request->get('client'),
            'service1' => $request->get('service1'),
            'service2' => $request->get('service2'),
            'service3' => $request->get('service3'),
            'description' => $request->get('description'),
            'duration' => $request->get('duration'),
            'imagegallery1' => $request->get('imagegallery1'),
            'imagegallery2' => $request->get('imagegallery2'),
            'imagegallery3' => $request->get('imagegallery3'),
            'imagegallery4' => $request->get('imagegallery4'),
            'imagegallery5' => $request->get('imagegallery5')

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
